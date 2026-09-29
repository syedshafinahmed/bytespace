import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";

export interface CourseCardProps {
  title: string;
  image: string;
  author?: string;
  rating?: number;
  level?: string;
  price?: number;
  starColor?: string;
  className?: string;
  href?: string;
}

export function CourseCard({
  title,
  image,
  author = "purepearl studio",
  rating = 4.5,
  level = "Beginner",
  price = 25,
  starColor = "#CED0D3",
  className = "",
  href,
}: CourseCardProps) {
  const slug = encodeURIComponent(
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  );
  const cardHref = href || `/courses/${slug}?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}`;

  return (
    <Link
      href={cardHref}
      className={`bg-white w-[373px] h-[384px] mx-auto rounded-[24px] p-4 shadow-sm border border-[#CED0D3] flex flex-col gap-4 hover:shadow-md hover:border-[#003BE2]/40 transition-all duration-200 cursor-pointer block group ${className}`}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-[196px] rounded-[16px] overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col px-2 pb-2">
        {/* Title row */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-poppins font-semibold text-[20px] text-black leading-tight line-clamp-1 group-hover:text-[#003BE2] transition-colors">
              {title}
            </h3>
            <p className="font-satoshi text-[12px] text-[#4F4F4F] mt-1">
              by <span className="text-[#003BE2]">{author}</span>
            </p>
          </div>
          <div className="flex items-center gap-1 mt-0.5 flex-shrink-0">
            <span className="font-satoshi text-[14px] font-medium text-gray-500">
              {rating}
            </span>
            <FaStar
              className="w-3.5 h-3.5 -translate-y-0.5"
              style={{ color: starColor }}
            />
          </div>
        </div>

        {/* Level + Avatars */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1.5 bg-[#F5F5F6] text-[#4B4C53] rounded-full px-3 py-1.5">
            <MdSignalCellularAlt className="w-4 h-4" />
            <span className="font-satoshi text-[11px] font-medium">{level}</span>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/explore/avatar.png"
              alt="Students"
              width={100}
              height={26}
              className="h-[26px] w-auto"
            />
          </div>
        </div>

        {/* Price */}
        <div className="mt-4">
          <p className="font-poppins">
            <span className="text-[#003BE2] font-semibold text-2xl">${price}</span>
            <span className="text-gray-400 text-xs font-satoshi ml-1">/lifetime</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
