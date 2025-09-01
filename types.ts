// Fix: Import React to use React types like React.FC.
import React from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export enum TrackingStatus {
  Pending = 'Pending',
  InTransit = 'In Transit',
  OutForDelivery = 'Out for Delivery',
  Delivered = 'Delivered',
  FailedAttempt = 'Failed Attempt',
}

export interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
}

export interface TrackingDetails {
  id: string;
  status: TrackingStatus;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  history: TrackingEvent[];
  currentLocation: { lat: number; lng: number };
  mapUrl?: string;
}

export interface Service {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}