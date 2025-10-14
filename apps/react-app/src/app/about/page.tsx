"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">About UncleSam Tours</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your trusted partner for unforgettable Japan travel experiences.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          UncleSam Tours & Services is a Japan-based travel and transport company
          dedicated to helping visitors explore Japan with ease and comfort. Our mission is
          to create personalized tours that showcase both the beauty of traditional Japan and
          the innovation of its modern cities.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          From airport pickups to guided experiences, we handle every detail so travelers can
          fully enjoy their journey. We combine local expertise, reliable transportation,
          and smart digital tools to make every trip seamless and memorable.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver stress-free, personalized, and culturally immersive travel
              experiences across Japan through innovation and hospitality.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted travel companion for global visitors to Japan —
              recognized for exceptional service, modern solutions, and cultural authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Choose UncleSam Tours?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image src="/images/icon-expert.png" alt="Expert Guides" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">Expert Local Guides</h4>
            <p className="text-gray-600">Discover Japan through the eyes of locals who know every hidden gem.</p>
          </div>
          <div>
            <Image src="/images/icon-ai.png" alt="Smart Assistance" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">AI-Powered Assistance</h4>
            <p className="text-gray-600">Plan, modify, and manage your trips with our 24/7 AI travel assistant.</p>
          </div>
          <div>
            <Image src="/images/icon-support.png" alt="Customer Support" width={60} height={60} className="mx-auto mb-4" />
            <h4 className="font-bold mb-2">24/7 Customer Support</h4>
            <p className="text-gray-600">We’re always available — before, during, and after your journey.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">Plan Your Japan Adventure Today</h2>
        <p className="mb-8">Start your journey with UncleSam Tours — reliable, personalized, and unforgettable.</p>
        <a
          href="/tours"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Explore Tours
        </a>
      </section>
    </main>
  );
}
