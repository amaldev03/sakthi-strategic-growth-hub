
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Market Research", path: "/market-research" },
    { title: "Marketing Strategies", path: "/marketing-strategies" },
    { title: "Content Strategy", path: "/content-strategy" },
    { title: "Pitch Decks", path: "/pitch-decks" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bold text-xl text-strategic-dark">
              <span className="text-strategic-green">Strategic</span> Sakthi
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-strategic-green px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="https://calendly.com/strategicsakthi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-4 text-sm"
            >
              Book a Call
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-strategic-green focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-strategic-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              to="https://calendly.com/strategicsakthi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center mx-3 my-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
