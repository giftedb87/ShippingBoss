
import React from 'react';
import { services } from '../constants';
import type { Service } from '../types';

const PageHeader = () => (
    <div className="bg-brand-blue py-20 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">Tailored shipping and logistics solutions designed to meet your needs, whatever they may be.</p>
        </div>
    </div>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon;
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-brand-cyan/10 rounded-full mr-4">
                    <Icon className="h-6 w-6 text-brand-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue">{service.title}</h3>
            </div>
            <p className="text-gray-600 flex-grow">{service.description}</p>
            <a href="#/contact" className="text-brand-cyan font-semibold mt-6 inline-block hover:underline">Learn More &rarr;</a>
        </div>
    );
};

const ServicesGrid = () => (
    <div className="bg-brand-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    </div>
);


const CtaSection = () => (
    <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-blue">Have a Custom Request?</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">We provide specialized logistics solutions for unique requirements. Get in touch with our experts to discuss your needs.</p>
            <a href="#/contact" className="mt-8 inline-block bg-brand-cyan text-white font-bold px-8 py-4 rounded-md hover:bg-opacity-90 transition-colors text-lg">
                Contact Our Team
            </a>
        </div>
    </div>
);


const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <ServicesGrid />
      <CtaSection />
    </div>
  );
};

export default ServicesPage;
