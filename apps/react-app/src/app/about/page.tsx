"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/kyotohero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <Image
            src="/images/logo.png"
            alt="Uncle Sam Tours Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-extrabold mb-2">About UncleSam Tours</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences since 2022
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">Our Story</span>
          <h2 className="text-2xl font-bold mt-4 mb-4">
            Creating Personalized Adventures
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At UncleSam Tours, we specialize in creating personalized, private tours designed
            to give you an unforgettable travel experience. Our all-inclusive packages feature
            12-hour private tours with a dedicated tour assistant, comfortable van transportation,
            and a multilingual driver fluent in English, Japanese, and Tagalog.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We take care of everything — gas, toll fees, hotel pick-up, and drop-off — so you can
            relax and enjoy your journey. Let UncleSam Tours be your trusted partner in exploring
            amazing destinations with ease and comfort.
          </p>
          <div className="flex gap-4">
            <Link
              href="/offers"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
            >
              Explore Our Tours
            </Link>
            <Link
              href="/contact"
              className="border border-red-600 text-red-600 hover:bg-red-50 px-5 py-2 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/kamakura.jpg"
            alt="Kamakura"
            width={400}
            height={400}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-red-50 py-16 px-6 md:px-20 rounded-t-[3rem]">
        <p className="text-center text-sm text-red-500 mb-4">What Makes Us Special</p>
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-10">
          UncleSam Tours goes above and beyond to ensure your travel
          experience is seamless, comfortable, and unforgettable
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-800">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">🕒 12-Hour Private Tours</h3>
            <p className="text-gray-600 mb-4">
              Full-day tours designed to maximize your experience.
            </p>
            <h3 className="font-bold text-lg flex items-center gap-2">🧑‍✈️ Dedicated Tour Guide</h3>
            <p className="text-gray-600 mb-4">
              Personal guide ensuring your comfort and memorable experience.
            </p>
            <h3 className="font-bold text-lg flex items-center gap-2">🌐 Multilingual Service</h3>
            <p className="text-gray-600 mb-4">
              Drivers fluent in English, Japanese, and Tagalog.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">💰 All-Inclusive Pricing</h3>
            <p className="text-gray-600 mb-4">
              Gas, toll fees, and transportation costs included.
            </p>
            <h3 className="font-bold text-lg flex items-center gap-2">🚐 Private Van Transportation</h3>
            <p className="text-gray-600 mb-4">
              Comfortable, air-conditioned vehicles for your group.
            </p>
            <h3 className="font-bold text-lg flex items-center gap-2">🏨 Hotel Pick-up/Drop-off</h3>
            <p className="text-gray-600">
              Convenient transportation all set for your group.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-6 md:px-20 text-center border-t">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Adventure?</h2>
        <p className="text-gray-700 mb-8">
          Join thousands of satisfied customers who have experienced Japan with UncleSam Tours.
          Book your personalized tour today!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/offers"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
          >
            View Our Tours
          </Link>
          <Link
            href="/book"
            className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg"
          >
            Create Custom Tour
          </Link>
        </div>
      </section>
    </main>
  );
}
