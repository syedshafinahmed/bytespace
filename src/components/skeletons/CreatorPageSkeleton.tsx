import React from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import { CourseCardSkeleton } from "./CourseCardSkeleton";

export function CreatorPageSkeleton() {
  return (
    <PublicLayout>
      {/* Blue Header Section Skeleton */}
      <section className="relative w-full h-auto min-h-[480px] lg:h-[592px] bg-[#003BE2] pt-[100px] sm:pt-[120px] lg:pt-[140px] pb-8 lg:pb-0 bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 h-full flex flex-col justify-between animate-pulse">
          <div>
            {/* Creator Profile Top */}
            <div className="flex items-center gap-3.5 sm:gap-5">
              {/* Avatar Skeleton */}
              <div className="aspect-square w-16 sm:w-20 lg:w-24 rounded-2xl sm:rounded-3xl bg-white/20 flex-shrink-0" />

              <div className="min-w-0 flex-1 space-y-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-6 sm:h-9 w-40 sm:w-64 rounded-lg bg-white/25" />
                  <div className="w-16 sm:w-24 h-6 sm:h-[35px] rounded-full bg-[#D4FB20]/60 flex-shrink-0" />
                </div>
                <div className="h-4 sm:h-5 w-48 sm:w-72 rounded bg-white/20" />
              </div>
            </div>

            {/* Bio / Description Skeletons */}
            <div className="mt-5 sm:mt-10 space-y-3 max-w-4xl">
              <div className="h-4 sm:h-5 w-full bg-white/15 rounded" />
              <div className="h-4 sm:h-5 w-5/6 bg-white/15 rounded" />
              <div className="h-4 sm:h-5 w-4/5 bg-white/15 rounded hidden sm:block" />
            </div>
          </div>

          {/* Metrics and Follow Action Skeleton */}
          <div className="flex items-center justify-between gap-2.5 sm:gap-4 mt-6 sm:mt-8 lg:mt-0 mb-6 sm:mb-8 lg:mb-[82px]">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-white/90 rounded-full w-28 sm:w-36 h-[34px] sm:h-[44px]" />
              <div className="bg-white/90 rounded-full w-28 sm:w-36 h-[34px] sm:h-[44px]" />
            </div>

            <div className="bg-[#D4FB20]/70 rounded-full w-[90px] sm:w-[101px] h-[36px] sm:h-[46px] flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* Main Content Area Skeleton */}
      <section className="w-full bg-white flex-1 pb-16 sm:pb-24">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 pt-8 sm:pt-12 animate-pulse">
          {/* Filters Row Skeleton */}
          <div className="flex flex-wrap items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[42px] sm:h-[48px] w-20 sm:w-24 rounded-full border border-gray-200 bg-gray-100" />
              <div className="h-[42px] sm:h-[48px] w-20 sm:w-24 rounded-full border border-gray-200 bg-gray-100" />
              <div className="h-[42px] sm:h-[48px] w-24 sm:w-28 rounded-full border border-gray-200 bg-gray-100" />
            </div>
            <div className="h-[42px] sm:h-[48px] w-32 sm:w-36 rounded-full border border-gray-200 bg-gray-100" />
          </div>

          {/* Courses Grid Skeleton (6 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CourseCardSkeleton key={idx} />
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default CreatorPageSkeleton;
