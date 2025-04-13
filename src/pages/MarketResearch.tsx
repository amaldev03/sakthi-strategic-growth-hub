import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import Image from "@/components/Image";
import { ExternalLink, CheckCircle, Users, FileCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedLayout";
import { getImagePath } from "../utils/imagePath";

const MarketResearch = () => {
  const problemStatements = [
    "Customer Analysis & Profiling",
    "Consumer / Dealer Persona Mapping",
    "Competitive Benchmarking Reports",
    "Product Feature & Perception Clinics",
    "Purchase Driver & Barrier Analysis",
    "USP Discovery",
    "Go-To-Market / Market Entry Strategy",
    "Media & Channel Strategy",
    "Messaging Inputs",
    "Consideration / Non-Consideration Analysis",
  ];

  const previousWorks = [
    {
      name: "Fully Filmy",
      description: "Market research and strategy",
      type: "png",
    },
    {
      name: "TI Cycles from Murugappa Group",
      description:
        "Worked with National Marketing Team of TI Cycles to generate Marketing Strategies to increase footfall at the 200+ Exclusive Brand retail stores, Track and Trail",
      type: "jpg",
    },
    {
      name: "CAPGEMINI RESEARCH INSTITUTE",
      description: "What matters to today's consumer",
      link: "https://www.capgemini.com/insights/research-library/what-matters-to-todays-consumer-2024/#:~:text=We%20also%20explore%20the%20increase,in%20the%20post%2Ddigital%20age.",
      type: "png",
    },
    {
      name: "CAPGEMINI RESEARCH INSTITUTE",
      description: "The art of software",
      link: "https://www.capgemini.com/insights/research-library/softwarization-research/",
      type: "png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Market Research & Business Insights
              </h1>
              <p className="text-xl text-gray-700">
                Start with insight, not assumptions.
              </p>
              {/* <p className="text-lg mb-6 text-gray-600">
                Before you market, let's make sure your message, audience, and
                model are rock solid.
              </p>
              <div className="flex justify-center">
                <CTAButton
                  text="Book a Discovery Call"
                  href="https://calendly.com/strategicsakthi"
                  external={true}
                />
              </div> */}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Who Is This For & Research Methodology */}
      <AnimatedSection delay={0.2}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Who Is This For Card */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-8">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 bg-strategic-green/10 rounded-2xl flex items-center justify-center mb-6">
                      <Users className="h-8 w-8 text-strategic-green" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Who Is This For?
                    </h2>
                    <p className="text-lg text-gray-600 text-center">
                      Marketing strategists in Startups, D2C brands, Corporates,
                      and product teams
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Research Methodology Card */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-8">
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 bg-strategic-green/10 rounded-2xl flex items-center justify-center mb-6">
                      <FileCheck className="h-8 w-8 text-strategic-green" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Research Methodology
                    </h2>
                    <p className="text-lg text-gray-600 text-center">
                      Primary and Secondary Research customized based on Client
                      Requirements
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Problem Statements */}
      <AnimatedSection delay={0.4}>
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Problem Statements" />
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-center mb-8 text-gray-600">
                Before you invest crores, invest in clarity. Our in-depth market
                research helps you make data-backed decisions.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {problemStatements.map((statement, index) => (
                    <AnimatedSection delay={0.1 * (index + 1)} key={index}>
                      <li className="flex items-start">
                        <CheckCircle
                          className="text-strategic-green flex-shrink-0 mr-2 mt-1"
                          size={20}
                        />
                        <span className="text-gray-600">{statement}</span>
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Previous Works */}
      <AnimatedSection delay={0.6}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Previous Works" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {previousWorks.map((work, index) => (
                <AnimatedSection delay={0.1 * (index + 1)} key={index}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    <div className="mb-6">
                      <Image
                        src={getImagePath(
                          `previous_works/${index + 1}.${work.type}`
                        )}
                        alt="Market Research Analysis"
                        className="w-full h-64 rounded-lg object-cover"
                        placeholderClassName="w-full h-64"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {work.name}
                      </h3>
                      <p className="mb-4 text-gray-600 flex-grow">
                        {work.description}
                      </p>
                      {work.link && (
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-strategic-green hover:underline flex items-center mt-auto"
                        >
                          View Research{" "}
                          <ExternalLink size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.5}>
              <div className="mt-12 text-center">
                <p className="mb-4 font-medium text-gray-900">
                  Portfolio Link:
                </p>
                <CTAButton
                  text="View Portfolio"
                  href="https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link"
                  external={true}
                  variant="outline"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default MarketResearch;
