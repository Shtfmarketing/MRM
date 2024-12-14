import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface NavLinksProps {
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={cn('font-tactical', className)}>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="text-[#928E72] hover:text-[#D5B803] transition-colors px-4"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};