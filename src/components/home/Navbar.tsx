"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* ── Left: Logo ── */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo/Header_Logo.png"
            alt="ByteSpace Logo"
            width={140}
            height={36}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* ── Center: Nav links (desktop) ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-satoshi text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right: Auth + Cart (desktop) ── */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/signin"
            className="font-satoshi text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="font-satoshi text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Join Us
          </Link>
          <button
            aria-label="Shopping bag"
            className="flex items-center hover:text-gray-900 transition-colors duration-200 text-gray-600"
          >
            <MdOutlineShoppingBag size={20} />
          </button>
        </div>

        {/* ── Mobile: Hamburger ── */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px] w-5">
            <span
              className={`block h-[2px] w-full bg-gray-800 rounded transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-gray-800 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-gray-800 rounded transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 bg-white border-t border-gray-100 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-satoshi text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className="font-satoshi text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="font-satoshi text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors duration-200"
            >
              Join Us
            </Link>
            <button
              aria-label="Shopping bag"
              className="flex items-center gap-2 font-satoshi text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors duration-200"
            >
              <MdOutlineShoppingBag size={20} />
              Shopping Bag
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
