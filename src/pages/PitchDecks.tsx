import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import Image from "@/components/Image";
import { AnimatedSection } from "@/components/AnimatedLayout";
import {
  ExternalLink,
  Presentation,
  Palette,
  LayoutPanelTop,
  LineChart,
  Users,
  Target,
  Calculator,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getImagePath } from "../utils/imagePath";

const PitchDecks = () => {
  const businessDeckFeatures = [
    { text: "10–15 Slide Deck (PPT or Google Slides)", icon: Presentation },
    { text: "Visual Storytelling", icon: Palette },
    { text: "Content Strategy Flow", icon: LayoutPanelTop },
    { text: "Charts, Icons, Graphics", icon: LineChart },
  ];

  const investorDeckFeatures = [
    { text: "Founder's Vision Mapping", icon: Target },
    { text: "Market Size + Problem Framing", icon: Users },
    { text: "Financial Highlights", icon: Calculator },
    { text: "Competitive Moat & Traction", icon: TrendingUp },
    { text: "Clear Ask & Use of Funds", icon: DollarSign },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pitch Deck Services
            </h1>
            <p className="text-xl text-gray-700">
              Compelling presentations that get results
            </p>
          </div>
        </div>
      </section>

      {/* Combined Decks Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Deck Card */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col min-h-[700px]">
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    📽️ Pitch Decks & Business Profiles
                  </h2>
                  <p className="text-xl font-medium mb-3 text-gray-700">
                    Your story, elevated.
                  </p>
                  <p className="text-lg mb-6 text-gray-600">
                    Whether it's a sales pitch, brand profile, or partnership
                    deck—we build presentations that get results.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <p className="text-2xl font-bold mb-2 text-gray-900">
                      ₹500 per slide
                    </p>
                    <p className="text-gray-600">
                      (Customizable decks for any business stage)
                    </p>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Includes:
                  </h3>
                  <ul className="space-y-2">
                    {businessDeckFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <feature.icon
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <CTAButton
                    text="Request a Custom Deck"
                    href="mailto:strategicsakthi@gmail.com"
                    external={true}
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Investor Deck Card */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col min-h-[700px]">
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    🚀 Investor Pitch Decks
                  </h2>
                  <p className="text-xl font-medium mb-3 text-gray-700">
                    Pitch-ready, investor-approved.
                  </p>
                  <p className="text-lg mb-6 text-gray-600">
                    Crafted specifically for startups and founders seeking
                    funding—designed to clearly present value, traction, and
                    potential.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <p className="text-2xl font-bold mb-2 text-gray-900">
                      Starts at ₹25,000
                    </p>
                    <p className="text-gray-600">
                      (Custom pricing based on investor stage and detail
                      required)
                    </p>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Includes:
                  </h3>
                  <ul className="space-y-2">
                    {investorDeckFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <feature.icon
                          size={20}
                          className="text-strategic-green mr-2 mt-1"
                        />
                        <span className="text-gray-600">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <CTAButton
                    text="Request an Investor Deck"
                    href="mailto:strategicsakthi@gmail.com"
                    external={true}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to see our work?
              </h3>
              <p className="text-gray-600 mb-6">
                Browse through our collection of sample pitch decks to see our
                quality and style
              </p>
              <div className="flex items-center justify-center mb-8">
                <CTAButton
                  text="View Sample Decks"
                  href="https://drive.google.com/drive/folders/1CYGK9dtw6S3XIOgvJBsNFtz4MTZ4EIq9?usp=drive_link"
                  external={true}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <AnimatedSection delay={0.6}>
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Sample Works"
              subtitle="A glimpse of our pitch deck designs"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <AnimatedSection delay={0.1 * index} key={index}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="relative pt-[56.25%] w-full">
                      {" "}
                      {/* 16:9 aspect ratio */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <Image
                          src={getImagePath(`pitch_decks/${index}.png`)}
                          alt={`Pitch Deck Sample ${index}`}
                          className="w-full h-full object-contain"
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

      <Footer />
    </div>
  );
};

export default PitchDecks;
