
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { companyInfo, allNavLinks } from '../constants';
import { ShipIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = "text-white/80 hover:text-white transition-colors duration-300 py-2";
  const activeNavLinkClasses = "text-white font-semibold border-b-2 border-brand-cyan";

  return (
    <header className="bg-brand-blue/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <ShipIcon className="h-8 w-8 text-brand-cyan" />
              <span className="text-2xl font-bold text-white tracking-wider">{companyInfo.name}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {allNavLinks.slice(1).map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
              >
                {link.name}
              </RouterNavLink>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue-light">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {allNavLinks.slice(1).map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `block text-center rounded-md ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
              >
                {link.name}
              </RouterNavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
