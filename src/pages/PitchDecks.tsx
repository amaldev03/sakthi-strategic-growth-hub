
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const PitchDecks = () => {
  const businessDeckFeatures = [
    "10–15 Slide Deck (PPT or Google Slides)",
    "Visual Storytelling",
    "Content Strategy Flow",
    "Charts, Icons, Graphics"
  ];

  const investorDeckFeatures = [
    "Founder's Vision Mapping",
    "Market Size + Problem Framing",
    "Financial Highlights",
    "Competitive Moat & Traction",
    "Clear Ask & Use of Funds"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-strategic-dark text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pitch Deck Services</h1>
            <p className="text-xl mb-8">Compelling presentations that get results</p>
          </div>
        </div>
      </section>
      
      {/* Business Decks */}
      <section className="section section-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">📽️ Pitch Decks & Business Profiles</h2>
            <p className="text-xl font-medium mb-3">Your story, elevated.</p>
            <p className="text-lg mb-6">
              Whether it's a sales pitch, brand profile, or partnership deck—we build presentations that get results.
            </p>
            <div className="highlight-card mb-6">
              <p className="text-2xl font-bold mb-2">₹500 per slide</p>
              <p className="text-gray-600">(Customizable decks for any business stage)</p>
            </div>
            <h3 className="text-xl font-bold mb-3">What You Get:</h3>
            <ul className="feature-list mb-6">
              {businessDeckFeatures.map((feature, index) => (
                <li key={index} className="feature-item">
                  <CheckCircle size={20} className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <CTAButton 
              text="Request a Custom Deck" 
              href="mailto:strategicsakthi@gmail.com" 
              external={true}
            />
          </div>
          <div className="flex justify-center">
            <div className="card w-full max-w-md">
              <div className="card-content">
                <ImagePlaceholder 
                  alt="Business Pitch Deck Sample" 
                  className="w-full h-80 rounded-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investor Decks */}
      <section className="section section-gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <Card className="w-full max-w-md shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <ImagePlaceholder 
                  alt="Investor Pitch Deck Sample" 
                  className="w-full h-48 mb-4" 
                />
                <h3 className="text-xl font-bold">Sample Investor Deck</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professionally designed slides that convey your vision and business potential
                </p>
              </CardContent>
              <CardFooter>
                <a 
                  href="https://drive.google.com/drive/folders/1CYGK9dtw6S3XIOgvJBsNFtn4MTZ4EIq9?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-strategic-green hover:underline flex items-center"
                >
                  View More Samples <ExternalLink size={16} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-4">🚀 Investor Pitch Decks</h2>
            <p className="text-xl font-medium mb-3">Pitch-ready, investor-approved.</p>
            <p className="text-lg mb-6">
              Crafted specifically for startups and founders seeking funding—designed to clearly present 
              value, traction, and potential.
            </p>
            <div className="highlight-card mb-6">
              <p className="text-2xl font-bold mb-2">Starts at ₹25,000</p>
              <p className="text-gray-600">(Custom pricing based on investor stage and detail required)</p>
            </div>
            <h3 className="text-xl font-bold mb-3">Includes:</h3>
            <ul className="feature-list mb-6">
              {investorDeckFeatures.map((feature, index) => (
                <li key={index} className="feature-item">
                  <CheckCircle size={20} className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <CTAButton 
              text="Request an Investor Deck" 
              href="mailto:strategicsakthi@gmail.com" 
              external={true}
            />
          </div>
        </div>
      </section>
      
      {/* Portfolio Link */}
      <section className="section section-white text-center">
        <div className="cta-card max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Portfolio:</h2>
          <a 
            href="https://drive.google.com/drive/folders/1CYGK9dtw6S3XIOgvJBsNFtn4MTZ4EIq9?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-strategic-green hover:underline inline-flex items-center"
          >
            View Portfolio <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PitchDecks;
