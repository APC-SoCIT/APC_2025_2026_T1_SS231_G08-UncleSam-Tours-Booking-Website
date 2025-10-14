'use client';

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Example placeholder for Supabase or email API integration
      console.log("Submitted message:", formData);
      setStatus("Message sent successfully! We’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We’re here to help — reach out anytime for questions, bookings, or support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you have questions about our tour packages, booking process, or special requests,
            we’re always happy to help. Contact us through any of the following channels.
          </p>
          <div className="space-y-3">
            <p><strong>Email:</strong> support@unclesam.ph</p>
            <p><strong>Phone:</strong> +63 912 345 6789</p>
            <p><strong>Office Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM JST</p>
            <p><strong>Location:</strong> Tokyo, Japan</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-semibold mb-4">Ready to explore Japan?</h2>
        <p className="mb-8">
          Let us handle your next trip with care, precision, and a touch of Japanese hospitality.
        </p>
        <a
          href="/tours"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Browse Tours
        </a>
      </section>
    </main>
  );
}
