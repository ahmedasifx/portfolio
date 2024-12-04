import React from 'react';


import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <nav className="fixed w-full top-0 z-50 bg-s2/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-p1">
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#tech">Tech Stack</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <MenuIcon className="w-6 h-6 text-p4" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
              <div className="mt-4 md:hidden flex flex-col space-y-4">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#tech">Tech Stack</NavLink>
                <NavLink href="#education">Education</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
              </div>
          )}
        </div>
      </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="text-p5 hover:text-p1 transition-colors duration-200 block"
    >
      {children}
    </a>
);

// Placeholder for Menu Icon
const MenuIcon = ({ className }: { className: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

export default Navbar;
