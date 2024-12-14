import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-[#181715]/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="text-white font-bold text-xl">Military Recruiting Marketing</span>
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#4E5A3C]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-[#928E72] hover:text-[#D5B803] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#928E72] hover:text-[#D5B803] transition-colors">
              About Us
            </a>
            <a href="#" className="text-[#928E72] hover:text-[#D5B803] transition-colors">
              Our Services
            </a>
            <a href="#" className="text-[#928E72] hover:text-[#D5B803] transition-colors">
              Resources
            </a>
            <a href="#" className="text-[#928E72] hover:text-[#D5B803] transition-colors">
              Contact Us
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#D5B803] to-[#BF1D40E] hover:from-[#BF1D40E] hover:to-[#D5B803] transition-all"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-[#181715]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 text-[#928E72] hover:text-[#D5B803]">Home</a>
          <a href="#" className="block px-3 py-2 text-[#928E72] hover:text-[#D5B803]">About Us</a>
          <a href="#" className="block px-3 py-2 text-[#928E72] hover:text-[#D5B803]">Our Services</a>
          <a href="#" className="block px-3 py-2 text-[#928E72] hover:text-[#D5B803]">Resources</a>
          <a href="#" className="block px-3 py-2 text-[#928E72] hover:text-[#D5B803]">Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;