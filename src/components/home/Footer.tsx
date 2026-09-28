"use client";

import Image from "next/image";
import Link from "next/link";

const col1 = [
  { label: "Featured Courses", href: "#" },
  { label: "Featured Categories", href: "#" },
  { label: "Business", href: "#" },
  { label: "IT", href: "#" },
  { label: "Design", href: "#" },
];

const col2 = [
  { label: "Development", href: "#" },
  { label: "Marketing", href: "#" },
  { label: "Photography", href: "#" },
  { label: "Finance", href: "#" },
  { label: "Sport", href: "#" },
];

const col3 = [
  { label: "Become a Creator", href: "#" },
  { label: "Affiliate Program", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Help", href: "#" },
  { label: "About", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", isButton: true },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-[71px] pb-[48px] border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">
          {/* Left Column (Newsletter) */}
          <div className="lg:max-w-[480px]">
            <Image
              src="/images/logo/Footer_Logo.png"
              alt="ByteSpace"
              width={160}
              height={40}
              className="h-10 w-auto mb-8 object-contain"
            />
            <p className="font-satoshi text-[14px] text-[#242528] mb-8 leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <form className="flex flex-col sm:flex-row items-center gap-6 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-[376px] h-[52px] rounded-full border border-gray-200 px-6 font-satoshi text-[16px] text-[#242528] placeholder-gray-400 outline-none focus:border-[#D4FB20] transition-colors"
                required
              />
              <button 
                type="submit"
                className="w-full sm:w-[104px] h-[46px] flex items-center justify-center bg-[#D4FB20] rounded-full font-satoshi font-medium text-[18px] text-[#242528] whitespace-nowrap"
              >
                Search
              </button>
            </form>

            <p className="font-satoshi text-[12px] text-[#242528] leading-[1.6]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns (Links) */}
          <div className="flex flex-wrap sm:flex-nowrap gap-12 md:gap-24">
            <div className="flex flex-col gap-5">
              {col1.map((link, idx) => (
                <Link key={idx} href={link.href} className="font-satoshi text-[14px] text-[#242528]">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {col2.map((link, idx) => (
                <Link key={idx} href={link.href} className="font-satoshi text-[14px] text-[#242528]">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {col3.map((link, idx) => (
                <Link key={idx} href={link.href} className="font-satoshi text-[14px] text-[#242528]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row (Copyright + Legal) */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-satoshi text-[12px] text-[#242528]">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {legalLinks.map((link, idx) => 
              link.isButton ? (
                <button key={idx} className="font-satoshi text-[12px] text-[#242528]">
                  {link.label}
                </button>
              ) : (
                <Link key={idx} href={link.href!} className="font-satoshi text-[12px] text-[#242528]">
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
