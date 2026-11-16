import React from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-spacing border-bottom border-hairline"
    >
      <div className="container">
        <div className="row mb-5 align-items-end">
          <div className="col-lg-7">
            <span className="eyebrow-label mb-3">02 / Capabilities</span>
            <h2
              className="editorial-heading mb-0"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.85rem)" }}
            >
              Technical Stack &amp; Creative Disciplines
            </h2>
          </div>
          <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
            <p className="text-muted-editorial small mb-0">
              Organized across full-stack web architecture, databases, developer
              tooling, and visual content creation.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {SKILL_CATEGORIES.map((group) => (
            <div key={group.index} className="col-md-6 col-lg-4">
              <div className="h-100 p-4 border border-hairline bg-cream d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom border-hairline">
                    <h3 className="font-serif fs-4 mb-0 text-charcoal">
                      {group.category}
                    </h3>
                    <span className="font-mono-tech small text-brown">
                      {group.index}
                    </span>
                  </div>

                  <ul className="list-unstyled mb-0">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="py-1.5 d-flex align-items-center gap-2 text-muted-editorial"
                        style={{ fontSize: "0.95rem" }}
                      >
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            backgroundColor: "var(--accent-brown)",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
