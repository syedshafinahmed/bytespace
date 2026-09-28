import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Blue Top Section with Grid */}
      <section className="relative w-full bg-[#003BE2] min-h-[800px] flex-1 flex flex-col overflow-hidden bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]">
        {/* Navbar */}
        <Navbar />

        {/* 404 Content Container */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-8 lg:px-16 flex-1 flex flex-col items-center justify-center text-center">
          
          {/* 404 text fading out */}
          <div className="relative pointer-events-none select-none z-0 mt-[80px] md:mt-[120px]">
            <span className="font-poppins font-semibold text-[250px] md:text-[350px] lg:text-[480px] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-[#D4FB20] to-transparent opacity-90 block">
              404
            </span>
          </div>

          {/* Foreground Messaging */}
          <div className="relative z-10 flex flex-col items-center mt-[-60px] md:mt-[-100px] lg:mt-[-70px]">
            <h1 className="font-poppins font-semibold text-[48px] md:text-[72px] text-white leading-[1.2] mb-6">
              The page you are looking<br />for doesn't exist
            </h1>
            <p className="font-satoshi text-[18px] text-[#E5E6E8] mb-10">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link 
              href="/"
              className="bg-[#D4FB20] text-[#242528] font-satoshi font-semibold text-[18px] w-[163px] h-[46px] flex items-center justify-center rounded-full shadow-xl mb-[125px]"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
