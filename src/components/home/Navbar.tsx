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

  const linkCls = "font-satoshi text-base text-white/80 hover:text-white transition-colors duration-200";
  const mobileLinkCls = "font-satoshi text-base text-white/80 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-lg transition-colors duration-200";

  return (
    <header className="absolute top-0 inset-x-0 w-full z-50">
      <nav className="max-w-[1440px] mx-auto px-8 lg:px-16 h-[120px] flex items-center justify-between gap-4">

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
              <Link href={href} className={linkCls}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right: Auth + Cart (desktop) ── */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className={linkCls}>
            Sign In
          </Link>
          <Link href="/signup" className={linkCls}>
            Join Us
          </Link>
          <button
            aria-label="Shopping bag"
            className="flex items-center transition-colors duration-200 text-white/80 hover:text-white"
          >
            <MdOutlineShoppingBag size={20} />
          </button>
        </div>

        {/* ── Mobile: Hamburger ── */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg transition-colors duration-200 text-white hover:bg-white/10"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px] w-5">
            <span className={`block h-[2px] w-full bg-white rounded transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-full bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[2px] w-full bg-white rounded transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* ── Mobile Menu Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 border-t flex flex-col gap-1 bg-[#002bb8] border-white/10">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={mobileLinkCls}>
              {label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t flex flex-col gap-2 border-white/10">
            <Link href="/login" onClick={() => setMenuOpen(false)} className={mobileLinkCls}>
              Sign In
            </Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)} className={mobileLinkCls}>
              Join Us
            </Link>
            <button
              aria-label="Shopping bag"
              className="flex items-center gap-2 font-satoshi text-base px-3 py-2.5 rounded-lg transition-colors duration-200 text-white/80 hover:text-white hover:bg-white/10"
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
