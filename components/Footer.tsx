
import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo, allNavLinks } from '../constants';
import { ShipIcon, MailIcon, PhoneIcon, LocationMarkerIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShipIcon className="h-8 w-8 text-brand-cyan" />
              <span className="text-2xl font-bold tracking-wider">{companyInfo.name}</span>
            </Link>
            <p className="text-white/70">{companyInfo.about.substring(0, 120)}...</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {allNavLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-brand-cyan" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-brand-cyan" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">{companyInfo.email}</a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-brand-cyan" />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{companyInfo.phone}</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter (placeholder) */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider text-white mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
              <button type="submit" className="bg-brand-cyan text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors font-semibold">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
