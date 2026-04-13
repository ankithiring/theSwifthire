import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, TrendingUp, Users, Calculator, ArrowRight, CheckCircle, Target, PieChart } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      slug: "technical-staffing-solutions",
      title: "Technical Staffing Solutions",
      description: "At SwiftHire LLC, we connect businesses with highly skilled technical professionals across various domains, including software development, engineering, and IT services. Our streamlined hiring process ensures quick access to top-tier talent, helping organizations scale efficiently and meet project demands without compromising on quality.",
      icon: PieChart,
      color: "cyan",
      features: ["Skilled Talent", "Fast Hiring", "Tech Expertise", "Flexible Planning", "Quality Fit"]
    },
    {
      slug: "full-stack-engineering-expertise",
      title: "Full Stack Engineering Expertise",
      description: "At SwiftHire LLC, we specialize in delivering top-tier full stack engineering talent to help businesses build scalable, high-performance applications. Our experts are proficient across frontend and backend technologies, enabling seamless development from concept to deployment. We ensure fast, reliable, and quality-driven solutions that align with your business goals and technical requirements.",
      icon: Target,
      color: "amber",
      features: ["Full Stack Talent", "Frontend & Backend", "Scalable Solutions", "AI Expertise", "Modern Tech Stack", "End-to-End Delivery", "Agile Development"]
    },
    {
      slug: "cutting-edge-recruitment",
      title: "Cutting-Edge Recruitment",
      description: "Our recruitment approach combines advanced sourcing techniques with data-driven insights to identify the best candidates. We go beyond traditional hiring methods to ensure precision, speed, and quality, delivering professionals who align with your technical and cultural requirements.",
      icon: Shield,
      color: "cyan",
      features: ["Smart Sourcing", "Data Driven", "Precision Hiring", "Talent Screening", "Cultural Fit"]
    },
    {
      slug: "personalized-career-services",
      title: "Personalized Career Services",
      description: "SwiftHire LLC supports job seekers with tailored career guidance, helping them find opportunities that align with their skills and aspirations. From resume enhancement to job matching, we ensure a smooth and rewarding career journey for every candidate.",
      icon: Users,
      color: "amber",
      features: ["Career Coaching", "Resume Optimization", "Interview Preparation", "Job Search Strategies", "Skill Alignment"]
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Our <span className="text-cyan-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Comprehensive investment and wealth management services designed to help you achieve your financial goals
              with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              const bgColor = service.color === "cyan" ? "bg-cyan-100" : "bg-amber-100"
              const textColor = service.color === "cyan" ? "text-cyan-600" : "text-amber-600"
              const borderColor = service.color === "cyan" ? "border-cyan-600" : "border-amber-600"

              return (
                <Card key={service.slug} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-8 w-8 ${textColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-serif font-bold text-gray-900">{service.title}</CardTitle>
                    <p className="text-gray-600 font-sans leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-serif font-bold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center font-sans text-gray-600">
                            <CheckCircle className="h-4 w-4 text-cyan-600 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We combine decades of experience with cutting-edge technology to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <TrendingUp className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Proven Expertise</h3>
                <p className="text-gray-600 font-sans">
                  With deep industry knowledge and experience, we deliver reliable staffing solutions that align with your business goals and evolving workforce needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Users className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Quality Driven Hiring</h3>
                <p className="text-gray-600 font-sans">
                  We focus on precision and quality, ensuring every candidate is thoroughly screened and matches both technical and cultural expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8 pb-8">
                <Shield className="h-16 w-16 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Faster Turnaround</h3>
                <p className="text-gray-600 font-sans">
                  SOur streamlined recruitment process helps reduce hiring time, enabling you to scale your team quickly without compromising on quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A systematic approach to understanding your needs and delivering exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Requirement Analysis</h3>
              <p className="text-gray-600 font-sans">
                We begin by understanding your business needs, role requirements, and company culture to create a clear and effective hiring strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Talent Sourcing</h3>
              <p className="text-gray-600 font-sans">
                Our team leverages advanced sourcing methods and a strong network to identify and attract top-quality candidates across industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Screening & Evaluation</h3>
              <p className="text-gray-600 font-sans">
                We conduct detailed assessments, interviews, and validations to ensure every candidate meets your technical and cultural expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Placement & Support</h3>
              <p className="text-gray-600 font-sans">
                We deliver the best-fit candidates and provide ongoing support to ensure a smooth onboarding and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Start building your high-performing team with the right talent today
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
