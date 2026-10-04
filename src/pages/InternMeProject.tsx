import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useBackToProjects } from "../utils/scrollRestoration";

import "./InternMeProject.css";

// Real exported screenshots from supplied PDFs
import internmeHeroBanner from "../assets/internme_screens/internme_hero_banner.png";
import homeCitiesCrop from "../assets/internme_screens/home_cities_crop.jpg";
import searchCrop from "../assets/internme_screens/search_crop.jpg";
import detailsCrop from "../assets/internme_screens/details_crop.jpg";
import plansCrop from "../assets/internme_screens/plans_crop.jpg";

export function InternMeProject() {
  const navigate = useNavigate();
  const handleBack = useBackToProjects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="internme-page">
      {/* Ambient Lighting */}
      <div className="internme-ambient" aria-hidden="true">
        <div className="internme-ambient-top" />
        <div className="internme-ambient-bottom" />
      </div>

      <Navbar />

      <main className="internme-main">
        {/* HERO */}
        <section className="im-hero-section">
          <div className="internme-container">
            <button
              onClick={handleBack}
              className="im-back-btn"
              aria-label="Back to Projects"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            <div className="im-hero-image-frame">
              <img
                src={internmeHeroBanner}
                alt="Discover internships. Build your future - InternMe"
                className="im-hero-wide-img"
                loading="eager"
              />
            </div>

            <div className="im-overview-container">
              <h2 className="im-overview-heading">Overview</h2>
              <p className="im-overview-desc">
                InternMe connects students with internship opportunities across
                industries and locations. NaviX Media designed the website
                experience to bring opportunity discovery, role details, and
                membership comparison into a clear, consistent interface.
              </p>
            </div>
          </div>
        </section>

        {/* 01 / THE CHALLENGE */}
        <section className="im-section">
          <div className="internme-container">
            <div className="im-challenge-panel">
              <div className="im-challenge-grid">
                {/* Left column */}
                <div>
                  <span className="im-eyebrow">01 / THE CHALLENGE</span>
                  <h2 className="im-section-heading">
                    An opportunity is only useful when students can judge its fit.
                  </h2>
                  <p className="im-challenge-body">
                    Before choosing an internship, students need to understand
                    the role, location, stipend, duration, and requirements. The
                    design challenge was to organise these details into a clear
                    experience, with accessible routes to search and membership
                    information.
                  </p>
                </div>

                {/* Right column */}
                <div className="im-question-stack">
                  <div className="im-question-row">
                    <span className="im-q-dot im-q-dot-lavender" />
                    <span>Can I find a relevant role?</span>
                  </div>

                  <div className="im-question-row">
                    <span className="im-q-dot im-q-dot-teal" />
                    <span>Can I quickly understand the requirements?</span>
                  </div>

                  <div className="im-question-row">
                    <span className="im-q-dot im-q-dot-amber" />
                    <span>Can I compare my membership options?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / DESIGN STRATEGY */}
        <section className="im-section">
          <div className="internme-container">
            <span className="im-eyebrow">02 / DESIGN STRATEGY</span>
            <h2 className="im-section-heading">
              Three decisions shaped the experience.
            </h2>
            <p className="im-section-intro">
              We organised the experience around what students need to find,
              compare, and understand.
            </p>

            <div className="im-strategy-grid">
              {/* Column 1 */}
              <div className="im-strategy-col">
                <div>
                  <div className="im-strategy-num">01</div>
                  <h3 className="im-strategy-title">Guide discovery</h3>
                  <p className="im-strategy-desc">
                    Keep search visible and provide city shortcuts so students
                    have clear starting points.
                  </p>
                </div>
                <div className="im-strategy-label">
                  Navigation + city discovery
                </div>
              </div>

              {/* Column 2 */}
              <div className="im-strategy-col">
                <div>
                  <div className="im-strategy-num">02</div>
                  <h3 className="im-strategy-title">Support comparison</h3>
                  <p className="im-strategy-desc">
                    Use filters and repeated listing fields to help students
                    assess opportunities in a familiar format.
                  </p>
                </div>
                <div className="im-strategy-label">
                  Filters + consistent listings
                </div>
              </div>

              {/* Column 3 */}
              <div className="im-strategy-col">
                <div>
                  <div className="im-strategy-num">03</div>
                  <h3 className="im-strategy-title">Explain the options</h3>
                  <p className="im-strategy-desc">
                    Group role information into readable sections and present
                    membership features together.
                  </p>
                </div>
                <div className="im-strategy-label">
                  Role details + plan comparison
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / THE EXPERIENCE */}
        <section id="the-experience" className="im-section">
          <div className="internme-container">
            <span className="im-eyebrow">03 / THE EXPERIENCE</span>
            <h2 className="im-section-heading">See the decisions in the design.</h2>
            <p className="im-section-intro">
              Four connected screens bring the platform’s offer,
              opportunities, and membership choices into view.
            </p>

            <div className="im-showcase-stack">
              {/* A. HOMEPAGE */}
              <div className="im-story-full-panel im-story-panel-lavender">
                <div className="im-story-header">
                  <span className="im-story-label-dark">HOMEPAGE</span>
                  <h3 className="im-story-title-dark">
                    A clear introduction to the platform.
                  </h3>
                  <p className="im-story-desc-dark">
                    The homepage brings together the platform’s offer,
                    city-based discovery, employer content, and candidate
                    stories, giving visitors context before they explore.
                  </p>
                </div>

                <div className="im-browser-frame">
                  <div className="im-browser-bar" aria-hidden="true">
                    <div className="im-browser-dots">
                      <div className="im-browser-dot" />
                      <div className="im-browser-dot" />
                      <div className="im-browser-dot" />
                    </div>
                  </div>
                  <img
                    src={homeCitiesCrop}
                    alt="InternMe Homepage showing introduction and Popular Cities"
                    className="im-screenshot-img"
                    loading="lazy"
                  />
                </div>

                <div className="im-story-caption">
                  Multiple starting points for different student interests.
                </div>
              </div>

              {/* B. INTERNSHIP SEARCH */}
              <div className="im-story-split-grid">
                {/* Left: 60% Image in Pale Blue Panel */}
                <div className="im-image-panel-blue">
                  <div className="im-browser-frame">
                    <div className="im-browser-bar" aria-hidden="true">
                      <div className="im-browser-dots">
                        <div className="im-browser-dot" />
                        <div className="im-browser-dot" />
                        <div className="im-browser-dot" />
                      </div>
                    </div>
                    <img
                      src={searchCrop}
                      alt="InternMe Internship Search Sidebar and Listings"
                      className="im-screenshot-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right: 40% Text */}
                <div className="im-story-text">
                  <span className="im-eyebrow">INTERNSHIP SEARCH</span>
                  <h3 className="im-story-title">
                    Compare key details before opening a role.
                  </h3>
                  <p className="im-story-desc">
                    Search and grouped filters help students narrow the
                    options. Consistent listings make location, stipend,
                    duration, and application dates easier to scan.
                  </p>

                  <ul className="im-points-list">
                    <li className="im-point-item">
                      <span className="im-point-dot" />
                      <span>Relevant details in a repeated layout.</span>
                    </li>
                    <li className="im-point-item">
                      <span className="im-point-dot" />
                      <span>Availability status visible within each listing.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* C. INTERNSHIP DETAILS */}
              <div className="im-story-split-grid im-story-split-grid-reverse">
                {/* Left: 40% Text */}
                <div className="im-story-text">
                  <span className="im-eyebrow">INTERNSHIP DETAILS</span>
                  <h3 className="im-story-title">
                    Bring the role into focus.
                  </h3>
                  <p className="im-story-desc">
                    A summary banner introduces the main facts. Separate
                    sections explain the company, qualifications,
                    responsibilities, and perks.
                  </p>

                  <ul className="im-points-list">
                    <li className="im-point-item">
                      <span className="im-point-dot" />
                      <span>A quick overview followed by deeper information.</span>
                    </li>
                    <li className="im-point-item">
                      <span className="im-point-dot" />
                      <span>Application and start dates grouped separately.</span>
                    </li>
                  </ul>
                </div>

                {/* Right: 60% Image in Mint Panel */}
                <div className="im-image-panel-mint">
                  <div className="im-browser-frame">
                    <div className="im-browser-bar" aria-hidden="true">
                      <div className="im-browser-dots">
                        <div className="im-browser-dot" />
                        <div className="im-browser-dot" />
                        <div className="im-browser-dot" />
                      </div>
                    </div>
                    <img
                      src={detailsCrop}
                      alt="InternMe Opportunity Detail Summary and Content"
                      className="im-screenshot-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* D. SUBSCRIPTION PLANS */}
              <div className="im-story-full-panel im-story-panel-amber">
                <div className="im-story-header">
                  <span className="im-story-label-dark">
                    SUBSCRIPTION PLANS
                  </span>
                  <h3 className="im-story-title-dark">
                    Put membership choices side by side.
                  </h3>
                  <p className="im-story-desc-dark">
                    A shared card structure brings each plan’s price, billing
                    frequency, features, and action into one comparison view.
                  </p>
                </div>

                <div className="im-browser-frame">
                  <div className="im-browser-bar" aria-hidden="true">
                    <div className="im-browser-dots">
                      <div className="im-browser-dot" />
                      <div className="im-browser-dot" />
                      <div className="im-browser-dot" />
                    </div>
                  </div>
                  <img
                    src={plansCrop}
                    alt="InternMe Four Subscription Plans Side by Side"
                    className="im-screenshot-img"
                    loading="lazy"
                  />
                </div>

                <div className="im-story-caption">
                  Consistent presentation across four membership options.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / PROBLEMS & SOLUTIONS */}
        <section id="problems-solutions" className="im-section">
          <div className="internme-container">
            <span className="im-eyebrow">04 / PROBLEMS & SOLUTIONS</span>
            <h2 className="im-section-heading">
              Client challenges. Our design solutions.
            </h2>
            <p className="im-section-intro">
              How NaviX Media translated InternMe’s platform needs into a clear,
              consistent website experience.
            </p>

            <div className="im-comparison-container">
              {/* Header on Desktop */}
              <div className="im-comparison-header" aria-hidden="true">
                <div className="im-col-heading">CLIENT CHALLENGE</div>
                <div className="im-col-heading">NAVIX MEDIA’S SOLUTION</div>
                <div className="im-col-heading">VALUE FOR THE CLIENT</div>
              </div>

              {/* ROW 1 */}
              <div className="im-comparison-row">
                <div className="im-cell-col im-cell-challenge">
                  <span className="im-challenge-dot" />
                  <div className="im-challenge-text-wrap">
                    <span className="im-mobile-label">Client challenge</span>
                    <p className="im-cell-challenge-text">
                      Communicate the platform’s offer clearly.
                    </p>
                  </div>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">NaviX Media’s solution</span>
                  <p className="im-cell-solution-text">
                    Organised the homepage around the offer, discovery routes,
                    employer content, and candidate stories.
                  </p>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">Value for the client</span>
                  <p className="im-cell-value-text">
                    A clear introduction to the platform and what it offers.
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="im-comparison-row">
                <div className="im-cell-col im-cell-challenge">
                  <span className="im-challenge-dot" />
                  <div className="im-challenge-text-wrap">
                    <span className="im-mobile-label">Client challenge</span>
                    <p className="im-cell-challenge-text">
                      Make a broad internship catalogue easier to explore.
                    </p>
                  </div>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">NaviX Media’s solution</span>
                  <p className="im-cell-solution-text">
                    Combined keyword search, grouped filters, and consistently
                    structured internship listings.
                  </p>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">Value for the client</span>
                  <p className="im-cell-value-text">
                    A structured way to present opportunities across roles and
                    locations.
                  </p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="im-comparison-row">
                <div className="im-cell-col im-cell-challenge">
                  <span className="im-challenge-dot" />
                  <div className="im-challenge-text-wrap">
                    <span className="im-mobile-label">Client challenge</span>
                    <p className="im-cell-challenge-text">
                      Present detailed role information consistently.
                    </p>
                  </div>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">NaviX Media’s solution</span>
                  <p className="im-cell-solution-text">
                    Grouped key facts in a summary banner, followed by sections
                    for qualifications, responsibilities, and perks.
                  </p>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">Value for the client</span>
                  <p className="im-cell-value-text">
                    A repeatable layout for presenting different employers and
                    roles.
                  </p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="im-comparison-row">
                <div className="im-cell-col im-cell-challenge">
                  <span className="im-challenge-dot" />
                  <div className="im-challenge-text-wrap">
                    <span className="im-mobile-label">Client challenge</span>
                    <p className="im-cell-challenge-text">
                      Explain the differences between membership plans.
                    </p>
                  </div>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">NaviX Media’s solution</span>
                  <p className="im-cell-solution-text">
                    Presented four plans together with a shared structure for
                    pricing, billing, features, and actions.
                  </p>
                </div>
                <div className="im-cell-col">
                  <span className="im-mobile-label">Value for the client</span>
                  <p className="im-cell-value-text">
                    A dedicated comparison view that supports membership
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="im-section">
          <div className="internme-container">
            <div className="im-cta-panel">
              <div className="im-cta-left">
                <h2 className="im-cta-heading">
                  Make your platform easier to understand and use.
                </h2>
                <p className="im-cta-subtext">
                  Let’s connect your users’ needs with a clear, thoughtful
                  interface.
                </p>
              </div>

              <div className="im-cta-right">
                <button
                  onClick={() => navigate("/contact")}
                  className="im-cta-btn-primary"
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
                  className="im-view-all-projects-btn"
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
