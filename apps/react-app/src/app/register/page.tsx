"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 1️⃣ Hash password before saving
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      // 2️⃣ Insert into Supabase USER table
      const { error } = await supabase.from("USER").insert([
        {
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          pass_hash: hashedPassword,
          role: "customer",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error(error);
        setMessage(`${error.message}`);
      } else {
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => router.push("/login"), 1500);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
        )}

        <p className="text-center mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
