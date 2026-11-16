import React from "react";
import { Printer, X } from "lucide-react";
import {
  PERSONAL_INFO,
  SKILL_CATEGORIES,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
} from "../data/portfolioData";

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="editorial-modal-backdrop" onClick={onClose}>
      <div
        className="editorial-modal-box"
        style={{ maxWidth: "820px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="d-flex justify-content-between align-items-center pb-3 mb-4 border-bottom border-hairline no-print">
          <span className="font-mono-tech small text-brown">
            CURRICULUM VITAE — PREVIEW
          </span>
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="btn-editorial-primary py-2 px-3 small"
            >
              <Printer size={15} />
              <span>Save as PDF / Print</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn p-1 border-0 text-charcoal"
              aria-label="Close CV preview"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Printable CV Sheet */}
        <div id="cv-printable-area" className="p-2">
          <div className="border-bottom border-hairline pb-3 mb-4">
            <h2 className="font-serif fs-1 mb-1 text-charcoal">
              {PERSONAL_INFO.fullName}
            </h2>
            <p className="font-mono-tech small text-brown text-uppercase mb-2">
              {PERSONAL_INFO.title} | {PERSONAL_INFO.degree} (
              {PERSONAL_INFO.semester})
            </p>
            <p className="small text-muted-editorial mb-0">
              Location: {PERSONAL_INFO.location} • GitHub:{" "}
              {PERSONAL_INFO.githubProfile}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-serif fs-4 border-bottom border-hairline pb-1 mb-2">
              Career Objective
            </h4>
            <p className="small text-charcoal mb-0">
              {PERSONAL_INFO.careerGoal}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-serif fs-4 border-bottom border-hairline pb-1 mb-2">
              Experience
            </h4>
            {EXPERIENCE.map((exp, i) => (
              <div key={i}>
                <p className="fw-semibold small mb-0 text-charcoal">
                  {exp.role} — {exp.organization}
                </p>
                <p className="small text-muted-editorial mb-0">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="font-serif fs-4 border-bottom border-hairline pb-1 mb-2">
              Education
            </h4>
            {EDUCATION.map((edu, i) => (
              <div key={i}>
                <p className="fw-semibold small mb-0 text-charcoal">
                  {edu.degree} ({edu.status})
                </p>
                <p className="small text-muted-editorial mb-0">
                  {edu.institution}, {edu.location}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="font-serif fs-4 border-bottom border-hairline pb-1 mb-2">
              Technical &amp; Creative Skills
            </h4>
            <div className="row g-2">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.index} className="col-md-6 small">
                  <strong className="text-charcoal">{cat.category}:</strong>{" "}
                  <span className="text-muted-editorial">
                    {cat.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif fs-4 border-bottom border-hairline pb-1 mb-2">
              Projects
            </h4>
            <ul className="list-unstyled mb-0">
              {PROJECTS.map((proj) => (
                <li key={proj.id} className="mb-2 small">
                  <strong className="text-charcoal">{proj.title}:</strong>{" "}
                  <span className="text-muted-editorial">
                    {proj.summary} ({proj.technologies.join(", ")})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
