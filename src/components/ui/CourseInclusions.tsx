import React from "react";
import { IoMdFolderOpen } from "react-icons/io";
import { MdOutlineVideocam, MdConnectWithoutContact } from "react-icons/md";
import { LiaIdCardAltSolid } from "react-icons/lia";

export interface InclusionItem {
  icon: React.ReactNode;
  text: string;
}

export const defaultInclusions: InclusionItem[] = [
  {
    icon: <IoMdFolderOpen className="text-[#003BE2] flex-shrink-0" size={16} />,
    text: "Learning Resources",
  },
  {
    icon: <MdOutlineVideocam className="text-[#003BE2] flex-shrink-0" size={16} />,
    text: "Quality Lesson Videos",
  },
  {
    icon: <LiaIdCardAltSolid className="text-[#003BE2] flex-shrink-0" size={16} />,
    text: "Certificate of Completion",
  },
  {
    icon: <MdConnectWithoutContact className="text-[#003BE2] flex-shrink-0" size={16} />,
    text: "Private Consultation",
  },
];

export interface CourseInclusionsProps {
  title?: string;
  items?: InclusionItem[];
  className?: string;
}

export function CourseInclusions({
  title = "This course include",
  items = defaultInclusions,
  className = "",
}: CourseInclusionsProps) {
  return (
    <div className={className}>
      <h4 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-base text-[#4B4C53] font-satoshi"
          >
            {item.icon}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseInclusions;
