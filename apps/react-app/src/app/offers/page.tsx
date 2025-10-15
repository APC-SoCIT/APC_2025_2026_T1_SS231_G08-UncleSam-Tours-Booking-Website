"use client";

import Image from "next/image";

export default function OffersPage() {
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
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Search by destination or package name"
            className="w-full md:w-1/2 border border-gray-300 rounded-md px-4 py-2"
          />
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
            Filter
          </button>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16 bg-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span>📍</span> Tour Packages
            </h2>
            <p className="text-sm text-gray-500">Found 4 offers</p>
          </div>
          <span className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full">
            4 packages available
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Kamakura Tour",
              price: "¥70,000",
              image: "/images/offers/kamakura.jpg",
              description:
                "Uncover the ancient charm of Kamakura as you visit iconic temples, tranquil gardens, and coastal sights.",
            },
            {
              title: "Hakone Tour",
              price: "¥75,000",
              image: "/images/offers/hakone.jpg",
              description:
                "Experience the best of Hakone’s rich history and natural beauty.",
            },
            {
              title: "Nagoya Tour",
              price: "¥85,000",
              image: "/images/offers/nagoya.jpg",
              description:
                "Step into the heart of Nagoya with a private tour highlighting the city’s landmarks.",
            },
            {
              title: "Nara Tour",
              price: "¥78,000",
              image: "/images/offers/nara.jpg",
              description:
                "Journey through Nara, where friendly deer roam and ancient temples tell stories of Japan’s past.",
            },
          ].map((offer, index) => (
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
                <p className="text-gray-600 text-sm mb-3">
                  {offer.description}
                </p>
                <div className="text-red-600 font-bold mb-4">
                  {offer.price}
                  <span className="text-gray-500 font-normal text-sm ml-1">
                    per pax
                  </span>
                </div>
                <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <br />
        <div className="text-center mb-8">
          <button className="text-blue-600 bg-blue-50 px-4 py-1 rounded-full text-sm mb-2">
            ✈️ Additional Services
          </button>
          <h2 className="text-2xl font-semibold mb-1 flex justify-center items-center gap-2">
            ✈️ Airport Transfer Services
          </h2>
          <span className="text-blue-500 text-xs">Add-on service</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Airport Transfer Service",
              image: "/images/offers/airport-narita.jpg",
              price: "¥35,000",
              description:
                "Reliable and comfortable airport transfer with professional drivers and flight monitoring.",
              location: "narita",
            },
            {
              title: "Airport Transfer Service",
              image: "/images/offers/airport-haneda.jpg",
              price: "¥30,000",
              description:
                "Reliable and comfortable airport transfer with professional drivers and flight monitoring.",
              location: "haneda",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="object-cover w-full h-56"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold text-lg">
                    {service.price}
                    <span className="text-gray-500 font-normal text-sm ml-1">
                      per pax
                    </span>
                  </span>
                  <span className="text-sm text-gray-500">{service.location}</span>
                </div>
                <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
