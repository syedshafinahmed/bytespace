"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdConnectWithoutContact, MdDesignServices, MdLaptopWindows, MdOutlinePhotoCameraFront, MdSignalCellularAlt } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";

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
    title: "Build Digital Asset",
    image: "/images/explore/e2.png"
  },
  {
    title: "the Power of Big Data",
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
      <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 py-20">
        <p className="font-poppins font-semibold text-[44px] text-[#040819] text-center mb-4">
          Discover Your Passion, Build Your Skills
        </p>
        <p className="font-satoshi text-lg text-[#82868E] text-center mb-[42px]">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br /> fields, from technology to the arts, and make a difference in your career and life.
        </p>
        
        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-[1050px] mx-auto mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full font-satoshi text-sm transition-colors ${
                  isActive 
                  ? "bg-[#D4FB20] text-[#242528] font-medium" 
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <button className="px-2 py-2.5 font-satoshi text-sm text-[#003BE2] font-medium hover:underline">
            + More
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white w-[373px] h-[384px] mx-auto rounded-[24px] p-4 shadow-sm border border-[#CED0D3] flex flex-col gap-4">
              {/* Image wrapper */}
              <div className="relative w-full h-[196px] rounded-[16px] overflow-hidden bg-gray-200">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="flex flex-col px-2 pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-poppins font-semibold text-[20px] text-black leading-tight">{course.title}</h3>
                    <p className="font-satoshi text-[12px] text-[#4F4F4F] mt-1">
                      by <span className="text-[#003BE2]">purepearl studio</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="font-satoshi text-[14px] font-medium text-gray-500">4.5</span>
                    <FaStar className="w-3.5 h-3.5 text-[#CED0D3] -translate-y-0.5" />
                  </div>
                </div>

                {/* Level and Avatars */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 bg-[#F5F5F6] text-[#4B4C53] rounded-full px-3 py-1.5">
                    <MdSignalCellularAlt className="w-4 h-4" />
                    <span className="font-satoshi text-[11px] font-medium">Beginner</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Image src="/images/explore/avatar.png" alt="Students" width={100} height={26} className="h-[26px] w-auto" />
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4">
                  <p className="font-poppins">
                    <span className="text-[#003BE2] font-semibold text-2xl">$25</span>
                    <span className="text-gray-400 text-xs font-satoshi ml-1">/lifetime</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Diverse Learning Paths Section */}
        <div className="mt-32">
          <p className="font-poppins font-semibold text-[36px] text-[#040819] text-center mb-4">
            Explore Diverse Learning Paths at Bytespace
          </p>
          <p className="font-satoshi text-lg text-[#82868E] text-center mb-16 leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various <br /> fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {learningPaths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <div key={idx} className="bg-white w-[167px] h-[167px] mx-auto border border-[#CED0D3] rounded-[24px] p-4 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-[72px] h-[72px] bg-[#D4FB20] rounded-full flex items-center justify-center">
                    <Icon className="w-[28px] h-[28px] text-[#242528]" />
                  </div>
                  <span className="font-satoshi font-medium text-[16px] text-[#242528] text-center leading-tight">{path.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}