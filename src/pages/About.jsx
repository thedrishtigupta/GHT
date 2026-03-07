import { Link } from "react-router-dom";
import PagesHero from "../components/layout/PagesHero";
import AboutSections from "../components/sections/AboutSections";

export default function About() {
  return (
    <main>
      <PagesHero
        color="green"
        title="About Us"
        subtitle="Empowering students across Delhi NCR with personalized home tuition since 2010"
      />

      <section className="page-sections">
        <div className="section-body" id="about-sections">
          <AboutSections />
        </div>
      </section>

      {/* CTA */}
      <section className="pages-cta">
        <div className="left-cta">
          <h2 className="red-text">Ready to Excel?</h2>
          <h4>Join Thousands of Students Building Strong Foundations for Lifelong Success</h4>
          <p className="cta-text">Experience the difference personalized home tuition can make.</p>
          <span className="book-button">
            <Link to="/contact">Get Started Today!</Link>
          </span>
        </div>
        <div className="right-cta">
          <img src="" alt="" />
        </div>
      </section>
    </main>
  );
}
