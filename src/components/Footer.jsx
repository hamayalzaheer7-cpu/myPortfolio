import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 bg-cream border-top border-hairline">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div>
            <span className="font-serif fw-semibold fs-4 text-charcoal me-3">
              {PERSONAL_INFO.brandName}
            </span>
            <span className="small text-muted-editorial">
              © {year} {PERSONAL_INFO.fullName}. All rights reserved.
            </span>
          </div>

          <div className="d-flex align-items-center gap-4">
            <a
              href={PERSONAL_INFO.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="text-muted-editorial text-decoration-none d-inline-flex align-items-center gap-1 small"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className="text-muted-editorial text-decoration-none d-inline-flex align-items-center gap-1 small"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href="#home"
              className="btn-editorial-ghost small ms-2"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
