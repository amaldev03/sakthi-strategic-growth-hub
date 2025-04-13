import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  MessageSquare,
} from "lucide-react";
import CTAButton from "./CTAButton";

const Footer = () => {
  return (
    <footer className="bg-strategic-dark text-white">
      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to explore our services, book a
              consultation, or view our portfolio, we're here to help you
              achieve your business goals.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex flex-col gap-4 text-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Explore Our Services
                    </h3>
                    <p className="text-gray-600">
                      Discover how we can help grow your business
                    </p>
                  </div>
                  <CTAButton
                    text="Explore Services"
                    href="/market-research"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex flex-col gap-4 text-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Book a Strategy Call
                    </h3>
                    <p className="text-gray-600">
                      Get personalized advice for your business
                    </p>
                  </div>
                  <CTAButton
                    text="Book a Strategy Call"
                    href="https://calendly.com/strategicsakthi"
                    external={true}
                    variant="secondary"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex flex-col gap-4 text-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      View Our Portfolio
                    </h3>
                    <p className="text-gray-600">
                      See our successful projects and case studies
                    </p>
                  </div>
                  <CTAButton
                    text="View Portfolio"
                    href="https://drive.google.com/drive/folders/1kwYwa_u_wufO-KREwMaBQ0QHbnVQuQqL?usp=drive_link"
                    external={true}
                    variant="outline"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <a
                    href="mailto:strategicsakthi@gmail.com"
                    className="hover:text-strategic-green transition-colors"
                  >
                    strategicsakthi@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <a
                    href="tel:+919790803023"
                    className="hover:text-strategic-green transition-colors"
                  >
                    +91-9790803023
                  </a>
                </li>
                <li className="flex items-center">
                  <MessageSquare size={18} className="mr-2" />
                  <a
                    href="https://wa.me/919790803023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-strategic-green transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-strategic-green transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/market-research"
                    className="hover:text-strategic-green transition-colors"
                  >
                    Market Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing-strategies"
                    className="hover:text-strategic-green transition-colors"
                  >
                    Marketing Strategies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/content-strategy"
                    className="hover:text-strategic-green transition-colors"
                  >
                    Content Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pitch-decks"
                    className="hover:text-strategic-green transition-colors"
                  >
                    Pitch Decks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-strategic-green transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media & CTA */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.instagram.com/strategicsakthi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-strategic-green transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/strategicsakthi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-strategic-green transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@StrategicSakthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-strategic-green transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://www.facebook.com/strategicsakthi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-strategic-green transition-colors bg-gray-800 p-2 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
