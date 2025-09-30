import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { href } from 'react-router';

const navigation = [
    { label: 'HOME', href: '/' },
    { label: 'OFFERS', href: '/offers' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
]

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-red-600 text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            {/* Logo / Brand */}
            <Link href="/" className="flex items-center space-x-2">
            <img src="/icons/car.svg" alt="Uncle Sam logo" className="h-6 w-6" />
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

            {/* Sign-in button */}
            <Link
            href="/login"
            className="ml-4 rounded border border-white px-3 py-1 text-sm font-medium hover:bg-white hover:text-red-600 transition-colors"
            >
            SIGN IN
            </Link>
        </div>
        </header>
    );
}