'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const navigation = [
  { label: 'HOME', href: '/' },
  { label: 'OFFERS', href: '/offers' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check localStorage for user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 bg-red-600 text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Uncle Sam logo" className="h-6 w-6" />
          <span className="text-lg font-bold tracking-wide">
            UNCLE SAM <span className="font-normal">TOURS</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden space-x-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'hover:text-gray-100 transition-colors',
                pathname === item.href && 'font-semibold underline'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right-side section */}
        <div className="ml-4 flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm font-medium">
                Welcome, {user.username || 'Traveler'}
              </span>
              <button
                onClick={handleLogout}
                className="rounded border border-white px-3 py-1 text-sm font-medium hover:bg-white hover:text-red-600 transition-colors"
              >
                LOG OUT
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded border border-white px-3 py-1 text-sm font-medium hover:bg-white hover:text-red-600 transition-colors"
            >
              LOG IN
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
