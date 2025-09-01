
import React from 'react';
import { companyInfo } from '../constants';
import { CheckCircleIcon, UsersIcon, LightBulbIcon } from '../components/icons/Icons';

const PageHeader = () => (
    <div className="bg-brand-blue py-20 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">About Shipping Boss</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">Connecting the world, one package at a time. Discover our story, mission, and the values that drive us forward.</p>
        </div>
    </div>
);

const AboutContent = () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
                {companyInfo.about}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
                We are committed to leveraging technology to provide a seamless and transparent shipping experience. Whether it's a small parcel or a large freight shipment, our network is designed for reliability, speed, and security.
            </p>
        </div>
        <div className="w-full h-80 lg:h-96 rounded-lg shadow-xl overflow-hidden">
            <img src="https://picsum.photos/seed/about-us/800/600" alt="Shipping Boss Operations" className="w-full h-full object-cover" />
        </div>
    </div>
);

const OurValues = () => {
    const values = [
        {
            icon: CheckCircleIcon,
            title: 'Reliability',
            description: 'We promise to deliver your packages on time and in perfect condition. Your trust is our top priority.'
        },
        {
            icon: LightBulbIcon,
            title: 'Innovation',
            description: 'We continuously innovate to improve our services, from real-time tracking to sustainable logistics solutions.'
        },
        {
            icon: UsersIcon,
            title: 'Customer-Centric',
            description: 'Our customers are at the heart of everything we do. We strive to provide exceptional support and flexible options.'
        }
    ];

    return (
        <div className="bg-brand-gray py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-blue">Our Core Values</h2>
                    <p className="mt-2 text-lg text-gray-600">The principles that guide our every move.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="flex items-center justify-center h-16 w-16 mx-auto bg-brand-cyan/10 rounded-full mb-4">
                                <value.icon className="h-8 w-8 text-brand-cyan" />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-blue mb-2">{value.title}</h3>
                            <p className="text-gray-500">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
        <PageHeader />
        <AboutContent />
        <OurValues />
    </div>
  );
};

export default AboutPage;
