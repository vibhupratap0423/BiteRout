'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Contact Us', href: '/contactus' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between">
        {/* Logo + Brand Name tightly attached */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/sitelogo.png"
              alt="BiteRout Logo"
              width={60}
              height={40}
              className="object-contain"
            />
            <span className="ml-1 text-lg font-bold text-white leading-none">
              <span className="text-red-600">Bite</span>
              <span className="text-white">Rout</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium ${
                pathname === item.href ? 'text-red-600' : 'text-white hover:text-red-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 bg-black">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium ${
                pathname === item.href ? 'text-red-600' : 'text-white hover:text-red-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
