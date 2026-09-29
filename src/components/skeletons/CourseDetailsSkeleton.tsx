import React from "react";
import PublicLayout from "@/components/layout/PublicLayout";

export function CourseDetailsSkeleton() {
  return (
    <PublicLayout>
      <div className="relative w-full bg-white">
        {/* Blue Header Background Skeleton */}
        <section className="absolute top-0 left-0 w-full h-[450px] sm:h-[680px] lg:h-[957px] bg-[#003BE2] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]" />

        {/* Main Content Area */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 pt-[96px] sm:pt-[140px] pb-16 sm:pb-28 animate-pulse">
          {/* Header Row Skeleton */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 sm:gap-6">
            <div className="w-full max-w-[850px]">
              {/* Title Skeleton */}
              <div className="h-8 sm:h-11 w-4/5 rounded-xl bg-white/25 mb-3" />
              {/* Subtitle Skeleton */}
              <div className="h-4 sm:h-5 w-3/5 rounded-lg bg-white/20 mb-4" />

              {/* Author & Mobile Share Row */}
              <div className="flex items-center justify-between gap-3 mt-4 sm:mt-6">
                <div className="h-5 w-36 rounded-lg bg-white/20" />
                {/* Mobile Share Button Skeleton */}
                <div className="flex md:hidden h-[36px] w-[88px] rounded-full bg-[#D4FB20]/60 flex-shrink-0" />
              </div>
            </div>

            {/* Desktop Share Button Skeleton */}
            <div className="hidden md:flex w-[122px] h-[40px] rounded-full bg-[#D4FB20]/60 flex-shrink-0" />
          </div>

          {/* Badges / Meta row Skeleton */}
          <div className="mt-4 sm:mt-6 mb-8 sm:mb-15 flex items-center gap-1.5 sm:gap-3.5 w-full sm:w-auto">
            <div className="flex-1 sm:flex-initial h-[34px] sm:h-[40px] sm:w-36 rounded-full bg-white/90" />
            <div className="flex-1 sm:flex-initial h-[34px] sm:h-[40px] sm:w-44 rounded-full bg-white/90" />
            <div className="flex-1 sm:flex-initial h-[34px] sm:h-[40px] sm:w-36 rounded-full bg-white/90" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col w-full">
              {/* Video Preview Card Skeleton */}
              <div className="relative w-full max-w-[720px] aspect-[720/479] lg:h-[479px] rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center mx-auto lg:mx-0">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white/20 flex items-center justify-center" />
              </div>

              {/* Tabs Skeleton */}
              <div className="flex items-center gap-2 sm:gap-3 mt-8 sm:mt-16 lg:mt-[143px] overflow-x-auto no-scrollbar sm:overflow-visible">
                <div className="h-10 sm:h-11 w-24 sm:w-28 rounded-full bg-[#D4FB20]/60 flex-shrink-0" />
                <div className="h-10 sm:h-11 w-24 sm:w-28 rounded-full bg-gray-200 flex-shrink-0" />
                <div className="h-10 sm:h-11 w-24 sm:w-28 rounded-full bg-gray-200 flex-shrink-0" />
              </div>

              {/* Tab Content Skeleton (Description) */}
              <div className="mt-10 flex flex-col">
                <div className="h-6 w-32 rounded bg-gray-200 mb-6" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-gray-100" />
                    <div className="h-4 w-full rounded bg-gray-100" />
                    <div className="h-4 w-4/5 rounded bg-gray-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-gray-100" />
                    <div className="h-4 w-11/12 rounded bg-gray-100" />
                  </div>
                </div>

                {/* Sneak Peak Skeleton */}
                <div className="mt-8">
                  <div className="h-6 w-32 rounded bg-gray-200 mb-6" />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] h-[125px] rounded-[16px] bg-gray-200"
                      />
                    ))}
                  </div>
                </div>

                {/* Key Points Skeleton */}
                <div className="mt-8">
                  <div className="h-6 w-32 rounded bg-gray-200 mb-6" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0" />
                        <div className="h-4 w-56 rounded bg-gray-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-8 flex justify-center lg:justify-end w-full mt-10 lg:mt-0">
              <div className="w-full max-w-[412px] h-auto bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col justify-between mx-auto lg:mx-0">
                {/* Top Section Skeleton */}
                <div>
                  <div className="h-6 w-48 rounded bg-gray-200 mb-6" />

                  {/* Sample Lessons Skeleton */}
                  <div className="space-y-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="h-4 w-6 rounded bg-gray-200" />
                          <div className="h-4 w-36 rounded bg-gray-100" />
                        </div>
                        <div className="h-4 w-12 rounded bg-gray-100" />
                      </div>
                    ))}
                  </div>

                  <div className="h-4 w-28 rounded bg-gray-200 mb-6" />
                  <div className="h-4 w-full rounded bg-gray-100 mb-2" />
                  <div className="h-4 w-3/4 rounded bg-gray-100 mb-6" />

                  {/* Price Skeleton */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <div className="h-9 w-20 rounded bg-gray-200" />
                    <div className="h-4 w-16 rounded bg-gray-100" />
                  </div>

                  {/* Enroll Button Skeleton */}
                  <div className="w-full h-[46px] rounded-full bg-[#D4FB20]/70 mb-6" />

                  {/* Inclusions Skeleton */}
                  <div>
                    <div className="h-5 w-40 rounded bg-gray-200 mb-4" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded bg-gray-200 flex-shrink-0" />
                          <div className="h-4 w-36 rounded bg-gray-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section Skeleton */}
                <div>
                  <div className="border-t border-gray-100 my-6" />

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-13 h-13 rounded-full bg-gray-200 flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 w-32 rounded bg-gray-200" />
                      <div className="h-3 w-24 rounded bg-gray-100" />
                    </div>
                  </div>

                  <div className="h-3.5 w-full rounded bg-gray-100 mb-4" />
                  <div className="h-[36px] w-32 rounded-full border border-gray-200 bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default CourseDetailsSkeleton;
