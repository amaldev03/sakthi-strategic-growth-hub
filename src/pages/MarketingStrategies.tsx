import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import { AnimatedSection } from "@/components/AnimatedLayout";
import {
  Calendar,
  MessageSquare,
  BarChart3,
  FileCheck,
  Users,
  Sparkles,
  Store,
  Building2,
  Rocket,
} from "lucide-react";

const MarketingStrategies = () => {
  const virtualCMOFeatures = [
    {
      title: "Market Research & Strategy",
      items: [
        "Competitor Analysis & Industry Benchmarking",
        "Ideal Customer Persona Development",
        "Pain Point Mapping & Funnel Planning",
        "Channel Strategy (Meta, Google, LinkedIn, Organic & Paid)",
        "90-Day Growth Blueprint with KPIs",
      ],
      icon: <BarChart3 size={24} className="text-strategic-green" />,
    },
    {
      title: "Full-Funnel Marketing Execution",
      items: [
        "Paid Ads",
        "Organic Content",
        "Social Media Management",
        "Landing Pages",
        "WhatsApp & Email Automation",
      ],
      icon: <Sparkles size={24} className="text-strategic-green" />,
    },
    {
      title: "Lead Generation & ROI Reporting",
      items: [
        "Campaign Optimization",
        "CRM Integration",
        "Weekly Reporting",
        "Funnel Performance",
      ],
      icon: <FileCheck size={24} className="text-strategic-green" />,
    },
    {
      title: "Vendor & Project Management",
      items: [
        "Access to vendors",
        "Centralized communication",
        "Fast turnaround",
        "No agency markup drama",
      ],
      icon: <Users size={24} className="text-strategic-green" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Marketing Strategies
              </h1>
              <p className="text-xl text-gray-700">
                From one-time consultations to full strategic partnerships,
                we've got you covered.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Marketing Services */}
      <AnimatedSection delay={0.2}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Marketing Consultation Card */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-strategic-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className="h-12 w-12 bg-strategic-green/10 rounded-xl flex items-center justify-center mb-6">
                        <Calendar className="h-6 w-6 text-strategic-green" />
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-900">
                        Marketing Consultation
                      </h2>
                      <h6 className="text-lg font-medium text-gray-700 mb-3">
                        One hour. Zero fluff. Clear direction.
                      </h6>
                      <p className="text-gray-600">
                        Got questions, stuck in a rut, or need clarity fast?
                        This one's for you.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-100">
                      <p className="text-3xl font-bold mb-2 text-gray-900">
                        ₹500
                        <span className="text-lg font-normal text-gray-600">
                          /hour
                        </span>
                      </p>
                      <p className="text-strategic-green font-medium inline-flex items-center">
                        <span className="h-2 w-2 bg-strategic-green rounded-full mr-2"></span>
                        First Discovery Call: FREE
                      </p>
                    </div>

                    <div className="mb-8 relative">
                      <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                        <span className="h-6 w-1 bg-strategic-green/50 rounded-full mr-3"></span>
                        What's Included:
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <Calendar
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            60-minute Zoom call
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <FileCheck
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            Pre-call intake form
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <FileCheck
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            PDF action plan post-call
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <CTAButton
                      text="Schedule a Call"
                      href="https://calendly.com/strategicsakthi"
                      external={true}
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Marketing Consultant Card */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-strategic-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className="h-12 w-12 bg-strategic-green/10 rounded-xl flex items-center justify-center mb-6">
                        <Users className="h-6 w-6 text-strategic-green" />
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-900">
                        Marketing Consultant
                      </h2>
                      <h6 className="text-lg font-medium text-gray-700 mb-3">
                        Your strategic partner, every step of the way.
                      </h6>
                      <p className="text-gray-600">
                        Monthly advisory support for business owners who want
                        strategic guidance at every stage.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-100">
                      <p className="text-3xl font-bold mb-2 text-gray-900">
                        ₹50,000
                        <span className="text-lg font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                      <p className="text-strategic-green font-medium inline-flex items-center">
                        <span className="h-2 w-2 bg-strategic-green rounded-full mr-2"></span>
                        Equity Model Available
                      </p>
                    </div>

                    <div className="mb-8 relative">
                      <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                        <span className="h-6 w-1 bg-strategic-green/50 rounded-full mr-3"></span>
                        What's Included:
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <Calendar
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            Monthly Strategy Sessions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <FileCheck
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            Weekly Campaign Reviews
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <MessageSquare
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            WhatsApp Support
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <BarChart3
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            Quarterly Audits
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <CTAButton
                      text="Book a Meeting"
                      href="https://calendly.com/strategicsakthi"
                      external={true}
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Marketing Partnership Card */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-strategic-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="relative mb-8">
                      <div className="h-12 w-12 bg-strategic-green/10 rounded-xl flex items-center justify-center mb-6">
                        <Sparkles className="h-6 w-6 text-strategic-green" />
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-gray-900">
                        Marketing Partnership
                      </h2>
                      <h6 className="text-lg font-medium text-gray-700 mb-3">
                        We don't just consult — we partner.
                      </h6>
                      <p className="text-gray-600">
                        Lead generation, execution, reporting, and scaling — all
                        managed by us, backed by trusted vendors.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-100">
                      <p className="text-3xl font-bold mb-2 text-gray-900">
                        ₹1,00,000
                        <span className="text-lg font-normal text-gray-600">
                          /month
                        </span>
                      </p>
                      <p className="text-strategic-green font-medium inline-flex items-center">
                        <span className="h-2 w-2 bg-strategic-green rounded-full mr-2"></span>
                        Equity Model Available
                      </p>
                    </div>

                    <div className="mb-8 relative">
                      <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                        <span className="h-6 w-1 bg-strategic-green/50 rounded-full mr-3"></span>
                        What's Included:
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <BarChart3
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            Full Strategy & Execution
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <Users size={14} className="text-strategic-green" />
                          </div>
                          <span className="text-gray-600">
                            Dedicated Team Support
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-strategic-green/10 flex items-center justify-center mr-3 mt-0.5">
                            <FileCheck
                              size={14}
                              className="text-strategic-green"
                            />
                          </div>
                          <span className="text-gray-600">
                            Monthly Reports & Reviews
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto relative z-10">
                    <CTAButton
                      text="Let's Collaborate"
                      href="https://calendly.com/strategicsakthi"
                      external={true}
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Virtual CMO */}
      <AnimatedSection delay={0.4}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Virtual CMO - Online Marketing Retainer"
              subtitle="₹2,00,000/month – Done-for-You Marketing, Lead Generation & Strategy Execution"
            />
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-center text-gray-600">
                At Strategic Sakthi, we don't just offer marketing support — we
                act as your outsourced Chief Marketing Consultant. We deliver
                growth, leads, clarity, and consistency — without the overwhelm
                of managing multiple vendors, freelancers, or platforms.
              </p>
              <p className="text-lg text-center mt-4 text-gray-600">
                This monthly retainer is built for founders, CEOs, and business
                owners who want expert-led, full-funnel marketing and measurable
                business outcomes.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {virtualCMOFeatures.map((feature, index) => (
                <AnimatedSection delay={0.1 * (index + 1)} key={index}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h4 className="text-xl font-bold ml-2 text-gray-900">
                        {feature.title}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-strategic-green mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Who Is This For?
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Store
                    size={20}
                    className="text-strategic-green mr-2 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-600">
                    D2C Brands ready to scale
                  </span>
                </li>
                <li className="flex items-start">
                  <Building2
                    size={20}
                    className="text-strategic-green mr-2 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-600">
                    B2B Service Providers needing consistent inbound leads
                  </span>
                </li>
                <li className="flex items-start">
                  <Rocket
                    size={20}
                    className="text-strategic-green mr-2 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-600">
                    Startups without a full internal marketing team
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.5}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book a free discovery call to discuss your needs and see how we
                can help.
              </p>
              <CTAButton
                text="Schedule Your Free Call"
                href="https://calendly.com/strategicsakthi"
                external={true}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default MarketingStrategies;
