import Banner from "@/components/home/Banner";
import ExploreSection from "@/components/home/ExploreSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import GrowthSection from "@/components/home/GrowthSection";

export default function Home() {
  return (
    <>
      <Banner />
      <MarqueeSection />
      <ExploreSection />
      <GrowthSection />
    </>
  );
}
