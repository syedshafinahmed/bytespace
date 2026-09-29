import { IoStarSharp } from "react-icons/io5";
import { MdOutlineGroup, MdSignalCellularAlt } from "react-icons/md";

export interface CourseBadgeProps {
  icon: React.ReactNode;
  text: React.ReactNode;
  className?: string;
}

export function CourseBadge({ icon, text, className = "" }: CourseBadgeProps) {
  return (
    <div
      className={`bg-white rounded-full px-2 sm:px-5 h-[34px] sm:h-[40px] flex items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-[16px] font-medium text-[#242528] font-satoshi shadow-sm whitespace-nowrap ${className}`}
    >
      <span className="text-[#003BE2] flex items-center justify-center flex-shrink-0">{icon}</span>
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
    <div className={`flex items-center gap-1.5 sm:gap-3.5 w-full sm:w-auto ${className}`}>
      <CourseBadge
        icon={<MdSignalCellularAlt className="text-[#003BE2]" size={15} />}
        text={level}
        className="flex-1 sm:flex-initial"
      />
      <CourseBadge
        icon={<IoStarSharp className="text-[#003BE2]" size={14} />}
        text={
          <>
            {rating} ({reviewsCount}
            <span className="hidden sm:inline"> reviews</span>)
          </>
        }
        className="flex-1 sm:flex-initial"
      />
      <CourseBadge
        icon={<MdOutlineGroup className="text-[#003BE2]" size={15} />}
        text={typeof studentsCount === "number" ? `${studentsCount} Students` : studentsCount}
        className="flex-1 sm:flex-initial"
      />
    </div>
  );
}

export default CourseBadges;
