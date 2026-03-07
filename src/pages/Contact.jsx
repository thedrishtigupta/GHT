import PagesHero from "../components/layout/PagesHero";
import ContactSections from "../components/sections/ContactSections";

export default function Contact() {
  return (
    <main>
      <PagesHero
        color="blue"
        title="Get in Touch"
        subtitle="Book a free demo or reach out with any questions"
      />
      <section className="page-sections">
        <div className="section-body">
          <ContactSections />
        </div>
      </section>
    </main>
  );
}
