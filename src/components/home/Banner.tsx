import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative w-full bg-[#003BE2] h-[1024px] pt-[120px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]">
      {/* ── Hero Content ── */}
      <div className="relative z-30 max-w-[1440px] w-full mx-auto px-8 lg:px-16 h-[904px]">

        {/* Text + Search */}
        <div className="text-center pt-14">
          <h1 className="font-poppins font-bold text-white leading-tight">
            <span className="block text-5xl sm:text-6xl lg:text-7xl mt-2">
              Get Access to Hundreds <br />Courses Available
            </span>
          </h1>

          {/* 3D Ornament */}
          <div className="relative h-0 overflow-visible pointer-events-none select-none">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1440px] h-[804px] z-[-1]"
            >
              <Image
                src="/images/3d ornament.png"
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <p className="mt-[32px] font-satoshi text-white/70 text-[18px] leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* ── Search row ── */}
          <div className="mt-[60px] flex items-center justify-center gap-[16px]">
            {/* Search bar */}
            <div
              className="flex items-center bg-white rounded-full w-[461px] h-[52px] pl-5 pr-4 shadow-xl flex-shrink-0"
            >
              <IoSearchOutline size={18} className="text-gray-400 flex-shrink-0" />
              <input
                id="banner-search"
                type="text"
                placeholder="Course, topic, creator"
                className="flex-1 font-satoshi text-[18px] text-[#82868E] placeholder-gray-400 bg-transparent outline-none px-3"
              />
            </div>

            {/* Search button — separate, height matches bar */}
            <button
              id="banner-search-btn"
              className="bg-[#CBFC01] text-[#242528] font-satoshi font-semibold text-[18px] px-8 rounded-full hover:brightness-95 active:scale-95 transition-all duration-200 flex-shrink-0 h-[52px]"
            >
              Search
            </button>
          </div>
        </div>

        {/* ── Bottom: Arch + Student + Floating Cards ── */}
        <div className="relative flex-1 mx-auto w-full max-w-[900px]">

          {/*  UI/UX Design */}
          <div className="absolute top-33 left-35 hidden sm:block bg-white rounded-2xl shadow-2xl px-4 py-3 h-[70px] w-[208px]">
            <p className="font-satoshi font-medium text-base text-[#242528]">UI/UX Design</p>
            <p className="font-satoshi text-[12px] text-[#82868E] mt-0.5">300 Coaches · 500+ Students</p>
          </div>

          {/*  Learning Progress */}
          <div className="absolute top-35 right-25 hidden sm:block bg-white rounded-2xl shadow-2xl p-4 w-[232px] h-[131px]">
            <p className="font-satoshi text-[14px] text-[#242528]">Learning Progress</p>
            <p className="font-poppins font-semibold text-5xl text-[#242528] leading-none mt-[8px]">55%</p>
            <div className="mt-[8px] h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[55%] bg-[#D4FB20] rounded-full" />
            </div>
          </div>

          {/* Happy Students */}
          <div className="absolute top-80 left-20 hidden sm:block bg-white rounded-2xl shadow-2xl p-4 w-[258px] h-[121px]">
            <p className="font-satoshi font-semibold text-base text-[#242528]">Happy Students</p>
            <div className="flex items-center gap-1 mt-0.5">
              <p className="font-satoshi text-[12px] text-[#242528]">4.5 (240)</p>
              <FaStar className="w-3.5 h-3.5" color="#D4FB20" />
            </div>
            <Image src="/images/banner/home_happy_students.png" alt="" width={144} height={50} className="w-[232px] h-[43px] mt-2" />
          </div>
        </div>
      </div>
      {/* Lime arch — anchored to section bottom */}
      <div className="absolute bottom-0 inset-x-0 mx-auto w-[1149px] pointer-events-none">
        <Image
          src="/images/banner/Ellipse 7.png"
          alt=""
          width={1149}
          height={1149}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Student image — anchored to section bottom */}
      <div className="absolute bottom-0 inset-x-0 mx-auto z-20 w-[700px] translate-x-[62px]">
        <Image
          src="/images/banner/Image.png"
          alt="Student with headphones and laptop"
          width={578}
          height={541}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
