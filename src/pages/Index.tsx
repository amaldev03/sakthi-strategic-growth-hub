import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import Image from "@/components/Image";
import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "@/components/AnimatedLayout";
import { getImagePath } from "../utils/imagePath";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 4;
  const scrollSpeed = 0.5; // pixels per frame

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % brands.length);
      }
    }, 5000);

    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setOffset((prevOffset) => {
        const newOffset = prevOffset + scrollSpeed;
        // Reset offset when it reaches the width of one set of items
        return newOffset >= (carouselRef.current?.scrollWidth || 0) / 2
          ? 0
          : newOffset;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const getVisibleBrands = () => {
    // Duplicate the brands array to create seamless infinite scroll
    return [...brands, ...brands];
  };

  const industries = [
    { name: "Consumer Industry", image: "consumer", type: "png" },
    { name: "Healthcare Industry", image: "healthcare", type: "jpg" },
    { name: "Real Estate Industry", image: "real-estate", type: "jpg" },
    { name: "Education Industry", image: "education", type: "jpg" },
  ];

  const brands = [
    { name: "Ashtanga Ayurvedics", type: "png" },
    { name: "Royal Enfield", type: "png" },
    { name: "Publicis Sapient", type: "png" },
    { name: "TI Cycles", type: "png" },
    { name: "Track & Trail", type: "png" },
    { name: "GradSquare", type: "png" },
    { name: "Nithya Enterprises", type: "png" },
    { name: "Fanism", type: "png" },
    { name: "Mr.Fit", type: "png" },
    { name: "Prince Infotech", type: "png" },
    { name: "RR Thulasi Builders", type: "jpg" },
  ];

  const services = [
    {
      name: "📊 Market Research",
      path: "/market-research",
      description:
        "Data-driven insights to understand your market and competition",
      isMain: true,
    },
    {
      name: "Marketing Strategy",
      path: "/marketing-strategies",
      description: "Comprehensive plans to achieve your business goals",
      isMain: true,
      subServices: [
        {
          name: "📞 Marketing Consultations",
          description: "Hourly expert advice tailored to your specific needs",
        },
        {
          name: "🧠 Marketing Retainers",
          description: "Monthly Advisory Support for consistent growth",
        },
        {
          name: "🤝 Marketing Partnerships",
          description: "Strategy + Execution with Vendors",
        },
      ],
    },
    {
      name: "📅 Content Strategy",
      path: "/content-strategy",
      description: "Monthly Packages: Scripting + Editing",
      isMain: true,
      subServices: [
        {
          name: "✍️ Scripting for Video Reels",
          description: "Persona-based short-form scripts",
        },
        {
          name: "🎬 Video Editing for Reels",
          description: "Instagram, YouTube Shorts, LinkedIn",
        },
      ],
    },
    {
      name: "📽️ Pitch Decks & Business Profiles",
      path: "/pitch-decks",
      description: "₹500 per slide",
      isMain: true,
      subServices: [
        {
          name: "🚀 Investor Pitch Decks",
          description: "Starts at ₹25,000",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - White Background */}
      <AnimatedSection>
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Feeling stuck in your business journey? Unsure about your next
                marketing move?
                <br />
                It's time to take informed action with Strategic Sakthi.
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Strategic Growth Partner
              </h1>
              <p className="text-2xl font-semibold text-strategic-green mb-8">
                Clarity. Content. Consistency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src={getImagePath("/strategic-sakthi.jpg")}
                  alt="Strategic Sakthi"
                  className="w-full max-w-md h-96 object-cover rounded-lg"
                  placeholderClassName="w-full max-w-md h-96"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We help founders, creators, and business owners scale
                  confidently with strategy-backed marketing and execution.
                  Whether you're preparing to launch, generate leads, or build
                  influence online — Strategic Sakthi brings you expert
                  insights, market research, and clear execution plans.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <CTAButton text="Explore Services" href="/market-research" />
                  <CTAButton
                    text="Book a Strategy Call"
                    href="https://calendly.com/strategicsakthi"
                    external={true}
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Strategic Sakthi - Grey Background */}
      <AnimatedSection delay={0.2}>
        <div className="bg-gray-50">
          <section className="section">
            <SectionHeader
              title="Why Strategic Sakthi?"
              subtitle="Not just strategy. Strategy that works."
              className="mb-16"
            />
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-center text-gray-600 leading-relaxed">
                At Strategic Sakthi, we go beyond templates and guesswork.
                Everything we offer is backed by data, psychology, and execution
                power. Here's what sets us apart:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-strategic-green/20 group">
                <div className="h-12 w-12 bg-strategic-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-strategic-green/20 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-strategic-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-strategic-green transition-colors duration-300">
                  ROI-Driven Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We craft every plan with a clear RoI focus, timeline, and
                  market insight.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-strategic-green/20 group">
                <div className="h-12 w-12 bg-strategic-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-strategic-green/20 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-strategic-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-strategic-green transition-colors duration-300">
                  Gen Z Market Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gen Z is different. They think, consume, and buy differently —
                  and we get them. With deep understanding of Gen Z's digital
                  behavior, we craft campaigns and content that cut through the
                  noise and actually convert. Whether it's reels, ads, or brand
                  storytelling—your message lands right where it matters.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-strategic-green/20 group">
                <div className="h-12 w-12 bg-strategic-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-strategic-green/20 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-strategic-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-strategic-green transition-colors duration-300">
                  Verified Vendor Network
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No more wasting time chasing freelancers or figuring out whom
                  to trust. We've built a reliable network of marketing vendors
                  across Tamil Nadu—from graphic designers to editors to ad
                  specialists. Each one is verified, professional, and
                  execution-ready. You get expert output without the hiring
                  hassle.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                When you work with Strategic Sakthi, you're not just buying a
                service—you're buying back your time, focus, and clarity.
              </p>
              <CTAButton
                text="Let's Build Something That Works"
                href="https://calendly.com/strategicsakthi"
                external={true}
                className="px-8 py-3 text-lg"
              />
            </div>
          </section>
        </div>
      </AnimatedSection>

      {/* Global Experience - White Background */}
      <AnimatedSection delay={0.4}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="GLOBAL EXPERIENCE"
              subtitle="Trusted by Industry Leaders"
              className="mb-16"
            />
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-xl text-gray-700">
                With 3+ years of experience in international business consulting
                and market research, Sakthivel has worked on 30+ projects
                involving top brands like Royal Enfield, TI Cycles, Publicis
                Sapient, TMEIC and more.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div
                ref={carouselRef}
                className="flex"
                style={{
                  transform: `translateX(-${offset}px)`,
                  transition: "transform 0.1s linear",
                }}
              >
                {getVisibleBrands().map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="w-1/4 px-4 flex-shrink-0"
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-strategic-green/20 group backdrop-blur-sm">
                      <div className="h-32 flex items-center justify-center mb-4">
                        <Image
                          src={getImagePath(
                            `previously_worked/${brands.indexOf(brand) + 1}.${
                              brand.type
                            }`
                          )}
                          alt={brand.name}
                          className="h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                          placeholderClassName="h-24"
                        />
                      </div>
                      <p className="font-medium text-gray-800 text-center group-hover:text-strategic-green transition-colors duration-300">
                        {brand.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center mt-12 text-gray-500 italic">
              Not all brands can be disclosed publicly and demonstration of work
              can be shown in private consultation
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Products & Services - Grey Background */}
      <AnimatedSection delay={0.6}>
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Products & Services Offered"
              subtitle="Comprehensive Solutions for Your Growth"
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <AnimatedSection delay={0.1 * (index + 1)} key={index}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-strategic-green/20 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-strategic-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col h-full">
                      <Link to={service.path} className="block">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-strategic-green transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {service.description}
                        </p>
                      </Link>
                      {service.subServices && (
                        <div className="space-y-2 pl-4 border-l-2 border-gray-100 flex-grow">
                          {service.subServices.map((subService, subIndex) => (
                            <div key={subIndex} className="text-sm">
                              <p className="font-medium text-gray-700">
                                {subService.name}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {subService.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href="https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-strategic-green hover:text-strategic-green/80 font-medium transition-colors duration-300"
              >
                View Products and Services
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries - White Background */}
      <AnimatedSection delay={0.8}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Industries We Work In"
              subtitle="Expertise Across Multiple Sectors"
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <AnimatedSection delay={0.1 * (index + 1)} key={index}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-strategic-green/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-strategic-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <Image
                        src={getImagePath(
                          `industries/${index + 1}.${industry.type}`
                        )}
                        alt={industry.name}
                        className="h-40 w-full object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                        placeholderClassName="h-40"
                      />
                      <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-strategic-green transition-colors duration-300">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;
