"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import { useState } from "react";
import Image from "next/image";
import { CourseCard } from "@/components/ui/CourseCard";
import { MdSignalCellularAlt, MdOutlineSort, MdOutlineFilterAlt, MdOutlineCategory } from "react-icons/md";

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

export default function CreatorPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <PublicLayout>
            {/* Blue Header Section */}
            <section className="relative w-full h-[592px] bg-[#003BE2] pt-[140px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]">
                <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 h-full flex flex-col justify-between">
                    <div>
                        {/* Creator Profile Top */}
                        <div className="flex items-center gap-5">
                            <div className="relative aspect-square w-24 rounded-3xl overflow-hidden bg-[#FF8A8A] flex-shrink-0 shadow-md">
                                <Image
                                    src="/images/creator/creator.png"
                                    alt="PurePearl Studio"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <h1 className="font-poppins font-semibold text-[36px] text-[#F5F5F6]">
                                        PurePearl Studio
                                    </h1>
                                    <span className="bg-[#D4FB20] text-[#242528] w-[103px] h-[35px] flex items-center justify-center font-satoshi text-base font-medium px-3 py-1 rounded-full">
                                        Creator
                                    </span>
                                </div>
                                <p className="font-satoshi text-[#F5F5F6] text-base mt-1">
                                    Passionate UI/UX, Web designer
                                </p>
                            </div>
                        </div>

                        {/* Bio / Description */}
                        <div className="mt-10 text-[#F5F5F6] font-satoshi text-lg leading-relaxed space-y-3">
                            <p>
                                Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s <br /> explore and learn together!
                            </p>
                            <p>
                                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. <br /> Explore the world of creativity with me.
                            </p>
                        </div>
                    </div>

                    {/* Metrics and Follow Action */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-[82px]">
                        <div className="flex items-center gap-3">
                            <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-1.5 shadow-sm">
                                <span className="font-satoshi font-medium text-[#003BE2] text-lg">3</span>
                                <span className="font-satoshi font-medium text-[#242528] text-lg">Products</span>
                            </div>
                            <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-1.5 shadow-sm">
                                <span className="font-satoshi font-medium text-[#003BE2] text-lg">12</span>
                                <span className="font-satoshi font-medium text-[#242528] text-lg">Followers</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsFollowing(!isFollowing)}
                            className="bg-[#D4FB20] text-[#040819] font-satoshi font-medium text-lg px-8 py-2.5 rounded-full w-[101px] h-[46px] flex justify-center items-center"
                        >
                            {isFollowing ? "Following" : "Follow"}
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="w-full bg-white flex-1 pb-24">
                <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 pt-12">
                    {/* Filters Row */}
                    <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-5 h-[48px] font-satoshi font-medium text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                                <MdOutlineFilterAlt className="text-[#4B4C53]" size={18} />
                                <span>Filter</span>
                            </button>
                            <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-5 h-[48px] font-satoshi font-medium text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                                <MdSignalCellularAlt className="text-[#4B4C53]" size={18} />
                                <span>Level</span>
                            </button>
                            <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-5 h-[48px] font-satoshi font-medium text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                                <MdOutlineCategory className="text-[#4B4C53]" size={18} />
                                <span>Category</span>
                            </button>
                        </div>
                        <button className="flex items-center gap-2 border border-[#CED0D3] rounded-full px-5 h-[48px] font-satoshi font-medium text-[16px] text-[#4B4C53] hover:bg-gray-50 transition-colors">
                            <MdOutlineSort className="text-[#4B4C53]" size={18} />
                            <span>Most relevant</span>
                        </button>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, idx) => (
                            <CourseCard
                                key={idx}
                                title={course.title}
                                image={course.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
