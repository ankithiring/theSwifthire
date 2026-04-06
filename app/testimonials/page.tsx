import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, TrendingUp, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              What <span className="text-cyan-600">Our Clients Say</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Hear directly from our clients about their investment journey and the results they've achieved with our
              portfolio management services.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-cyan-600 mb-6" />
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 font-sans mb-6 italic leading-relaxed">
                  SwiftHire LLC has been a reliable partner in delivering skilled technical talent aligned with our staffing needs. 
                  Their ability to understand complex requirements and provide quality candidates 
                  quickly has improved our hiring efficiency and project outcomes.
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/avatar/MitchellMartin-logo.webp"
                    alt="Mitchell Martin"
                    className="w-15 h-15 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-serif font-bold text-gray-900 text-lg">Mitchell Martin</div>
                    <div className="text-cyan-600 font-sans">IT Staffing & Workforce Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-amber-600 mb-6" />
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 font-sans mb-6 italic leading-relaxed">
                  Working with SwiftHire LLC has enhanced our talent acquisition process. Their focus on quality, 
                  speed, and cultural fit ensures we consistently onboard professionals who contribute effectively to 
                  our technology-driven initiatives.
                </p>
                <div className="flex items-center">
                  <img
                    src="/images/avatar/NexGen-logo.webp"
                    alt="NextGen logo"
                    className="w-15 h-15 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-serif font-bold text-gray-900 text-lg">NextGen</div>
                    <div className="text-amber-600 font-sans">Technology & Digital Solutions</div>
                    <div className="text-sm text-gray-600 font-sans"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Over 200 satisfied clients trust us with their wealth management needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "SwiftHire LLC consistently delivers high-quality talent that aligns with our technical and business needs. Their efficient process and strong candidate network have helped us accelerate hiring while maintaining excellent standards."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/maxis-logo.webp" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">The Maxis Group</div>
                    <div className="text-sm text-gray-600 font-sans">IT Staffing & Consulting</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "Their quick turnaround and quality candidates help us meet our workforce demands efficiently across multiple roles."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/Kroger-Logo.png" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Kroger</div>
                    <div className="text-sm text-gray-600 font-sans">Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "SwiftHire LLC has been instrumental in meeting our dynamic staffing demands. Their quick turnaround and focus on quality candidates ensure we stay productive and competitive in a fast-paced environment."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/west-coast-logo.jpeg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">West Coast LLC</div>
                    <div className="text-sm text-gray-600 font-sans">Technology & Workforce Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "Their commitment to quality staffing ensures we get professionals who contribute meaningfully to healthcare delivery."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/amn-logo.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">AMN Healthcare</div>
                    <div className="text-sm text-gray-600 font-sans">Healthcare Staffing Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "Partnering with SwiftHire LLC has strengthened our hiring strategy. Their ability to source skilled 
                  professionals and ensure the right fit has significantly improved our team performance and project delivery."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/innova-logo.png" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Innova Solutions</div>
                    <div className="text-sm text-gray-600 font-sans">Digital Transformation & IT Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "SwiftHire’s ability to deliver reliable talent supports our commitment to providing exceptional customer experiences."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/JetBlue-Logo.jpg" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Jetblue</div>
                    <div className="text-sm text-gray-600 font-sans">Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Client Success Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Driving Results Through Talent Excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <TrendingUp className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-black text-cyan-600 mb-2">40%</div>
                <div className="text-lg font-serif font-bold text-gray-900 mb-2">Faster Hiring</div>
                <div className="text-gray-600 font-sans">
                  Reduced time-to-hire with streamlined processes and efficient candidate sourcing.
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Shield className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-black text-amber-600 mb-2">98%</div>
                <div className="text-lg font-serif font-bold text-gray-900 mb-2">Client Retention Rate</div>
                <div className="text-gray-600 font-sans">
                  Strong long-term relationships built through consistent performance and trusted partnerships.
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Users className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <div className="text-4xl font-serif font-black text-cyan-600 mb-2">97%</div>
                <div className="text-lg font-serif font-bold text-gray-900 mb-2">Quality Matches</div>
                <div className="text-gray-600 font-sans">
                  High success rate in placing candidates who align with both skill and culture requirements.
                </div>
              </CardContent>
            </Card>
          </div>
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
                <p>📧 hr@theswifthire.com</p>
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
