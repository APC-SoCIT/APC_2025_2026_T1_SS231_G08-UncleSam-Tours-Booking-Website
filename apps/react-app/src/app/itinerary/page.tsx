"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Destination {
  id: string;
  name: string;
  description: string;
  selected: boolean;
}

export default function ItineraryPage() {
  const [location, setLocation] = useState("Nagoya");
  const [travelDate, setTravelDate] = useState("2025-06-10");
  const [travelers, setTravelers] = useState(1);
  const [destinations, setDestinations] = useState<Destination[]>([
    { id: "nagoya-castle", name: "Nagoya Castle", description: "Historic castle in the heart of Nagoya", selected: true },
    { id: "legoland", name: "Legoland", description: "Family fun at Legoland Japan", selected: true },
    { id: "science-museum", name: "Science Museum", description: "Interactive science exhibits", selected: false },
    { id: "oasis-21", name: "Oasis 21", description: "Modern shopping and entertainment complex", selected: true },
    { id: "noritake-garden", name: "Noritake Garden", description: "Beautiful gardens and pottery museum", selected: false },
    { id: "ghibli-park", name: "Ghibli Park", description: "Explore Studio Ghibli's amuse park", selected: true },
    { id: "aquarium", name: "Port of Nagoya Public Aquarium", description: "Massive marine attraction", selected: false },
    { id: "scmaglev", name: "Scmaglev and Railway Park", description: "Railway museum with interactive exhibits", selected: false },
  ]);
  const [transportIncluded, setTransportIncluded] = useState(true);

  const pricePerPerson = 85000;
  const selectedCount = destinations.filter(d => d.selected).length;
  const maxDestinations = 5;
  const totalPrice = pricePerPerson * travelers;
  const downpayment = 10000;

  const toggleDestination = (id: string) => {
    setDestinations(prev =>
      prev.map(dest =>
        dest.id === id
          ? { ...dest, selected: selectedCount < maxDestinations || dest.selected ? !dest.selected : false }
          : dest
      )
    );
  };

  const incrementTravelers = () => setTravelers(prev => prev + 1);
  const decrementTravelers = () => setTravelers(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1600')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Create Your Own Japanese Experience</h1>
          <p className="text-xl">Design a personalized tour that matches your interests and schedule</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location and Date */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h2 className="text-2xl font-bold text-gray-800">Location and Date</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Select Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="Nagoya">Nagoya</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Osaka">Osaka</option>
                    <option value="Kyoto">Kyoto</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Date</label>
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={decrementTravelers}
                        className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={travelers}
                        readOnly
                        className="w-20 text-center px-4 py-3 border border-gray-300 rounded-lg"
                      />
                      <button
                        onClick={incrementTravelers}
                        className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                      >
                        +
                      </button>
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Choose Destinations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Destinations</h2>
              <p className="text-gray-600 mb-6">Select up to 5 places you'd like to visit</p>

              <div className="grid md:grid-cols-2 gap-4">
                {destinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => toggleDestination(dest.id)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition ${
                      dest.selected
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                        dest.selected ? "bg-red-600 border-red-600" : "border-gray-300"
                      }`}>
                        {dest.selected && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{dest.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{dest.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation Options */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Transportation Options</h2>
              <p className="text-gray-600 mb-6">Private van included in all packages. Add airport transfer if needed.</p>

              <div
                onClick={() => setTransportIncluded(!transportIncluded)}
                className={`border-2 rounded-lg p-6 cursor-pointer transition ${
                  transportIncluded ? "border-green-500 bg-green-50" : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                    transportIncluded ? "bg-red-600 border-red-600" : "border-gray-300"
                  }`}>
                    {transportIncluded && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Private Van</h3>
                    <p className="text-green-600 font-semibold">Included in package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Summary</h2>

              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6">
                <h3 className="text-red-800 font-bold text-lg mb-1">{location} Tour Package</h3>
                <div className="text-3xl font-bold text-red-600">¥{pricePerPerson.toLocaleString()}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Travelers:</span>
                  <span className="font-semibold">{travelers}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Selected Destinations ({selectedCount}/{maxDestinations}):</h4>
                  <ul className="space-y-2">
                    {destinations.filter(d => d.selected).map(dest => (
                      <li key={dest.id} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {dest.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Transportation:</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Private Van (Included)
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-300 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total:</span>
                  <span className="text-3xl font-bold text-red-600">¥{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold text-lg">
                  Get tickets for ¥{totalPrice.toLocaleString()}
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-semibold">
                  Downpayment ₱{downpayment.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}