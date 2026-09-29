import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseCard } from '@/components/ui/CourseCard';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div
      className="min-h-screen bg-[#254DF5] bg-[image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:112px_112px] text-white flex flex-col lg:flex-row relative overflow-hidden"
    >
      {/* ── Left Column ── */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 xl:p-24 flex flex-col">
        {/* Logo */}
        <Link href="/" className="inline-block mb-[54px] flex-shrink-0">
          <Image
            src="/images/auth/logo_vector.png"
            alt="ByteSpace Logo"
            width={180}
            height={45}
            priority
            className="h-[32px] w-auto object-contain"
          />
        </Link>

        {/* Headline */}
        <div className="max-w-xl z-10">
          <h1 className="text-xl text-[#F5F5F6] font-semibold leading-snug mb-4">{title}</h1>
          <p className="text-[#F5F5F6] text-lg leading-relaxed">{description}</p>
        </div>

        {/* ── Stacked Cards + decorative assets ── */}
        <div className="relative mt-12 hidden lg:block h-[520px] w-[420px]">

          {/* oval.png */}
          <Image
            src="/images/auth/oval.png"
            alt=""
            width={146}
            height={146}
            className="absolute top-6 left-12 z-30 rotate-12"
          />

          {/* cone.png */}
          <Image
            src="/images/auth/cone.png"
            alt=""
            width={188}
            height={188}
            className="absolute -bottom-17 -left-6 z-30"
          />

          {/* frame.png */}
          <Image
            src="/images/auth/frame.png"
            alt=""
            width={175}
            height={175}
            className="absolute bottom-5 -right-30 z-50 opacity-100"
          />

          {/* Card 1 — Build Digital Asset */}
          <div className="absolute top-25 left-0 z-10">
            <CourseCard
              title="Build Digital Asset"
              image="/images/explore/e2.png"
              starColor="#D4FB20"
              className="shadow-sm"
            />
          </div>

          {/* Card 2 — The Power of Big Data */}
          <div className="absolute top-0 left-32 z-20">
            <CourseCard
              title="The Power of Big Data"
              image="/images/explore/e3.png"
              starColor="#D4FB20"
              className="shadow-xl"
            />
          </div>

          {/* avatar_item.png */}
          <Image
            src="/images/auth/avatar_item.png"
            alt="Happy Students"
            width={258}
            height={123}
            className="absolute -bottom-10 -right-20 z-30"
          />

        </div>

      </div>

      {/* ── Right Column (form panel) ── */}
      <div className="w-full lg:w-1/2 px-6 lg:px-16 pt-6 lg:pt-[150px] pb-16 flex items-start justify-center relative z-20">
        <div className="w-[579px] h-[784px] bg-white rounded-[32px] p-[61px] text-black shadow-2xl overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
