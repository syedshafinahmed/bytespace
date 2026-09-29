"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import Image from "next/image";
import Link from "next/link";
import { use, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import { IoShareSocialOutline, IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineVideocam } from "react-icons/md";
import { CourseBadges } from "@/components/ui/CourseBadges";
import { CourseLessonsList } from "@/components/ui/CourseLessonsList";
import { CourseInclusions } from "@/components/ui/CourseInclusions";

const courseTitlesMap: Record<string, string> = {
  "learn-figma-from-basic": "Learn Figma from Basic",
  "build-digital-asset-a-comprehensive-guide": "Build Digital Asset: A Comprehensive Guide",
  "build-digital-asset": "Build Digital Asset: A Comprehensive Guide",
  "the-power-of-big-data": "The Power of Big Data",
  "balancing-productivity-an": "Balancing Productivity and Life",
  "balancing-productivity": "Balancing Productivity and Life",
  "mastering-money-manage": "Mastering Money Management",
  "mastering-money-management": "Mastering Money Management",
  "from-idea-to-startup-succ": "From Idea to Startup Success",
  "from-idea-to-startup-success": "From Idea to Startup Success",
};

const modulesList = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Content Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

function CourseDetailsContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"About" | "Lesson" | "Lessons" | "Reviews">("About");

  const rawId = params?.id ? decodeURIComponent(params.id) : "";
  const queryTitle = searchParams.get("title");
  const courseTitle =
    queryTitle ||
    courseTitlesMap[rawId] ||
    rawId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
    "Build Digital Asset: A Comprehensive Guide";

  return (
    <PublicLayout>
      <div className="relative w-full bg-white">
        {/* Blue Header Background */}
        <section className="absolute top-0 left-0 w-full h-[957px] bg-[#003BE2] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]" />

        {/* Main Content Area */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-8 lg:px-16 pt-[140px] pb-28">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-[850px]">
              <h1 className="font-poppins font-semibold text-[36px] text-[#F5F5F6] leading-tight">
                {courseTitle}
              </h1>
              <p className="font-satoshi text-white/90 text-base md:text-[18px] mt-2">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="font-satoshi font-medium text-[#F1F4FE] text-xl mt-6 text-white/80">
                by{" "}
                <Link
                  href="/creators"
                  className="text-[#D4FB20] font-medium hover:underline transition-colors"
                >
                  purepearl studio
                </Link>
              </p>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: courseTitle, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Course link copied to clipboard!");
                }
              }}
              className="bg-[#D4FB20] text-[#242528] w-[122px] h-[40px] flex justify-center items-center rounded-full px-6 py-2.5 gap-2 font-satoshi self-start md:self-auto shadow-sm"
            >
              <IoShareSocialOutline size={18} />
              <span className="text-[#242528] text-base font-medium">Share</span>
            </button>
          </div>

          {/* Badges / Meta row */}
          <CourseBadges className="mt-6 mb-15" />

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Video Preview Card */}
              <div className="relative w-[720px] h-[479px] rounded-[28px] overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center group">
                <Image
                  src="/images/courses/course_thumbnail.jpg"
                  alt={courseTitle}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Play Button */}
                <button
                  aria-label="Play course preview"
                  className="relative z-10 w-20 h-20 rounded-2xl bg-black/45 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 hover:bg-black/60 transition-all shadow-xl"
                >
                  <FaPlay size={22} className="ml-1 text-white" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-3 mt-[143px]">
                {(["About", "Lesson", "Reviews"] as const).map((tab) => {
                  const isActive = activeTab === tab || (tab === "Lesson" && activeTab === "Lessons");
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`h-11 px-6 rounded-full font-satoshi text-[16px] font-medium flex items-center justify-center transition-colors cursor-pointer ${isActive
                          ? "bg-[#D4FB20] text-[#242528]"
                          : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
                        }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              {activeTab === "About" && (
                <div className="mt-10 flex flex-col">
                  {/* Description */}
                  <div>
                    <h2 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
                      Description
                    </h2>
                    <div className="font-satoshi text-[#4B4C53] text-base leading-relaxed space-y-4">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak */}
                  <div className="mt-6">
                    <h3 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
                      Sneak Peak
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        "/images/courses/about1.jpg",
                        "/images/courses/about2.jpg",
                        "/images/courses/about3.jpg",
                        "/images/courses/about4.jpg",
                      ].map((src, index) => (
                        <div
                          key={index}
                          className="relative aspect-[4/3] h-[125px] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm group/sneak"
                        >
                          <Image
                            src={src}
                            alt={`Sneak Peak ${index + 1}`}
                            fill
                            className="object-cover group-hover/sneak:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points */}
                  <div className="mt-6">
                    <h3 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
                      Key Points
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Foundational Concepts",
                        "Design Principles Mastery",
                        "Advanced Techniques in Digital Creation",
                        "Project Showcase and Critique",
                        "Optimizing for Various Platforms",
                        "Digital Asset Management Best Practices",
                        "Monetization Strategies",
                        "Capstone Project: Building Your Portfolio",
                      ].map((point, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <IoCheckmarkCircle className="text-[#003BE2] flex-shrink-0" size={20} />
                          <span className="font-satoshi text-base text-[#4F4F4F]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {(activeTab === "Lesson" || activeTab === "Lessons") && (
                <div className="mt-10 flex flex-col">
                  {/* Explore the Modules */}
                  <div>
                    <h2 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
                      Explore the Modules
                    </h2>
                    <p className="font-satoshi text-base text-[#4B4C53] leading-relaxed mb-6">
                      Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List */}
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
                      Lesson List
                    </h3>
                    <div className="space-y-6">
                      {modulesList.map((module, index) => (
                        <div key={index} className="flex items-start gap-6">
                          <div className="w-18 h-18 rounded-2xl bg-[#D4FB20] flex items-center justify-center flex-shrink-0">
                            <MdOutlineVideocam className="text-[#242528]" size={40} />
                          </div>
                          <div>
                            <h4 className="font-poppins font-medium text-base text-[#242528]">
                              {module.title}
                            </h4>
                            <p className="font-satoshi text-base text-[#4B4C53] mt-1 leading-relaxed">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lesson Content */}
                  <div className="mt-6">
                    <h3 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
                      Lesson Content
                    </h3>
                    <p className="font-satoshi text-base text-[#4B4C53] leading-relaxed">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div className="mt-6">
                    <h3 className="font-poppins font-semibold text-xl text-[#242528] mb-6">
                      Lesson Progress Tracking
                    </h3>
                    <p className="font-satoshi text-base text-[#4B4C53] leading-relaxed mb-6">
                      Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                    </p>

                    {/* Progress Card */}
                    <div className="border border-[#E5E7EB] rounded-[20px] p-4 bg-white shadow-sm">
                      <p className="font-satoshi text-sm text-[#4B4C53] font-medium mb-2">
                        Learning Progress
                      </p>
                      <p className="font-poppins font-semibold text-[36px] text-[#242528] mb-2">
                        55%
                      </p>
                      <div className="w-full h-2 bg-[#F5F5F6] rounded-full overflow-hidden">
                        <div className="w-[55%] h-full bg-[#D4FB20] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Reviews" && (
                <div className="mt-8">
                  <h2 className="font-poppins font-semibold text-2xl text-[#242528] mb-4">
                    Student Reviews
                  </h2>
                  <p className="font-satoshi text-[#4B4C53] text-base">
                    4.8 out of 5 stars based on 172 reviews.
                  </p>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-8 flex justify-center lg:justify-end">
              <div className="w-[412px] h-auto bg-white rounded-[24px] p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between">
                {/* Top Section */}
                <div>
                  {/* Lessons Header */}
                  <h3 className="font-poppins font-semibold text-[20px] text-[#242528] mb-6">
                    112 Lessons (24 hours)
                  </h3>

                  {/* Sample Lessons */}
                  <CourseLessonsList />

                  <p className="font-satoshi text-base text-[#4B4C53] mb-6">99 more videos</p>

                  {/* Callout copy */}
                  <p className="font-satoshi text-base text-[#4B4C53] leading-relaxed mb-6">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-poppins font-semibold text-[36px] text-[#003BE2]">$25</span>
                    <span className="font-satoshi text-base text-[#4B4C53] ml-1">/lifetime</span>
                  </div>

                  {/* Enroll Button */}
                  <button className="w-full bg-[#D4FB20] h-[46px] text-[#242528] font-satoshi font-medium text-lg py-3.5 flex items-center justify-center rounded-full shadow-sm mb-6">
                    Enroll Now
                  </button>

                  {/* Inclusions */}
                  <CourseInclusions />
                </div>

                {/* Bottom Section */}
                <div>
                  <div className="border-t border-gray-100 my-6" />

                  {/* Creator Profile snippet */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-13 h-13 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src="/images/courses/course_creator.jpg"
                        alt="PurePearl Studio"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-poppins font-medium text-lg text-[#242528]">
                        PurePearl Studio
                      </h5>
                      <p className="font-satoshi text-base text-[#4B4C53]">Professional Creator</p>
                    </div>
                  </div>

                  <p className="font-satoshi text-base text-[#4B4C53] leading-relaxed mb-4">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <Link
                    href="/creators"
                    className="border border-[#CED0D3] rounded-full py-2 px-5 h-[36px] text-xs font-satoshi font-medium text-[#242528] w-fit inline-block"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CourseDetailsContent paramsPromise={params} />
    </Suspense>
  );
}
