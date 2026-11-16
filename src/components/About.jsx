import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="section-spacing bg-beige border-bottom border-hairline"
    >
      <div className="container">
        <div className="row g-5">
          {/* Left Sticky Header */}
          <div className="col-lg-4">
            <span className="eyebrow-label mb-3">01 / About Me</span>
            <h2
              className="editorial-heading mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.85rem)" }}
            >
              Bridging structured engineering with visual clarity.
            </h2>
            <div className="p-4 bg-cream border border-hairline">
              <p className="font-mono-tech small text-brown text-uppercase mb-2">
                Career Objective
              </p>
              <p className="small text-charcoal mb-0">
                {PERSONAL_INFO.careerGoal}
              </p>
            </div>
          </div>

          {/* Right Narrative & Interests */}
          <div className="col-lg-8">
            <div className="ps-lg-4">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-charcoal mb-4"
                  style={{ fontSize: "1.05rem" }}
                >
                  {paragraph}
                </p>
              ))}

              <div className="row g-4 mt-4 pt-4 border-top border-hairline">
                {/* Professional Interests */}
                <div className="col-md-6">
                  <h3 className="font-serif fs-4 mb-3 text-charcoal">
                    Professional Interests
                  </h3>
                  <ul className="list-unstyled mb-0">
                    {PERSONAL_INFO.professionalInterests.map((interest) => (
                      <li
                        key={interest}
                        className="py-2 border-bottom border-hairline d-flex align-items-center justify-content-between small text-muted-editorial"
                      >
                        <span>{interest}</span>
                        <span className="text-brown">—</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Creative & Personal Interests */}
                <div className="col-md-6">
                  <h3 className="font-serif fs-4 mb-3 text-charcoal">
                    Creative &amp; Additional Interests
                  </h3>
                  <ul className="list-unstyled mb-0">
                    {PERSONAL_INFO.additionalInterests.map((interest) => (
                      <li
                        key={interest}
                        className="py-2 border-bottom border-hairline d-flex align-items-center justify-content-between small text-muted-editorial"
                      >
                        <span>{interest}</span>
                        <span className="text-brown">—</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
