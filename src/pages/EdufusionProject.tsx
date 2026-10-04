import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useBackToProjects } from "../utils/scrollRestoration";
import { SEO } from "../components/SEO";

import "./EdufusionProject.css";

// Exported high-resolution screens from supplied PDFs
import edufusionHeroBanner from "../assets/edufusion_screens/edufusion_hero_banner.jpg";
import landingHeroCrop from "../assets/edufusion_screens/landing_hero_crop.jpg";
import mentorsModelCrop from "../assets/edufusion_screens/mentors_model_crop.jpg";
import courseDetailsCrop from "../assets/edufusion_screens/course_details_crop.jpg";
import cartDrawerCrop from "../assets/edufusion_screens/cart_drawer_crop.jpg";

export function EdufusionProject() {
  const navigate = useNavigate();
  const handleBack = useBackToProjects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="edufusion-page">
      <SEO
        title="i2Global Edufusion Web Platform Case Study | NaviX Media"
        description="How NaviX Media created the Edufusion website for i2Global, presenting course discovery, mentor models, and streamlined enrollment for K-12 students."
        canonical="https://www.navixmedia.in/projects/10"
      />
      {/* Ambient Lighting */}
      <div className="edufusion-ambient" aria-hidden="true">
        <div className="edufusion-ambient-top" />
        <div className="edufusion-ambient-bottom" />
      </div>

      <Navbar />

      <main className="edufusion-main">
        {/* HERO SECTION */}
        <section className="ef-hero-section">
          <div className="edufusion-container">
            <button
              onClick={handleBack}
              className="ef-back-btn"
              aria-label="Back to Projects"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            {/* Hero Banner */}
            <div className="ef-hero-banner-frame">
              <img
                src={edufusionHeroBanner}
                alt="Clearer learning. Guided at every step - Edufusion"
                className="ef-hero-banner-img"
                loading="eager"
              />
            </div>

            {/* OVERVIEW */}
            <div className="ef-overview-container">
              <h1 className="sr-only">i2Global Edufusion — Digital Learning Platform</h1>
              <h2 className="ef-overview-heading">Overview</h2>
              <p className="ef-overview-desc">
                Edufusion is i2Global’s learning offering for students in Grades
                3–12, built around a four-mentor model and supported by ProEdge.
                NaviX Media designed a website that explains the learning
                approach, presents crash courses, and connects course discovery
                with a clear purchase path.
              </p>
            </div>
          </div>
        </section>

        {/* 01 / THE CHALLENGE */}
        <section className="ef-section">
          <div className="edufusion-container">
            <div className="ef-challenge-panel">
              <div className="ef-challenge-grid">
                {/* Left column */}
                <div>
                  <span className="ef-eyebrow">01 / THE CHALLENGE</span>
                  <h2 className="ef-section-heading">
                    Make a layered learning offer easy to understand.
                  </h2>
                  <p className="ef-challenge-body">
                    Edufusion brings together four mentor roles,
                    learning-platform features, and focused crash courses. The
                    design needed to explain how these parts connect, help
                    parents evaluate the offer, and create a visual experience
                    that feels welcoming to students.
                  </p>
                </div>

                {/* Right column */}
                <div className="ef-priority-stack">
                  <div className="ef-priority-row">
                    <span className="ef-q-dot ef-q-dot-indigo" />
                    <span>Explain the four-mentor model.</span>
                  </div>

                  <div className="ef-priority-row">
                    <span className="ef-q-dot ef-q-dot-peach" />
                    <span>Balance parent clarity with student appeal.</span>
                  </div>

                  <div className="ef-priority-row">
                    <span className="ef-q-dot ef-q-dot-purple" />
                    <span>Connect course discovery to the next step.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / DESIGN STRATEGY */}
        <section className="ef-section">
          <div className="edufusion-container">
            <span className="ef-eyebrow">02 / DESIGN STRATEGY</span>
            <h2 className="ef-section-heading">
              Three priorities shaped the experience.
            </h2>
            <p className="ef-section-intro">
              We organized the website around what families need to understand,
              evaluate, and do next.
            </p>

            <div className="ef-strategy-grid">
              {/* Card 01 */}
              <div className="ef-strategy-card">
                <div className="ef-card-top">
                  <span className="ef-card-number">PRIORITY 01</span>
                  <h3 className="ef-card-title">Explain the model</h3>
                  <p className="ef-card-desc">
                    Break the learning approach into four named mentor roles,
                    each with a short explanation and a consistent place in the
                    layout.
                  </p>
                </div>
                <div className="ef-card-footer">
                  INFORMATION HIERARCHY · CHUNKING
                </div>
              </div>

              {/* Card 02 */}
              <div className="ef-strategy-card">
                <div className="ef-card-top">
                  <span className="ef-card-number">PRIORITY 02</span>
                  <h3 className="ef-card-title">Make learning feel approachable</h3>
                  <p className="ef-card-desc">
                    Use the globe mascot, illustrations, and color to introduce
                    the offer, while clear headings and grouped content support
                    parent evaluation.
                  </p>
                </div>
                <div className="ef-card-footer">
                  VISUAL STORYTELLING · READABILITY
                </div>
              </div>

              {/* Card 03 */}
              <div className="ef-strategy-card">
                <div className="ef-card-top">
                  <span className="ef-card-number">PRIORITY 03</span>
                  <h3 className="ef-card-title">Clarify the next step</h3>
                  <p className="ef-card-desc">
                    Connect course cards to detailed information, then present
                    selected courses and the estimated total in a focused cart
                    drawer.
                  </p>
                </div>
                <div className="ef-card-footer">
                  ACTION HIERARCHY · CONTEXT
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / THE EXPERIENCE */}
        <section className="ef-section">
          <div className="edufusion-container">
            <span className="ef-eyebrow">03 / THE EXPERIENCE</span>
            <h2 className="ef-section-heading">
              From understanding the offer to choosing a course.
            </h2>
            <p className="ef-section-intro">
              The landing page, course details, and cart drawer connect the
              learning story with the decisions families need to make.
            </p>

            <div className="ef-experience-stack">
              {/* A. LANDING PAGE — FULL-WIDTH PRESENTATION */}
              <div className="ef-presentation-panel ef-panel-lavender">
                <div className="ef-panel-header">
                  <span className="ef-panel-label">LANDING PAGE</span>
                  <h3 className="ef-panel-heading">
                    A clear introduction to a different learning model.
                  </h3>
                  <p className="ef-panel-body">
                    The opening sections introduce Edufusion’s audience and
                    four-mentor approach through a strong headline, familiar
                    learning language, and the globe mascot. A visible primary
                    action gives interested parents a clear next step.
                  </p>
                </div>

                <div className="ef-screenshot-container ef-screenshot-crop-hero">
                  <img
                    src={landingHeroCrop}
                    alt="Edufusion Landing Page Hero and Opening Section"
                    className="ef-screenshot-img"
                    style={{ objectPosition: "top center" }}
                    loading="lazy"
                  />
                </div>

                <p className="ef-panel-caption">
                  The offer comes first, followed by a visual explanation of
                  the learning approach.
                </p>
              </div>

              {/* B. MENTOR MODEL — IMAGE LEFT, EXPLANATION RIGHT */}
              <div className="ef-experience-two-col ef-col-mentors">
                <div className="ef-presentation-panel ef-panel-blue">
                  <div className="ef-screenshot-container ef-screenshot-crop-mentors">
                    <img
                      src={mentorsModelCrop}
                      alt="Edufusion Four-Mentor Learning System"
                      className="ef-screenshot-img"
                      style={{ objectPosition: "top center" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="ef-experience-text-block">
                  <span className="ef-eyebrow">EXPLAINING THE MODEL</span>
                  <h3 className="ef-section-heading" style={{ fontSize: "28px" }}>
                    Four roles. One understandable system.
                  </h3>
                  <p className="ef-challenge-body">
                    We presented Concept, Practice, Doubt, and Performance
                    mentors as four connected cards. Each role has a distinct
                    purpose, making the model easier to scan without relying on
                    a long explanation.
                  </p>

                  <div className="ef-check-points">
                    <div className="ef-check-point">
                      <span className="ef-check-bullet" />
                      <span>
                        Named roles explain the different types of support.
                      </span>
                    </div>
                    <div className="ef-check-point">
                      <span className="ef-check-bullet" />
                      <span>
                        A connected layout presents them as one learning system.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* C. COURSE DETAILS — EXPLANATION LEFT, IMAGE RIGHT */}
              <div className="ef-experience-two-col ef-col-course">
                <div className="ef-experience-text-block">
                  <span className="ef-eyebrow">COURSE DETAILS</span>
                  <h3 className="ef-section-heading" style={{ fontSize: "28px" }}>
                    Put the course decision in one place.
                  </h3>
                  <p className="ef-challenge-body">
                    The course page brings the description, duration, delivery
                    mode, price, and purchase actions into a clear summary.
                    Separate content blocks explain what is included and the
                    course’s stated outcomes.
                  </p>

                  <div className="ef-check-points">
                    <div className="ef-check-point">
                      <span className="ef-check-bullet" />
                      <span>
                        The summary groups practical course information.
                      </span>
                    </div>
                    <div className="ef-check-point">
                      <span className="ef-check-bullet" />
                      <span>
                        Supporting sections let parents explore the offer in
                        more detail.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ef-presentation-panel ef-panel-peach">
                  <div className="ef-screenshot-container ef-screenshot-crop-course">
                    <img
                      src={courseDetailsCrop}
                      alt="Edufusion Course Details Page Summary and Modules"
                      className="ef-screenshot-img"
                      style={{ objectPosition: "top center" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* D. CART DRAWER — FULL-WIDTH PRESENTATION */}
              <div className="ef-presentation-panel ef-panel-blue">
                <div className="ef-panel-header">
                  <span className="ef-panel-label">CART REVIEW</span>
                  <h3 className="ef-panel-heading">
                    Keep the selection and total in view.
                  </h3>
                  <p className="ef-panel-body">
                    A side drawer brings selected courses into a focused review
                    area while retaining the page behind it. Course details, a
                    removal option, the estimated total, and a prominent
                    payment action are grouped in one place.
                  </p>
                </div>

                <div className="ef-screenshot-container ef-screenshot-crop-cart">
                  <img
                    src={cartDrawerCrop}
                    alt="Edufusion Cart Drawer with Selected Course and Total"
                    className="ef-screenshot-img"
                    style={{ objectPosition: "top center" }}
                    loading="lazy"
                  />
                </div>

                <p className="ef-panel-caption">
                  A focused review step before moving into payment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / PROBLEMS & SOLUTIONS */}
        <section className="ef-section">
          <div className="edufusion-container">
            <span className="ef-eyebrow">04 / PROBLEMS & SOLUTIONS</span>
            <h2 className="ef-section-heading">
              Client challenges. Our design solutions.
            </h2>
            <p className="ef-section-intro">
              How NaviX Media translated Edufusion’s learning proposition and
              course offering into a clear website experience.
            </p>

            <div className="ef-comparison-container">
              {/* Header row */}
              <div className="ef-comparison-header">
                <div>CLIENT CHALLENGE</div>
                <div>NAVIX MEDIA’S SOLUTION</div>
                <div>VALUE FOR THE CLIENT</div>
              </div>

              {/* ROW 1 */}
              <div className="ef-comparison-row">
                <div className="ef-cell">
                  <span className="ef-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="ef-tag-badge ef-badge-rose">CHALLENGE</span>
                  <h4 className="ef-cell-title">
                    Explain a multi-mentor learning model clearly.
                  </h4>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="ef-tag-badge ef-badge-indigo">SOLUTION</span>
                  <p className="ef-cell-text">
                    Organized the model into four connected role cards with
                    short, purpose-led descriptions.
                  </p>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="ef-tag-badge ef-badge-teal">CLIENT VALUE</span>
                  <p className="ef-cell-text">
                    A clear framework for communicating the learning offer.
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="ef-comparison-row">
                <div className="ef-cell">
                  <span className="ef-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="ef-tag-badge ef-badge-rose">CHALLENGE</span>
                  <h4 className="ef-cell-title">
                    Appeal to students while supporting parent evaluation.
                  </h4>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="ef-tag-badge ef-badge-indigo">SOLUTION</span>
                  <p className="ef-cell-text">
                    Combined a recurring mascot and playful illustrations with
                    clear headings, grouped information, and visible actions.
                  </p>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="ef-tag-badge ef-badge-teal">CLIENT VALUE</span>
                  <p className="ef-cell-text">
                    A recognizable visual identity with structured information
                    for families.
                  </p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="ef-comparison-row">
                <div className="ef-cell">
                  <span className="ef-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="ef-tag-badge ef-badge-rose">CHALLENGE</span>
                  <h4 className="ef-cell-title">
                    Present crash courses with enough detail to support a choice.
                  </h4>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="ef-tag-badge ef-badge-indigo">SOLUTION</span>
                  <p className="ef-cell-text">
                    Used consistent course cards and a dedicated detail page
                    with practical information and supporting content.
                  </p>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="ef-tag-badge ef-badge-teal">CLIENT VALUE</span>
                  <p className="ef-cell-text">
                    A repeatable structure for presenting and explaining courses.
                  </p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="ef-comparison-row">
                <div className="ef-cell">
                  <span className="ef-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="ef-tag-badge ef-badge-rose">CHALLENGE</span>
                  <h4 className="ef-cell-title">
                    Connect course selection with a clear purchase step.
                  </h4>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="ef-tag-badge ef-badge-indigo">SOLUTION</span>
                  <p className="ef-cell-text">
                    Designed a cart drawer with selected-course details, removal
                    controls, an estimated total, and a payment action.
                  </p>
                </div>

                <div className="ef-cell">
                  <span className="ef-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="ef-tag-badge ef-badge-teal">CLIENT VALUE</span>
                  <p className="ef-cell-text">
                    A focused place to review the selection before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA (Approved NaviX Component) */}
        <section className="ef-section">
          <div className="edufusion-container">
            <div className="ef-cta-panel">
              <div className="ef-cta-left">
                <h2 className="ef-cta-heading">
                  Make your learning offer easier to understand.
                </h2>
                <p className="ef-cta-subtext">
                  Let’s turn a complex service into a clear, engaging digital
                  experience.
                </p>
              </div>

              <div className="ef-cta-right">
                <button
                  onClick={() => navigate("/contact")}
                  className="ef-cta-btn-primary"
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
                  className="ef-view-all-projects-btn"
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
