import AcademySection from "@/components/academy-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import InsightsNewsSection from "@/components/insights-news-section";
import LeadershipSection from "@/components/leadership-section";
import WhatWeDoSection from "@/components/what-we-do-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <AcademySection />
      <InsightsNewsSection />
      <LeadershipSection />
      <Footer />
    </div>
  );
}
