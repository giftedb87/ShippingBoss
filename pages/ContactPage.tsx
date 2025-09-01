
import React, { useState } from 'react';
import { companyInfo } from '../constants';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '../components/icons/Icons';

const PageHeader = () => (
    <div className="bg-brand-blue py-20 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">We're here to help. Whether you have a question about our services or need support, please feel free to reach out.</p>
        </div>
    </div>
);

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Thank you for your message! We will get back to you shortly.');
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-cyan focus:border-brand-cyan" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-cyan focus:border-brand-cyan" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-cyan focus:border-brand-cyan"></textarea>
            </div>
            <div>
                <button type="submit" className="w-full bg-brand-cyan text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                    Send Message
                </button>
            </div>
            {status && <p className="text-center text-green-600">{status}</p>}
        </form>
    );
};

const ContactDetails = () => (
    <div className="space-y-8">
        <div>
            <h3 className="text-xl font-bold text-brand-blue mb-2 flex items-center">
                <LocationMarkerIcon className="h-6 w-6 mr-3 text-brand-cyan" /> Office Address
            </h3>
            <p className="text-gray-600 pl-9">{companyInfo.address}</p>
        </div>
        <div>
            <h3 className="text-xl font-bold text-brand-blue mb-2 flex items-center">
                <MailIcon className="h-6 w-6 mr-3 text-brand-cyan" /> Email
            </h3>
            <a href={`mailto:${companyInfo.email}`} className="text-gray-600 pl-9 hover:text-brand-cyan transition-colors">{companyInfo.email}</a>
        </div>
        <div>
            <h3 className="text-xl font-bold text-brand-blue mb-2 flex items-center">
                <PhoneIcon className="h-6 w-6 mr-3 text-brand-cyan" /> Phone
            </h3>
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-gray-600 pl-9 hover:text-brand-cyan transition-colors">{companyInfo.phone}</a>
        </div>
         <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg mt-8">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253805.8562137542!2d5.462372076013233!3d6.340079979703443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d17615962c4f%3A0x6284883cccf13eb!2sBenin%20City%2C%20Edo%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1672855555555!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
            ></iframe>
         </div>
    </div>
);

const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-gray">
      <PageHeader />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Contact Information</h2>
            <ContactDetails />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
