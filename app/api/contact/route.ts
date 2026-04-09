import type { NextRequest } from "next/server"

const RESEND_API = "https://api.resend.com/emails"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    } = body || {}

    if (!email || !firstName || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const FROM_EMAIL = process.env.FROM_EMAIL || process.env.ADMIN_EMAIL
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL

    if (!RESEND_API_KEY || !FROM_EMAIL || !ADMIN_EMAIL) {
      // If Resend isn't configured, still accept the request but log it so you can test locally.
      console.warn("Email not sent: missing RESEND_API_KEY / FROM_EMAIL / ADMIN_EMAIL")
      console.log("Contact form payload:", body)
      return new Response(JSON.stringify({ ok: true, info: "no-email-sent" }), { status: 200 })
    }

    // Prepare admin email (plain text)
    const adminPayload = {
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New contact form submission: ${subject}`,
      text: `New contact submission:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
    }

    // Prepare user acknowledgement (plain text)
    const userPayload = {
      from: FROM_EMAIL,
      to: email,
      subject: `Thanks for contacting Swifthire — we received your message`,
      text: `Hi ${firstName},\n\nThanks for reaching out to Swifthire. We received your message about "${subject}". Here's how we'll proceed:\n\n1) Review: Our team will review your message and details.\n2) Assign: We'll route your request to the right specialist.\n3) Contact: Expect a response from us within 24 hours to schedule a call or to request more information.\n4) Next Steps: We'll propose an action plan and next steps during our call or follow-up email.\n\nIf you need immediate assistance, call us at +1 (915) 219-4858.\n\nBest regards,\nSwifthire Team`,
    }

    const send = async (payload: any) => {
      try {
        return await fetch(RESEND_API, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
      } catch (err) {
        console.error("Network error when calling Resend:", err)
        throw err
      }
    }

    const [resAdmin, resUser] = await Promise.all([send(adminPayload), send(userPayload)])

    if (!resAdmin.ok || !resUser.ok) {
      const raStatus = resAdmin.status
      const ruStatus = resUser.status
      const ra = await resAdmin.text().catch(() => "(no body)")
      const ru = await resUser.text().catch(() => "(no body)")
      console.error("Resend admin send failed:", { status: raStatus, body: ra })
      console.error("Resend user send failed:", { status: ruStatus, body: ru })
      return new Response(
        JSON.stringify({ error: "failed-to-send-emails", details: { admin: { status: raStatus }, user: { status: ruStatus } } }),
        { status: 502 }
      )
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: "server-error" }), { status: 500 })
  }
}
