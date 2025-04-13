
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTAButton from "@/components/CTAButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { FileText, Video, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const ContentStrategy = () => {
  const contentStrategyFeatures = [
    "Content Calendar",
    "Persona-Based Scripting",
    "Full Video Editing",
    "Trend-Based Hooks",
    "CTA Optimization"
  ];

  const portfolioSamples = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-strategic-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Content Strategy & Video Marketing</h1>
            <p className="text-xl mb-8">Plan. Script. Edit. Grow.</p>
            <p className="text-lg mb-6">
              We create end-to-end content systems for Reels, YouTube Shorts, and brand storytelling.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Strategy */}
      <section className="section bg-white">
        <SectionHeader title="Content Strategy" centered={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Process</h3>
            <p className="mb-6">
              Want to build influence and generate leads online—fast? We create end-to-end Instagram 
              and YouTube Reels with:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <FileText size={20} className="mr-2 text-strategic-green" />
                <span>Script writing</span>
              </li>
              <li className="flex items-center">
                <Video size={20} className="mr-2 text-strategic-green" />
                <span>Direction</span>
              </li>
              <li className="flex items-center">
                <Video size={20} className="mr-2 text-strategic-green" />
                <span>Professional Video Shoot</span>
              </li>
              <li className="flex items-center">
                <Video size={20} className="mr-2 text-strategic-green" />
                <span>Video Editing</span>
              </li>
              <li className="flex items-center">
                <FileText size={20} className="mr-2 text-strategic-green" />
                <span>Cover designs</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4">Why This Works</h3>
            <p className="mb-6">
              We blend strategy, storytelling and market trends to craft content that resonates — 
              especially with Gen Z.
            </p>
          </div>
          
          <div>
            <div className="bg-strategic-light p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">What's Included:</h3>
              <ul className="space-y-2">
                {contentStrategyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={20} className="mr-2 text-strategic-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-600 italic">Note: Does not include Videography</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Packages</h3>
              <p>Customized packages and pricing depending on the monthly order</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Add-Ons:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-strategic-green mr-2">•</span>
                  <span>Cover Frame: ₹500/reel</span>
                </li>
                <li className="flex items-center">
                  <span className="text-strategic-green mr-2">•</span>
                  <span>Re-edits: ₹300/reel</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="https://drive.google.com/drive/folders/1zZHssC3BbJ6nW70Q9RK-RDIe6GeFclyj?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center"
            >
              View Samples <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Scripting */}
      <section className="section bg-strategic-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Scripting</h2>
            <p className="mb-6">
              We write short form and long form video concepts. These are based on persona's psychology 
              and behaviour and based on trend-based meme content. These are highly engaging and great 
              for reels and YouTube Shorts.
            </p>
            <p className="mb-6 font-medium">
              Scripting service alone can be availed separately
            </p>
            <p className="mb-6">
              Short-form scripts under 1 minute crafted using persona psychology & trends.
              <br />
              <span className="font-semibold">Starts at ₹500/script for one minute script</span>
            </p>
            <a 
              href="https://drive.google.com/drive/folders/19PN1Sm21571erTvJ-LXGkdjlSM5w01sl?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center"
            >
              View Samples <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Video Editing</h2>
            <p className="mb-6">
              Reels, Shorts & Long-Form. Includes transitions, subtitles, trending music.
            </p>
            <p className="mb-6">
              We specialize in editing for YouTube and Instagram
            </p>
            <p className="mb-6 font-medium">
              Video editing service alone can be availed separately
              <br />
              <span className="font-semibold">Starts at ₹1,000/video</span>
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1ZWdoy0DKxTdZeaboKOj6_cyyMh_osdWY?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center"
            >
              View Samples <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Portfolio */}
      <section className="section bg-white">
        <SectionHeader title="Portfolio" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {portfolioSamples.map((sample, index) => (
            <div key={index} className="card-hover rounded-lg overflow-hidden">
              <ImagePlaceholder 
                alt={`Portfolio Sample ${sample}`} 
                className="w-full h-64" 
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <CTAButton 
            text="Book Discovery Call – Free" 
            href="https://calendly.com/strategicsakthi" 
            external={true}
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContentStrategy;
