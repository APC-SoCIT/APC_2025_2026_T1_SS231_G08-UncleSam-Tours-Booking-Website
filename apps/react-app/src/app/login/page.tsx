'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Sign-in failed');
            }

            // Redirect to dashboard or home page on success
            window.location.href = '/dashboard';
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                Sign In
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input type="email" id="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} required
                    className="mt-1 w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                    </label>
                    <input type="password" id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 w-full rounded border-gray-300 px-3 py-2 shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm"
                    />
                </div>

                <button type="submit"
                className="w-full rounded bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700">
                    Log In
                </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                Don’t have an account?{' '}
                <Link href="/register" className="text-red-600 hover:underline">
                    Sign up
                </Link>
                </p>
            </div>
            </div>
        );
}