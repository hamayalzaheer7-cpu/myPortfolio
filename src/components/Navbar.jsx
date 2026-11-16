import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="navbar-editorial sticky-top py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <a
            href="#home"
            className="text-decoration-none d-flex align-items-baseline gap-2"
          >
            <span
              className="font-serif fw-semibold text-charcoal"
              style={{ fontSize: "1.65rem", letterSpacing: "0.06em" }}
            >
              {PERSONAL_INFO.brandName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="d-none d-lg-flex align-items-center gap-4">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`nav-link-editorial ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="d-lg-none btn p-1 border-0 text-charcoal"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <nav className="d-lg-none pt-3 pb-2 mt-3 border-top border-hairline">
            <div className="d-flex flex-column gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="nav-link-editorial py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
