import TopBanner from "@/components/layout/TopBanner";
import StaticHeader from "@/components/layout/StaticHeader";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import DentistSection from "@/components/sections/DentistSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PlanYourVisitSection from "@/components/sections/PlanYourVisitSection";
import PhotoGuideSection from "@/components/sections/PhotoGuideSection";
import FreeConsultationSection from "@/components/sections/FreeConsultationSection";

export default function Home() {
  return (
    <>
      <main>
        <TopBanner />
        <StaticHeader />
        <Hero />
        <AboutSection />
        <ServicesSection />
        <DentistSection />
        <PlanYourVisitSection />
        <PhotoGuideSection />
        <FreeConsultationSection />
      </main>
    </>
  );
}
