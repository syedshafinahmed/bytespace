import React from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import { CourseCardSkeleton } from "./CourseCardSkeleton";

export function CoursesPageSkeleton() {
  return (
    <PublicLayout>
      {/* Blue Header Section Skeleton */}
      <section className="relative w-full h-auto min-h-[300px] sm:h-[360px] bg-[#003BE2] pt-[90px] sm:pt-[120px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px] flex flex-col items-center justify-end animate-pulse">
        {/* Title Skeleton */}
        <div className="h-8 sm:h-10 w-60 sm:w-80 rounded-xl bg-white/20 mb-6 sm:mb-8" />

        {/* Search Area Skeleton */}
        <div className="flex items-center justify-center gap-2 sm:gap-[16px] w-full max-w-[624px] px-4 mb-8 sm:mb-[69px]">
          {/* Search Bar Skeleton */}
          <div className="flex items-center bg-white/90 rounded-full flex-1 sm:flex-initial sm:w-[461px] h-[48px] sm:h-[52px] px-4 sm:px-5">
            <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mr-3" />
            <div className="h-4 w-32 rounded bg-gray-200" />
          </div>
          {/* Button Skeleton */}
          <div className="bg-[#D4FB20]/70 w-24 sm:w-[147px] h-[48px] rounded-full flex-shrink-0" />
        </div>
      </section>

      {/* Main Content Area Skeleton */}
      <section className="w-full bg-white flex-1 pb-16 sm:pb-24">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 pt-8 sm:pt-14 lg:pt-18 animate-pulse">
          {/* Filters Row Skeleton */}
          <div className="flex flex-wrap items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[42px] sm:h-[48px] w-20 sm:w-24 rounded-full border border-gray-200 bg-gray-100" />
              <div className="h-[42px] sm:h-[48px] w-20 sm:w-24 rounded-full border border-gray-200 bg-gray-100" />
              <div className="h-[42px] sm:h-[48px] w-24 sm:w-28 rounded-full border border-gray-200 bg-gray-100" />
            </div>
            <div className="h-[42px] sm:h-[48px] w-32 sm:w-36 rounded-full border border-gray-200 bg-gray-100" />
          </div>

          {/* Categories Tabs Skeleton */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
            {[90, 60, 120, 80, 85, 95, 100, 115, 75].map((w, idx) => (
              <div
                key={idx}
                style={{ width: `${w}px` }}
                className={`h-8 sm:h-9 rounded-full ${
                  idx === 0 ? "bg-[#D4FB20]/50" : "bg-gray-100"
                }`}
              />
            ))}
          </div>

          {/* Courses Grid Skeleton (6 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CourseCardSkeleton key={idx} />
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-3 sm:gap-6">
            <div className="w-[48px] sm:w-[56px] h-[42px] sm:h-[48px] rounded-full border border-gray-200 bg-gray-50 flex-shrink-0" />
            <div className="flex items-center gap-3 sm:gap-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="h-5 w-5 rounded bg-gray-200" />
              ))}
            </div>
            <div className="w-[48px] sm:w-[56px] h-[42px] sm:h-[48px] rounded-full border border-gray-200 bg-gray-50 flex-shrink-0" />
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default CoursesPageSkeleton;
