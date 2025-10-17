"use client";

import Image from "next/image";
import { useState } from "react";
import OfferModal from "../components/OfferModal";

export default function OffersPage() {
  const [selectedOffer, setSelectedOffer] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offers = [
    {
      title: "Kamakura Tour",
      price: "¥70,000",
      image: "/images/kamakura.jpg",
      description:
        "Uncover the ancient charm of Kamakura as you visit iconic temples, tranquil gardens, and coastal sights.",
      destinations: ["Hasedera Temple", "Great Buddha", "Enoshima Island"],
      inclusions: ["Private Guide", "Transport", "Lunch Included"],
    },
    {
      title: "Hakone Tour",
      price: "¥75,000",
      image: "/images/hakone.jpg",
      description: "Experience the best of Hakone’s rich history and natural beauty.",
      destinations: ["Lake Ashi", "Owakudani Valley", "Hakone Shrine"],
      inclusions: ["Cable Car Ride", "Hot Spring Entry", "Lunch Included"],
    },
    {
      title: "Nagoya Tour",
      price: "¥85,000",
      image: "/images/nagoya.jpg",
      description:
        "Step into the heart of Nagoya with a private tour highlighting the city’s landmarks.",
      destinations: ["Nagoya Castle", "Osu Shopping District", "Atsuta Shrine"],
      inclusions: ["Tour Guide", "Hotel Pickup", "Dinner Included"],
    },
    {
      title: "Nara Tour",
      price: "¥78,000",
      image: "/images/nara.jpg",
      description:
        "Journey through Nara, where friendly deer roam and ancient temples tell stories of Japan’s past.",
      destinations: ["Todai-ji Temple", "Nara Park", "Kasuga Taisha Shrine"],
      inclusions: ["Transport", "Snacks", "Souvenir"],
    },
  ];

  const handleOpenModal = (offer: any) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Exclusive Deals and Offers
        </h1>
        <p className="text-gray-600 mb-6">
          Discover amazing travel packages at unbeatable prices
        </p>
      </section>

      {/* Tour Packages Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 bg-gray-100">
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={600}
                height={400}
                className="object-cover w-full h-56"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                <div className="text-red-600 font-bold mb-4">
                  {offer.price}
                  <span className="text-gray-500 font-normal text-sm ml-1">
                    per pax
                  </span>
                </div>
                <button
                  onClick={() => handleOpenModal(offer)}
                  className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="text-center mb-12">
          <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            ✈️ Additional Services
          </button>
        </div>

        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            ✈️ Airport Transfer Services
          </h2>
          <span className="ml-3 text-blue-500 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium">
            Add-on service
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
            <img
              src="/images/van.jpg"
              alt="Airport Transfer Service Narita"
              className="object-cover w-full h-56"
            />
            <div className="p-5">
              <div className="text-xs bg-yellow-400 px-2 py-1 rounded-md inline-block font-semibold mb-2">
                2–5 PAX
              </div>
              <h3 className="text-lg font-semibold mb-2">Airport Transfer Service</h3>
              <p className="text-gray-600 text-sm mb-3">
                Reliable and comfortable airport transfer service with professional drivers and flight monitoring.
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <span className="mr-2">🕒</span> 1–2 hours
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-2">📍</span> Narita
              </div>
              <div className="text-red-600 font-bold mb-4">
                ¥35,000 <span className="text-gray-500 font-normal text-sm ml-1">per pax</span>
              </div>
              <button
                onClick={() =>
                  handleOpenModal({
                    title: "Airport Transfer Service (Narita)",
                    price: "¥35,000",
                    image: "/images/offers/airport-narita.jpg",
                    description:
                      "Reliable and comfortable airport transfer service with professional drivers and flight monitoring.",
                    destinations: ["Narita Airport", "Tokyo Hotels"],
                    inclusions: ["1–2 hour transfer", "Flight monitoring", "English-speaking driver"],
                  })
                }
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
            <img
              src="/images/van.jpg"
              alt="Airport Transfer Service Haneda"
              className="object-cover w-full h-56"
            />
            <div className="p-5">
              <div className="text-xs bg-yellow-400 px-2 py-1 rounded-md inline-block font-semibold mb-2">
                2–5 PAX
              </div>
              <h3 className="text-lg font-semibold mb-2">Airport Transfer Service</h3>
              <p className="text-gray-600 text-sm mb-3">
                Reliable and comfortable airport transfer service with professional drivers and flight monitoring.
              </p>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <span className="mr-2">🕒</span> 1–2 hours
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-2">📍</span> Haneda
              </div>
              <div className="text-red-600 font-bold mb-4">
                ¥30,000 <span className="text-gray-500 font-normal text-sm ml-1">per pax</span>
              </div>
              <button
                onClick={() =>
                  handleOpenModal({
                    title: "Airport Transfer Service (Haneda)",
                    price: "¥30,000",
                    image: "/images/offers/airport-haneda.jpg",
                    description:
                      "Reliable and comfortable airport transfer service with professional drivers and flight monitoring.",
                    destinations: ["Haneda Airport", "Tokyo Hotels"],
                    inclusions: ["1–2 hour transfer", "Flight monitoring", "English-speaking driver"],
                  })
                }
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
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
