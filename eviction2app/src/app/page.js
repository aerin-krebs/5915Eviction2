'use client';

import Link from 'next/link';
import { Button } from '@mui/material';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Facing Eviction?</h1>
        <p className="mt-4 text-lg text-gray-600">No one should lose their home. Find the help you need today.</p>
        <Button color="primary" component={Link} href="/decision-finder">
          Find A Solution
        </Button>
        <h2 className="mt-4 text-lg text-gray-600"> Legal Questions?</h2>
        <p> Chat with Franklin County Self Help Center. Staff cannot offer legal advice but can assist in finding helpful resources and provide legal information.</p>
        <Button color="primary" component={Link} href="/chat">
          Chat Now
        </Button>
        <p className="mt-4 text-lg text-gray-600"> View Frequently Asked Questions</p>
        <Button color="primary" component={Link} href="/faq">
          FAQs
        </Button>
        <p className="mt-4 text-lg text-gray-600"> Find Resources</p>
        <Button color="primary" component={Link} href="/resource-finder">
          Resources
        </Button>
      </div>
    </div>
  );
}