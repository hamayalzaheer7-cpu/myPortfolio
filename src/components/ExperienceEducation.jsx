import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "../data/portfolioData";

export default function ExperienceEducation() {
  return (
    <section className="section-spacing border-bottom border-hairline">
      <div className="container">
        <div className="row g-5">
          {/* Professional Experience */}
          <div id="experience" className="col-lg-6">
            <span className="eyebrow-label mb-3">04 / Experience</span>
            <h2
              className="editorial-heading mb-4"
              style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)" }}
            >
              Professional Experience
            </h2>

            {EXPERIENCE.map((item, index) => (
              <div
                key={index}
                className="p-4 p-md-5 bg-beige border border-hairline"
              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center gap-2 text-brown">
                    <Briefcase size={18} />
                    <span className="font-mono-tech small text-uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif fs-3 mb-1 text-charcoal">
                  {item.role}
                </h3>
                <p className="font-mono-tech small text-brown mb-3">
                  {item.organization}
                </p>
                <p className="text-muted-editorial mb-0">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div id="education" className="col-lg-6">
            <span className="eyebrow-label mb-3">05 / Education</span>
            <h2
              className="editorial-heading mb-4"
              style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)" }}
            >
              Academic Background
            </h2>

            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="p-4 p-md-5 bg-beige border border-hairline"
              >
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center gap-2 text-brown">
                    <GraduationCap size={19} />
                    <span className="font-mono-tech small text-uppercase">
                      {edu.status}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif fs-3 mb-1 text-charcoal">
                  {edu.degree}
                </h3>
                <p className="font-mono-tech small text-brown mb-3">
                  {edu.institution} — {edu.location}
                </p>
                <p className="text-muted-editorial mb-0">
                  Focused on software development, modern web engineering,
                  databases, and building practical full-stack applications.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
