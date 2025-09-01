
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { companyInfo, highlights } from '../constants';

const HeroSection: React.FC = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const navigate = useNavigate();

    const handleTrackPackage = (e: React.FormEvent) => {
        e.preventDefault();
        if (trackingNumber.trim()) {
            navigate(`/track?id=${trackingNumber.trim()}`);
        }
    };
    
    return (
        <div className="relative bg-brand-blue text-white overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20" 
                style={{ backgroundImage: "url('https://picsum.photos/seed/shipping-bg/1920/1080')" }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="min-h-[70vh] flex flex-col lg:flex-row items-center justify-between pt-20 pb-10">
                    {/* Left Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase"
                            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                           Adding Value to Our Country as <span className="text-brand-cyan">{companyInfo.name}</span> Group
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                            Our journey began in 2008 as an investment story. As a growing power in the maritime and logistics sector, we will continue to add value to our region and the world.
                        </p>
                        <form onSubmit={handleTrackPackage} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0">
                            <input
                                type="text"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                placeholder="Enter tracking number"
                                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-cyan placeholder-white/50"
                            />
                            <button
                                type="submit"
                                className="bg-brand-cyan text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors flex-shrink-0"
                            >
                                Track Package
                            </button>
                        </form>
                    </div>

                    {/* Right Decorative Element */}
                    <div className="lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-full max-w-lg h-64 lg:h-96">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] border-2 border-white/10 rounded-full absolute animate-pulse"></div>
                                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-2 border-white/20 rounded-full absolute animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] border-2 border-white/30 rounded-full absolute animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>
                            <img src="https://picsum.photos/seed/ship/600/400" alt="Cargo Ship" className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const HighlightsSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-blue">Why Choose Shipping Boss?</h2>
                    <p className="mt-2 text-lg text-gray-600">Delivering excellence with every package.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="text-center p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center justify-center h-16 w-16 mx-auto bg-brand-cyan/10 rounded-full mb-4">
                                <highlight.icon className="h-8 w-8 text-brand-cyan" />
                            </div>
                            <h3 className="text-xl font-semibold text-brand-blue mb-2">{highlight.title}</h3>
                            <p className="text-gray-500">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const MapPreviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-brand-blue">Our Global Reach</h2>
        <p className="mt-2 text-lg text-gray-600 mb-8">Visualizing our network of deliveries in real-time.</p>
        <div className="w-full aspect-video lg:aspect-[2.35/1] bg-gray-300 rounded-lg shadow-lg overflow-hidden">
            <img src="https://picsum.photos/seed/map/1200/500" alt="World Map of Shipments" className="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  )
}

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <MapPreviewSection />
    </div>
  );
};

export default HomePage;
