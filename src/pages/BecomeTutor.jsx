import { Link } from "react-router-dom";
import PagesHero from "../components/layout/PagesHero";
import BecomeTutorForm from "../components/forms/BecomeTutorForm";

export default function BecomeTutor() {
  return (
    <main>
      <PagesHero
        color="orange"
        title="Become A Tutor"
        subtitle="Simple Application Process. Zero hassle."
      />

      <section className="pages-cta" id="tutor-cta">
        {/* Form side */}
        <div className="left-cta" id="tutor-left-cta">
          <h2 className="pink-text" id="register-h3">Registration Form</h2>
          <div id="tutor-form-container">
            <BecomeTutorForm />
          </div>
        </div>

        {/* Sticky info card */}
        <div className="right-cta" id="tutor-right-cta">
          <div className="notice-card" id="services-right-cta">
            <div className="right-upper-cta-text">
              <h3>⚠ Before You Register</h3>
              <p>Please review our <strong>Terms &amp; Conditions</strong> carefully to ensure a smooth onboarding process.</p>
            </div>
            <div className="right-mid-cta-btn">
              <Link to="/terms" id="services-cta-btn1" className="cta-btn">Terms &amp; Conditions</Link>
            </div>
            <div className="right-lower-cta-text">
              <p>For any queries, call us at</p>
              <a href="tel:+918505952700" id="right-cta-contact-number" className="red-text">+91 85059 52700</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
