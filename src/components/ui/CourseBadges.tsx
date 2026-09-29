import { IoStarSharp } from "react-icons/io5";
import { MdOutlineGroup, MdSignalCellularAlt } from "react-icons/md";

export interface CourseBadgeProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export function CourseBadge({ icon, text, className = "" }: CourseBadgeProps) {
  return (
    <div
      className={`bg-white rounded-full px-4 sm:px-5 h-[36px] sm:h-[40px] flex items-center gap-1.5 sm:gap-2 text-sm sm:text-[16px] font-medium text-[#242528] font-satoshi shadow-sm ${className}`}
    >
      <span className="text-[#003BE2] flex items-center justify-center">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export interface CourseBadgesProps {
  level?: string;
  rating?: string | number;
  reviewsCount?: number;
  studentsCount?: string | number;
  className?: string;
}

export function CourseBadges({
  level = "Intermediate",
  rating = "4.8",
  reviewsCount = 172,
  studentsCount = "199 Students",
  className = "",
}: CourseBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3.5 ${className}`}>
      <CourseBadge
        icon={<MdSignalCellularAlt className="text-[#003BE2]" size={18} />}
        text={level}
      />
      <CourseBadge
        icon={<IoStarSharp className="text-[#003BE2]" size={15} />}
        text={`${rating} (${reviewsCount} reviews)`}
      />
      <CourseBadge
        icon={<MdOutlineGroup className="text-[#003BE2]" size={16} />}
        text={typeof studentsCount === "number" ? `${studentsCount} Students` : studentsCount}
      />
    </div>
  );
}

export default CourseBadges;
