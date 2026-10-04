import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useBackToProjects } from "../utils/scrollRestoration";

import "./ProEdgeProject.css";

// Exported high-resolution screens and crops from supplied PDFs
import proedgeHeroBanner from "../assets/proedge_screens/proedge_hero_banner.png";
import proedgeHomeScreen from "../assets/proedge_screens/proedge_home_screen.png";
import proedgeStoreScreen from "../assets/proedge_screens/proedge_store_screen.png";
import proedgeCourseTopScreen from "../assets/proedge_screens/proedge_course_top_screen.png";
import proedgeCourseTabsScreen from "../assets/proedge_screens/proedge_course_tabs_screen.png";
import proedgeProfileScreen from "../assets/proedge_screens/proedge_profile_screen.png";
import proedgeMessageScreen from "../assets/proedge_screens/proedge_message_screen.png";
import proedgeMoreScreen from "../assets/proedge_screens/proedge_more_screen.png";

export function ProEdgeProject() {
  const navigate = useNavigate();
  const handleBack = useBackToProjects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="proedge-page">
      {/* Ambient Lighting */}
      <div className="proedge-ambient" aria-hidden="true">
        <div className="proedge-ambient-top" />
        <div className="proedge-ambient-bottom" />
      </div>

      <Navbar />

      <main className="proedge-main">
        {/* HERO SECTION */}
        <section className="pe-hero-section">
          <div className="proedge-container">
            <button
              onClick={handleBack}
              className="pe-back-btn"
              aria-label="Back to Projects"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            {/* Split Hero Banner */}
            <div className="pe-hero-banner-frame">
              <img
                src={proedgeHeroBanner}
                alt="Discover your course. Keep learning connected - ProEdge"
                className="pe-hero-banner-img"
                loading="eager"
              />
            </div>

            {/* OVERVIEW */}
            <div className="pe-overview-container">
              <h2 className="pe-overview-heading">Overview</h2>
              <p className="pe-overview-desc">
                ProEdge brings course discovery, learning preferences, and
                tutor communication into one mobile experience. The design
                connects these activities through clear navigation, structured
                course information, and familiar interaction patterns.
              </p>

              {/* Quiet inline metadata row */}
              <div className="pe-metadata-row">
                <div className="pe-metadata-item">
                  <strong>Industry:</strong> Education & E-Learning
                </div>
                <div className="pe-metadata-divider" />
                <div className="pe-metadata-item">
                  <strong>Focus:</strong> Mobile App UI/UX
                </div>
                <div className="pe-metadata-divider" />
                <div className="pe-metadata-item">
                  <strong>Platform:</strong> Android & iOS App
                </div>
              </div>

              {/* View on Google Play CTA Button */}
              <div className="pe-play-cta-wrap">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.i2global.proedge"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98 }}
                  className="pe-play-cta-btn"
                  aria-label="View ProEdge on Google Play"
                >
                  <span>View on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / THE CHALLENGE */}
        <section className="pe-section">
          <div className="proedge-container">
            <div className="pe-challenge-panel">
              <div className="pe-challenge-grid">
                {/* Left column */}
                <div>
                  <span className="pe-eyebrow">01 / THE CHALLENGE</span>
                  <h2 className="pe-section-heading">
                    Bring a broad learning offering into a clear mobile journey.
                  </h2>
                  <p className="pe-challenge-body">
                    The design challenge was to present different learning
                    categories, explain course options, and keep everyday
                    learning tools within reach. Each screen needed to give
                    learners enough context to understand their next step.
                  </p>
                </div>

                {/* Right column: 3 requirement cards */}
                <div className="pe-priority-stack">
                  <div className="pe-priority-row">
                    <span className="pe-q-dot pe-q-dot-purple" />
                    <span>Make the course offering easy to explore.</span>
                  </div>

                  <div className="pe-priority-row">
                    <span className="pe-q-dot pe-q-dot-blue" />
                    <span>Explain course details before enrolment.</span>
                  </div>

                  <div className="pe-priority-row">
                    <span className="pe-q-dot pe-q-dot-teal" />
                    <span>Keep learning tools and tutor contact accessible.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / DESIGN STRATEGY */}
        <section className="pe-section">
          <div className="proedge-container">
            <span className="pe-eyebrow">02 / DESIGN STRATEGY</span>
            <h2 className="pe-section-heading">
              Three priorities shaped the experience.
            </h2>
            <p className="pe-section-intro">
              Organize discovery, make decisions clearer, and keep ongoing
              learning connected.
            </p>

            {/* 3 Strategy Cards */}
            <div className="pe-strategy-grid">
              {/* Card 01 */}
              <div className="pe-strategy-card">
                <div className="pe-card-top">
                  <span className="pe-card-number">01 — Guide discovery</span>
                  <p className="pe-card-desc">
                    Subject search, learning categories, and consistent navigation
                    give learners clear starting points.
                  </p>
                </div>
                <div className="pe-card-footer">
                  INFORMATION ARCHITECTURE
                </div>
              </div>

              {/* Card 02 */}
              <div className="pe-strategy-card">
                <div className="pe-card-top">
                  <span className="pe-card-number">02 — Support course decisions</span>
                  <p className="pe-card-desc">
                    Structured cards and course-detail sections bring important
                    information together before enrolment.
                  </p>
                </div>
                <div className="pe-card-footer">
                  VISUAL HIERARCHY
                </div>
              </div>

              {/* Card 03 */}
              <div className="pe-strategy-card">
                <div className="pe-card-top">
                  <span className="pe-card-number">03 — Connect everyday learning</span>
                  <p className="pe-card-desc">
                    Preferences, schedules, messages, and account tools give
                    supporting tasks a recognizable place.
                  </p>
                </div>
                <div className="pe-card-footer">
                  CONSISTENT NAVIGATION
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / THE EXPERIENCE */}
        <section className="pe-section">
          <div className="proedge-container">
            <span className="pe-eyebrow">03 / THE EXPERIENCE</span>
            <h2 className="pe-section-heading">
              A connected journey, shown through the screens.
            </h2>
            <p className="pe-section-intro">
              From exploring the course offering to contacting a tutor, each
              screen supports a specific part of the learning experience.
            </p>

            <div className="pe-experience-stack">
              {/* BLOCK A — DISCOVERY */}
              <div className="pe-presentation-panel pe-panel-lavender">
                <div className="pe-panel-header">
                  <span className="pe-panel-label">DISCOVERY</span>
                  <h3 className="pe-panel-heading">
                    Give learners a clear place to begin.
                  </h3>
                  <p className="pe-panel-body">
                    Home introduces the learning offering through subject
                    search, recommendations, and category shortcuts. The Store
                    adds filters and a consistent course-card structure to
                    support more focused browsing.
                  </p>
                </div>

                {/* Home & Store side by side */}
                <div className="pe-dual-phones-row">
                  <div className="pe-phone-wrap">
                    <img
                      src={proedgeHomeScreen}
                      alt="ProEdge Home Screen - Search, recommendations, and learning categories"
                      className="pe-phone-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="pe-phone-wrap">
                    <img
                      src={proedgeStoreScreen}
                      alt="ProEdge Store List Screen - Filtered course browsing"
                      className="pe-phone-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* BLOCK B — COURSE DETAILS */}
              <div className="pe-two-col-section">
                <div className="pe-col-text-block">
                  <span className="pe-eyebrow">COURSE DETAILS</span>
                  <h3 className="pe-text-title">
                    Bring the course decision into focus.
                  </h3>
                  <p className="pe-text-body">
                    The course-detail screen combines a preview, delivery
                    information, plan details, and learning content. Demo and
                    enrolment actions sit alongside this information to make the
                    available next steps visible.
                  </p>

                  <div className="pe-check-points">
                    <div className="pe-check-point">
                      <span className="pe-check-bullet" />
                      <span>
                        Overview, Scheduled, and Curriculum tabs separate the
                        information.
                      </span>
                    </div>
                    <div className="pe-check-point">
                      <span className="pe-check-bullet" />
                      <span>
                        Persistent enrolment controls keep the next action
                        within reach.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Course Details Top Viewport & Tabs side-by-side */}
                <div className="pe-b-phones-pair">
                  <div className="pe-phone-wrap">
                    <img
                      src={proedgeCourseTopScreen}
                      alt="ProEdge Course Detail Screen Top - Preview and instructor details"
                      className="pe-phone-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="pe-phone-wrap">
                    <img
                      src={proedgeCourseTabsScreen}
                      alt="ProEdge Course Detail Screen Tabs - Plan information and curriculum"
                      className="pe-phone-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* BLOCK C — LEARNING PREFERENCES */}
              <div className="pe-two-col-section pe-reverse-mobile">
                {/* Profile screen on left in soft blue presentation panel */}
                <div className="pe-presentation-panel pe-panel-blue" style={{ padding: "32px 24px" }}>
                  <div className="pe-phone-wrap">
                    <img
                      src={proedgeProfileScreen}
                      alt="ProEdge Student Profile Screen - Academic information and preferences"
                      className="pe-phone-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Explanation on right */}
                <div className="pe-col-text-block">
                  <span className="pe-eyebrow">LEARNING PREFERENCES</span>
                  <h3 className="pe-text-title">
                    Make learning preferences explicit.
                  </h3>
                  <p className="pe-text-body">
                    The profile groups academic information and learning
                    preferences into clear sections. Grade, board, language,
                    subjects, and preferred time slots can be reviewed without
                    searching across different areas.
                  </p>

                  <div className="pe-check-points">
                    <div className="pe-check-point">
                      <span className="pe-check-bullet" />
                      <span>
                        Grouped information makes the profile easier to scan.
                      </span>
                    </div>
                    <div className="pe-check-point">
                      <span className="pe-check-bullet" />
                      <span>
                        Visible edit actions show where preferences can be
                        updated.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOCK D — COMMUNICATION & UTILITIES */}
              <div className="pe-presentation-panel pe-panel-cream">
                <div className="pe-panel-header">
                  <span className="pe-panel-label">COMMUNICATION & UTILITIES</span>
                  <h3 className="pe-panel-heading">
                    Keep support and everyday tools close.
                  </h3>
                  <p className="pe-panel-body">
                    Tutor messaging provides a familiar space for learning
                    conversations. The More menu gathers profile, cart,
                    schedule, notifications, messages, and help into one
                    supporting navigation layer.
                  </p>
                </div>

                {/* Message and More screens side by side */}
                <div className="pe-d-phones-row">
                  <div className="pe-phone-wrap">
                    <img
                      src={proedgeMessageScreen}
                      alt="ProEdge Tutor Messaging Screen"
                      className="pe-phone-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="pe-phone-wrap">
                    <img
                      src={proedgeMoreScreen}
                      alt="ProEdge More Menu Bottom Sheet"
                      className="pe-phone-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / PROBLEMS & SOLUTIONS */}
        <section className="pe-section">
          <div className="proedge-container">
            <span className="pe-eyebrow">04 / PROBLEMS & SOLUTIONS</span>
            <h2 className="pe-section-heading">
              Client challenges. Our design response.
            </h2>
            <p className="pe-section-intro">
              How NaviX Media translated the product’s requirements into
              practical interface decisions.
            </p>

            <div className="pe-comparison-card">
              {/* Header row */}
              <div className="pe-comparison-header">
                <div>CLIENT CHALLENGE</div>
                <div>NAVIX MEDIA’S SOLUTION</div>
                <div>VALUE FOR THE CLIENT</div>
              </div>

              {/* ROW 1 */}
              <div className="pe-comparison-row">
                <div className="pe-cell">
                  <span className="pe-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pe-tag-badge pe-badge-coral">CHALLENGE</span>
                  <h4 className="pe-cell-title">
                    Present a broad course offering clearly.
                  </h4>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pe-tag-badge pe-badge-purple">SOLUTION</span>
                  <p className="pe-cell-text">
                    Organized discovery around search, learning categories,
                    recommendations, and Store filters.
                  </p>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pe-tag-badge pe-badge-teal">CLIENT VALUE</span>
                  <p className="pe-cell-text">
                    A structured way to showcase different learning offerings.
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="pe-comparison-row">
                <div className="pe-cell">
                  <span className="pe-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pe-tag-badge pe-badge-coral">CHALLENGE</span>
                  <h4 className="pe-cell-title">
                    Explain course options before enrolment.
                  </h4>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pe-tag-badge pe-badge-purple">SOLUTION</span>
                  <p className="pe-cell-text">
                    Grouped course information, plan details, content tabs, and
                    enrolment actions.
                  </p>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pe-tag-badge pe-badge-teal">CLIENT VALUE</span>
                  <p className="pe-cell-text">
                    A clearer presentation of what each course offers and how to
                    proceed.
                  </p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="pe-comparison-row">
                <div className="pe-cell">
                  <span className="pe-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pe-tag-badge pe-badge-coral">CHALLENGE</span>
                  <h4 className="pe-cell-title">
                    Capture relevant learner preferences.
                  </h4>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pe-tag-badge pe-badge-purple">SOLUTION</span>
                  <p className="pe-cell-text">
                    Separated academic details and learning preferences into
                    editable sections.
                  </p>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pe-tag-badge pe-badge-teal">CLIENT VALUE</span>
                  <p className="pe-cell-text">
                    An organized place to maintain learner information.
                  </p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="pe-comparison-row">
                <div className="pe-cell">
                  <span className="pe-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pe-tag-badge pe-badge-coral">CHALLENGE</span>
                  <h4 className="pe-cell-title">
                    Keep supporting tools easy to locate.
                  </h4>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pe-tag-badge pe-badge-purple">SOLUTION</span>
                  <p className="pe-cell-text">
                    Combined direct tutor messaging with a dedicated menu for
                    account and learning utilities.
                  </p>
                </div>

                <div className="pe-cell">
                  <span className="pe-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pe-tag-badge pe-badge-teal">CLIENT VALUE</span>
                  <p className="pe-cell-text">
                    A consistent structure for ongoing communication and
                    everyday tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA (Approved NaviX Component) */}
        <section className="pe-section">
          <div className="proedge-container">
            <div className="pe-cta-panel">
              <div className="pe-cta-left">
                <h2 className="pe-cta-heading">
                  Make your app easier to understand and use.
                </h2>
                <p className="pe-cta-subtext">
                  Let’s turn your product requirements into a clear, connected
                  mobile experience.
                </p>
              </div>

              <div className="pe-cta-right">
                <button
                  onClick={() => navigate("/contact")}
                  className="pe-cta-btn-primary"
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
                  className="pe-view-all-projects-btn"
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
export default ProEdgeProject;
