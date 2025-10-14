import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/images/nagoya-hero.jpg" // replace with hero image path
          alt="Nagoya cityscape"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-6xl font-extrabold tracking-wide">NAGOYA</h1>
          <p className="mt-2 text-lg">Discover Ancient Beauty</p>
          <a
            href="/offers"
            className="mt-6 rounded bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700"
          >
            View Offers
          </a>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Featured Experiences</h2>
        <p className="mt-2 text-center text-gray-600">
          Handpicked travel packages designed to create unforgettable memories.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Fukui Tour',
              price: '¥78,000',
              img: '/images/fukui.jpg',
              desc: 'Stunning coastal landscapes, historic temples, and vibrant culture.',
            },
            {
              title: 'Tokyo Disney Transfer',
              price: '¥60,000',
              img: '/images/disney.jpg',
              desc: 'Experience the magic of Disney with private transfer service.',
            },
            {
              title: 'Nagoya Tour Package',
              price: '¥85,000',
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
                <h3 className="text-xl font-semibold">{tour.title}</h3>
                <p className="mt-2 text-gray-600">{tour.desc}</p>
                <p className="mt-4 text-lg font-bold text-red-600">{tour.price} per pax</p>
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Top Summer Packages in Japan</h2>
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
        <h2 className="text-3xl font-bold">Why Choose UncleSam Travels?</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Expert Planning', desc: 'Personalized itineraries to match your preferences.' },
            { title: 'Best Value', desc: 'Competitive prices with no hidden fees.' },
            { title: 'Multilingual Service', desc: 'Guides fluent in English, Japanese, and Tagalog.' },
            { title: '24/7 Support', desc: 'Round-the-clock assistance during your trip.' },
          ].map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// Note: Ensure to replace image paths and links with actual routes and images in the project.