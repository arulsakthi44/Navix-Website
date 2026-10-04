import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useBackToProjects } from "../utils/scrollRestoration";
import { SEO } from "../components/SEO";

import "./QuickApplyProject.css";

// Exported high-resolution screens and crops from supplied PDFs
import quickapplyHeroBanner from "../assets/quickapply_screens/quickapply_hero_banner.png";
import quickapplyLoginScreen from "../assets/quickapply_screens/quickapply_login_screen.png";
import quickapplyLevel1Screen from "../assets/quickapply_screens/quickapply_level1_screen.png";
import quickapplyLevel2Screen from "../assets/quickapply_screens/quickapply_level2_screen.png";
import quickapplyHomeScreen from "../assets/quickapply_screens/quickapply_home_screen.png";
import quickapplyJobDetailScreen from "../assets/quickapply_screens/quickapply_job_detail_screen.png";
import quickapplyMyJobsScreen from "../assets/quickapply_screens/quickapply_my_jobs_screen.png";
import quickapplyMyJobsCardCrop from "../assets/quickapply_screens/quickapply_my_jobs_card_crop.png";

export function QuickApplyProject() {
  const navigate = useNavigate();
  const handleBack = useBackToProjects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="quickapply-page">
      <SEO
        title="Quick Apply Job Portal App Case Study | NaviX Media"
        description="How NaviX Media designed the Quick Apply mobile application to guide candidates through resume parsing, skill assessment, and job discovery."
        canonical="https://www.navixmedia.in/projects/14"
      />
      {/* Ambient Lighting */}
      <div className="quickapply-ambient" aria-hidden="true">
        <div className="quickapply-ambient-top" />
        <div className="quickapply-ambient-bottom" />
      </div>

      <Navbar />

      <main className="quickapply-main">
        {/* HERO SECTION */}
        <section className="qa-hero-section">
          <div className="quickapply-container">
            <button
              onClick={handleBack}
              className="qa-back-btn"
              aria-label="Back to Projects"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            {/* Compact Hero Banner */}
            <div className="qa-hero-banner-frame">
              <img
                src={quickapplyHeroBanner}
                alt="Show your potential. Find your next opportunity - Quick Apply"
                className="qa-hero-banner-img"
                loading="eager"
              />
            </div>

            {/* OVERVIEW */}
            <div className="qa-overview-container">
              <h1 className="sr-only">Quick Apply — Career & Application Discovery App Design</h1>
              <h2 className="qa-overview-heading">Overview</h2>
              <p className="qa-overview-desc">
                Quick Apply connects resume analysis, assessment, and job
                discovery in a guided mobile journey. NaviX Media structured the
                experience to explain each stage, present job information
                clearly, and keep applied opportunities organized.
              </p>

              {/* Quiet inline metadata row */}
              <div className="qa-metadata-row">
                <div className="qa-metadata-item">
                  <strong>Industry:</strong> Recruitment & Careers
                </div>
                <div className="qa-metadata-divider" />
                <div className="qa-metadata-item">
                  <strong>Focus:</strong> Mobile App UI/UX
                </div>
                <div className="qa-metadata-divider" />
                <div className="qa-metadata-item">
                  <strong>Platform:</strong> Android & iOS App
                </div>
              </div>

              {/* View on Google Play CTA Button */}
              <div className="qa-play-cta-wrap">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.i2global.quickapplypplsync"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98 }}
                  className="qa-play-cta-btn"
                  aria-label="View Quick Apply on Google Play"
                >
                  <span>View on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / THE CHALLENGE */}
        <section className="qa-section">
          <div className="quickapply-container">
            <div className="qa-challenge-panel">
              <div className="qa-challenge-grid">
                {/* Left column */}
                <div>
                  <span className="qa-eyebrow">01 / THE CHALLENGE</span>
                  <h2 className="qa-section-heading">
                    Make a multi-stage job journey understandable.
                  </h2>
                  <p className="qa-challenge-body">
                    The product asks candidates to complete resume analysis and
                    an assessment before accessing eligible opportunities. The
                    design needed to explain this sequence, make progress
                    visible, and connect preparation with job discovery and
                    applications.
                  </p>
                </div>

                {/* Right column: 3 requirement cards */}
                <div className="qa-priority-stack">
                  <div className="qa-priority-row">
                    <span className="qa-q-dot qa-q-dot-blue" />
                    <span>Explain what comes next and why it is locked.</span>
                  </div>

                  <div className="qa-priority-row">
                    <span className="qa-q-dot qa-q-dot-lime" />
                    <span>Keep job information easy to compare.</span>
                  </div>

                  <div className="qa-priority-row">
                    <span className="qa-q-dot qa-q-dot-orange" />
                    <span>Give application history a clear destination.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / DESIGN STRATEGY */}
        <section className="qa-section">
          <div className="quickapply-container">
            <span className="qa-eyebrow">02 / DESIGN STRATEGY</span>
            <h2 className="qa-section-heading">
              Three decisions shaped the experience.
            </h2>
            <p className="qa-section-intro">
              Clarify the journey, support job decisions, and keep progress visible.
            </p>

            {/* 3 Strategy Cards */}
            <div className="qa-strategy-grid">
              {/* Card 01 */}
              <div className="qa-strategy-card">
                <div className="qa-card-top">
                  <span className="qa-card-number">01 — Explain the sequence</span>
                  <p className="qa-card-desc">
                    Present resume analysis, assessment, and job matching as
                    connected levels with visible states and next-step guidance.
                  </p>
                </div>
                <div className="qa-card-footer">PROGRESSIVE DISCLOSURE</div>
              </div>

              {/* Card 02 */}
              <div className="qa-strategy-card">
                <div className="qa-card-top">
                  <span className="qa-card-number">
                    02 — Structure the decision
                  </span>
                  <p className="qa-card-desc">
                    Organize job information into a scannable summary,
                    supporting details, and a clear application action.
                  </p>
                </div>
                <div className="qa-card-footer">INFORMATION HIERARCHY</div>
              </div>

              {/* Card 03 */}
              <div className="qa-strategy-card">
                <div className="qa-card-top">
                  <span className="qa-card-number">
                    03 — Keep progress visible
                  </span>
                  <p className="qa-card-desc">
                    Use processing feedback, completion labels, and
                    application-history entries to show where the candidate
                    stands.
                  </p>
                </div>
                <div className="qa-card-footer">VISIBILITY OF SYSTEM STATUS</div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / THE EXPERIENCE */}
        <section className="qa-section">
          <div className="quickapply-container">
            <span className="qa-eyebrow">03 / THE EXPERIENCE</span>
            <h2 className="qa-section-heading">
              From getting started to keeping applications organized.
            </h2>
            <p className="qa-section-intro">
              The screens connect sign-in, preparation, opportunity discovery,
              and application history through a consistent mobile experience.
            </p>

            <div className="qa-experience-stack">
              {/* BLOCK A — GETTING STARTED */}
              <div className="qa-two-col-section">
                <div className="qa-col-text-block">
                  <span className="qa-eyebrow">GETTING STARTED</span>
                  <h3 className="qa-text-title">
                    Give the journey a clear starting point.
                  </h3>
                  <p className="qa-text-body">
                    The sign-in screen offers an email OTP entry point alongside
                    Google sign-in. A separate account-creation link makes the
                    route for new candidates visible.
                  </p>

                  <div className="qa-check-points">
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>A focused form keeps the entry step concise.</span>
                    </div>
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>
                        Sign-in and account creation have distinct actions.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Login phone inside soft blue panel */}
                <div
                  className="qa-presentation-panel qa-panel-blue"
                  style={{ padding: "32px 24px" }}
                >
                  <div className="qa-phone-wrap">
                    <img
                      src={quickapplyLoginScreen}
                      alt="Quick Apply Sign-in Screen - Email OTP and Google entry points"
                      className="qa-phone-img"
                      loading="lazy"
                    />
                    <span className="qa-phone-caption">Sign-In View</span>
                  </div>
                </div>
              </div>

              {/* BLOCK B — GUIDED PREPARATION */}
              <div className="qa-presentation-panel qa-panel-lavender">
                <div className="qa-panel-header">
                  <span className="qa-panel-label">GUIDED PREPARATION</span>
                  <h3 className="qa-panel-heading">
                    Show the next step before asking candidates to take it.
                  </h3>
                  <p className="qa-panel-body">
                    The journey is organized into three levels: resume analysis,
                    assessment, and job matching. Visible progress, locked
                    states, and completion labels explain the sequence and show
                    when eligible jobs become available.
                  </p>
                </div>

                {/* Dual state phones side by side */}
                <div className="qa-dual-phones-row">
                  <div className="qa-phone-wrap">
                    <img
                      src={quickapplyLevel1Screen}
                      alt="Quick Apply Level 1 Resume Analysis in progress"
                      className="qa-phone-img"
                      loading="lazy"
                    />
                    <span className="qa-phone-caption">
                      Analysis in progress
                    </span>
                  </div>

                  <div className="qa-phone-wrap">
                    <img
                      src={quickapplyLevel2Screen}
                      alt="Quick Apply Level 2 Preparation completed"
                      className="qa-phone-img"
                      loading="lazy"
                    />
                    <span className="qa-phone-caption">
                      Preparation completed
                    </span>
                  </div>
                </div>
              </div>

              {/* BLOCK C — JOB DISCOVERY */}
              <div className="qa-two-col-section qa-reverse-mobile">
                {/* Visual on left: Main phone */}
                <div
                  className="qa-presentation-panel qa-panel-blue"
                  style={{ padding: "32px 24px" }}
                >
                  <div className="qa-phone-wrap">
                    <img
                      src={quickapplyHomeScreen}
                      alt="Quick Apply Home Screen - Assessment score and unlocked job matches"
                      className="qa-phone-img"
                      loading="lazy"
                    />
                    <span className="qa-phone-caption">
                      Home & Job Discovery
                    </span>
                  </div>
                </div>

                {/* Explanation on right */}
                <div className="qa-col-text-block">
                  <span className="qa-eyebrow">JOB DISCOVERY</span>
                  <h3 className="qa-text-title">
                    Connect preparation with available opportunities.
                  </h3>
                  <p className="qa-text-body">
                    Home brings the assessment score, unlocked-job count, and
                    available roles into one view. Job cards group experience,
                    compensation, location, work arrangement, and application
                    actions into a repeated structure.
                  </p>

                  <div className="qa-check-points">
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>
                        Search and profile completion remain visible entry points.
                      </span>
                    </div>
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>Repeated job-card fields support scanning.</span>
                    </div>
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>
                        Assessment guidance provides a route back to preparation.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOCK D — JOB DETAILS */}
              <div className="qa-two-col-section qa-reverse-mobile">
                {/* Visual on left: Main phone */}
                <div
                  className="qa-presentation-panel qa-panel-blue"
                  style={{ padding: "32px 24px" }}
                >
                  <div className="qa-phone-wrap">
                    <img
                      src={quickapplyJobDetailScreen}
                      alt="Quick Apply Job Detail Viewport"
                      className="qa-phone-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Explanation on right */}
                <div className="qa-col-text-block">
                  <span className="qa-eyebrow">JOB DETAILS</span>
                  <h3 className="qa-text-title">
                    Bring the role into focus before applying.
                  </h3>
                  <p className="qa-text-body">
                    The job-detail screen separates key role information from
                    the longer description, responsibilities, requirements, and
                    skills. A persistent Quick Apply control keeps the next
                    action accessible while candidates review the content.
                  </p>

                  <div className="qa-check-points">
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>
                        A summary introduces the role before the detailed sections.
                      </span>
                    </div>
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>Section headings break up longer content.</span>
                    </div>
                    <div className="qa-check-point qa-dark-check-point">
                      <span className="qa-check-bullet qa-dark-check-bullet" />
                      <span>
                        Skill chips provide a compact view of listed capabilities.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOCK E — MY JOBS */}
              <div className="qa-presentation-panel qa-panel-cream">
                <div className="qa-panel-header">
                  <span className="qa-panel-label">APPLICATION HISTORY</span>
                  <h3 className="qa-panel-heading">
                    Keep applied opportunities together.
                  </h3>
                  <p className="qa-panel-body">
                    My Jobs separates applied and saved opportunities through
                    two tabs. The supplied applied view lists each role,
                    company, and application timing in a consistent card format.
                  </p>
                </div>

                {/* My jobs phone & card crop side by side */}
                <div className="qa-dual-phones-row">
                  <div className="qa-phone-wrap">
                    <img
                      src={quickapplyMyJobsScreen}
                      alt="Quick Apply My Jobs Applied List"
                      className="qa-phone-img"
                      loading="lazy"
                    />
                    <span className="qa-phone-caption">Applied Jobs View</span>
                  </div>

                  <div className="qa-crop-frame-wrap">
                    <div className="qa-crop-frame-title">
                      Tab Navigation & Applied Entries
                    </div>
                    <div className="qa-crop-frame-desc">
                      Detailed view of the segmented tabs and consistent card
                      layout showing role titles, companies, and submission
                      timing.
                    </div>
                    <img
                      src={quickapplyMyJobsCardCrop}
                      alt="Quick Apply My Jobs Tabs and Card Crop"
                      className="qa-crop-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / PROBLEMS & SOLUTIONS */}
        <section className="qa-section">
          <div className="quickapply-container">
            <span className="qa-eyebrow">04 / PROBLEMS & SOLUTIONS</span>
            <h2 className="qa-section-heading">
              Client challenges. Our design response.
            </h2>
            <p className="qa-section-intro">
              How NaviX Media translated the product’s requirements into a
              connected candidate experience.
            </p>

            <div className="qa-comparison-card">
              {/* Header row */}
              <div className="qa-comparison-header">
                <div>CLIENT CHALLENGE</div>
                <div>NAVIX MEDIA’S SOLUTION</div>
                <div>VALUE FOR THE CLIENT</div>
              </div>

              {/* ROW 1 */}
              <div className="qa-comparison-row">
                <div className="qa-cell">
                  <span className="qa-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="qa-tag-badge qa-badge-coral">CHALLENGE</span>
                  <h4 className="qa-cell-title">
                    Explain the preparation required before job access.
                  </h4>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="qa-tag-badge qa-badge-blue">SOLUTION</span>
                  <p className="qa-cell-text">
                    Organized the journey into three connected levels with
                    locked, in-progress, and completed states.
                  </p>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="qa-tag-badge qa-badge-teal">CLIENT VALUE</span>
                  <p className="qa-cell-text">
                    A visible path from resume preparation to eligible
                    opportunities.
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="qa-comparison-row">
                <div className="qa-cell">
                  <span className="qa-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="qa-tag-badge qa-badge-coral">CHALLENGE</span>
                  <h4 className="qa-cell-title">
                    Make processing progress understandable.
                  </h4>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="qa-tag-badge qa-badge-blue">SOLUTION</span>
                  <p className="qa-cell-text">
                    Presented resume analysis through named activities and
                    progress feedback.
                  </p>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="qa-tag-badge qa-badge-teal">CLIENT VALUE</span>
                  <p className="qa-cell-text">
                    A clearer explanation of what the product is doing during
                    the waiting state.
                  </p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="qa-comparison-row">
                <div className="qa-cell">
                  <span className="qa-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="qa-tag-badge qa-badge-coral">CHALLENGE</span>
                  <h4 className="qa-cell-title">
                    Present enough job information to support a decision.
                  </h4>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="qa-tag-badge qa-badge-blue">SOLUTION</span>
                  <p className="qa-cell-text">
                    Combined consistent job cards with structured detail
                    sections and a persistent application action.
                  </p>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="qa-tag-badge qa-badge-teal">CLIENT VALUE</span>
                  <p className="qa-cell-text">
                    A repeatable format for presenting roles and guiding the
                    next step.
                  </p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="qa-comparison-row">
                <div className="qa-cell">
                  <span className="qa-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="qa-tag-badge qa-badge-coral">CHALLENGE</span>
                  <h4 className="qa-cell-title">
                    Keep previous applications easy to revisit.
                  </h4>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="qa-tag-badge qa-badge-blue">SOLUTION</span>
                  <p className="qa-cell-text">
                    Created a dedicated My Jobs area with applied entries and a
                    separate saved-jobs tab.
                  </p>
                </div>

                <div className="qa-cell">
                  <span className="qa-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="qa-tag-badge qa-badge-teal">CLIENT VALUE</span>
                  <p className="qa-cell-text">
                    An organized destination for reviewing application
                    activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="qa-section">
          <div className="quickapply-container">
            <div className="qa-cta-panel">
              <div className="qa-cta-left">
                <h2 className="qa-cta-heading">
                  Make your product’s next step clear.
                </h2>
                <p className="qa-cta-subtext">
                  Let’s turn complex journeys into approachable mobile
                  experiences.
                </p>
              </div>

              <div className="qa-cta-right">
                <button
                  onClick={() => navigate("/contact")}
                  className="qa-cta-btn-primary"
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
                  className="qa-view-all-projects-btn"
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
export default QuickApplyProject;
