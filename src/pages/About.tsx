import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Image from "@/components/Image";
import { CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/AnimatedLayout";
import { getImagePath } from "../utils/imagePath";

const About = () => {
  const careerTimeline = [
    {
      period: "2013–2017",
      title: "B.E – Computer Science",
      organization: "St. Joseph's Institute of Technology, OMR",
    },
    {
      period: "2017–2018",
      title: "Support and Data base analyst",
      organization: "Cognizant for a year in Banking Domain",
    },
    {
      period: "2019–2020",
      title: "Digital marketing",
      organization: "Career Launcher Tambaram for a year",
    },
    {
      period: "2020–2022",
      title: "MBA (PGDM) General Management",
      organization: "Majoring in Marketing & Strategy at IIM Tiruchirappalli",
    },
    {
      period: "2022–2024",
      title: "Business Consultant",
      organization:
        "Capgemini Invent, a Management Consulting company – Market Research",
    },
    {
      period: "Present to future",
      title: "Entrepreneur",
      organization: "Own Business Consulting firm and other businesses",
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                About Strategic Sakthi
              </h1>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Profile Section */}
      <AnimatedSection delay={0.2}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Hi, I'm Sakthi – Your Strategic Growth Partner
                </h2>
                <p className="text-lg mb-6 text-gray-600">
                  I'm a Market Research and Business Strategy Consultant who
                  believes in smart decisions powered by verified data. After
                  graduating from IIM Trichy with a major in Marketing &
                  Strategy, I worked as a Business Consultant at Capgemini
                  Invent, managing global projects.
                </p>
                <p className="text-lg mb-6 text-gray-600">
                  With experience across 30+ strategic projects and global
                  clients like Royal Enfield, TI Cycles, Capgemini, and Fanism,
                  I bring clarity, credibility, and execution to your business
                  journey.
                </p>
                <p className="text-lg text-gray-600">
                  Now, I help entrepreneurs and corporates like you avoid costly
                  mistakes, improve clarity, and grow faster—one smart move at a
                  time.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <Image
                    src={getImagePath("/strategic-sakthi.jpg")}
                    alt="Sakthi - Strategic Growth Partner"
                    className="w-full h-96 object-cover rounded-lg"
                    placeholderClassName="w-full h-96"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Career Timeline */}
      <AnimatedSection delay={0.4}>
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Career Snapshot" />
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {careerTimeline.map((item, index) => (
                  <AnimatedSection delay={0.2 * (index + 1)} key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
                      <div className="md:col-span-2 flex md:justify-end">
                        <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 w-full text-center">
                          <div className="flex items-center justify-center h-16 mb-2">
                            <Image
                              src={getImagePath(`/timeline/${index + 1}.png`)}
                              alt={item.organization}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <p className="font-bold text-gray-900">
                            {item.period}
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-1 flex justify-center">
                        <div className="h-full w-0.5 bg-strategic-green relative">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-strategic-green"></div>
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                          <h3 className="text-xl font-bold mb-2 text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.organization}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection delay={0.6}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="mb-6">
                  <Image
                    src={getImagePath("/mission.png")}
                    alt="Our Values"
                    className="w-full h-75 rounded-lg"
                    placeholderClassName="w-full h-64"
                  />
                </div>
                <p className="text-lg text-gray-600">
                  Taking 5 Businesses from Tamil Nadu to the global scale
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  VISION
                </h2>
                <p className="text-lg text-gray-600">
                  Being the bridge between Unorganized businesses and Undirected
                  Youth to unlock potential of both in India
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default About;
