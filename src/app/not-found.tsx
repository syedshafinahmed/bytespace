import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";

export default function NotFound() {
  return (
    <PublicLayout>
      {/* Blue Top Section with Grid */}
      <section className="relative w-full bg-[#003BE2] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] pt-[90px] sm:pt-[120px] flex-1 flex flex-col overflow-hidden bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]">
        {/* 404 Content Container */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-16 flex-1 flex flex-col items-center justify-center text-center">
          
          {/* 404 text fading out */}
          <div className="relative pointer-events-none select-none z-0 mt-6 sm:mt-[80px] md:mt-[120px]">
            <span className="font-poppins font-semibold text-[130px] sm:text-[220px] md:text-[350px] lg:text-[480px] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-[#D4FB20] to-transparent opacity-90 block">
              404
            </span>
          </div>

          {/* Foreground Messaging */}
          <div className="relative z-10 flex flex-col items-center mt-[-30px] sm:mt-[-60px] md:mt-[-100px] lg:mt-[-70px]">
            <h1 className="font-poppins font-semibold text-2xl sm:text-4xl md:text-[54px] lg:text-[72px] text-white leading-[1.2] mb-4 sm:mb-6 px-2">
              The page you are looking<br className="hidden sm:inline" /> for doesn&apos;t exist
            </h1>
            <p className="font-satoshi text-sm sm:text-base lg:text-[18px] text-[#E5E6E8] mb-6 sm:mb-8 lg:mb-10 max-w-md sm:max-w-none px-4">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link 
              href="/"
              className="bg-[#D4FB20] text-[#242528] font-satoshi font-semibold text-base lg:text-[18px] w-[150px] sm:w-[163px] h-[44px] sm:h-[46px] flex items-center justify-center rounded-full shadow-xl mb-12 sm:mb-20 lg:mb-[125px] hover:bg-[#c8f018] transition-colors"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>
    </PublicLayout>
  );
}
