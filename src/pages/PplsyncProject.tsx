import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useBackToProjects } from "../utils/scrollRestoration";
import { SEO } from "../components/SEO";

import "./PplsyncProject.css";

// Exported high-resolution screens and crops from supplied PDFs
import pplsyncHeroBanner from "../assets/pplsync_screens/pplsync_hero_banner.png";
import pplsyncHomeScreen from "../assets/pplsync_screens/pplsync_home_screen.png";
import pplsyncHomeSummaryCrop from "../assets/pplsync_screens/pplsync_home_summary_crop.png";
import pplsyncPunchInScreen from "../assets/pplsync_screens/pplsync_punch_in_screen.png";
import pplsyncCalendarScreen from "../assets/pplsync_screens/pplsync_calendar_screen.png";
import pplsyncListScreen from "../assets/pplsync_screens/pplsync_list_screen.png";
import pplsyncServiceScreen from "../assets/pplsync_screens/pplsync_service_screen.png";
import pplsyncServiceCardsCrop from "../assets/pplsync_screens/pplsync_service_cards_crop.png";

export function PplsyncProject() {
  const navigate = useNavigate();
  const handleBack = useBackToProjects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="pplsync-page">
      <SEO
        title="Pplsync Attendance App UI/UX Case Study | NaviX Media"
        description="How NaviX Media designed the Pplsync mobile app interface for workplace attendance tracking, employee service requests, and record management."
        canonical="https://www.navixmedia.in/projects/13"
      />
      {/* Ambient Lighting */}
      <div className="pplsync-ambient" aria-hidden="true">
        <div className="pplsync-ambient-top" />
        <div className="pplsync-ambient-bottom" />
      </div>

      <Navbar />

      <main className="pplsync-main">
        {/* HERO SECTION */}
        <section className="pp-hero-section">
          <div className="pplsync-container">
            <button
              onClick={handleBack}
              className="pp-back-btn"
              aria-label="Back to Projects"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            {/* Compact Hero Banner */}
            <div className="pp-hero-banner-frame">
              <img
                src={pplsyncHeroBanner}
                alt="Your workday. Clearly connected - Pplsync"
                className="pp-hero-banner-img"
                loading="eager"
              />
            </div>

            {/* OVERVIEW */}
            <div className="pp-overview-container">
              <h1 className="sr-only">Pplsync — Employee Attendance & HR App Design</h1>
              <h2 className="pp-overview-heading">Overview</h2>
              <p className="pp-overview-desc">
                Pplsync brings daily attendance and employee services into one
                mobile experience. NaviX Media organized the interface around
                checking the workday, marking attendance, reviewing records, and
                accessing common HR services.
              </p>

              {/* Quiet inline metadata row */}
              <div className="pp-metadata-row">
                <div className="pp-metadata-item">
                  <strong>Industry:</strong> HR & Workforce Management
                </div>
                <div className="pp-metadata-divider" />
                <div className="pp-metadata-item">
                  <strong>Focus:</strong> Mobile App UI/UX
                </div>
                <div className="pp-metadata-divider" />
                <div className="pp-metadata-item">
                  <strong>Platform:</strong> Android & iOS App
                </div>
              </div>

              {/* View on Google Play CTA Button */}
              <div className="pp-play-cta-wrap">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.hrmanagmentv2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98 }}
                  className="pp-play-cta-btn"
                  aria-label="View Pplsync on Google Play"
                >
                  <span>View on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / THE CHALLENGE */}
        <section className="pp-section">
          <div className="pplsync-container">
            <div className="pp-challenge-panel">
              <div className="pp-challenge-grid">
                {/* Left column */}
                <div>
                  <span className="pp-eyebrow">01 / THE CHALLENGE</span>
                  <h2 className="pp-section-heading">
                    Connect daily attendance with everyday employee needs.
                  </h2>
                  <p className="pp-challenge-body">
                    The design needed to bring time tracking, attendance
                    history, and employee services together without making the
                    interface difficult to navigate. Frequent actions required
                    clear visibility, while detailed records and supporting
                    services needed their own space.
                  </p>
                </div>

                {/* Right column: 3 requirement cards */}
                <div className="pp-priority-stack">
                  <div className="pp-priority-row">
                    <span className="pp-q-dot pp-q-dot-purple" />
                    <span>Put daily attendance information within reach.</span>
                  </div>

                  <div className="pp-priority-row">
                    <span className="pp-q-dot pp-q-dot-blue" />
                    <span>Support both monthly and day-by-day review.</span>
                  </div>

                  <div className="pp-priority-row">
                    <span className="pp-q-dot pp-q-dot-mint" />
                    <span>Give employee services a clear destination.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / DESIGN STRATEGY */}
        <section className="pp-section">
          <div className="pplsync-container">
            <span className="pp-eyebrow">02 / DESIGN STRATEGY</span>
            <h2 className="pp-section-heading">
              Three decisions shaped the experience.
            </h2>
            <p className="pp-section-intro">
              Prioritize the workday, offer different levels of detail, and
              organize services around recognizable tasks.
            </p>

            {/* 3 Strategy Cards */}
            <div className="pp-strategy-grid">
              {/* Card 01 */}
              <div className="pp-strategy-card">
                <div className="pp-card-top">
                  <span className="pp-card-number">01 — Start with today</span>
                  <p className="pp-card-desc">
                    Bring working hours, punch timings, shift information, and
                    the attendance action together on Home.
                  </p>
                </div>
                <div className="pp-card-footer">TASK HIERARCHY</div>
              </div>

              {/* Card 02 */}
              <div className="pp-strategy-card">
                <div className="pp-card-top">
                  <span className="pp-card-number">
                    02 — Show the overview and the detail
                  </span>
                  <p className="pp-card-desc">
                    Use a calendar for the monthly picture and a list for
                    individual punch timings and working hours.
                  </p>
                </div>
                <div className="pp-card-footer">OVERVIEW TO DETAIL</div>
              </div>

              {/* Card 03 */}
              <div className="pp-strategy-card">
                <div className="pp-card-top">
                  <span className="pp-card-number">
                    03 — Group employee services
                  </span>
                  <p className="pp-card-desc">
                    Give requests and workplace information a dedicated
                    destination with clear labels and repeated card patterns.
                  </p>
                </div>
                <div className="pp-card-footer">RECOGNITION & CONSISTENCY</div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / THE EXPERIENCE */}
        <section className="pp-section">
          <div className="pplsync-container">
            <span className="pp-eyebrow">03 / THE EXPERIENCE</span>
            <h2 className="pp-section-heading">
              From starting the day to reviewing the details.
            </h2>
            <p className="pp-section-intro">
              Five screens show how daily attendance and employee services
              connect through a consistent mobile structure.
            </p>

            <div className="pp-experience-stack">
              {/* BLOCK A — HOME */}
              <div className="pp-presentation-panel pp-panel-lavender">
                <div className="pp-panel-header">
                  <span className="pp-panel-label">HOME SCREEN</span>
                  <h3 className="pp-panel-heading">
                    Put the workday in focus.
                  </h3>
                  <p className="pp-panel-body">
                    Home brings working hours, punch timings, and shift
                    information into a prominent daily summary. The swipe
                    action gives attendance a clear place, while quick actions
                    provide entry points for leave, permission, and
                    regularization requests.
                  </p>
                </div>

                {/* Home Phone & Detail Crop */}
                <div className="pp-dual-phones-row">
                  <div className="pp-phone-wrap">
                    <img
                      src={pplsyncHomeScreen}
                      alt="Pplsync Home Screen - Daily summary, punch timings, and quick actions"
                      className="pp-phone-img"
                      loading="lazy"
                    />
                    <span className="pp-phone-caption">Home Screen View</span>
                  </div>

                  <div className="pp-crop-frame-wrap">
                    <div className="pp-crop-frame-title">
                      Daily Attendance & Swipe Control
                    </div>
                    <div className="pp-crop-frame-desc">
                      Detailed view of the live working hours timer, punch
                      records, scheduled shift, and the swipe-to-punch action.
                    </div>
                    <img
                      src={pplsyncHomeSummaryCrop}
                      alt="Pplsync Attendance summary and swipe control crop"
                      className="pp-crop-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* BLOCK B — PUNCH IN */}
              <div className="pp-two-col-section">
                <div className="pp-col-text-block">
                  <span className="pp-eyebrow">ATTENDANCE CAPTURE</span>
                  <h3 className="pp-text-title">
                    Make the punch-in step explicit.
                  </h3>
                  <p className="pp-text-body">
                    The attendance screen brings the camera preview, current
                    location, and Punch in action into one focused view.
                    Employees can see the capture area and location context
                    before submitting attendance.
                  </p>

                  <div className="pp-check-points">
                    <div className="pp-check-point pp-dark-check-point">
                      <span className="pp-check-bullet pp-dark-check-bullet" />
                      <span>
                        A large camera preview makes the capture step visible.
                      </span>
                    </div>
                    <div className="pp-check-point pp-dark-check-point">
                      <span className="pp-check-bullet pp-dark-check-bullet" />
                      <span>
                        Current location appears near the submission action.
                      </span>
                    </div>
                    <div className="pp-check-point pp-dark-check-point">
                      <span className="pp-check-bullet pp-dark-check-bullet" />
                      <span>
                        A single primary button keeps the next step clear.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Punch in screen in pale blue panel */}
                <div
                  className="pp-presentation-panel pp-panel-blue"
                  style={{ padding: "32px 24px" }}
                >
                  <div className="pp-phone-wrap">
                    <img
                      src={pplsyncPunchInScreen}
                      alt="Pplsync Punch In Screen - Camera preview and location context"
                      className="pp-phone-img"
                      loading="lazy"
                    />
                    <span className="pp-phone-caption">Mark Attendance View</span>
                  </div>
                </div>
              </div>

              {/* BLOCK C — ATTENDANCE RECORDS */}
              <div className="pp-presentation-panel pp-panel-blue">
                <div className="pp-panel-header">
                  <span className="pp-panel-label">ATTENDANCE HISTORY</span>
                  <h3 className="pp-panel-heading">
                    One attendance history. Two ways to review it.
                  </h3>
                  <p className="pp-panel-body">
                    The calendar presents the month through daily attendance
                    markers and summary counts. The list provides a closer view
                    of punch-in, punch-out, and total hours, with separate
                    treatment for week-off days.
                  </p>
                </div>

                {/* Calendar & List Screens Side by Side */}
                <div className="pp-calendar-list-grid">
                  <div className="pp-phone-wrap">
                    <img
                      src={pplsyncCalendarScreen}
                      alt="Pplsync Attendance Calendar Screen - Monthly overview"
                      className="pp-phone-img"
                      loading="lazy"
                    />
                    <span className="pp-phone-caption">Monthly overview</span>
                  </div>

                  <div className="pp-phone-wrap">
                    <img
                      src={pplsyncListScreen}
                      alt="Pplsync Attendance List Screen - Daily records"
                      className="pp-phone-img"
                      loading="lazy"
                    />
                    <span className="pp-phone-caption">Daily records</span>
                  </div>
                </div>
              </div>

              {/* BLOCK D — EMPLOYEE SERVICES */}
              <div className="pp-presentation-panel pp-panel-cream">
                <div className="pp-panel-header">
                  <span className="pp-panel-label">EMPLOYEE SERVICES</span>
                  <h3 className="pp-panel-heading">
                    Give everyday requests a dedicated home.
                  </h3>
                  <p className="pp-panel-body">
                    Services groups leave, permission, announcements,
                    regularization, holidays, organization structure, and
                    payslip access in one place. Named cards, recognizable icons,
                    and repeated arrows make the available destinations easy to
                    identify.
                  </p>
                </div>

                {/* Services phone & crop side by side */}
                <div className="pp-dual-phones-row">
                  <div className="pp-phone-wrap">
                    <img
                      src={pplsyncServiceScreen}
                      alt="Pplsync Services Screen - Leave, permission, and workplace tools"
                      className="pp-phone-img"
                      loading="lazy"
                    />
                    <span className="pp-phone-caption">Services Directory</span>
                  </div>

                  <div className="pp-crop-frame-wrap">
                    <div className="pp-crop-frame-title">
                      Service Categories & Actions
                    </div>
                    <div className="pp-crop-frame-desc">
                      Detailed view of the primary request cards: Leave,
                      Permission, Announcements, and Regularization with clear
                      action descriptions.
                    </div>
                    <img
                      src={pplsyncServiceCardsCrop}
                      alt="Pplsync Service Cards crop"
                      className="pp-crop-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / PROBLEMS & SOLUTIONS */}
        <section className="pp-section">
          <div className="pplsync-container">
            <span className="pp-eyebrow">04 / PROBLEMS & SOLUTIONS</span>
            <h2 className="pp-section-heading">
              Client challenges. Our design response.
            </h2>
            <p className="pp-section-intro">
              How NaviX Media translated attendance and employee-service
              requirements into a clear mobile structure.
            </p>

            <div className="pp-comparison-card">
              {/* Header row */}
              <div className="pp-comparison-header">
                <div>CLIENT CHALLENGE</div>
                <div>NAVIX MEDIA’S SOLUTION</div>
                <div>VALUE FOR THE CLIENT</div>
              </div>

              {/* ROW 1 */}
              <div className="pp-comparison-row">
                <div className="pp-cell">
                  <span className="pp-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pp-tag-badge pp-badge-coral">CHALLENGE</span>
                  <h4 className="pp-cell-title">
                    Bring daily attendance information together.
                  </h4>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pp-tag-badge pp-badge-purple">SOLUTION</span>
                  <p className="pp-cell-text">
                    Grouped working hours, punch timings, shift details, and the
                    attendance action on Home.
                  </p>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pp-tag-badge pp-badge-mint">CLIENT VALUE</span>
                  <p className="pp-cell-text">
                    A clear starting point for the employee’s workday.
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="pp-comparison-row">
                <div className="pp-cell">
                  <span className="pp-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pp-tag-badge pp-badge-coral">CHALLENGE</span>
                  <h4 className="pp-cell-title">
                    Make the attendance submission step understandable.
                  </h4>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pp-tag-badge pp-badge-purple">SOLUTION</span>
                  <p className="pp-cell-text">
                    Presented the camera preview, current location, and Punch
                    in button in one focused screen.
                  </p>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pp-tag-badge pp-badge-mint">CLIENT VALUE</span>
                  <p className="pp-cell-text">
                    A visible sequence for reviewing context and submitting
                    attendance.
                  </p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="pp-comparison-row">
                <div className="pp-cell">
                  <span className="pp-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pp-tag-badge pp-badge-coral">CHALLENGE</span>
                  <h4 className="pp-cell-title">
                    Support both monthly and detailed attendance review.
                  </h4>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pp-tag-badge pp-badge-purple">SOLUTION</span>
                  <p className="pp-cell-text">
                    Provided calendar and list presentations within the
                    Attendance area.
                  </p>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pp-tag-badge pp-badge-mint">CLIENT VALUE</span>
                  <p className="pp-cell-text">
                    Two complementary ways to understand the same attendance
                    history.
                  </p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="pp-comparison-row">
                <div className="pp-cell">
                  <span className="pp-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="pp-tag-badge pp-badge-coral">CHALLENGE</span>
                  <h4 className="pp-cell-title">
                    Make employee services easy to locate.
                  </h4>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="pp-tag-badge pp-badge-purple">SOLUTION</span>
                  <p className="pp-cell-text">
                    Grouped named service destinations under a dedicated
                    navigation tab.
                  </p>
                </div>

                <div className="pp-cell">
                  <span className="pp-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="pp-tag-badge pp-badge-mint">CLIENT VALUE</span>
                  <p className="pp-cell-text">
                    An organized entry point for employee requests and
                    workplace information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="pp-section">
          <div className="pplsync-container">
            <div className="pp-cta-panel">
              <div className="pp-cta-left">
                <h2 className="pp-cta-heading">
                  Make everyday work easier to navigate.
                </h2>
                <p className="pp-cta-subtext">
                  Let’s turn complex workflows into clear, approachable app
                  experiences.
                </p>
              </div>

              <div className="pp-cta-right">
                <button
                  onClick={() => navigate("/contact")}
                  className="pp-cta-btn-primary"
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
                  className="pp-view-all-projects-btn"
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
export default PplsyncProject;
