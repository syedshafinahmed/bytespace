import Banner from "@/components/home/Banner";
import ExploreSection from "@/components/home/ExploreSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import GrowthSection from "@/components/home/GrowthSection";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";
import PublicLayout from "@/components/layout/PublicLayout";

export default function Home() {
  return (
    <PublicLayout>
      <Banner />
      <MarqueeSection />
      <ExploreSection />
      <GrowthSection />
      <CTA />
      <Testimonial />
    </PublicLayout>
  );
}
