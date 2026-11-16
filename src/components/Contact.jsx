import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters).";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-spacing bg-beige">
      <div className="container">
        <div className="row g-5">
          {/* Left Column: Direct Details & Social Links */}
          <div className="col-lg-5">
            <span className="eyebrow-label mb-3">06 / Contact</span>
            <h2
              className="editorial-heading mb-4"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.85rem)" }}
            >
              Let&apos;s build something meaningful together.
            </h2>

            <p className="text-muted-editorial mb-4">
              Open to MERN Stack Developer internships, junior web developer
              roles, and collaborative digital projects.
            </p>

            <div className="border-top border-hairline pt-4 mb-4">
              <div className="d-flex align-items-center gap-3 mb-3 text-charcoal">
                <MapPin size={18} className="text-brown" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3 text-charcoal">
                <Mail size={18} className="text-brown" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.githubProfile}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-secondary py-2 px-3 small"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedinProfile}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-secondary py-2 px-3 small"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 bg-cream border border-hairline">
              {submitted ? (
                <div className="py-4 text-center">
                  <CheckCircle2 size={38} className="text-brown mb-3" />
                  <h3 className="font-serif fs-3 mb-2 text-charcoal">
                    Message Received
                  </h3>
                  <p className="text-muted-editorial mb-4">
                    Thank you for reaching out to {PERSONAL_INFO.fullName}. Your
                    inquiry has been recorded.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-editorial-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label className="font-mono-tech small text-muted-editorial text-uppercase d-block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ali Raza"
                        className="editorial-input"
                      />
                      {errors.name && (
                        <small className="text-danger d-block mt-1">
                          {errors.name}
                        </small>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="font-mono-tech small text-muted-editorial text-uppercase d-block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="editorial-input"
                      />
                      {errors.email && (
                        <small className="text-danger d-block mt-1">
                          {errors.email}
                        </small>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="font-mono-tech small text-muted-editorial text-uppercase d-block mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Internship Opportunity / Project Collaboration"
                        className="editorial-input"
                      />
                      {errors.subject && (
                        <small className="text-danger d-block mt-1">
                          {errors.subject}
                        </small>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="font-mono-tech small text-muted-editorial text-uppercase d-block mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className="editorial-input"
                      />
                      {errors.message && (
                        <small className="text-danger d-block mt-1">
                          {errors.message}
                        </small>
                      )}
                    </div>

                    <div className="col-12 pt-2">
                      <button type="submit" className="btn-editorial-primary">
                        <span>Send Message</span>
                        <Send size={15} />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
