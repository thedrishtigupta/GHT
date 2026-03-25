import { Link } from "react-router-dom";
import { PageSection } from "../components/sections/PageSection";
import HeroSection from "../components/sections/HeroSection";
import AboutSections from "../components/sections/AboutSections";
import ServicesSections from "../components/sections/ServicesSections";
import ContactSections from "../components/sections/ContactSections";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <PageSection
        id="about-heading"
        title="About Us"
        subtitle="Empowering students across Delhi NCR with personalized home tuition since 2010"
      >
        <AboutSections />
      </PageSection>

      <PageSection
        id="services-heading"
        title="Services"
        subtitle="Comprehensive home tuition services for every academic need"
      >
        <ServicesSections />
      </PageSection>

      <PageSection
        id="contact-heading"
        title="Contact Us"
        subtitle="Book a free demo or reach out with any questions"
      >
        <ContactSections />
      </PageSection>
    </main>
  );
}
