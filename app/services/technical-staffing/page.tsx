import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, TrendingUp, Shield, Users, Target } from "lucide-react"
import Link from "next/link"

export default function TechnicalStaffingSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-4">Our Flagship Service</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
                Technical <span className="text-cyan-600">Staffing Solution</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                SwiftHire LLC connects businesses with skilled technical professionals across IT and engineering. Our fast, precise hiring ensures the right talent to meet project goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/pms-img-1.jpg"
                alt="Portfolio management dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose Our Technical Staffing Solution?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Delivering skilled talent with speed and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <TrendingUp className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Fast Hiring</h3>
                <p className="text-gray-600 font-sans text-sm">Reduce time-to-hire with efficient sourcing and streamlined recruitment processes.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Quality Talent</h3>
                <p className="text-gray-600 font-sans text-sm">Access pre-screened professionals with strong technical and domain expertise.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Flexible Models</h3>
                <p className="text-gray-600 font-sans text-sm">
                  Hire contract, contract-to-hire, or full-time based on your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">High Retention</h3>
                <p className="text-gray-600 font-sans text-sm">
                  Better candidate fit leads to improved performance and long-term retention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">Our Delivery Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Requirement Mapping</h3>
                    <p className="text-gray-600 font-sans">
                      We analyze role needs, skills, and culture to define a clear hiring strategy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Smart Sourcing</h3>
                    <p className="text-gray-600 font-sans">
                      Leverage networks and tools to identify top technical talent quickly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Rigorous Screening</h3>
                    <p className="text-gray-600 font-sans">
                      Assess skills, experience, and fit through structured evaluations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Seamless Onboarding</h3>
                    <p className="text-gray-600 font-sans">
                      Ensure smooth hiring and support for quick integration into teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/pms-img-4.jpg"
                alt="Investment research and analysis"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Portfolio Management Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Choose the plan that best fits your investment needs and portfolio size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-cyan-600 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif font-bold">Essential</CardTitle>
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">2.5%</div>
                <div className="text-sm text-gray-600 font-sans">Annual management fee</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-lg font-serif font-bold text-gray-900">₹25 Lakhs minimum</div>
                </div>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Quarterly reviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Online portfolio access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Email support
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-600 relative shadow-xl">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500">Most Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif font-bold">Premium</CardTitle>
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">2.0%</div>
                <div className="text-sm text-gray-600 font-sans">Annual management fee</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-lg font-serif font-bold text-gray-900">₹50 Lakhs minimum</div>
                </div>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Monthly reviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Dedicated manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Priority support
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-cyan-600 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif font-bold">Elite</CardTitle>
                <div className="text-4xl font-serif font-black text-cyan-600 mt-4">1.5%</div>
                <div className="text-sm text-gray-600 font-sans">Annual management fee</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-lg font-serif font-bold text-gray-900">₹1 Crore minimum</div>
                </div>
                <ul className="space-y-2 font-sans text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Weekly monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Senior manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    24/7 support
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-black text-cyan-400 mb-4">SwiftHire LLC</h3>
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
