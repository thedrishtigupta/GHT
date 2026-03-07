import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { to: "/",             label: "Home",         id: "cnt-nav-btn1" },
    { to: "/about",        label: "About Us",     id: "cnt-nav-btn2" },
    { to: "/services",     label: "Services",     id: "cnt-nav-btn3" },
    { to: "/become-tutor", label: "Become Tutor", id: "cnt-nav-btn4" },
    { to: "/contact",      label: "Contact Us",   id: "cnt-nav-btn5" },
  ];

  return (
    <header>
      <nav className="header-nav">
        <div className="navbar">

          {/* Logo */}
          <div className="left-nav">
            <NavLink to="/">
              <div className="GHT-logo"><img src="" alt="GHT" /></div>
              <div className="GHT-text">
                <h1>Gayatri Home Tutor</h1>
                <p>Delhi NCR's Most Trusted Tutors</p>
              </div>
            </NavLink>
          </div>

          {/* Desktop nav links */}
          <nav className="center-nav">
            {navLinks.map(({ to, label, id }) => (
              <NavLink key={to} to={to} id={id}>{label}</NavLink>
            ))}
          </nav>

          {/* Desktop right CTA */}
          <div className="right-nav">
            <a href="tel:+918505952700" className="link-icon">
              <img src="/assets/images/callwhite.png" className="img-icon" alt="call" />
              <span>+91 85059 52700</span>
            </a>
            <NavLink to="/contact" className="book-btn">Book Free Demo</NavLink>
          </div>

          {/* Hamburger — made visible via responsive.css on mobile */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>

        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="mobile-nav-open">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
              {label}
            </NavLink>
          ))}
          <a href="tel:+918505952700" style={{ padding: "14px 24px", fontSize: "16px" }}>
            📞 +91 85059 52700
          </a>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ margin: "8px 24px 0", textAlign: "center", padding: "14px", background: "var(--color-primary-yellow)", color: "var(--color-grey-bg)", borderRadius: "12px", fontWeight: "bold" }}
          >
            Book Free Demo
          </NavLink>
        </nav>
      )}
    </header>
  );
}
