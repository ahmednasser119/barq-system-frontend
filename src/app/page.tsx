import AcademySection from "@/components/academy-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import InsightsNewsSection from "@/components/insights-news-section";
import LeadershipSection from "@/components/leadership-section";
import WhatWeDoSection from "@/components/what-we-do-section";
import WhoAreWeSection from "@/components/who-are-we-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <WhoAreWeSection /> */}
      <WhatWeDoSection />
      <AcademySection />
      <InsightsNewsSection />
      <LeadershipSection />
      <Footer />
    </div>
  );
}
