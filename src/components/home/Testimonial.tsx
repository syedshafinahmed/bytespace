"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    content: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "/images/testimonials/sarah.png"
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    content: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "/images/testimonials/james.png"
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    content: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "/images/testimonials/alex.png"
  }
];

export default function Testimonial() {
  return (
    <section className="w-full relative bg-[#FAFAFA] py-28 flex justify-center overflow-hidden z-10">
      
      {/* Decorative Gradients */}
      <div className="absolute top-[-5%] left-[38%] w-[600px] h-[600px] bg-[#D4FB20] rounded-full blur-[160px] opacity-70 z-0 pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#D4FB20] rounded-full blur-[150px] opacity-40 z-0 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#003BE2] rounded-full blur-[160px] opacity-20 z-0 pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-20">
          <h2 className="font-poppins font-semibold text-[44px] md:text-[54px] text-black leading-[1.2]">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="font-satoshi text-[18px] text-[#4F4F4F] leading-[1.7] lg:max-w-[600px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full z-10 relative"
            >
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-gray-100 mb-[24px] relative">
                <Image 
                  src={t.avatar} 
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-poppins font-semibold text-[20px] text-[#000000] mb-1">
                {t.name}
              </h3>
              <p className="font-satoshi text-[18px] text-[#003BE2] mb-[24px]">
                {t.role}
              </p>
              <p className="font-satoshi text-[18px] text-[#4F4F4F] leading-[1.8] flex-1">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
