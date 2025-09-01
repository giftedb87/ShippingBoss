
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_TRACKING_DATA } from '../constants';
import type { TrackingDetails, TrackingEvent } from '../types';
import { TrackingStatus } from '../types';
import { CheckCircleIcon, CubeIcon, TruckIcon, MapIcon, ExclamationIcon, ClockIcon } from '../components/icons/Icons';

const TrackingInput: React.FC<{ onTrack: (id: string) => void, initialId: string }> = ({ onTrack, initialId }) => {
  const [trackingId, setTrackingId] = useState(initialId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      onTrack(trackingId.trim());
    }
  };

  return (
    <div className="bg-brand-blue text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-4">Track Your Package</h1>
        <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">Enter your tracking number below to see the real-time status and location of your shipment.</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-2">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="e.g., SB123456789"
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-cyan placeholder-white/50"
          />
          <button type="submit" className="bg-brand-cyan text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Track
          </button>
        </form>
      </div>
    </div>
  );
};

const StatusIcon: React.FC<{ status: TrackingStatus }> = ({ status }) => {
    const iconProps = { className: "h-10 w-10 text-white" };
    const iconMap = {
        [TrackingStatus.Delivered]: <CheckCircleIcon {...iconProps} />,
        [TrackingStatus.InTransit]: <TruckIcon {...iconProps} />,
        [TrackingStatus.OutForDelivery]: <TruckIcon {...iconProps} />,
        [TrackingStatus.Pending]: <ClockIcon {...iconProps} />,
        [TrackingStatus.FailedAttempt]: <ExclamationIcon {...iconProps} />,
    };
    return (
        <div className={`flex items-center justify-center h-20 w-20 rounded-full ${status === TrackingStatus.Delivered ? 'bg-green-500' : 'bg-brand-cyan'}`}>
            {iconMap[status]}
        </div>
    );
};

const TrackingResult: React.FC<{ details: TrackingDetails }> = ({ details }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 mb-6">
          <div>
            <p className="text-gray-500">Tracking Number</p>
            <h2 className="text-3xl font-bold text-brand-blue">{details.id}</h2>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <StatusIcon status={details.status} />
            <div>
              <p className="text-gray-500">Current Status</p>
              <p className="text-2xl font-semibold text-brand-cyan">{details.status}</p>
            </div>
          </div>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
            <div>
                <p className="text-gray-500">Origin</p>
                <p className="font-semibold text-lg text-gray-800">{details.origin}</p>
            </div>
            <div>
                <p className="text-gray-500">Destination</p>
                <p className="font-semibold text-lg text-gray-800">{details.destination}</p>
            </div>
            <div>
                <p className="text-gray-500">Estimated Delivery</p>
                <p className="font-semibold text-lg text-gray-800">{details.estimatedDelivery}</p>
            </div>
        </div>
        
        {/* History & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* History Timeline */}
            <div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">Shipment History</h3>
                <div className="border-l-2 border-brand-cyan/30 pl-6 space-y-8">
                    {details.history.map((event: TrackingEvent, index: number) => (
                        <div key={index} className="relative">
                            <div className={`absolute -left-[34px] top-1 h-4 w-4 rounded-full ${index === details.history.length-1 ? 'bg-brand-cyan ring-4 ring-brand-cyan/20' : 'bg-gray-300'}`}></div>
                            <p className="font-semibold text-gray-800">{event.status}</p>
                            <p className="text-gray-600">{event.location}</p>
                            <p className="text-sm text-gray-400">{event.date} at {event.time}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map */}
            <div>
                 <h3 className="text-xl font-bold text-brand-blue mb-4">Current Location</h3>
                 <div className="aspect-video rounded-lg overflow-hidden shadow">
                    {details.mapUrl ? (
                      <iframe
                        src={details.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Package Current Location Map"
                      ></iframe>
                    ) : (
                      <img src={`https://picsum.photos/seed/${details.id}/600/400`} alt="Map showing package location" className="w-full h-full object-cover" />
                    )}
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const NotFound: React.FC<{ id: string }> = ({ id }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <ExclamationIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-brand-blue">Tracking Number Not Found</h2>
                <p className="text-gray-600 mt-2">We couldn't find any shipment with the ID <span className="font-semibold text-red-600">{id}</span>. Please check the number and try again.</p>
            </div>
        </div>
    );
};


const TrackingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trackingResult, setTrackingResult] = useState<TrackingDetails | null | undefined>(undefined);
  const initialId = searchParams.get('id') || '';

  const handleTrack = (id: string) => {
    setSearchParams({ id });
    const result = MOCK_TRACKING_DATA[id.toUpperCase()];
    setTrackingResult(result || null);
  };
  
  useEffect(() => {
    if (initialId) {
      handleTrack(initialId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-brand-gray min-h-[80vh]">
      <TrackingInput onTrack={handleTrack} initialId={initialId} />
      {trackingResult === undefined && !initialId && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
             <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <CubeIcon className="h-12 w-12 text-brand-cyan mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-brand-blue">Awaiting Tracking Number</h2>
                <p className="text-gray-600 mt-2">Please enter your tracking number above to see your shipment details.</p>
            </div>
        </div>
      )}
      {trackingResult && <TrackingResult details={trackingResult} />}
      {trackingResult === null && initialId && <NotFound id={initialId} />}
    </div>
  );
};

export default TrackingPage;
