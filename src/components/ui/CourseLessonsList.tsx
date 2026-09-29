import React from "react";

export interface Lesson {
  number: string;
  title: string;
  duration: string;
}

export const defaultLessons: Lesson[] = [
  {
    number: "01",
    title: "Introduction to Digital Assets",
    duration: "12 mins",
  },
  {
    number: "02",
    title: "Design Principles for Impacts",
    duration: "21 mins",
  },
  {
    number: "03",
    title: "Advanced Techniques in Digital Creation",
    duration: "16 mins",
  },
];

export interface CourseLessonsListProps {
  lessons?: Lesson[];
  className?: string;
}

export function CourseLessonsList({
  lessons = defaultLessons,
  className = "",
}: CourseLessonsListProps) {
  return (
    <div className={`space-y-4 mb-3 ${className}`}>
      {lessons.map((lesson) => (
        <div key={lesson.number} className="flex items-center justify-between text-sm py-1">
          <div className="flex items-start text-[#242528] max-w-50 gap-3">
            <span className="font-satoshi font-medium text-base">{lesson.number}</span>
            <span className="font-satoshi font-medium text-base">
              {lesson.title}
            </span>
          </div>
          <span className="font-satoshi text-[#003BE2] text-base">
            {lesson.duration}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CourseLessonsList;
