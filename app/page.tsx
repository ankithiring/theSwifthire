import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative relative min-h-[650px] bg-contain bg-[position:center_80%] bg-no-repeat flex items-center justify-center"
  >
      <img
    src="/images/hero-bg.png"
    alt=""
    className="absolute inset-0 top-[-100px] h-[calc(100%+100px)] h-full w-full object-cover object-bottom"></img>
     {/* Background Overlay */}
  <div className="absolute inset-0 bg-white/25"></div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Grow Your <span className="text-cyan-600">Talent</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              We help businesses grow by connecting them with top-tier talent across the US. Our staffing solutions are designed to accelerate hiring, reduce time-to-fill, and ensure the right fit for long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                At SwiftHire LLC, we are a results-driven US staffing partner committed to helping businesses grow through exceptional talent.
                With over 5 years of industry experience and a network of 200+ clients,
                we specialize in connecting organizations with highly skilled professionals across technical and data-driven domains.
                Our approach combines deep market understanding, precision-driven recruitment, and a strong focus on long-term success.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
                We go beyond traditional hiring by understanding both client needs and candidate potential,
                ensuring the right match every time. At SwiftHire, we don’t just fill positions—we build
                high-performing teams that drive innovation, efficiency, and sustainable growth.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-serif font-black text-cyan-600">5+</div>
                  <div className="text-sm text-gray-600 font-sans">Years Experience</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-serif font-black text-cyan-600">₹500Cr+</div>
                  <div className="text-sm text-gray-600 font-sans">Assets Under Management</div>
                </div> */}
                <div className="text-center">
                  <div className="text-3xl font-serif font-black text-cyan-600">200+</div>
                  <div className="text-sm text-gray-600 font-sans">Satisfied Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/IMAGE11.jpeg"
                alt="Professional financial advisors"
                className="  "
              />
            </div>
          </div>
        </div>
      </section>
      {/* LOGO ANIMATION */}
                  {/* Client Logos Marquee */}
<section className="w-full overflow-hidden bg-white py-3">
  <div className="relative flex overflow-hidden">

    <div className="flex min-w-max items-center gap-6 animate-marquee">

      {/* LOGOS */}
      {[
        "/images/avatar/AbbVie_logo.png",
        "/images/avatar/Mckesson_logo.png",
        "/images/avatar/Geico_logo.png",
        "/images/avatar/emids-logo.png",
        "/images/avatar/NexGen-Logo.png",
        "/images/avatar/innova-logo.png",
        "/images/avatar/jp-morgan-logo.png",
        "/images/avatar/JetBlue-Logo.jpg",
        "/images/avatar/nike_logo.png",
        "/images/avatar/university-of-phoenix-2.png",
        "/images/avatar/Toyota.png",
        "/images/avatar/maxis-logo.png",
        
      ].map((logo, index) => (
        <div
          key={`logo-1-${index}`}
          className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md bg-white px-4 shadow-sm"
        >
          <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="max-h-10 max-w-full object-contain"
          />
        </div>
      ))}

      {/* DUPLICATE FOR INFINITE LOOP */}
      {[
        "/images/avatar/AbbVie_logo.svg",
        "/images/avatar/Mckesson_logo.svg",
        "/images/avatar/Geico_logo.svg",
        "/images/avatar/emids-logo.png",
        "/images/avatar/ NexGen-Logo.webp",
        "/images/avatar/innova-logo.png",
        "/images/avatar/jp-morgan-logo.png",
        "/images/avatar/JetBlue-Logo.jpg",
        "/images/avatar/nike-logo.webp",
      ].map((logo, index) => (
        <div
          key={`logo-2-${index}`}
          className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md bg-white px-4 shadow-sm"
        >
          <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="max-h-10 max-w-full object-contain"
          />
        </div>
      ))}

    </div>
  </div>
</section>

  {/* Why Choose Our Swifthire LLC */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose Our Swifthire LLC?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              we bring a combination of industry expertise, precision, and a client-first approach to every hiring challenge. 
              Our experienced team understands the evolving landscape of technical staffing and delivers solutions that are both strategic and result-oriented.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We minimize hiring risks through a structured and data-driven recruitment process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Performance Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We are committed to delivering high-performance outcomes by connecting you with top-tier professionals who drive results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Personalized Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  Our dedicated approach ensures a seamless hiring experience and long-term partnership built on trust and success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section id="philosophy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Elevate Your Hiring Experience with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Unparalleled Expertise</h3>
                    <p className="text-gray-600 font-sans">
                      Our seasoned team of industry experts possesses deep knowledge and experience in the world of 
                      technical staffing and recruitment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Data-Driven Precision</h3>
                    <p className="text-gray-600 font-sans">
                      We embrace data-driven decision-making at every step of our process. Our advanced analytics and 
                        research methodologies ensure that every candidate we recommend is not just qualified but a 
                        precise fit for your unique requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Client-Centric Approach</h3>
                    <p className="text-gray-600 font-sans">
                      Our client-centric approach means that we take the time to understand your company's culture, values, and goals to deliver tailored hiring solutions that align seamlessly with your vision.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Innovation and Adaptability</h3>
                    <p className="text-gray-600 font-sans">
                      We continuously adapt to industry trends and emerging technologies, ensuring that our clients remain at the
                      forefront of their respective fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/PMS-IMG1.jpeg"
                alt="Investment analysis"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

 <section className="w-full bg-white py-0">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <img
      src="/images/why-choose-us.png"
      alt="Why Choose Us"
      className="block h-auto w-full object-contain"
    />
  </div>
</section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Our streamlined process ensures a smooth onboarding and ongoing management experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Understand Your Needs</h3>
              <p className="text-gray-600 font-sans">
                We begin by analyzing your business requirements, role expectations, and company culture to ensure a clear hiring strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Source Top Talent</h3>
              <p className="text-gray-600 font-sans">
                Our team leverages a strong network and advanced sourcing techniques to identify high-quality candidates across industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Screen & Evaluate</h3>
              <p className="text-gray-600 font-sans">
                We conduct thorough screening, skill assessments, and interviews to ensure each candidate meets your technical and cultural standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Deliver & Support</h3>
              <p className="text-gray-600 font-sans">
                We present the best-fit candidates and support you through onboarding, ensuring a smooth and successful hiring experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Hear from our satisfied clients about their investment journey with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "SwiftHire LLC helped us find top-quality talent quickly and efficiently. Their process is smooth, reliable, and results-driven."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/nike_logo.webp" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Nike</div>
                    <div className="text-sm text-gray-600 font-sans">Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "The team truly understands our needs and delivers candidates who fit both technically and culturally. Highly dependable partner."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/CVS_Pharmacy-Logo.png" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">CVS Pharmacy</div>
                    <div className="text-sm text-gray-600 font-sans">Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-sans mb-4 italic">
                  "Their professionalism and speed stand out. SwiftHire consistently provides skilled professionals who add real value to our business."
                </p>
                <div className="flex items-center">
                  <img src="/images/avatar/BankOfAmerica_logo.png" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-serif font-bold text-gray-900">Bank Of America</div>
                    <div className="text-sm text-gray-600 font-sans">Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 font-sans">
              Get answers to common questions about our services.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                1: What makes your IT staffing services different from other providers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                We combine deep market expertise, a strong talent network, and a
                quality-first approach to deliver candidates who are not just skilled, but the right fit for your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                2: How do you understand our hiring needs and company culture?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                We take time to understand your business goals, team dynamics, and technical requirements to ensure every candidate aligns with both skill expectations and culture fit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                3: Can you support niche or hard-to-fill IT roles?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Yes, we specialize in sourcing for niche and high-demand technologies by leveraging targeted talent pipelines and industry-specific expertise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                4: How do you build long-term partnerships with clients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                We focus on transparency, consistent communication, and delivering reliable results, helping us become a trusted hiring partner rather than just a vendor.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                5: How do you keep up with the rapidly changing IT job market?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Our team continuously tracks market trends, emerging technologies, and talent demand to ensure we provide relevant and future-ready hiring solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
              <div className="space-y-2 text-gray-400 font-sans break-all">
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
