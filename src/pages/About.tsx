
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const About = () => {
  const careerTimeline = [
    {
      period: "2013–2017",
      title: "B.E – Computer Science",
      organization: "St. Joseph's Institute of Technology, OMR"
    },
    {
      period: "2017–2018",
      title: "Support and Data base analyst",
      organization: "Cognizant for a year in Banking Domain"
    },
    {
      period: "2019–2020",
      title: "Digital marketing",
      organization: "Career Launcher Tambaram for a year"
    },
    {
      period: "2020–2022",
      title: "MBA (PGDM) General Management",
      organization: "Majoring in Marketing & Strategy at IIM Tiruchirappalli"
    },
    {
      period: "2022–2024",
      title: "Business Consultant",
      organization: "Capgemini Invent, a Management Consulting company – Market Research"
    },
    {
      period: "Present to future",
      title: "Entrepreneur",
      organization: "Own Business Consulting firm and other businesses"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-strategic-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Strategic Sakthi</h1>
          </div>
        </div>
      </section>
      
      {/* Profile Section */}
      <section className="section bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Hi, I'm Sakthi – Your Strategic Growth Partner</h2>
            <p className="text-lg mb-6">
              I'm a Market Research and Business Strategy Consultant who believes in smart decisions 
              powered by verified data. After graduating from IIM Trichy with a major in Marketing & Strategy, 
              I worked as a Business Consultant at Capgemini Invent, managing global projects.
            </p>
            <p className="text-lg mb-6">
              With experience across 30+ strategic projects and global clients like Royal Enfield, 
              TI Cycles, Capgemini, and Fanism, I bring clarity, credibility, and execution to your 
              business journey.
            </p>
            <p className="text-lg">
              Now, I help entrepreneurs and corporates like you avoid costly mistakes, improve clarity, 
              and grow faster—one smart move at a time.
            </p>
          </div>
          <div className="flex justify-center">
            <ImagePlaceholder 
              alt="Sakthi - Strategic Growth Partner" 
              className="w-full max-w-md h-96 rounded-lg" 
            />
          </div>
        </div>
      </section>
      
      {/* Career Timeline */}
      <section className="section bg-strategic-light">
        <SectionHeader title="Career Snapshot" />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {careerTimeline.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-8 gap-4">
                <div className="md:col-span-2 flex md:justify-end">
                  <div className="bg-white p-4 rounded-lg shadow-md w-full text-center">
                    <div className="mb-2">
                      <ImagePlaceholder 
                        alt={item.organization} 
                        className="w-full h-12 rounded" 
                      />
                    </div>
                    <p className="font-bold">{item.period}</p>
                  </div>
                </div>
                <div className="md:col-span-1 flex justify-center">
                  <div className="h-full w-0.5 bg-strategic-green relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-strategic-green"></div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p>{item.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-strategic-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">MISSION: LIGHT UP TAMIL NADU</h2>
            <div className="mb-6">
              <ImagePlaceholder 
                alt="Mission - Light Up Tamil Nadu" 
                className="w-full h-40" 
              />
            </div>
            <p className="text-lg">
              Taking 5 Businesses from Tamil Nadu to the global scale
            </p>
          </div>
          <div className="bg-strategic-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">VISION</h2>
            <p className="text-lg">
              Being the bridge between Unorganized businesses and Undirected Youth to unlock potential of both in India
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
