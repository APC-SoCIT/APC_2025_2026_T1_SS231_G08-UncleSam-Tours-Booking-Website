"use client";

import Image from "next/image";
import { useEffect } from "react";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: {
    title: string;
    image: string;
    description: string;
    price: string;
    destinations: string[];
    inclusions: string[];
  } | null;
}

export default function OfferModal({ isOpen, onClose, offer }: OfferModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen || !offer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-black">{offer.title}</h2>
            <Image
              src={offer.image}
              alt={offer.title}
              width={600}
              height={400}
              className="rounded-lg object-cover mb-3"
            />
            <p className="text-gray-600 text-sm mb-2">{offer.description}</p>
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span>🕐 12 hours</span>
              <span className="mx-3">•</span>
              <span>📍 2 destinations</span>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-black">Destinations</h3>
            <ul className="mb-4 text-sm text-gray-700">
              {offer.destinations.map((dest, i) => (
                <li key={i}>📍 {dest}</li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg mb-2 text-black">Inclusions</h3>
            <ul className="mb-4 text-sm text-gray-700 space-y-1">
              {offer.inclusions.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>

            {/* Travelers */}
            <h3 className="font-semibold text-lg mb-2 text-black">Number of Travelers</h3>
            <div className="flex items-center gap-2 mb-4">
              <button className="border border-gray-300 px-2 py-1 rounded text-gray-800 hover:bg-gray-100">−</button>
              <span className="text-gray-800 w-8 text-center">1</span>
              <button className="border border-gray-300 px-2 py-1 rounded text-gray-800 hover:bg-gray-100">+</button>
            </div>

            {/* Price Section */}
            <div className="border border-gray-300 rounded-lg p-3 text-sm mb-4 bg-gray-50">
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Price per pax:</span>
                <span className="font-semibold">{offer.price}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Travelers:</span>
                <span>1</span>
              </div>
              <div className="flex justify-between font-semibold mt-2 text-gray-900 border-t border-gray-300 pt-2">
                <span>Total:</span>
                <span>{offer.price}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                Get Tickets for {offer.price}
              </button>
              <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition">
                Downpayment ₱10,000
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}