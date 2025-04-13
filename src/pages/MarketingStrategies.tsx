
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import { Calendar, MessageSquare, BarChart3, FileCheck, Users, Sparkles } from "lucide-react";

const MarketingStrategies = () => {
  const virtualCMOFeatures = [
    {
      title: "Market Research & Strategy",
      items: [
        "Competitor Analysis & Industry Benchmarking",
        "Ideal Customer Persona Development",
        "Pain Point Mapping & Funnel Planning",
        "Channel Strategy (Meta, Google, LinkedIn, Organic & Paid)",
        "90-Day Growth Blueprint with KPIs"
      ],
      icon: <BarChart3 size={24} className="text-strategic-green" />
    },
    {
      title: "Full-Funnel Marketing Execution",
      items: [
        "Paid Ads",
        "Organic Content",
        "Social Media Management",
        "Landing Pages",
        "WhatsApp & Email Automation"
      ],
      icon: <Sparkles size={24} className="text-strategic-green" />
    },
    {
      title: "Lead Generation & ROI Reporting",
      items: [
        "Campaign Optimization",
        "CRM Integration",
        "Weekly Reporting",
        "Funnel Performance"
      ],
      icon: <FileCheck size={24} className="text-strategic-green" />
    },
    {
      title: "Vendor & Project Management",
      items: [
        "Access to vendors",
        "Centralized communication",
        "Fast turnaround",
        "No agency markup drama"
      ],
      icon: <Users size={24} className="text-strategic-green" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-strategic-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Marketing Strategies</h1>
            <p className="text-xl mb-6">
              From one-time consultations to full strategic partnerships, we've got you covered.
            </p>
          </div>
        </div>
      </section>
      
      {/* Marketing Consultation */}
      <section className="section bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Marketing Consultation</h2>
            <p className="text-xl font-medium mb-3">One hour. Zero fluff. Clear direction.</p>
            <p className="text-lg mb-6">
              Got questions, stuck in a rut, or need clarity fast? This one's for you.
            </p>
            <div className="bg-strategic-light p-6 rounded-lg mb-6">
              <p className="text-2xl font-bold mb-2">₹500 per hour</p>
              <p className="text-strategic-green font-medium">First Discovery Call: FREE</p>
            </div>
            <h3 className="text-xl font-bold mb-3">Includes:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <Calendar size={20} className="mr-2 text-strategic-green" />
                <span>60-minute Zoom call</span>
              </li>
              <li className="flex items-center">
                <FileCheck size={20} className="mr-2 text-strategic-green" />
                <span>Pre-call intake form</span>
              </li>
              <li className="flex items-center">
                <FileCheck size={20} className="mr-2 text-strategic-green" />
                <span>PDF action plan post-call</span>
              </li>
            </ul>
            <CTAButton 
              text="Schedule a Call" 
              href="https://calendly.com/strategicsakthi" 
              external={true}
            />
          </div>
          <div className="bg-strategic-light rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Marketing Consultant</h2>
            <p className="text-lg mb-6">
              Monthly advisory support for business owners who want strategic guidance at every stage.
              Includes strategy calls, audits, founder support & WhatsApp access.
            </p>
            <p className="text-xl font-medium mb-4">
              Your strategic partner, every step of the way.
            </p>
            <p className="mb-6">
              Ongoing advisory to help you launch, grow, and optimize campaigns with accountability and expert direction.
            </p>
            <div className="mb-6">
              <p className="text-xl font-bold">Starts at ₹50,000/month</p>
              <p className="text-gray-600">along with Equity Model Available</p>
              <p className="text-sm text-gray-600">(Customized based on business size & advisory scope)</p>
            </div>
            <h3 className="text-lg font-bold mb-3">Includes:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <Calendar size={20} className="mr-2 text-strategic-green" />
                <span>Monthly Strategy Sessions</span>
              </li>
              <li className="flex items-center">
                <FileCheck size={20} className="mr-2 text-strategic-green" />
                <span>Weekly Campaign Reviews</span>
              </li>
              <li className="flex items-center">
                <MessageSquare size={20} className="mr-2 text-strategic-green" />
                <span>WhatsApp Support</span>
              </li>
              <li className="flex items-center">
                <BarChart3 size={20} className="mr-2 text-strategic-green" />
                <span>Quarterly Audits</span>
              </li>
              <li className="flex items-center">
                <Users size={20} className="mr-2 text-strategic-green" />
                <span>Founder's Decision Support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Marketing Partnership */}
      <section className="section bg-strategic-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Marketing Partnership</h2>
            <p className="text-xl font-medium mb-4">We don't just consult — we partner.</p>
            <p className="text-lg mb-6">
              Lead generation, execution, reporting, and scaling — all managed by us, backed by trusted vendors.
            </p>
            <div className="mb-8">
              <p className="text-2xl font-bold">Starts at ₹1,00,000/month</p>
              <p className="text-gray-600">along with Equity Model Available</p>
            </div>
            <CTAButton 
              text="Let's Collaborate" 
              href="https://calendly.com/strategicsakthi" 
              external={true}
            />
          </div>
        </div>
      </section>
      
      {/* Virtual CMO */}
      <section className="section bg-white">
        <SectionHeader 
          title="Virtual CMO - Online Marketing Retainer" 
          subtitle="₹2,00,000/month – Done-for-You Marketing, Lead Generation & Strategy Execution"
        />
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center">
            At Strategic Sakthi, we don't just offer marketing support — we act as your outsourced 
            Chief Marketing Consultant. We deliver growth, leads, clarity, and consistency — without 
            the overwhelm of managing multiple vendors, freelancers, or platforms.
          </p>
          <p className="text-lg text-center mt-4">
            This monthly retainer is built for founders, CEOs, and business owners who want expert-led, 
            full-funnel marketing and measurable business outcomes.
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {virtualCMOFeatures.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 h-full card-hover">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h4 className="text-xl font-bold ml-2">{feature.title}</h4>
              </div>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-strategic-green mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-strategic-light p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Who Is This For?</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-strategic-green mr-2">•</span>
              <span>D2C Brands ready to scale</span>
            </li>
            <li className="flex items-center">
              <span className="text-strategic-green mr-2">•</span>
              <span>B2B Service Providers needing consistent inbound leads</span>
            </li>
            <li className="flex items-center">
              <span className="text-strategic-green mr-2">•</span>
              <span>Startups without a full internal marketing team</span>
            </li>
          </ul>
          <div className="text-center">
            <CTAButton 
              text="Book a Meeting for Discovery Call" 
              href="https://calendly.com/strategicsakthi" 
              external={true}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MarketingStrategies;
