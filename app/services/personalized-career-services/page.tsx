import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, ArrowRight, AlertTriangle, BarChart3, Target, TrendingDown, Activity } from "lucide-react"
import Link from "next/link"

export default function PersonalizedCareerServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-4">Personalized Career Services</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
                Personalized <span className="text-cyan-600">Career Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                SwiftHire LLC offers tailored career services to help you navigate your professional journey. Our expert team provides personalized guidance, resources, and support to help you achieve your career goals.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/pms-img-5.jpg"
                alt="Risk assessment analysis"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose Our Cutting-Edge Recruitment?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Smarter hiring powered by data and precision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Smart Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Leverage modern tools and networks to find top talent faster and efficiently.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Multi-channel sourcing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Passive talent reach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Niche Skill targeting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Global Talent Pool
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-amber-500" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Data-Driven Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Use analytics to ensure better candidate selection and reduced hiring risks.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Analytics-based decisions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Performance Insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                     Hiring metrics tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Reduced hiring risk
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Quality Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Thorough evaluation ensures candidates meet both skill and cultural fit.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Technical Assessments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Behavioral evaluation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Cultural fit analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                     Background checks
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-amber-500" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Faster Closure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Accelerate hiring timelines with streamlined and optimized recruitment processes.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Streamlined process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Quick shortlisting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Reduced turnaround
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Efficient coordination
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Scalable Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Quickly scale your workforce with flexible recruitment strategies that adapt to changing business demands without compromising on quality.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Flexible Hiring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Volume Hiring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    On-demand talent
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Rapid scaling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-amber-500" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Industry Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Leverage our deep understanding of multiple industries to find candidates who not only fit the role but also understand your business environment.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Domain Knowledge
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Market Insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Targeted hiring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Role-Specific expertise
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Management Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Recruitment Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A systematic approach to identifying, measuring, and managing recruitment challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Talent Discovery</h3>
              <p className="text-gray-600 font-sans">
                Identify top candidates using advanced sourcing techniques and industry networks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Deep Screening</h3>
              <p className="text-gray-600 font-sans">
                Evaluate technical skills and cultural fit through structured assessments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Insight Matching</h3>
              <p className="text-gray-600 font-sans">
                Use data insights to match candidates precisely with job requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Efficient Placement</h3>
              <p className="text-gray-600 font-sans">
                Deliver qualified candidates quickly and support smooth onboarding.
              </p>
            </div>
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
