
import type { NavLink, TrackingDetails, Service } from './types';
import { TrackingStatus } from './types';
import { GlobeAltIcon, PaperAirplaneIcon, ShieldCheckIcon, CubeIcon } from './components/icons/Icons';

export const companyInfo = {
  name: 'Shipping Boss',
  tagline: 'Fast. Reliable. Everywhere.',
  address: '123 Nichole Street, Ursbech, Germany',
  phone: '+5 800 123 4567',
  email: 'support@shippingboss.com',
  about: 'At Shipping Boss, we believe that sending and receiving packages should be simple, fast, and stress-free. We provide reliable shipping solutions that connect people and businesses across cities and countries. With a focus on speed, security, and transparency, Shipping Boss makes it easy to ship goods locally and internationally, track deliveries in real time, and enjoy flexible and affordable shipping options. Our mission is to deliver not just packages, but peace of mind — ensuring every shipment arrives safely, on time, and with care.',
};

export const navLinks = {
  home: { name: 'Home', path: '/' },
  tracking: { name: 'Track Package', path: '/track' },
  about: { name: 'About Us', path: '/about' },
  services: { name: 'Services', path: '/services' },
  contact: { name: 'Contact', path: '/contact' },
};

export const allNavLinks: NavLink[] = Object.values(navLinks);

export const MOCK_TRACKING_DATA: { [key: string]: TrackingDetails } = {
  'SB123456789': {
    id: 'SB123456789',
    status: TrackingStatus.InTransit,
    estimatedDelivery: '25 December, 2023',
    origin: 'Hamburg, Germany',
    destination: 'Munich, Germany',
    currentLocation: { lat: 51.1657, lng: 10.4515 },
    history: [
      { date: '20 Dec 2023', time: '14:30', location: 'Hamburg Port', status: 'Package received at origin facility' },
      { date: '21 Dec 2023', time: '08:00', location: 'Hamburg, Germany', status: 'Departed from origin facility' },
      { date: '22 Dec 2023', time: '11:45', location: 'Hanover, Germany', status: 'Arrived at sorting hub' },
      { date: '22 Dec 2023', time: '18:20', location: 'Hanover, Germany', status: 'Departed from sorting hub' },
    ],
  },
  'SB987654321': {
    id: 'SB987654321',
    status: TrackingStatus.Delivered,
    estimatedDelivery: '15 December, 2023',
    origin: 'Berlin, Germany',
    destination: 'Frankfurt, Germany',
    currentLocation: { lat: 50.1109, lng: 8.6821 },
    history: [
      { date: '12 Dec 2023', time: '10:00', location: 'Berlin, Germany', status: 'Package received at origin facility' },
      { date: '13 Dec 2023', time: '16:00', location: 'Leipzig, Germany', status: 'In transit to destination' },
      { date: '15 Dec 2023', time: '09:15', location: 'Frankfurt, Germany', status: 'Out for delivery' },
      { date: '15 Dec 2023', time: '13:40', location: 'Frankfurt, Germany', status: 'Delivered successfully' },
    ],
  },
  'SB6666667': {
    id: 'SB6666667',
    status: TrackingStatus.InTransit,
    estimatedDelivery: '15 August, 2025',
    origin: 'New York, USA',
    destination: 'Benin City, Nigeria',
    currentLocation: { lat: 6.3391, lng: 5.6139 },
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253805.8562137542!2d5.462372076013233!3d6.340079979703443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d17615962c4f%3A0x6284883cccf13eb!2sBenin%20City%2C%20Edo%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1672855555555!5m2!1sen!2sus',
    history: [
        { date: '10 Aug 2025', time: '10:00', location: 'New York, USA', status: 'Package received at origin facility' },
        { date: '10 Aug 2025', time: '19:45', location: 'JFK Airport, USA', status: 'Departed from origin country' },
        { date: '12 Aug 2025', time: '08:15', location: 'Lagos, Nigeria', status: 'Arrived at destination country hub' },
        { date: '13 Aug 2025', time: '11:30', location: 'Lagos, Nigeria', status: 'In transit to final destination (Benin)' },
    ],
  },
};

export const services: Service[] = [
    {
        icon: PaperAirplaneIcon,
        title: 'Standard Shipping',
        description: 'Reliable and affordable shipping for your everyday needs. Delivery within 3-5 business days across the country.',
    },
    {
        icon: PaperAirplaneIcon, // Could be a faster icon
        title: 'Express Delivery',
        description: 'Need it there tomorrow? Our express service guarantees next-day delivery for your urgent shipments.',
    },
    {
        icon: GlobeAltIcon,
        title: 'International Shipping',
        description: 'We connect you to the world. Secure and transparent shipping to over 200 countries with customs support.',
    },
    {
        icon: CubeIcon,
        title: 'Bulk & Business',
        description: 'Custom logistics solutions for businesses of all sizes. Freight, warehousing, and dedicated support.',
    },
];

export const highlights = [
  {
    icon: GlobeAltIcon,
    title: 'Global Coverage',
    description: 'We ship to over 200 countries, connecting you and your business to the world.',
  },
  {
    icon: PaperAirplaneIcon,
    title: 'Fast Shipping',
    description: 'Choose from a range of delivery options, including same-day and next-day express services.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Real-time Tracking',
    description: 'Stay updated with live tracking from pickup to delivery, giving you complete peace of mind.',
  },
];
