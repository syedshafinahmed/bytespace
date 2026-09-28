import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export default function GrowthSection() {
  return (
    <section className="w-full relative bg-[#FAFAFA] py-24 overflow-hidden border-t border-gray-50">
      {/* Background gradients/blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
         {/* Top Glow */}
         <div className="absolute top-[-10%] left-[15%] w-[450px] h-[500px] bg-[#D4FB20] opacity-40 blur-[100px] rounded-full" />
         {/* Bottom Glow */}
         <div className="absolute bottom-[10%] left-[-8%] w-[450px] h-[500px] bg-[#D4FB20] opacity-40 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 relative z-10 flex flex-col gap-32">
        
        {/* Top Row: Path to Professional Growth */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Text */}
          <div className="lg:w-[45%] flex flex-col">
            <h2 className="font-poppins font-semibold text-[44px] text-[#242528] leading-[1.2] mb-6">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="font-satoshi text-lg text-[#4B4C53] mb-12 leading-relaxed">
              Explore our curated selection of courses tailored to enhance <br /> your capabilities and accelerate your career journey. <br /> Whether you are looking to sharpen specific skills, gain <br /> industry expertise, or embark on a new career path entirely, <br /> we have the resources you need.
            </p>
            
            {/* Stats */}
            <div className="flex items-center gap-[56px]">
              <div>
                <h3 className="font-poppins font-medium text-[36px] text-[#003BE2]">12K</h3>
                <p className="font-satoshi text-[18px] text-[#4B4C53]">Students</p>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-[36px] text-[#003BE2]">70+</h3>
                <p className="font-satoshi text-[18px] text-[#4B4C53]">Courses</p>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-[36px] text-[#003BE2]">16</h3>
                <p className="font-satoshi text-[18px] text-[#4B4C53]">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:w-[50%] relative flex justify-center lg:justify-end mt-16 lg:mt-0">
            <div className="relative w-full max-w-[500px] h-[450px] lg:h-[480px] flex items-end justify-center">
              {/* Card */}
              <div className="absolute -top-5 -left-4 md:-left-12 z-0 w-[300px] md:w-[320px]">
                <Image src="/images/growth/card.png" alt="Course Card" width={340} height={240} className="w-full h-auto drop-shadow-xl rounded-[24px]" />
              </div>

              {/* Main Image */}
              <div className="absolute top-1 -left-20 z-10 w-[777px] h-[840px]">
                <Image src="/images/growth/right.png" alt="Student Learning" width={677} height={740} className="object-contain object-bottom drop-shadow-2xl" />
              </div>

              {/* Stat Card */}
              <div className="absolute top-40 md:top-48 -right-4 md:-right-8 z-20 w-[240px] md:w-[260px]">
                <Image src="/images/growth/stat.png" alt="Learning Progress" width={280} height={160} className="w-full h-auto drop-shadow-2xl rounded-[20px]" />
              </div>

              {/* Mask (Lime Squiggle) */}
              <div className="absolute top-16 md:top-30 right-1 z-30 w-[100px] md:w-[120px]">
                <Image src="/images/growth/mask.png" alt="Decoration" width={140} height={140} className="w-full h-auto drop-shadow-lg" />
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
