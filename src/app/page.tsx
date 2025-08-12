import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LeadershipSection from "@/components/leadership-section";
import WhoAreWeSection from "@/components/who-are-we-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoAreWeSection />
      <LeadershipSection />
      <Footer />
    </div>
  );
}
