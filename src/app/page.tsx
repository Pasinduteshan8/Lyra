import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { UtilitySection } from "@/components/sections/UtilitySection";
import { TokenomicsSection } from "@/components/sections/TokenomicsSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { HowToGetSection } from "@/components/sections/HowToGetSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <UtilitySection />
        <TokenomicsSection />
        <RoadmapSection />
        <HowToGetSection />
        <EcosystemSection />
        <CommunitySection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
