import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useBackToProjects } from "../utils/scrollRestoration";
import { SEO } from "../components/SEO";

import "./SrsAcademyProject.css";

// Exported high-resolution screens from supplied SRS.pdf
import srsHeroBanner from "../assets/srs_screens/srs_hero_banner.jpg";
import srsHeroIntroCrop from "../assets/srs_screens/srs_hero_intro_crop.jpg";
import srsStudentProgramsCrop from "../assets/srs_screens/srs_student_programs_crop.jpg";
import srsTestSeriesCrop from "../assets/srs_screens/srs_test_series_crop.jpg";
import srsTeacherTrainingCrop from "../assets/srs_screens/srs_teacher_training_crop.jpg";
import srsTeacherStoryCrop from "../assets/srs_screens/srs_teacher_story_crop.jpg";
import srsDemoEnquiryCrop from "../assets/srs_screens/srs_demo_enquiry_crop.jpg";

export function SrsAcademyProject() {
  const navigate = useNavigate();
  const handleBack = useBackToProjects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="srs-page">
      <SEO
        title="SRS Academy Landing Page Case Study | NaviX Media"
        description="How NaviX Media designed the SRS Academy landing page, structuring educational programs, teacher training, and test series into an intuitive demo enquiry flow."
        canonical="https://www.navixmedia.in/projects/11"
      />
      {/* Ambient Lighting */}
      <div className="srs-ambient" aria-hidden="true">
        <div className="srs-ambient-top" />
        <div className="srs-ambient-bottom" />
      </div>

      <Navbar />

      <main className="srs-main">
        {/* HERO SECTION */}
        <section className="srs-hero-section">
          <div className="srs-container">
            <button
              onClick={handleBack}
              className="srs-back-btn"
              aria-label="Back to Projects"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            {/* Hero Banner */}
            <div className="srs-hero-banner-frame">
              <img
                src={srsHeroBanner}
                alt="Supporting learners. Empowering educators - SRS Academy"
                className="srs-hero-banner-img"
                loading="eager"
              />
            </div>

            {/* OVERVIEW */}
            <div className="srs-overview-container">
              <h1 className="sr-only">SRS Academy — Academic & Educator Training Landing Page</h1>
              <h2 className="srs-overview-heading">Overview</h2>
              <p className="srs-overview-desc">
                SRS Academy brings student learning and teacher development
                together through academic programs, competitive exam
                preparation, test series, and training courses. NaviX Media
                designed a single landing page that introduces the academy,
                organizes its offerings, and gives visitors a clear route to
                enquire about a demo.
              </p>
            </div>
          </div>
        </section>

        {/* 01 / THE CHALLENGE */}
        <section className="srs-section">
          <div className="srs-container">
            <div className="srs-challenge-panel">
              <div className="srs-challenge-grid">
                {/* Left column */}
                <div>
                  <span className="srs-eyebrow">01 / THE CHALLENGE</span>
                  <h2 className="srs-section-heading">
                    One academy. Different audiences. A clear starting point.
                  </h2>
                  <p className="srs-challenge-body">
                    The academy’s offering serves school students, families, and
                    aspiring educators. The design needed to give each program
                    group a clear place, explain the academy’s approach, and make
                    the enquiry action easy to find within one scrolling page.
                  </p>
                </div>

                {/* Right column: Design Requirements */}
                <div className="srs-priorities-box">
                  <h3 className="srs-priorities-title">Design Priorities</h3>
                  <ul className="srs-priorities-list">
                    <li className="srs-priority-item">
                      <span className="srs-priority-bullet" />
                      <span>Organize programs for different audiences.</span>
                    </li>
                    <li className="srs-priority-item">
                      <span className="srs-priority-bullet" />
                      <span>
                        Balance academy information with course details.
                      </span>
                    </li>
                    <li className="srs-priority-item">
                      <span className="srs-priority-bullet" />
                      <span>Keep demo enquiries easy to find.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / DESIGN STRATEGY */}
        <section className="srs-section">
          <div className="srs-container">
            <span className="srs-eyebrow">02 / DESIGN STRATEGY</span>
            <h2 className="srs-section-heading">
              Three priorities shaped the landing page.
            </h2>
            <p className="srs-section-intro">
              We organized the experience around understanding the academy,
              finding a relevant program, and taking the next step.
            </p>

            <div className="srs-strategy-grid">
              {/* Card 01 */}
              <div className="srs-strategy-card">
                <div className="srs-card-top">
                  <span className="srs-card-number">01</span>
                  <h3 className="srs-card-title">Separate the offerings</h3>
                  <p className="srs-card-body">
                    Group competitive programs, academic programs, test series,
                    and teacher training into clearly named sections.
                  </p>
                </div>
                <div className="srs-card-footer-label">
                  INFORMATION ARCHITECTURE · GROUPING
                </div>
              </div>

              {/* Card 02 */}
              <div className="srs-strategy-card">
                <div className="srs-card-top">
                  <span className="srs-card-number">02</span>
                  <h3 className="srs-card-title">Make details easy to scan</h3>
                  <p className="srs-card-body">
                    Use consistent cards to present program names, class levels,
                    and key details. Include eligibility, duration, and fees
                    where relevant to teacher training.
                  </p>
                </div>
                <div className="srs-card-footer-label">
                  VISUAL HIERARCHY · CONSISTENCY
                </div>
              </div>

              {/* Card 03 */}
              <div className="srs-strategy-card">
                <div className="srs-card-top">
                  <span className="srs-card-number">03</span>
                  <h3 className="srs-card-title">Keep the next step visible</h3>
                  <p className="srs-card-body">
                    Repeat the demo action across the page and give the enquiry
                    form a distinct section with clear field labels.
                  </p>
                </div>
                <div className="srs-card-footer-label">
                  ACTION HIERARCHY · FORM CLARITY
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / THE EXPERIENCE */}
        <section className="srs-section">
          <div className="srs-container">
            <span className="srs-eyebrow">03 / THE EXPERIENCE</span>
            <h2 className="srs-section-heading">
              One page, from introduction to enquiry.
            </h2>
            <p className="srs-section-intro">
              Four section highlights show how the landing page connects the
              academy’s story, its programs, and the next step.
            </p>

            <div className="srs-experience-stack">
              {/* Highlight A: Hero and Introduction (Full-width Presentation) */}
              <div className="srs-panel-card srs-panel-aqua-theme">
                <div className="srs-full-panel">
                  <div className="srs-panel-header">
                    <span className="srs-panel-tag srs-tag-aqua">
                      FIRST IMPRESSION
                    </span>
                    <h3 className="srs-panel-title">
                      Introduce the academy with a clear invitation.
                    </h3>
                    <p className="srs-panel-body">
                      The opening combines a concise guidance message, student
                      imagery, and a contrasting demo button. The academy
                      introduction follows with its background and values, giving
                      visitors context before they explore the programs.
                    </p>
                  </div>

                  <div className="srs-panel-img-frame">
                    <img
                      src={srsHeroIntroCrop}
                      alt="SRS Academy Opening Hero and Introduction Section"
                      className="srs-panel-img"
                      loading="lazy"
                    />
                  </div>

                  <p className="srs-panel-caption">
                    A welcoming introduction places the academy’s message and
                    primary action together.
                  </p>
                </div>
              </div>

              {/* Highlight B: Student Programs (Image Left, Explanation Right) */}
              <div className="srs-panel-card srs-panel-blue-theme">
                <div className="srs-panel-split">
                  <div className="srs-panel-img-frame">
                    <img
                      src={srsStudentProgramsCrop}
                      alt="SRS Academy Competitive Programs Section"
                      className="srs-panel-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="srs-split-explanation">
                    <span className="srs-panel-tag srs-tag-blue">
                      PROGRAM DISCOVERY
                    </span>
                    <h3 className="srs-panel-title">
                      Give different learning needs a clear place.
                    </h3>
                    <p className="srs-panel-body">
                      Competitive programs, academic programs, and test series
                      have their own sections. Repeated cards present class
                      levels and short program details, helping families scan the
                      available options.
                    </p>

                    <div className="srs-feature-points">
                      <div className="srs-feature-point">
                        <span className="srs-feature-bullet srs-bullet-blue" />
                        <span>
                          Section headings distinguish the program groups.
                        </span>
                      </div>
                      <div className="srs-feature-point">
                        <span className="srs-feature-bullet srs-bullet-blue" />
                        <span>
                          Familiar card layouts make key details easier to
                          locate.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight C: Teacher Training (Explanation Left, Image Right) */}
              <div className="srs-panel-card srs-panel-peach-theme">
                <div className="srs-panel-split srs-reverse">
                  <div className="srs-split-explanation">
                    <span className="srs-panel-tag srs-tag-peach">
                      EDUCATOR OFFERING
                    </span>
                    <h3 className="srs-panel-title">
                      Give teacher development its own space.
                    </h3>
                    <p className="srs-panel-body">
                      A dedicated training section presents the educator
                      offering separately from school programs. Course cards
                      bring fees, eligibility, and duration into a consistent
                      format, followed by a participant-story section.
                    </p>

                    <div className="srs-feature-points">
                      <div className="srs-feature-point">
                        <span className="srs-feature-bullet srs-bullet-peach" />
                        <span>
                          A distinct section separates the educator audience.
                        </span>
                      </div>
                      <div className="srs-feature-point">
                        <span className="srs-feature-bullet srs-bullet-peach" />
                        <span>
                          Practical course information is grouped within each
                          card.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="srs-panel-img-frame">
                    <img
                      src={srsTeacherTrainingCrop}
                      alt="SRS Academy Teacher Training Programs and Participant Experience"
                      className="srs-panel-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Highlight D: Demo Enquiry (Full-width Presentation) */}
              <div className="srs-panel-card srs-panel-lavender-theme">
                <div className="srs-full-panel">
                  <div className="srs-panel-header">
                    <span className="srs-panel-tag srs-tag-lavender">
                      ENQUIRY FORM
                    </span>
                    <h3 className="srs-panel-title">
                      Turn interest into a clear next step.
                    </h3>
                    <p className="srs-panel-body">
                      The demo section brings the enquiry form into a prominent
                      visual block. Labeled fields collect student and contact
                      details alongside the learning requirement, giving the
                      academy context for a follow-up conversation.
                    </p>
                  </div>

                  <div className="srs-panel-img-frame">
                    <img
                      src={srsDemoEnquiryCrop}
                      alt="SRS Academy Demo Enquiry Form Section"
                      className="srs-panel-img"
                      loading="lazy"
                    />
                  </div>

                  <p className="srs-panel-caption">
                    A dedicated enquiry section gathers the details needed to
                    begin a conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / PROBLEMS & SOLUTIONS */}
        <section className="srs-section">
          <div className="srs-container">
            <span className="srs-eyebrow">04 / PROBLEMS & SOLUTIONS</span>
            <h2 className="srs-section-heading">
              Client challenges. Our design solutions.
            </h2>
            <p className="srs-section-intro">
              How NaviX Media organized SRS Academy’s broad offering into one
              focused landing page.
            </p>

            <div className="srs-problems-table">
              {/* Header */}
              <div className="srs-table-header">
                <div className="srs-col-head">CLIENT CHALLENGE</div>
                <div className="srs-col-head">NAVIX MEDIA’S SOLUTION</div>
                <div className="srs-col-head">VALUE FOR THE CLIENT</div>
              </div>

              {/* Row 1 */}
              <div className="srs-table-row">
                <div className="srs-cell">
                  <span className="srs-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="srs-tag-badge srs-badge-amber">CHALLENGE</span>
                  <p className="srs-cell-text">
                    Present several program types within one landing page.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    NAVIX MEDIA’S SOLUTION
                  </span>
                  <span className="srs-tag-badge srs-badge-teal">SOLUTION</span>
                  <p className="srs-cell-text">
                    Grouped competitive programs, academic programs, test
                    series, and teacher training into distinct sections.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    VALUE FOR THE CLIENT
                  </span>
                  <span className="srs-tag-badge srs-badge-coral">
                    CLIENT VALUE
                  </span>
                  <p className="srs-cell-text">
                    A clear structure for communicating the academy’s range.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="srs-table-row">
                <div className="srs-cell">
                  <span className="srs-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="srs-tag-badge srs-badge-amber">CHALLENGE</span>
                  <p className="srs-cell-text">
                    Address families and aspiring educators in the same
                    experience.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    NAVIX MEDIA’S SOLUTION
                  </span>
                  <span className="srs-tag-badge srs-badge-teal">SOLUTION</span>
                  <p className="srs-cell-text">
                    Separated student programs from teacher training and
                    tailored the information shown in each card.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    VALUE FOR THE CLIENT
                  </span>
                  <span className="srs-tag-badge srs-badge-coral">
                    CLIENT VALUE
                  </span>
                  <p className="srs-cell-text">
                    Dedicated space for each audience within one consistent page.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="srs-table-row">
                <div className="srs-cell">
                  <span className="srs-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="srs-tag-badge srs-badge-amber">CHALLENGE</span>
                  <p className="srs-cell-text">
                    Explain the academy alongside its course offering.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    NAVIX MEDIA’S SOLUTION
                  </span>
                  <span className="srs-tag-badge srs-badge-teal">SOLUTION</span>
                  <p className="srs-cell-text">
                    Combined an academy introduction and values with program
                    information and separate family and participant testimonials.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    VALUE FOR THE CLIENT
                  </span>
                  <span className="srs-tag-badge srs-badge-coral">
                    CLIENT VALUE
                  </span>
                  <p className="srs-cell-text">
                    A place to communicate the academy’s identity as well as its
                    programs.
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="srs-table-row">
                <div className="srs-cell">
                  <span className="srs-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="srs-tag-badge srs-badge-amber">CHALLENGE</span>
                  <p className="srs-cell-text">
                    Make it clear how interested visitors can enquire.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    NAVIX MEDIA’S SOLUTION
                  </span>
                  <span className="srs-tag-badge srs-badge-teal">SOLUTION</span>
                  <p className="srs-cell-text">
                    Repeated the demo action and gave the enquiry form a
                    prominent section with labeled fields.
                  </p>
                </div>

                <div className="srs-cell">
                  <span className="srs-mobile-col-label">
                    VALUE FOR THE CLIENT
                  </span>
                  <span className="srs-tag-badge srs-badge-coral">
                    CLIENT VALUE
                  </span>
                  <p className="srs-cell-text">
                    A visible next step and useful context for follow-up
                    conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA (Approved NaviX Component) */}
        <section className="srs-section">
          <div className="srs-container">
            <div className="srs-cta-panel">
              <div className="srs-cta-left">
                <h2 className="srs-cta-heading">
                  Bring your offerings into one clear experience.
                </h2>
                <p className="srs-cta-subtext">
                  Let’s help your audience understand what you offer and take
                  the next step.
                </p>
              </div>

              <div className="srs-cta-right">
                <button
                  onClick={() => navigate("/contact")}
                  className="srs-cta-btn-primary"
                >
                  <span>Let’s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <motion.button
                  onClick={handleBack}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="srs-view-all-projects-btn"
                  style={{
                    backgroundImage:
                      "linear-gradient(100.351deg, rgb(0, 0, 0) 14.842%, rgb(95, 48, 20) 25.921%, rgb(172, 76, 21) 37%, rgb(198, 198, 198) 51.41%, rgb(32, 86, 174) 68.977%, rgb(0, 0, 0) 89.412%)",
                    fontFamily: '"Bricolage Grotesque", sans-serif',
                  }}
                >
                  View All Projects
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
