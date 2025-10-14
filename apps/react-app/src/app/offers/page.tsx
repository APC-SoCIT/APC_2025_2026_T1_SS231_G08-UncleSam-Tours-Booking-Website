"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabaseClient"; // optional, if already set up

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: number;
  valid_until: string;
}

export default function OffersPage() {
  const [offers, setOffers] = useState<Offer[]>([]);

  // Placeholder data — replace this with Supabase fetch
  useEffect(() => {
    async function fetchOffers() {
      try {
        // Uncomment if using Supabase
        // const { data, error } = await supabase.from("OFFERS").select("*");
        // if (error) throw error;
        // setOffers(data || []);

        // Mock data for now
        setOffers([
          {
            id: 1,
            title: "Autumn in Kyoto",
            description:
              "Enjoy the fall colors of Kyoto with our special 4-day package, including guided temple tours and traditional cuisine experiences.",
            image: "/images/offers/kyoto-autumn.jpg",
            discount: 15,
            valid_until: "2025-12-31",
          },
          {
            id: 2,
            title: "Tokyo Explorer Deal",
            description:
              "Book now and save 20% on our Tokyo city tours — experience Shibuya, Asakusa, and Akihabara with a personal guide.",
            image: "/images/offers/tokyo.jpg",
            discount: 20,
            valid_until: "2025-11-30",
          },
          {
            id: 3,
            title: "Mount Fuji Adventure",
            description:
              "A 2-day Mount Fuji hike and cultural immersion package for adventure seekers. Limited slots available!",
            image: "/images/offers/fuji.jpg",
            discount: 10,
            valid_until: "2025-10-31",
          },
        ]);
      } catch (err) {
        console.error("Error fetching offers:", err);
      }
    }
    fetchOffers();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/offers-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Exclusive Offers</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover seasonal promotions and travel packages tailored just for you.
          </p>
        </div>
      </section>

      {/* Offers Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Current Deals & Promotions</h2>

        {offers.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-10">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {offer.discount}% OFF
                    </span>
                    <span className="text-sm text-gray-500">
                      Valid until {new Date(offer.valid_until).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No offers available at the moment.</p>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">Don’t Miss Out!</h2>
        <p className="mb-8">
          Take advantage of our exclusive deals and explore Japan your way.
        </p>
        <a
          href="/tours"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          View All Tours
        </a>
      </section>
    </main>
  );
}
