'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

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
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Fukui Tour',
              duration: '12 Hours',
              destinations: 5,
              price: '¥78,000',
              orig_price: '¥88,000',
              img: '/images/fukui.jpg',
              desc: 'Stunning coastal landscapes, historic temples, and vibrant culture.',
            },
            {
              title: 'Tokyo Disney Transfer',
              duration: '12 Hours',
              destinations: 2,
              price: '¥60,000',
              img: '/images/disney.jpg',
              desc: 'Experience the magic of Disney with private transfer service.',
            },
            {
              title: 'Nagoya Tour Package',
              duration: '12 Hours',
              destinations: 4,
              price: '¥85,000',
              orig_price: '¥95,000',
              img: '/images/nagoya.jpg',
              desc: 'All major attractions in one comprehensive Nagoya tour.',
            },
          ].map((tour) => (
            <div key={tour.title} className="overflow-hidden rounded-lg border shadow">
              <Image
                src={tour.img}
                alt={tour.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{tour.title}</h3>
                <p className="mt-2 text-gray-600">{tour.desc}</p><p className="mt-4 flex items-center text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4 mr-2 inline" />
                  {tour.duration}
                </p>
                <p className="mt-4 flex items-center text-sm text-gray-500">
                  <MapPinIcon className="h-4 w-4 mr-2 inline" />
                  {tour.destinations} Destinations
                </p>
                <p className="mt-4 text-lg font-bold text-red-600"><span className="line-through font-regular text-gray-500">{tour.orig_price}</span> {tour.price} <span className="text-sm text-gray-500">per pax</span></p>
                <a
                  href="/book"
                  className="mt-4 inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
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
    </main>
  );
}

// Note: Ensure to replace image paths and links with actual routes and images in the project.