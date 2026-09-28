import Image from "next/image";

const logos = [
  "m1.png",
  "m2.png",
  "m3.png",
  "m4.png",
  "m5.png",
];

export default function MarqueeSection() {
  return (
    <section className="w-full bg-[#F5F5F6] h-[202px] flex items-center overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      
      <div className="flex w-max animate-scroll items-center gap-16 md:gap-32 pr-16 md:pr-32">
        {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
          <div key={i} className="flex-shrink-0 w-[170px] h-[41px] relative">
            <Image
              src={`/images/marquee/${src}`}
              alt={`Partner logo ${i}`}
              width={170}
              height={41}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
