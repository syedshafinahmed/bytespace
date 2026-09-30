import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative w-full bg-[#003BE2] h-[820px] sm:h-[920px] lg:h-[1024px] pt-[90px] sm:pt-[110px] lg:pt-[120px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px] overflow-hidden">
      {/* frame_tl */}
      <div className="hidden lg:block absolute top-[200px] left-0 w-[310px] pointer-events-none select-none z-10">
        <Image
          src="/images/banner/frame_tl.png"
          alt=""
          width={385}
          height={385}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* frame_tr */}
      <div className="hidden lg:block absolute top-[200px] right-0 w-[310px] pointer-events-none select-none z-10">
        <Image
          src="/images/banner/frame_tr.png"
          alt=""
          width={370}
          height={370}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Mobile Device */}
      {/* frame_tl */}
      <div className="block lg:hidden absolute top-[500px] left-0 w-[150px] pointer-events-none select-none z-10">
        <Image
          src="/images/banner/frame_tl.png"
          alt=""
          width={385}
          height={385}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* frame_tr */}
      <div className="block lg:hidden absolute top-[450px] right-0 w-[120px] pointer-events-none select-none z-10">
        <Image
          src="/images/banner/frame_tr.png"
          alt=""
          width={370}
          height={370}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* cone_triangle */}
      <div className="block lg:hidden absolute bottom-70 right-32 w-[150px]">
        <Image
          src="/images/banner/cone_triangle.png"
          alt=""
          width={188}
          height={188}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* cone_oval */}
      <div className="block lg:hidden absolute bottom-0 right-0 z-100 w-[150px]">
        <Image
          src="/images/banner/cone_oval.png"
          alt=""
          width={342}
          height={342}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Center 1440px Decorative Canvas */}
      <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[1024px] pointer-events-none select-none z-10">
        {/* frame */}
        <div className="absolute bottom-90 left-32 w-[175px]">
          <Image
            src="/images/banner/frame.png"
            alt=""
            width={175}
            height={175}
            className="w-full h-auto object-contain -rotate-12"
          />
        </div>

        {/* cone_triangle */}
        <div className="absolute bottom-90 right-32 w-[188px]">
          <Image
            src="/images/banner/cone_triangle.png"
            alt=""
            width={188}
            height={188}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* cone_oval */}
        <div className="absolute bottom-0 left-[31px] w-[300px]">
          <Image
            src="/images/banner/cone_oval.png"
            alt=""
            width={342}
            height={342}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* frame */}
        <div className="absolute bottom-0 -right-0 w-[300px]">
          <Image
            src="/images/banner/frame_br.png"
            alt=""
            width={330}
            height={330}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 h-full flex flex-col justify-between lg:h-[904px]">
        {/* Text + Search */}
        <div className="text-center pt-4 sm:pt-8 lg:pt-14">
          <h1 className="font-poppins font-semibold text-white leading-tight">
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
              Get Access to Hundreds <br className="hidden sm:inline" />Courses Available
            </span>
          </h1>

          <p className="mt-3 sm:mt-6 lg:mt-[32px] mb-6 sm:mb-10 lg:mb-[60px] font-satoshi text-[#E5E6E8] text-sm sm:text-base lg:text-[18px] leading-relaxed mx-auto px-2">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search row */}
          <div className="flex items-center justify-center gap-2 sm:gap-[16px] w-full max-w-[580px] mx-auto px-2 sm:px-0">
            {/* Search bar */}
            <div className="flex items-center bg-white rounded-full flex-1 sm:flex-initial sm:w-[461px] h-[48px] sm:h-[52px] pl-4 sm:pl-5 pr-3 sm:pr-4 shadow-xl min-w-0">
              <IoSearchOutline size={18} className="text-gray-400 flex-shrink-0" />
              <input
                id="banner-search"
                type="text"
                placeholder="Course, topic, creator"
                className="flex-1 font-satoshi text-sm sm:text-[18px] text-[#82868E] placeholder-gray-400 bg-transparent outline-none px-2 sm:px-3 min-w-0"
              />
            </div>

            {/* Search button */}
            <button
              id="banner-search-btn"
              className="bg-[#CBFC01] text-[#242528] font-satoshi font-semibold text-sm sm:text-[18px] px-5 sm:px-8 rounded-full hover:brightness-95 active:scale-95 transition-all duration-200 flex-shrink-0 h-[48px] sm:h-[52px]"
            >
              Search
            </button>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="relative flex-1 mx-auto w-full max-w-[900px] min-h-[380px] sm:min-h-[460px] lg:min-h-0">
          {/* UI/UX Design */}
          <div className="absolute top-15 sm:top-14 lg:top-33 left-2 sm:left-10 lg:left-35 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl px-3 py-2 sm:px-4 sm:py-3 w-[150px] sm:w-[185px] lg:w-[208px] z-30 transition-all">
            <p className="font-satoshi font-medium text-xs sm:text-sm lg:text-base text-[#242528]">UI/UX Design</p>
            <p className="font-satoshi text-[10px] sm:text-[11px] lg:text-[12px] text-[#82868E] mt-0.5">300 Coaches · 500+ Students</p>
          </div>

          {/* Learning Progress */}
          <div className="absolute top-6 sm:top-16 lg:top-35 right-2 sm:right-8 lg:right-25 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2.5 sm:p-3.5 lg:p-4 w-[140px] sm:w-[185px] lg:w-[232px] z-30 transition-all">
            <p className="font-satoshi text-[11px] sm:text-xs lg:text-[14px] text-[#242528]">Learning Progress</p>
            <p className="font-poppins font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#242528] leading-none mt-1 sm:mt-[8px]">55%</p>
            <div className="mt-1.5 sm:mt-[8px] h-1 sm:h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[55%] bg-[#D4FB20] rounded-full" />
            </div>
          </div>

          {/* Happy Students */}
          <div className="absolute bottom-4 sm:bottom-10 lg:bottom-auto lg:top-80 left-2 sm:left-8 lg:left-20 bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-2.5 sm:p-3.5 lg:p-4 w-[160px] sm:w-[205px] lg:w-[258px] z-30 transition-all">
            <p className="font-satoshi font-semibold text-xs sm:text-sm lg:text-base text-[#242528]">Happy Students</p>
            <div className="flex items-center gap-1 mt-0.5">
              <p className="font-satoshi text-[10px] sm:text-[11px] lg:text-[12px] text-[#242528]">4.5 (240)</p>
              <FaStar className="w-3 h-3 sm:w-3.5 sm:h-3.5" color="#D4FB20" />
            </div>
            <Image
              src="/images/banner/home_happy_students.png"
              alt=""
              width={232}
              height={43}
              className="w-full h-auto mt-1.5 sm:mt-2"
            />
          </div>
        </div>
      </div>

      {/* Lime arch (Ellipse 7) */}
      <div className="hidden lg:block absolute bottom-0 inset-x-0 mx-auto w-[1149px] pointer-events-none">
        <Image
          src="/images/banner/Ellipse 7.png"
          alt=""
          width={1149}
          height={1149}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Student Image */}
      <div className="absolute bottom-0 inset-x-0 mx-auto z-20 w-[470px] lg:w-[700px] translate-x-[15px] sm:translate-x-[35px] lg:translate-x-[62px]">
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
