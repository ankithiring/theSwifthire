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
                src="/images/pms-img-1.jpg"
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
      <section id="team" className="py-20 bg-white">
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
                  src="/images/avatar/fallback.jpg"
                  alt="Rajesh Mehta"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                {/* <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">John Doe</h3> */}
                <p className="text-cyan-600 font-sans mb-4">Founder & CEO</p>
                <p className="text-gray-600 font-sans text-sm">
                  Leads the vision and strategic direction of SwiftHire LLC, focusing on building a trusted, 
                  high-performance staffing partner. Oversees client relationships, business growth, 
                  and delivery excellence while ensuring every hiring solution aligns with long-term success and market demands.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img
                  src="/images/avatar/fallback.jpg"
                  alt="Priya Sharma"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                {/* <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">John Doe</h3> */}
                <p className="text-cyan-600 font-sans mb-4">Talent Acquisition Lead</p>
                <p className="text-gray-600 font-sans text-sm">
                  Drives end-to-end recruitment by sourcing, screening, and placing top-tier talent across technical domains. 
                  Focuses on quality hiring, cultural alignment, and fast turnaround, ensuring clients receive the 
                  right candidates to meet their business and project needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img
                  src="/images/avatar/fallback.jpg"
                  alt="Amit Kumar"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                {/* <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">John Doe</h3> */}
                <p className="text-cyan-600 font-sans mb-4">Head of Sales & Marketing</p>
                <p className="text-gray-600 font-sans text-sm">
                  Leads business development and brand growth by identifying new opportunities and strengthening client 
                  relationships. Focuses on market positioning, lead generation, and strategic outreach to expand SwiftHire 
                  LLC's presence and drive consistent revenue growth.
                </p>
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
