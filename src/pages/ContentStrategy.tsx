import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import Image from "@/components/Image";
import { AnimatedSection } from "@/components/AnimatedLayout";
import {
  FileText,
  Video,
  Calendar,
  ExternalLink,
  CheckCircle,
  LayoutTemplate,
  Users,
  Sparkles,
  Pencil,
  TrendingUp,
  Play,
  Type,
  Music,
  Laptop,
} from "lucide-react";

const ContentStrategy = () => {
  const contentStrategyFeatures = [
    "Content Calendar",
    "Persona-Based Scripting",
    "Full Video Editing",
    "Trend-Based Hooks",
    "CTA Optimization",
  ];

  const portfolioSamples = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Content Strategy & Video Marketing
              </h1>
              <p className="text-xl text-gray-700">
                Plan. Script. Edit. Grow. <br />
                We create end-to-end content systems for Reels, YouTube Shorts,
                and brand storytelling.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Content Services */}
      <AnimatedSection delay={0.2}>
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Content Services"
              subtitle="End-to-end content creation, scripting, and video editing services"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Content Strategy Card */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">
                      Content Strategy
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Want to build influence and generate leads online—fast? We
                      create end-to-end Instagram and YouTube Reels with:
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      What's Included:
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <LayoutTemplate
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">Content Calendar</span>
                      </li>
                      <li className="flex items-start">
                        <Users
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Persona-Based Scripting
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Video
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Full Video Editing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">Trend-Based Hooks</span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">CTA Optimization</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-600 italic">
                      Note: Does not include Videography
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Packages:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-gray-600">
                            Customized packages and pricing depending on the
                            monthly order
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        Add-Ons:
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-strategic-green mr-2">•</span>
                          <span className="text-gray-600">
                            Cover Frame: ₹500/reel
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-strategic-green mr-2">•</span>
                          <span className="text-gray-600">
                            Re-edits: ₹300/reel
                          </span>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://drive.google.com/drive/folders/1zZHssC3BbJ6nW70Q9RK-RDIe6GeFclyj?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-strategic-green hover:underline inline-flex items-center"
                    >
                      View Samples <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Scripting Card */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">
                      Scripting
                    </h2>
                    <p className="mb-6 text-gray-600">
                      We write short form and long form video concepts. These
                      are based on persona's psychology and behaviour and based
                      on trend-based meme content. These are highly engaging and
                      great for reels and YouTube Shorts.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Play
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Short-form scripts under 1 minute
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Users
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Crafted using persona psychology
                        </span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Trend-based content optimization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Sparkles
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Perfect for reels and shorts
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <p className="mb-6 font-medium text-gray-700">
                      Scripting service can be availed separately
                    </p>
                    <p className="mb-6 text-gray-900 font-semibold">
                      Starts at ₹500/script for one minute script
                    </p>
                    <a
                      href="https://drive.google.com/drive/folders/19PN1Sm21571erTvJ-LXGkdjlSM5w01sl?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-strategic-green hover:underline inline-flex items-center"
                    >
                      View Samples <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Video Editing Card */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">
                      Video Editing
                    </h2>
                    <p className="mb-6 text-gray-600">
                      Reels, Shorts & Long-Form. Includes transitions,
                      subtitles, trending music. We specialize in editing for
                      YouTube and Instagram.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Sparkles
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Professional transitions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Type
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Engaging subtitles
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Music
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Trending music integration
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Laptop
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">
                          Platform-optimized formats
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <p className="mb-6 font-medium text-gray-700">
                      Video editing service can be availed separately
                    </p>
                    <p className="mb-6 text-gray-900 font-semibold">
                      Starts at ₹1,000/video
                    </p>
                    <a
                      href="https://drive.google.com/drive/folders/1ZWdoy0DKxTdZeaboKOj6_cyyMh_osdWY?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-strategic-green hover:underline inline-flex items-center"
                    >
                      View Samples <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection delay={0.4}>
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Portfolio"
              subtitle="Some of our recent work"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioSamples.map((sample, index) => (
                <AnimatedSection delay={0.1 * (index + 1)} key={index}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="relative pt-[100%] w-full">
                      {" "}
                      {/* Square aspect ratio */}
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <Image
                          src={`/portfolios/${sample}.png`}
                          alt={`Portfolio Sample ${sample}`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          placeholderClassName="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.6}>
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Content That Converts?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a discovery call to discuss your content needs and see how we
              can help.
            </p>
            <CTAButton
              text="Schedule Your Free Call"
              href="https://calendly.com/strategicsakthi"
              external={true}
            />
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default ContentStrategy;
