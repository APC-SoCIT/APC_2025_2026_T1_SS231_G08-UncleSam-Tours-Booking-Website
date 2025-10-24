"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: {
    title: string;
    image: string;
    description: string;
    price: string;
    destinations?: string[] | string | null;
    inclusions?: string[] | string | null;
  } | null;
}

export default function OfferModal({ isOpen, onClose, offer }: OfferModalProps) {
  const router = useRouter();
  const [travelers, setTravelers] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTravelers(1);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    // Fetch PHP→JPY exchange rate from fxratesapi
    const fetchRate = async () => {
      try {
        const response = await fetch("https://api.fxratesapi.com/latest?base=PHP&symbols=JPY");
        const data = await response.json();
        if (data?.rates?.JPY) setExchangeRate(data.rates.JPY);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
    fetchRate();
  }, []);

  if (!isOpen || !offer) return null;

  // Parse numeric part of price
  const parsePrice = (p: string) => {
    const num = Number(p.replace(/[^0-9.-]/g, ""));
    return isNaN(num) ? NaN : num;
  };

  const unitPrice = parsePrice(offer.price);
  const currencySymbol = offer.price.match(/^[^\d]*/)?.[0] || "";
  const totalPriceDisplay = isNaN(unitPrice)
    ? offer.price
    : `${currencySymbol}${(unitPrice * travelers).toLocaleString()}`;

  // Helper: parse either JSON, Postgres array string, or raw arrays
  const parseArray = (value: any): string[] => {
    if (!value) return [];
    if (Array.isArray(value)) return value;

    // Handle Postgres-style text array: "{Tokyo,Osaka,Kyoto}"
    if (typeof value === "string") {
      // Remove curly braces and split by commas
      const cleaned = value
        .replace(/[{}"]/g, "")
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
      return cleaned;
    }

    return [];
  };

  const destinations = parseArray(offer.destinations);
  const inclusions = parseArray(offer.inclusions);

  const decrement = () => setTravelers((t) => Math.max(1, t - 1));
  const increment = () => setTravelers((t) => t + 1);

  const phpDownpayment = 10000;
  const jpyDownpayment = exchangeRate ? phpDownpayment * exchangeRate : 0;

  // Handler functions for navigation
  const handleFullPayment = () => {
    router.push("/itinerary");
  };

  const handleDownPayment = () => {
    router.push("/itinerary");
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6">
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
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-black">Destinations</h3>
            <ul className="mb-4 text-sm text-gray-700 space-y-1">
              {destinations.length > 0 ? (
                destinations.map((dest, i) => <li key={i}>📍 {dest}</li>)
              ) : (
                <li>No destinations listed.</li>
              )}
            </ul>

            <h3 className="font-semibold text-lg mb-2 text-black">Inclusions</h3>
            <ul className="mb-4 text-sm text-gray-700 space-y-1">
              {inclusions.length > 0 ? (
                inclusions.map((inc, i) => <li key={i}>✅ {inc}</li>)
              ) : (
                <li>No inclusions listed.</li>
              )}
            </ul>

            <h3 className="font-semibold text-lg mb-2 text-black">Number of Travelers</h3>
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={decrement}
                className="border border-gray-300 px-3 py-1 rounded text-gray-800 hover:bg-gray-100"
              >
                −
              </button>
              <span className="text-gray-800 w-12 text-center text-lg font-medium">{travelers}</span>
              <button
                onClick={increment}
                className="border border-gray-300 px-3 py-1 rounded text-gray-800 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <div className="border border-gray-300 rounded-lg p-3 text-sm mb-4 bg-gray-50">
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Price per pax:</span>
                <span className="font-semibold">{offer.price}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Travelers:</span>
                <span>{travelers}</span>
              </div>
              <div className="flex justify-between font-semibold mt-2 text-gray-900 border-t border-gray-300 pt-2">
                <span>Total:</span>
                <span>{totalPriceDisplay}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push("/itinerary")}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
              >
                📋 View Itinerary
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={handleFullPayment}
                  className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                >
                  Get Tickets for {totalPriceDisplay}
                </button>
                <button
                  onClick={handleDownPayment}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  Downpayment ¥{jpyDownpayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}{" "}
                  <span className="text-sm text-gray-500">(₱{phpDownpayment.toLocaleString()})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}