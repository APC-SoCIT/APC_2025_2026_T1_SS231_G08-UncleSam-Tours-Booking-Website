import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    exact?: boolean;
};

export default function NavLink({ href, children, exact = false }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname?.startsWith(href);    

    return (
        <Link
            href={href}
            className={clsx(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary hover:border-b-2 hover:border-primary'
            )}
        >
            {children}
        </Link>
    );
}