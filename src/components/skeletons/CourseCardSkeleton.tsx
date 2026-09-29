import React from "react";

export interface CourseCardSkeletonProps {
  className?: string;
}

export function CourseCardSkeleton({ className = "" }: CourseCardSkeletonProps) {
  return (
    <div
      className={`bg-white w-full sm:w-[373px] max-w-[373px] h-[384px] mx-auto rounded-[24px] p-4 shadow-sm border border-gray-200/70 flex flex-col gap-4 animate-pulse ${className}`}
    >
      {/* Thumbnail Skeleton */}
      <div className="w-full h-[196px] rounded-[16px] bg-gray-200 flex-shrink-0" />

      {/* Content Skeleton */}
      <div className="flex flex-col px-2 pb-2 justify-between flex-1">
        {/* Title & Author & Rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-2 flex-1">
              <div className="h-5 w-4/5 rounded-md bg-gray-200" />
              <div className="h-3.5 w-1/2 rounded bg-gray-100" />
            </div>
            <div className="h-4 w-10 rounded-md bg-gray-200 flex-shrink-0" />
          </div>

          {/* Level Pill + Avatars */}
          <div className="flex items-center gap-3 mt-4">
            <div className="h-7 w-24 rounded-full bg-gray-200" />
            <div className="h-6 w-20 rounded-full bg-gray-100" />
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-2">
          <div className="h-7 w-16 rounded-md bg-gray-200" />
          <div className="h-3.5 w-14 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

export default CourseCardSkeleton;
