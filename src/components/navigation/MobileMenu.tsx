import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Contact', path: '/contact' },
  ];

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#181715] border-t border-[#D5B803]/10">
      <div className="px-4 py-2 space-y-1">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="block px-3 py-2 text-[#928E72] hover:text-[#D5B803] font-tactical"
          >
            {link.name}
          </Link>
        ))}
        <div className="pt-4 space-y-2">
          <Button variant="secondary" size="sm" className="w-full">
            Get Pricing
          </Button>
          <Button size="sm" className="w-full">
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};