"use client";

import Image from "next/image";
import { useState } from "react";
import { MdConnectWithoutContact, MdDesignServices, MdLaptopWindows, MdOutlinePhotoCameraFront } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";
import { CourseCard } from "@/components/ui/CourseCard";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking"
];

const courses = [
  {
    title: "Learn Figma from Basic",
    image: "/images/explore/e1.png"
  },
  {
    title: "Build Digital Asset: A Comprehensive Guide",
    image: "/images/explore/e2.png"
  },
  {
    title: "The Power of Big Data",
    image: "/images/explore/e3.png"
  },
  {
    title: "Balancing Productivity an...",
    image: "/images/explore/e4.png"
  },
  {
    title: "Mastering Money Manage...",
    image: "/images/explore/e5.png"
  },
  {
    title: "From Idea to Startup Succ...",
    image: "/images/explore/e6.png"
  }
];

const learningPaths = [
  { name: "Design", icon: MdDesignServices },
  { name: "Development", icon: BiCodeBlock },
  { name: "IT & Software", icon: MdLaptopWindows },
  { name: "Business", icon: IoMdBusiness },
  { name: "Marketing", icon: MdConnectWithoutContact },
  { name: "Photography", icon: MdOutlinePhotoCameraFront }
];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="w-full bg-white flex items-center overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
        <p className="font-poppins font-semibold text-2xl sm:text-[44px] text-[#040819] text-center mb-4">
          Discover Your Passion, Build Your Skills
        </p>
        <p className="font-satoshi text-sm sm:text-lg text-[#82868E] text-center mb-8 sm:mb-[42px] max-w-3xl mx-auto">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br className="hidden sm:inline" /> fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-[1050px] mx-auto mb-10 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-satoshi text-xs sm:text-sm transition-colors ${isActive
                    ? "bg-[#D4FB20] text-[#242528] font-medium"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            );
          })}
          <button className="px-2 py-2 sm:py-2.5 font-satoshi text-xs sm:text-sm text-[#003BE2] font-medium hover:underline">
            + More
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {courses.map((course, idx) => (
            <CourseCard
              key={idx}
              title={course.title}
              image={course.image}
            />
          ))}
        </div>

        {/* Diverse Learning Paths Section */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <p className="font-poppins font-semibold text-2xl sm:text-[36px] text-[#040819] text-center mb-4">
            Explore Diverse Learning Paths at Bytespace
          </p>
          <p className="font-satoshi text-sm sm:text-lg text-[#82868E] text-center mb-10 sm:mb-16 leading-relaxed max-w-4xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various <br className="hidden sm:inline" /> fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
            {learningPaths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <div key={idx} className="bg-white w-full sm:w-[167px] max-w-[167px] h-[167px] mx-auto border border-[#CED0D3] rounded-[24px] p-4 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-[72px] h-[72px] bg-[#D4FB20] rounded-full flex items-center justify-center">
                    <Icon className="w-[28px] h-[28px] text-[#242528]" />
                  </div>
                  <span className="font-satoshi font-medium text-sm sm:text-[16px] text-[#242528] text-center leading-tight">{path.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}