
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ExternalLink, CheckCircle } from "lucide-react";

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
    "Consideration / Non-Consideration Analysis"
  ];

  const previousWorks = [
    {
      name: "Fully Filmy",
      description: "Market research and strategy"
    },
    {
      name: "CAPGEMINI RESEARCH INSTITUTE",
      description: "What matters to today's consumer",
      link: "https://www.capgemini.com/insights/research-library/what-matters-to-todays-consumer-2024/#:~:text=We%20also%20explore%20the%20increase,in%20the%20post%2Ddigital%20age."
    },
    {
      name: "CAPGEMINI RESEARCH INSTITUTE",
      description: "The art of software",
      link: "https://www.capgemini.com/insights/research-library/softwarization-research/"
    },
    {
      name: "TI Cycles from Murugappa Group",
      description: "Worked with National Marketing Team of TI Cycles to generate Marketing Strategies to increase footfall at the 200+ Exclusive Brand retail stores, Track and Trail"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-strategic-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Market Research & Business Insights</h1>
            <p className="text-xl mb-8">Start with insight, not assumptions.</p>
            <p className="text-lg mb-6">
              Before you market, let's make sure your message, audience, and model are rock solid.
            </p>
            <div className="flex justify-center">
              <CTAButton 
                text="Book a Discovery Call" 
                href="https://calendly.com/strategicsakthi" 
                external={true}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Who Is This For & Methodology */}
      <section className="section bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who Is This For?</h2>
            <p className="text-lg mb-6">
              Marketing strategists in Startups, D2C brands, Corporates, and product teams
            </p>
            <div className="bg-strategic-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Research Methodology</h3>
              <p>
                Primary and Secondary Research customized based on Client Requirements
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Why This Works</h2>
            <p className="text-lg mb-6">
              Built by a former Capgemini Invent consultant with experience across education, 
              automotive, and consumer behavior studies.
            </p>
            <div className="bg-strategic-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Pricing</h3>
              <p className="text-lg font-medium">
                Starts at ₹30,000/project
              </p>
              <p className="text-gray-600 mt-2">
                (will generate a custom pricing based on request and size of study)
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problem Statements */}
      <section className="section bg-strategic-light">
        <SectionHeader title="Problem Statements" />
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8">
            Before you invest crores, invest in clarity. Our in-depth market research helps you make 
            data-backed decisions. We cover:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problemStatements.map((statement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-strategic-green flex-shrink-0 mr-2 mt-1" size={20} />
                  <span>{statement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Previous Works */}
      <section className="section bg-white">
        <SectionHeader title="Previous Works" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousWorks.map((work, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 card-hover">
              <div className="mb-4">
                <ImagePlaceholder 
                  alt={work.name} 
                  className="w-full h-48" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{work.name}</h3>
              <p className="mb-4">{work.description}</p>
              {work.link && (
                <a 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-strategic-green hover:underline flex items-center"
                >
                  View Research <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="mb-4 font-medium">Portfolio Link:</p>
          <a 
            href="https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-strategic-green hover:underline"
          >
            https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link
          </a>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-strategic-dark text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <CTAButton 
              text="Book a Discovery Call" 
              href="https://calendly.com/strategicsakthi" 
              external={true}
            />
            <CTAButton 
              text="Request a Research Brief" 
              href="mailto:strategicsakthi@gmail.com" 
              external={true}
              variant="outline"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MarketResearch;
