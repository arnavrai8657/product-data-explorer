'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-center space-x-8">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:underline ${
            pathname === href ? 'underline font-bold' : ''
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
