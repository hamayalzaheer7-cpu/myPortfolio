import React from "react";
import { ArrowUpRight, Mail, FileText, MapPin, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Hero({ onOpenCv }) {
  return (
    <section
      id="home"
      className="section-spacing border-bottom border-hairline"
      style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Editorial Introduction */}
          <div className="col-lg-7">
            <div className="mb-4">
              <span className="eyebrow-label">
                {PERSONAL_INFO.fullName} — {PERSONAL_INFO.title}
              </span>
            </div>

            <h1
              className="editorial-heading mb-4"
              style={{ fontSize: "clamp(2.65rem, 5.2vw, 4.4rem)" }}
            >
              Building Digital Experiences with{" "}
              <em className="fw-normal text-brown">Creativity</em> &amp;{" "}
              <em className="fw-normal text-brown">Code.</em>
            </h1>

            <p
              className="text-muted-editorial mb-5"
              style={{ fontSize: "1.1rem", maxWidth: "58ch" }}
            >
              {PERSONAL_INFO.tagline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-5">
              <a href="#projects" className="btn-editorial-primary">
                <span>Explore My Work</span>
                <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="btn-editorial-secondary">
                <Mail size={16} />
                <span>Let&apos;s Connect</span>
              </a>

              <button
                type="button"
                onClick={onOpenCv}
                className="btn-editorial-ghost ms-sm-2"
              >
                <FileText size={16} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Subtle Metadata Strip */}
            <div className="pt-4 border-top border-hairline d-flex flex-wrap gap-4 text-muted-editorial small">
              <span className="d-inline-flex align-items-center gap-2">
                <MapPin size={15} className="text-brown" />
                {PERSONAL_INFO.location}
              </span>
              <span className="d-inline-flex align-items-center gap-2">
                <GraduationCap size={15} className="text-brown" />
                {PERSONAL_INFO.degree} ({PERSONAL_INFO.semester})
              </span>
            </div>
          </div>

          {/* Right Column: Typographic Monogram Identity */}
          <div className="col-lg-5">
            <div className="monogram-frame">
              <div className="monogram-inner text-center">
                <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-hairline">
                  <span className="font-mono-tech small text-muted-editorial">
                    PORTFOLIO / EDITION
                  </span>
                  <span className="font-mono-tech small text-brown">MERN</span>
                </div>

                <div
                  className="font-serif my-4 select-none"
                  style={{
                    fontSize: "clamp(4.5rem, 8vw, 6.25rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.04em",
                    color: "var(--ink-charcoal)",
                  }}
                >
                  H<span className="fst-italic text-brown">Z</span>
                </div>

                <p className="font-serif fs-4 mb-1 text-charcoal">
                  {PERSONAL_INFO.fullName}
                </p>
                <p className="font-mono-tech small text-muted-editorial text-uppercase mb-4">
                  {PERSONAL_INFO.title}
                </p>

                <div className="pt-3 border-top border-hairline text-start">
                  <p className="small text-muted-editorial mb-0">
                    <strong className="text-charcoal fw-medium">Focus:</strong>{" "}
                    MongoDB, Express.js, React.js, Node.js &amp; Creative Web
                    Interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
