import { Link } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import AboutSections from "../components/sections/AboutSections";
import ServicesSections from "../components/sections/ServicesSections";
import ContactSections from "../components/sections/ContactSections";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* About Section */}
      <section className="sections">
        <div className="section-container">
          <div className="section-heading" id="about-heading"><h1>About Us</h1></div>
          <p className="sections-p">Empowering students across Delhi NCR with personalized home tuition since 2010</p>
        </div>
        <div className="section-body"><AboutSections /></div>
      </section>

      {/* Services Section */}
      <section className="sections">
        <div className="section-container">
          <div className="section-heading" id="services-heading"><h1>Services</h1></div>
          <p className="sections-p">Comprehensive home tuition services for every academic need</p>
        </div>
        <div className="section-body"><ServicesSections /></div>
      </section>

      {/* Contact Section */}
      <section className="sections">
        <div className="section-container">
          <div className="section-heading" id="contact-heading"><h1>Contact Us</h1></div>
          <p className="sections-p">Book a free demo or reach out with any questions</p>
        </div>
        <div className="section-body"><ContactSections /></div>
      </section>
    </main>
  );
}
