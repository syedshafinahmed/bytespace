import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full relative bg-[#003BE2] flex justify-center overflow-hidden bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:112px_112px]">
      {/* Background Image containing 3D ornaments */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/cta/background.png" 
          alt="Background ornaments" 
          fill
          className="object-cover object-center" 
          priority
        />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 relative z-10 py-[84px] flex flex-col items-center justify-center text-center">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-[40px]">
          <h2 className="font-poppins font-semibold text-[40px] md:text-[44px] text-[#F5F5F6] leading-[1.2]">
            Unlock Your Potential as a<br />Creator with ByteSpace
          </h2>
          <p className="font-satoshi text-[18px] text-[#F5F5F6] leading-[1.7]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a <br /> part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your <br /> expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Link 
            href="/creator"
            className="bg-[#D4FB20] text-[#242528] font-satoshi font-medium text-[18px] px-10 py-4 rounded-full"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
