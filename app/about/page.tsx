import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Award, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              About <span className="text-cyan-600">Swifthire LLC</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Two decades of excellence in portfolio management, built on trust, expertise, and unwavering commitment to
              our clients' financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                At SwiftHire LLC, we are dedicated to transforming the way businesses connect 
                with talent. With over 5 years of experience and a growing network of 200+ 
                clients, we specialize in delivering high-quality staffing solutions across 
                the US. Our expertise spans technical recruitment, data-driven hiring, and industry-specific 
                talent acquisition, enabling us to meet the evolving demands of modern organizations.
              </p>
              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                We believe that hiring is more than just filling roles—it's about building strong, 
                future-ready teams. Our approach combines deep market insights, advanced screening 
                methods, and a strong focus on cultural alignment to ensure every placement drives 
                long-term success. Whether you're scaling your workforce or seeking the right opportunity, 
                SwiftHire LLC is committed to delivering excellence at every step.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/our story.png"
                alt="Swifthire LLC office"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Integrity & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We build lasting relationships through transparency, honesty, and a commitment to delivering on our promises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Excellence in Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We focus on quality at every stage of the hiring process, ensuring precise matches that drive real business impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Client-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We prioritize our clients' goals by offering tailored solutions that align with their unique needs and vision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Meet the experienced professionals who guide our strategies and client relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img
                  src="/images/avatar/priyanksir.jpeg"
                  alt="PRIYANK MOD"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Priyank Mod</h3>
                <p className="text-cyan-600 font-sans mb-4">Founder & CEO</p>
                <p className="text-gray-600 font-sans text-sm">
                  Sets the vision and long-term strategy for SwiftHire LLC: to become a trusted staffing partner that helps businesses build high-performing teams with confidence. Leads company growth, client partnerships, service quality, and operational excellence—ensuring every hiring solution creates lasting value for both clients and candidates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img
                  src="/images/avatar/mohhamad-husssain.png"
                  alt="MOHAMMAD HUSSAIN"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Mohammad Hussain</h3>
                <p className="text-cyan-600 font-sans mb-4">Vice President </p>
                <p className="text-gray-600 font-sans text-sm">
                 Leads talent strategy and end-to-end recruitment delivery across technical and professional roles. Builds scalable sourcing, screening, and candidate-engagement processes that balance speed with quality. Focuses on connecting clients with skilled, culturally aligned talent while creating a professional and transparent candidate experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img
                  src="/images/avatar/fallback.jpg"
                  alt="PARAS SHRIVASTAV"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Paaras Srivaastaava</h3>
                <p className="text-cyan-600 font-sans mb-4">Marketing & Business Development Manager</p>
                <p className="text-gray-600 font-sans text-sm">
                  Drives SwiftHire LLC’s market presence, client growth, and brand credibility. Leads strategic outreach, lead generation, account development, and marketing initiatives that position SwiftHire as a reliable staffing partner. Focuses on building long-term client relationships and identifying opportunities where the right talent can solve real business challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

     <section id="team" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
        Leadership Team
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
        Meet the experienced professionals who guide our strategies and client relationships.
      </p>
    </div>

    {/* Team Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* ================= PRIYANK ================= */}
      <Card className="group border-0 bg-white shadow-lg text-center overflow-hidden">
        <CardContent className="pt-6 px-6">

          <img
            src="/images/avatar/priyanksir.jpeg"
            alt="PRIYANK MOD"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />

          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
            Priyank Mod
          </h3>

          <p className="text-cyan-600 font-sans mb-4">
            Founder & CEO
          </p>

          <div className="relative min-h-[150px]">

            {/* Description */}
            <p
              className="
                text-gray-600
                font-sans
                text-sm
                leading-relaxed
                transition-all
                duration-300
                group-hover:opacity-0
              "
            >
              Sets the vision and long-term strategy for SwiftHire LLC: to become
              a trusted staffing partner that helps businesses build
              high-performing teams with confidence. Leads company growth,
              client partnerships, service quality, and operational
              excellence—ensuring every hiring solution creates lasting value
              for both clients and candidates.
            </p>

            {/* LinkedIn + Gmail */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                gap-4
                opacity-0
                scale-75
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:scale-100
              "
            >

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/priyank-m-188a9a87/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Priyank Mod LinkedIn"
                title="LinkedIn"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0092B8]
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#007A99]
                  hover:scale-110
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V8.99h3.56v11.46zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 0 24 .77 24 1.72v20.56C24 .77 23.21 24 22.23 24z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=priyank.mod@theswifthire.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Priyank Mod"
                title="Email Priyank Mod"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  ring-1
                  ring-gray-200
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:shadow-lg
                "
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <rect
                    width="512"
                    height="512"
                    rx="15%"
                    fill="#fff"
                  />

                  <path
                    d="M158 391v-142l-82-63V361q0 30 30 30"
                    fill="#4285f4"
                  />

                  <path
                    d="M154 248l102 77l102-77v-98l-102 77l-102-77"
                    fill="#ea4335"
                  />

                  <path
                    d="M354 391v-142l82-63V361q0 30-30 30"
                    fill="#34a853"
                  />

                  <path
                    d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
                    fill="#c5221f"
                  />

                  <path
                    d="M436 188l-82 63v-98l30-23c27-21-52 0-52 26"
                    fill="#fbbc04"
                  />
                </svg>
              </a>

            </div>
          </div>
        </CardContent>
      </Card>


      {/* ================= MOHAMMAD ================= */}
      <Card className="group border-0 bg-white shadow-lg text-center overflow-hidden">
        <CardContent className="pt-6 px-6">

          <img
            src="/images/avatar/mohhamad-husssain.PNG"
            alt="MOHAMMAD HUSSAIN"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />

          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
            Mohammad Hussain
          </h3>

          <p className="text-cyan-600 font-sans mb-4">
            Vice President Of Growth
          </p>

          <div className="relative min-h-[150px]">

            <p
              className="
                text-gray-600
                font-sans
                text-sm
                leading-relaxed
                transition-all
                duration-300
                group-hover:opacity-0
              "
            >
              Leads talent strategy and end-to-end recruitment delivery across
              technical and professional roles. Builds scalable sourcing,
              screening, and candidate-engagement processes that balance speed
              with quality. Focuses on connecting clients with skilled,
              culturally aligned talent while creating a professional and
              transparent candidate experience.
            </p>

            {/* LinkedIn + Gmail */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                gap-4
                opacity-0
                scale-75
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:scale-100
              "
            >

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohammad-hussain-b274a8422/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohammad Hussain LinkedIn"
                title="LinkedIn"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0092B8]
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#007A99]
                  hover:scale-110
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V8.99h3.56v11.46zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23 23.21 24 22.23 24z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammad.hussain@theswifthire.com"
                target="_blank"
                aria-label="Email Mohammad Hussain"
                title="Email Mohammad Hussain"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  ring-1
                  ring-gray-200
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:shadow-lg
                "
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <rect width="512" height="512" rx="15%" fill="#fff" />
                  <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4" />
                  <path d="M154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335" />
                  <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853" />
                  <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" />
                  <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04" />
                </svg>
              </a>

            </div>
          </div>
        </CardContent>
      </Card>


      {/* ================= PAARAS ================= */}
      <Card className="group border-0 bg-white shadow-lg text-center overflow-hidden">
        <CardContent className="pt-6 px-6">

          <img
            src="/images/avatar/fallback.jpg"
            alt="PARAS SHRIVASTAV"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />

          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
            Paaras Srivaastaava
          </h3>

          <p className="text-cyan-600 font-sans mb-4">
            Marketing & Business Development Manager
          </p>

          <div className="relative min-h-[150px]">

            <p
              className="
                text-gray-600
                font-sans
                text-sm
                leading-relaxed
                transition-all
                duration-300
                group-hover:opacity-0
              "
            >
              Drives SwiftHire LLC’s market presence, client growth, and brand
              credibility. Leads strategic outreach, lead generation, account
              development, and marketing initiatives that position SwiftHire as
              a reliable staffing partner. Focuses on building long-term client
              relationships and identifying opportunities where the right talent
              can solve real business challenges.
            </p>

            {/* LinkedIn + Gmail */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                gap-4
                opacity-0
                scale-75
                transition-all
                duration-300
                group-hover:opacity-100
                group-hover:scale-100
              "
            >

              {/* LinkedIn */}
              <a
                href="YOUR_PAARAS_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paaras Srivaastaava LinkedIn"
                title="LinkedIn"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0092B8]
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-[#007A99]
                  hover:scale-110
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V8.99h3.56v11.46zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23 23.21 24 22.23 24z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=paras.shrivastava@theswifthire.com"
                target="_blank"
                aria-label="Email Paaras Srivaastaava"
                title="Email Paaras Srivaastaava"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  ring-1
                  ring-gray-200
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:shadow-lg
                "
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <rect width="512" height="512" rx="15%" fill="#fff" />
                  <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4" />
                  <path d="M154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335" />
                  <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853" />
                  <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" />
                  <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04" />
                </svg>
              </a>

            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">200+ Clients</div>
              <div className="text-gray-600 font-sans">Trusted by a growing network of businesses across the US for reliable staffing solutions.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">5+ Years</div>
              <div className="text-gray-600 font-sans">Delivering consistent results with deep industry knowledge and proven hiring strategies.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">1000+ Placements</div>
              <div className="text-gray-600 font-sans">Connecting top talent with the right opportunities to drive business growth and performance.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-black text-cyan-600 mb-2">95% Satisfaction</div>
              <div className="text-gray-600 font-sans">Committed to excellence, ensuring high-quality service and long-term partnerships.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Let SwiftHire LLC help you build the right team for your success. Connect with us today and experience staffing solutions designed for growth, efficiency, and long-term results.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-black text-white-400 mb-4">SwiftHire LLC</h3>
              <p className="text-gray-400 font-sans mb-4">
                Commitment for Providing the best talents.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>
                  <Link href="/services/technical-staffing" className="hover:text-cyan-400 transition-colors">
                    Technical Staffing Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/full-stack-engineering" className="hover:text-cyan-400 transition-colors">
                    Full Stack Engineering Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/services/cutting-edge-recruitment" className="hover:text-cyan-400 transition-colors">
                    Cutting-Edge Recruitment
                  </Link>
                </li>
                <li>
                  <Link href="/services/personalized-career-services" className="hover:text-cyan-400 transition-colors">
                    Personalized Career Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about#team" className="hover:text-cyan-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400 font-sans">
                <p>📧 humanresource@theswifthire.com</p>
                <p>📞 +1 (915) 219-4858</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-sans">
              © 2026 Copyright SwiftHire LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
