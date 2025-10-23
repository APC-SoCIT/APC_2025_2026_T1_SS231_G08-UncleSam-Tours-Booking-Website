"use client";

import { useState } from "react";

export default function ItineraryPage() {
  const [showChatbot, setShowChatbot] = useState(false);

  const sampleItinerary = [
    { day: "Day 1", activity: "Arrival in Tokyo - Check-in at hotel" },
    { day: "Day 2", activity: "Visit Senso-ji Temple and Tokyo Skytree" },
    { day: "Day 3", activity: "Shibuya & Shinjuku City Tour" },
    { day: "Day 4", activity: "Free Day - Explore local cafés" },
    { day: "Day 5", activity: "Departure from Tokyo" },
  ];

  const suggestedAlternatives = [
    "☕ Visit a cozy café near Shibuya",
    "🎨 Explore a local art museum",
    "🌸 Take a stroll at Ueno Park",
    "🍜 Try ramen in Ichiran Shinjuku",
  ];

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Your Travel Itinerary
        </h1>
        <p className="text-gray-600 mb-6">
          Here's your personalized itinerary based on your selected destinations.
        </p>
      </section>

      {/* Itinerary Details */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">🗓️ Trip Overview</h2>
          <ul className="space-y-3">
            {sampleItinerary.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-200 pb-2 flex items-center justify-between"
              >
                <span className="font-medium text-gray-700">{item.day}</span>
                <span className="text-gray-600">{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weather Forecast */}
        <div className="bg-blue-50 rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">🌤️ Weather Forecast</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-4 text-center"
              >
                <p className="font-medium">{day}</p>
                <p className="text-yellow-500 text-2xl">☀️</p>
                <p className="text-gray-600 text-sm">25°C / 17°C</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Alternatives */}
        <div className="bg-green-50 rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">✨ Suggested Alternatives</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {suggestedAlternatives.map((alt, index) => (
              <li key={index}>{alt}</li>
            ))}
          </ul>
        </div>

        {/* AI Chatbot */}
        <div className="text-center">
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
          >
            💬 Open AI Chatbot
          </button>

          {showChatbot && (
            <div className="mt-6 bg-white rounded-xl shadow-md p-6 max-w-md mx-auto text-left">
              <h3 className="text-lg font-semibold mb-2">Chatbot (Prototype)</h3>
              <p className="text-gray-600 text-sm">
                This is where the AI chatbot feature will appear once integrated.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
