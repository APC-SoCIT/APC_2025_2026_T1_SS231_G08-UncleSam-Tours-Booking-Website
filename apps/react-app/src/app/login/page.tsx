"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
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
      const { data: user, error } = await supabase
        .from("user")
        .select("*")
        .eq("email", formData.email)
        .maybeSingle();

      const match = await bcrypt.compare(formData.password, user.pass_hash);
      if (!match) {
        setMessage("Invalid email or password");
        return;
      }

      // Store session locally after successful login
      const { data: { session } } = await supabase.auth.getSession();
      localStorage.setItem("session", JSON.stringify(session));
      localStorage.setItem("user", JSON.stringify(user));

      setMessage("Login successful!");
      setTimeout(() => router.push("/"), 1000);
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Background image using next/image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/kyoto-hero.jpg"
          alt="kyoto background"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white shadow-xl rounded-2xl p-10 w-full max-w-md mx-4">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Sign in or create an account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition shadow-md"
          >
            {loading ? "Signing in..." : "Continue"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <p className="text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <a href="/register" className="text-red-600 font-medium hover:underline">
            Create one here
          </a>
        </p>

        <p className="text-center mt-2 text-sm text-red-500 hover:underline cursor-pointer">
          Forgot your password?
        </p>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
        )}
      </div>
    </main>
  );
}
