import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export default function GrowthSection() {
  return (
    <section className="w-full relative bg-[#FAFAFA] py-24 overflow-hidden border-t border-gray-50">
      {/* Background gradients/blobs anchored to content container */}
      <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden z-0">
        <div className="w-full max-w-[1440px] h-full relative">
          {/* Top Glow */}
          <div className="absolute -top-16 left-[10%] w-[450px] h-[500px] bg-[#D4FB20] opacity-40 blur-[120px] rounded-full" />
          {/* Bottom Glow */}
          <div className="absolute bottom-[8%] -left-16 w-[450px] h-[500px] bg-[#D4FB20] opacity-40 blur-[120px] rounded-full" />
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col gap-16 sm:gap-24 lg:gap-32">
        
        {/* Top Row: Path to Professional Growth */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-[44px] text-[#242528] leading-[1.2] mb-4 sm:mb-6">
              Your Path to Professional<br className="hidden sm:inline" />Growth Starts Here!
            </h2>
            <p className="font-satoshi text-base sm:text-lg text-[#4B4C53] mb-8 sm:mb-12 leading-relaxed">
              Explore our curated selection of courses tailored to enhance <br className="hidden lg:inline" /> your capabilities and accelerate your career journey. <br className="hidden lg:inline" /> Whether you are looking to sharpen specific skills, gain <br className="hidden lg:inline" /> industry expertise, or embark on a new career path entirely, <br className="hidden lg:inline" /> we have the resources you need.
            </p>
            
            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-10 lg:gap-[56px] justify-between sm:justify-start">
              <div>
                <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-[36px] text-[#003BE2]">12K</h3>
                <p className="font-satoshi text-sm sm:text-base lg:text-[18px] text-[#4B4C53]">Students</p>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-[36px] text-[#003BE2]">70+</h3>
                <p className="font-satoshi text-sm sm:text-base lg:text-[18px] text-[#4B4C53]">Courses</p>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-2xl sm:text-3xl lg:text-[36px] text-[#003BE2]">16</h3>
                <p className="font-satoshi text-sm sm:text-base lg:text-[18px] text-[#4B4C53]">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="w-full lg:w-[50%] relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] h-auto lg:h-[480px] flex items-end justify-center">
              {/* Card - Large Screen Only */}
              <div className="hidden lg:block absolute -top-5 -left-4 md:-left-12 z-0 w-[300px] md:w-[320px]">
                <Image src="/images/growth/card.png" alt="Course Card" width={340} height={240} className="w-full h-auto drop-shadow-xl rounded-[24px]" />
              </div>

              {/* Main Image (right.png) - Responsive on mobile, preserved on large screen */}
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none lg:absolute lg:top-1 lg:-left-20 lg:z-10 lg:w-[777px] lg:h-[840px]">
                <Image src="/images/growth/right.png" alt="Student Learning" width={677} height={740} className="w-full h-auto object-contain object-bottom drop-shadow-2xl" />
              </div>

              {/* Stat Card - Large Screen Only */}
              <div className="hidden lg:block absolute top-55 -right-21 z-20 w-[240px] md:w-[260px]">
                <Image src="/images/growth/stat.png" alt="Learning Progress" width={280} height={160} className="w-full h-auto drop-shadow-2xl rounded-[20px]" />
              </div>

              {/* Mask (Lime Squiggle) - Large Screen Only */}
              <div className="hidden lg:block absolute top-20 -right-30 z-30 w-[215px]">
                <Image src="/images/growth/mask.png" alt="Decoration" width={215} height={215} className="w-full h-auto drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Create & Manage Courses */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mt-12">
          {/* Left Image */}
          <div className="lg:w-[50%] relative flex justify-start">
            <div className="relative w-full max-w-[650px]">
              <Image 
                src="/images/growth/left.png" 
                alt="Creator Management" 
                width={700} 
                height={650} 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:w-[45%] flex flex-col">
            <h2 className="font-poppins font-semibold text-[44px] text-[#242528] leading-[1.2] mb-6">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="font-satoshi text-lg text-[#4B4C53] mb-10 leading-relaxed max-w-[500px]">
              <strong className="text-[#242528] font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            
            {/* Bullet Points */}
            <ul className="flex flex-col gap-5">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <MdCheckCircle className="w-[24px] h-[24px] text-[#003BE2]" />
                  <span className="font-satoshi text-[18px] text-[#242528] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
}
