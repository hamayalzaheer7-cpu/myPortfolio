import React, { useState } from "react";
import { ArrowUpRight, Github, Eye, X } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";

const FILTERS = ["All", "React.js", "JavaScript", "Bootstrap"];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(selectedFilter.toLowerCase())
          )
        );

  return (
    <section
      id="projects"
      className="section-spacing bg-beige border-bottom border-hairline"
    >
      <div className="container">
        {/* Section Header + Filter */}
        <div className="row mb-5 align-items-end">
          <div className="col-lg-7">
            <span className="eyebrow-label mb-3">03 / Selected Works</span>
            <h2
              className="editorial-heading mb-0"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.85rem)" }}
            >
              Featured Projects
            </h2>
          </div>

          <div className="col-lg-5 mt-4 mt-lg-0 d-flex flex-wrap justify-content-lg-end gap-2">
            {FILTERS.map((filter) => {
              const active = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className="font-mono-tech small px-3 py-1.5 border transition-all"
                  style={{
                    backgroundColor: active
                      ? "var(--ink-charcoal)"
                      : "var(--bg-cream)",
                    color: active ? "var(--bg-cream)" : "var(--ink-muted)",
                    borderColor: active
                      ? "var(--ink-charcoal)"
                      : "var(--border-hairline)",
                    borderRadius: "2px",
                    cursor: "pointer",
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural Project List */}
        <div className="bg-cream border-start border-end border-hairline">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-item">
              <div className="row align-items-center g-4">
                {/* Index & Category */}
                <div className="col-lg-2">
                  <span className="font-mono-tech small text-brown d-block">
                    /{project.id}
                  </span>
                  <span className="font-mono-tech small text-muted-editorial">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="col-lg-6">
                  <h3 className="font-serif fs-3 mb-2 text-charcoal">
                    {project.title}
                  </h3>
                  <p className="text-muted-editorial mb-3 small">
                    {project.summary}
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="col-lg-4 d-flex flex-wrap align-items-center justify-content-lg-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="btn-editorial-secondary py-2 px-3 small"
                  >
                    <Eye size={15} />
                    <span>Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-editorial-primary py-2 px-3 small"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                    <ArrowUpRight size={14} className="project-arrow" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Specification Modal */}
      {activeProject && (
        <div
          className="editorial-modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="editorial-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="d-flex justify-content-between align-items-start pb-3 mb-4 border-bottom border-hairline">
              <div>
                <span className="font-mono-tech small text-brown d-block mb-1">
                  PROJECT /{activeProject.id} — {activeProject.category}
                </span>
                <h3 className="font-serif fs-2 mb-0 text-charcoal">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="btn p-1 border-0 text-charcoal"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            <p className="text-charcoal mb-3">{activeProject.summary}</p>
            <p className="text-muted-editorial small mb-4">
              {activeProject.details}
            </p>

            <div className="mb-4">
              <p className="font-mono-tech small text-muted-editorial text-uppercase mb-2">
                Technologies Used
              </p>
              <div className="d-flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-top border-hairline d-flex flex-wrap gap-3">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-primary"
              >
                <Github size={16} />
                <span>View GitHub Profile</span>
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="btn-editorial-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
