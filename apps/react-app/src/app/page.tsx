'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import OfferModal from './components/OfferModal';
import { supabase } from '@/lib/supabaseClient';

const heroSlides = [
  {
    img: '/images/nagoya-hero.jpg',
    title: 'NAGOYA',
    subtitle: 'Discover Ancient Beauty',
    cta: 'View Offers',
    link: '/offers',
  },
  {
    img: '/images/tokyo-hero.jpg',
    title: 'TOKYO',
    subtitle: 'The Heart of Japan',
    cta: 'Explore Tours',
    link: '/offers',
  },
  {
    img: '/images/kyoto-hero.jpg',
    title: 'KYOTO',
    subtitle: 'Tradition Meets Tranquility',
    cta: 'Book Now',
    link: '/offers',
  }
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchOffers = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase.from('offers').select('*');
        if (error) throw error;

        if (!mounted) return;

        // Map DB rows to the structure used by the UI.
        const mapped = (data || []).map((row: any) => ({
          id: row.offer_id,
          title: row.offer_title ?? 'Untitled',
          desc: row.description ?? '',
          price: row.price_id ? `¥${Number(row.price_id).toLocaleString()}` : 'TBD',
          duration: '12 Hours',
          destinations: 3, // adjust or link with another table if you have destinations
          img: `/images/${row.offer_title.toLowerCase().replace(/\s+/g, '-')}.jpg`, // auto-map image names
          orig_price: null,
          destinationsList: [],
          inclusions: [],
        })).splice(0, 3); // limit to 3 featured

        setTours(mapped);
      } catch (err: any) {
        console.error('Failed to load offers', err);
        setError(err.message ?? 'Failed to load offers');
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();

    return () => {
      mounted = false;
    };
  }, []);

  const handleOpenModal = (tour: any) => {
    setSelectedOffer({
      title: tour.title,
      price: tour.price,
      image: tour.img,
      description: tour.desc,
      destinations: tour.destinationsList,
      inclusions: tour.inclusions,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <main className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-[91vh] w-full overflow-hidden">
        <Image
          src={heroSlides[slide].img}
          alt={heroSlides[slide].title}
          fill
          priority
          className="object-cover brightness-75 transition-all duration-500"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-7xl font-extrabold tracking-wide">{heroSlides[slide].title}</h1>
          <p className="mt-2 text-lg">{heroSlides[slide].subtitle}</p>
          <a
            href={heroSlides[slide].link}
            className="mt-6 rounded bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700"
          >
            {heroSlides[slide].cta}
          </a>
        </div>
        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`h-3 w-3 rounded-full ${slide === idx ? 'bg-red-600' : 'bg-white/60'} border border-red-600`}
              onClick={() => setSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center text-black">Featured Experiences</h2>
        <p className="mt-2 text-center text-gray-600">
          Handpicked travel packages designed to create unforgettable memories.
        </p>

        {loading ? (
          <p className="text-center mt-8 text-gray-500">Loading offers…</p>
        ) : error ? (
          <p className="text-center mt-8 text-red-600">Error loading offers: {error}</p>
        ) : tours.length === 0 ? (
          <p className="text-center mt-8 text-gray-500">No offers available right now.</p>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <div key={tour.id ?? tour.title} className="overflow-hidden rounded-lg border shadow">
                <Image
                  src={tour.img}
                  alt={tour.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black">{tour.title}</h3>
                  <p className="mt-2 text-gray-600">{tour.desc}</p>
                  <p className="mt-4 flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-2 inline" />
                    {tour.duration}
                  </p>
                  <p className="mt-4 flex items-center text-sm text-gray-500">
                    <MapPinIcon className="h-4 w-4 mr-2 inline" />
                    {tour.destinations} Destinations
                  </p>
                  <p className="mt-4 text-lg font-bold text-red-600">
                    {tour.orig_price && <span className="line-through font-regular text-gray-500 mr-2">{tour.orig_price}</span>}
                    {tour.price}{' '}
                    <span className="text-sm text-gray-500">per pax</span>
                  </p>
                  <button
                    onClick={() => handleOpenModal(tour)}
                    className="mt-4 inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="/offers"
            className="rounded border border-red-600 px-6 py-2 text-red-600 hover:bg-red-600 hover:text-white"
          >
            View All Offers
          </a>
        </div>
      </section>

      {/* Top Summer Packages */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-black">Top Summer Packages in Japan</h2>
          <p className="mt-2 text-center text-gray-600">
            Vibrant celebrations, perfect beach weather, and exciting outdoor adventures.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add summer package cards here similar to Featured Experiences */}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-black">Why Choose UncleSam Travels?</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Expert Planning', desc: 'Personalized itineraries to match your preferences.' },
            { title: 'Best Value', desc: 'Competitive prices with no hidden fees.' },
            { title: 'Multilingual Service', desc: 'Guides fluent in English, Japanese, and Tagalog.' },
            { title: '24/7 Support', desc: 'Round-the-clock assistance during your trip.' },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <OfferModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        offer={selectedOffer}
      />
    </main>
  );
}