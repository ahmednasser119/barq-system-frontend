import AcademySection from "@/components/home-page/academy-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/home-page/hero-section";
import LeadershipSection from "@/components/home-page/leadership-section";
import WhatWeDoSection from "@/components/home-page/what-we-do-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <AcademySection />
      <LeadershipSection />
      <Footer />
    </div>
  );
}
