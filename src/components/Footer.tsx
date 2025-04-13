
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Linkedin, Youtube, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-strategic-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:strategicsakthi@gmail.com" className="hover:text-strategic-green transition-colors">
                  strategicsakthi@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+919790803023" className="hover:text-strategic-green transition-colors">
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
                <Link to="/" className="hover:text-strategic-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/market-research" className="hover:text-strategic-green transition-colors">Market Research</Link>
              </li>
              <li>
                <Link to="/marketing-strategies" className="hover:text-strategic-green transition-colors">Marketing Strategies</Link>
              </li>
              <li>
                <Link to="/content-strategy" className="hover:text-strategic-green transition-colors">Content Strategy</Link>
              </li>
              <li>
                <Link to="/pitch-decks" className="hover:text-strategic-green transition-colors">Pitch Decks</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-strategic-green transition-colors">About</Link>
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
                className="hover:text-strategic-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/strategicsakthi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-strategic-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@StrategicSakthi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-strategic-green transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
            <a 
              href="https://calendly.com/strategicsakthi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Book a Meeting
            </a>
            <div className="mt-4">
              <a 
                href="https://linktr.ee/StrategicSakthi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-strategic-green hover:underline"
              >
                LinkTree
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          © 2025 Strategic Sakthi. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
