// Reusable hero banner used on every page except Home
// Usage: <PagesHero color="green" title="About Us" subtitle="..." />

export default function PagesHero({ color, title, subtitle }) {
  return (
    <section className={`pages-hero ${color}`} id="contact-hero">
      <div className="pages-hero-container">
        <div className="page-hero-heading">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
