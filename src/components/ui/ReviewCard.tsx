import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

export interface Review {
  id?: string | number;
  author: string;
  role?: string;
  avatar?: string;
  date?: string;
  rating?: number;
  content: string;
}

export interface ReviewCardProps {
  review?: Review;
  author?: string;
  role?: string;
  avatar?: string;
  date?: string;
  rating?: number;
  content?: string;
  className?: string;
}

export function ReviewCard({
  review,
  author = review?.author || "PurePearl Studio",
  role = review?.role || "UI/UX Designer",
  avatar = review?.avatar || "/images/courses/review1.png",
  date = review?.date || "a year ago",
  rating = review?.rating ?? 5,
  content = review?.content ||
    "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  className = "",
}: ReviewCardProps) {
  return (
    <div
      className={`border border-[#E5E7EB] rounded-[20px] sm:rounded-[24px] w-full max-w-[723px] h-auto p-5 sm:p-8 bg-white shadow-sm flex flex-col ${className}`}
    >
      {/* Top Header: Avatar + Info & Date */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-13 h-13 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={avatar}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-poppins font-medium text-lg text-[#242528]">
              {author}
            </h4>
            <p className="font-satoshi text-base text-[#82868E] mt-0.5">{role}</p>
          </div>
        </div>

        <span className="font-satoshi text-base text-[#82868E]">{date}</span>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-1.5 mt-4 mb-4">
        {[...Array(5)].map((_, i) => (
          <IoStarSharp
            key={i}
            size={24}
            className={i < rating ? "text-[#4B4C53]" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Review Content */}
      <p className="font-satoshi text-base text-[#4B4C53] leading-relaxed">
        {content}
      </p>
    </div>
  );
}

export default ReviewCard;
