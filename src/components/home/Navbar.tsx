"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose, MdOutlineShoppingBag } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  // Close drawer on path change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const linkCls =
    "font-satoshi text-base text-white/80 hover:text-white transition-colors duration-200";

  return (
    <header className="absolute top-0 inset-x-0 w-full z-40">
      <nav className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 h-20 md:h-[120px] flex items-center justify-between gap-4">
        {/* ── Left: Logo ── */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo/Header_Logo.png"
            alt="ByteSpace Logo"
            width={140}
            height={36}
            priority
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        {/* ── Center: Nav links (desktop) ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`${linkCls} ${active ? "text-white font-medium" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
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
            type="button"
            aria-label="Shopping bag"
            className="flex items-center transition-colors duration-200 text-white/80 hover:text-white cursor-pointer"
          >
            <MdOutlineShoppingBag size={20} />
          </button>
        </div>

        {/* ── Mobile: Cart before Hamburger ── */}
        <div className="md:hidden flex items-center gap-1 sm:gap-2">
          {/* Cart Icon */}
          <button
            type="button"
            aria-label="Shopping bag"
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
          >
            <MdOutlineShoppingBag size={22} />
          </button>

          {/* Hamburger Icon */}
          <button
            type="button"
            aria-label="Open mobile menu"
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          >
            <span className="sr-only">Open navigation menu</span>
            <div className="flex flex-col justify-center items-center gap-[5px] w-6 h-6">
              <span className="block h-[2px] w-5 bg-white rounded-full" />
              <span className="block h-[2px] w-5 bg-white rounded-full" />
              <span className="block h-[2px] w-5 bg-white rounded-full" />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer Backdrop ── */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 z-50 md:hidden ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      {/* ── Mobile Drawer (Slides in from the right) ── */}
      <aside
        id="mobile-drawer"
        aria-label="Mobile Navigation"
        aria-hidden={!drawerOpen}
        className={`fixed top-0 right-0 bottom-0 w-[84vw] max-w-[340px] bg-[#0027A7] z-50 shadow-2xl flex flex-col border-l border-white/10 transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
          <Link href="/" onClick={() => setDrawerOpen(false)}>
            <Image
              src="/images/logo/Header_Logo.png"
              alt="ByteSpace Logo"
              width={124}
              height={32}
              className="h-7 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 flex flex-col justify-between overflow-y-auto px-6 py-6">
          {/* Nav Links */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[12px] font-satoshi font-semibold tracking-wider uppercase text-white/40 px-3 mb-1">
              Navigation
            </span>
            {navLinks.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-satoshi text-base transition-all duration-200 ${
                    active
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-sm"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{label}</span>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-[#242528]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Auth & Secondary Links at bottom */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-satoshi text-base text-white/80 hover:text-white hover:bg-white/10 transition-colors text-left"
            >
              <MdOutlineShoppingBag size={20} className="text-[#D4FB20]" />
              <span>Shopping Bag</span>
            </button>

            <Link
              href="/login"
              onClick={() => setDrawerOpen(false)}
              className="w-full py-3 px-4 rounded-xl border border-white/20 text-center font-satoshi font-medium text-white hover:bg-white/10 transition-colors text-base"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              onClick={() => setDrawerOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#D4FB20] text-[#242528] text-center font-satoshi font-semibold hover:bg-[#c8f018] transition-colors text-base shadow-sm"
            >
              Join Us
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
