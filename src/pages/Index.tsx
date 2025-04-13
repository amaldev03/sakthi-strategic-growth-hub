
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const Index = () => {
  const industries = [
    { name: "Consumer Industry", image: "consumer" },
    { name: "Healthcare Industry", image: "healthcare" },
    { name: "Real Estate Industry", image: "real-estate" },
    { name: "Education Industry", image: "education" },
  ];

  const brands = [
    { name: "Ashtanga Ayurvedics" },
    { name: "Royal Enfield" },
    { name: "Publicis Sapient" },
    { name: "TI Cycles" },
    { name: "Track & Trail" },
    { name: "GradSquare" },
    { name: "Nithya Enterprises" },
    { name: "Fanism" },
    { name: "Mr.Fit" },
    { name: "Prince Infotech" },
    { name: "RR Thulasi Builders" },
  ];

  const services = [
    { name: "📊 Market Research", path: "/market-research" },
    { name: "Marketing Strategy", path: "/marketing-strategies" },
    { name: "📞 Marketing Consultations (Hourly)", path: "/marketing-strategies" },
    { name: "🧠 Marketing Retainers (Monthly Advisory Support)", path: "/marketing-strategies" },
    { name: "🤝 Marketing Partnerships (Strategy + Execution with Vendors)", path: "/marketing-strategies" },
    { name: "📅 Content Strategy (Monthly Packages: Scripting + Editing)", path: "/content-strategy" },
    { name: "✍️ Scripting for Video Reels (Persona-based short-form scripts)", path: "/content-strategy" },
    { name: "🎬 Video Editing for Reels (Instagram, YouTube Shorts, LinkedIn)", path: "/content-strategy" },
    { name: "📽️ Pitch Decks & Business Profiles (₹500 per slide)", path: "/pitch-decks" },
    { name: "🚀 Investor Pitch Decks (Starts at ₹25,000)", path: "/pitch-decks" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-strategic-light to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <p className="text-lg mb-4">
                Feeling stuck in your business journey? Unsure about your next marketing move?<br />
                It's time to take informed action with Strategic Sakthi.
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Strategic Growth Partner
              </h1>
              <p className="text-2xl font-semibold text-strategic-green mb-4">
                Clarity. Content. Consistency.
              </p>
              <p className="text-lg mb-6">
                We help founders, creators, and business owners scale confidently with strategy-backed marketing and execution. 
                Whether you're preparing to launch, generate leads, or build influence online — Strategic Sakthi brings you expert insights, 
                market research, and clear execution plans.
              </p>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">STRATEGIC SAKTHI</h2>
                <p className="text-lg">Your Business and Marketing Strategy Partner</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <CTAButton text="Explore Services" href="/market-research" />
                <CTAButton text="Book a Strategy Call" href="https://calendly.com/strategicsakthi" external={true} variant="outline" />
              </div>
            </div>
            <div className="flex justify-center">
              <ImagePlaceholder alt="Strategic Sakthi" className="w-full max-w-md h-80" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Strategic Sakthi */}
      <section className="section bg-white">
        <SectionHeader 
          title="Why Strategic Sakthi?" 
          subtitle="Not just strategy. Strategy that works."
        />
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-lg text-center mb-8">
            At Strategic Sakthi, we go beyond templates and guesswork. Everything we offer is backed by data, 
            psychology, and execution power. Here's what sets us apart:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">ROI-Driven Strategy</h3>
            <p>We craft every plan with a clear RoI focus, timeline, and market insight.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Gen Z Market Expertise</h3>
            <p>
              Gen Z is different. They think, consume, and buy differently — and we get them.
              With deep understanding of Gen Z's digital behavior, I craft campaigns and content that 
              cut through the noise and actually convert. Whether it's reels, ads, or brand 
              storytelling—your message lands right where it matters.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Verified Vendor Network (Across Tamil Nadu)</h3>
            <p>
              No more wasting time chasing freelancers or figuring out whom to trust.
              I've built a reliable network of marketing vendors across Tamil Nadu—from graphic 
              designers to editors to ad specialists. Each one is verified, professional, and 
              execution-ready. You get expert output without the hiring hassle.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-lg mb-6">
            When you work with Strategic Sakthi, you're not just buying a service—you're buying back your time, focus, and clarity.
          </p>
          <CTAButton text="Let's Build Something That Works" href="https://calendly.com/strategicsakthi" external={true} />
        </div>
      </section>
      
      {/* Global Experience */}
      <section className="section bg-strategic-dark text-white">
        <SectionHeader 
          title="GLOBAL EXPERIENCE" 
          className="text-white" 
        />
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl">
            With 3+ years of experience in international business consulting and market research, 
            Sakthivel has worked on 30+ projects involving top brands like Royal Enfield, TI Cycles, 
            Publicis Sapient, TMEIC and more.
          </p>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-10">Previous Brands Worked</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="brand-card bg-strategic-dark border border-gray-700 text-center">
              <ImagePlaceholder alt={brand.name} className="h-24 mb-3" />
              <p className="font-medium">{brand.name}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-400 italic">
          Not all brands can be disclosed publicly and demonstration of work can be shown in private consultation
        </p>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-strategic-light">
        <div className="cta-card max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Take the Next Step?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton text="Explore Services" href="/market-research" />
            <CTAButton text="Book a Strategy Call" href="https://calendly.com/strategicsakthi" external={true} variant="secondary" />
            <CTAButton text="View Portfolio" href="https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link" external={true} variant="outline" />
          </div>
        </div>
      </section>
      
      {/* Products & Services */}
      <section className="section bg-white">
        <SectionHeader title="Products & Services Offered" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.path}
              className="service-card"
            >
              <p className="font-medium">{service.name}</p>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <a 
            href="https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-strategic-green hover:underline font-medium"
          >
            View Products and Services
          </a>
        </div>
      </section>
      
      {/* Industries */}
      <section className="section bg-strategic-light">
        <SectionHeader title="Industries We Work In" />
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4 mb-12">
          {["Consumer Goods", "Education", "Healthcare", "Real Estate", "Startups"].map((industry, index) => (
            <span key={index} className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
              {industry}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <ImagePlaceholder alt={industry.name} className="h-40 mb-4" />
                <h3 className="text-xl font-bold text-center">{industry.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12 gap-4 flex-wrap">
          <CTAButton text="Book a Strategy Call" href="https://calendly.com/strategicsakthi" external={true} />
          <CTAButton text="View Portfolio" href="https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link" external={true} variant="secondary" />
          <CTAButton text="Explore Services" href="/market-research" variant="outline" />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
