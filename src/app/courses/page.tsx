"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import { useState, useEffect } from "react";
import { CourseCard } from "@/components/ui/CourseCard";
import { CoursesPageSkeleton } from "@/components/skeletons/CoursesPageSkeleton";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { MdSignalCellularAlt, MdOutlineSort, MdOutlineFilterAlt, MdOutlineCategory } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
    "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"
];

const courses = [
    {
        title: "Learn Figma from Basic",
        image: "/images/explore/explore1.png"
    },
    {
        title: "Build Digital Asset: A Comprehensive Guide",
        image: "/images/explore/explore2.png"
    },
    {
        title: "The Power of Big Data",
        image: "/images/explore/explore3.png"
    },
    {
        title: "Balancing Productivity and Life",
        image: "/images/explore/explore4.png"
    },
    {
        title: "Mastering Money Management",
        image: "/images/explore/explore5.png"
    },
    {
        title: "From Idea to Startup Success",
        image: "/images/explore/explore6.png"
    }
];

export default function CoursePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("Featured");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <CoursesPageSkeleton />;
    }

    return (
        <PublicLayout>
            {/* Blue Header Section */}
            <section className="relative w-full h-auto min-h-[300px] sm:h-[360px] bg-[#003BE2] pt-[90px] sm:pt-[120px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px] flex flex-col items-center justify-end">
                <h1 className="font-poppins font-semibold text-2xl sm:text-[36px] text-[#F5F5F6] text-center mb-6 sm:mb-8 px-4">
                    Find Your Next Course
                </h1>

                {/* Search Area */}
                <div className="flex items-center justify-center gap-2 sm:gap-[16px] w-full max-w-[624px] px-4 mb-8 sm:mb-[69px]">
                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-full flex-1 sm:flex-initial sm:w-[461px] h-[48px] sm:h-[52px] pl-4 sm:pl-5 pr-3 sm:pr-4 flex-shrink-0 min-w-0">
                        <IoSearchOutline size={20} className="text-[#82868E] flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 font-satoshi text-sm sm:text-base text-[#242528] placeholder-[#82868E] bg-transparent outline-none px-2 sm:px-3 h-full min-w-0"
                        />
                    </div>
                    {/* Search Button */}
                    <button className="bg-[#D4FB20] text-[#242528] font-satoshi font-medium text-sm sm:text-base w-auto px-4 sm:px-0 sm:w-[147px] h-[48px] rounded-full flex items-center justify-center gap-1.5 sm:gap-2 flex-shrink-0 hover:bg-[#c8f018] transition-colors">
                        Courses <FaChevronDown size={12} />
                    </button>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="w-full bg-white flex-1 pb-16 sm:pb-24">
                <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 pt-8 sm:pt-14 lg:pt-18">

                    {/* Filters Row */}
                    <div className="flex flex-wrap items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                            <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-3.5 sm:px-5 h-[42px] sm:h-[48px] font-satoshi font-medium text-sm sm:text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                                <MdOutlineFilterAlt className="text-[#4B4C53]" size={18} />
                                <span>Filter</span>
                            </button>
                            <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-3.5 sm:px-5 h-[42px] sm:h-[48px] font-satoshi font-medium text-sm sm:text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                                <MdSignalCellularAlt className="text-[#4B4C53]" size={18} />
                                <span>Level</span>
                            </button>
                            <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-3.5 sm:px-5 h-[42px] sm:h-[48px] font-satoshi font-medium text-sm sm:text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                                <MdOutlineCategory className="text-[#4B4C53]" size={18} />
                                <span>Category</span>
                            </button>
                        </div>
                        <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-3.5 sm:px-5 h-[42px] sm:h-[48px] font-satoshi font-medium text-sm sm:text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                            <MdOutlineSort className="text-[#4B4C53]" size={18} />
                            <span>Most relevant</span>
                        </button>
                    </div>

                    {/* Categories Tabs */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
                        {categories.map((cat) => {
                            const isActive = activeTab === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-satoshi text-xs sm:text-sm transition-colors ${isActive
                                            ? "bg-[#D4FB20] text-black font-medium"
                                            : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
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
                    <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                        {courses.map((course, idx) => (
                            <CourseCard
                                key={idx}
                                title={course.title}
                                image={course.image}
                            />
                        ))}
                    </div>
                    <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                        {courses.map((course, idx) => (
                            <CourseCard
                                key={idx}
                                title={course.title}
                                image={course.image}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 sm:mt-16 flex items-center justify-center gap-3 sm:gap-6">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="w-[48px] sm:w-[56px] h-[42px] sm:h-[48px] rounded-full border border-[#CED0D3] flex items-center justify-center text-[#242528] hover:bg-gray-50 transition-colors flex-shrink-0"
                            aria-label="Previous page"
                        >
                            <FiChevronLeft size={20} />
                        </button>

                        <div className="flex items-center gap-3 sm:gap-6">
                            {[1, 2, 3, 4, 5].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`font-satoshi text-sm sm:text-base font-bold text-[#242528] transition-colors ${
                                        currentPage === page
                                            ? "opacity-40"
                                            : "opacity-100 hover:opacity-80"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 5))}
                            className="w-[48px] sm:w-[56px] h-[42px] sm:h-[48px] rounded-full border border-[#CED0D3] flex items-center justify-center text-[#242528] hover:bg-gray-50 transition-colors flex-shrink-0"
                            aria-label="Next page"
                        >
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}