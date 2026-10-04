import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useBackToProjects } from "../utils/scrollRestoration";

import "./EquilibrasProject.css";

// Exported high-resolution screens from supplied PDFs
import equilibrasHeroBanner from "../assets/equilibras_screens/equilibras_hero_banner.jpg";
import landingFull from "../assets/equilibras_screens/landing_full.jpg";
import shopFull from "../assets/equilibras_screens/shop_full.jpg";
import productFull from "../assets/equilibras_screens/product_full.jpg";
import storyFull from "../assets/equilibras_screens/story_full.jpg";

export function EquilibrasProject() {
  const navigate = useNavigate();
  const handleBack = useBackToProjects();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="equilibras-page">
      {/* Ambient Lighting */}
      <div className="equilibras-ambient" aria-hidden="true">
        <div className="equilibras-ambient-top" />
        <div className="equilibras-ambient-bottom" />
      </div>

      <Navbar />

      <main className="equilibras-main">
        {/* HERO SECTION */}
        <section className="eq-hero-section">
          <div className="equilibras-container">
            <button
              onClick={handleBack}
              className="eq-back-btn"
              aria-label="Back to Projects"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            {/* Hero Banner */}
            <div className="eq-hero-banner-frame">
              <img
                src={equilibrasHeroBanner}
                alt="Discover comfort. Move with confidence - Equilibras™"
                className="eq-hero-banner-img"
                loading="eager"
              />
            </div>

            {/* OVERVIEW */}
            <div className="eq-overview-container">
              <h2 className="eq-overview-heading">Overview</h2>
              <p className="eq-overview-desc">
                Equilibras™ brings footwear, its e-bed™ technology story, and a
                growing brand community into one website. NaviX Media designed an
                experience that connects brand discovery, collection browsing,
                and product selection through a consistent visual language.
              </p>
            </div>
          </div>
        </section>

        {/* 01 / THE CHALLENGE */}
        <section className="eq-section">
          <div className="equilibras-container">
            <div className="eq-challenge-panel">
              <div className="eq-challenge-grid">
                {/* Left column */}
                <div>
                  <span className="eq-eyebrow">01 / THE CHALLENGE</span>
                  <h2 className="eq-section-heading">
                    Tell a distinctive story. Make shopping straightforward.
                  </h2>
                  <p className="eq-challenge-body">
                    The design challenge was to explain what sets Equilibras™ apart
                    while keeping its products easy to explore. Brand education,
                    footwear collections, and purchase information needed a
                    clear place in the experience.
                  </p>
                </div>

                {/* Right column */}
                <div className="eq-priority-stack">
                  <div className="eq-priority-row">
                    <span className="eq-q-dot eq-q-dot-lime" />
                    <span>Explain the brand’s difference.</span>
                  </div>

                  <div className="eq-priority-row">
                    <span className="eq-q-dot eq-q-dot-teal" />
                    <span>Organize the footwear range.</span>
                  </div>

                  <div className="eq-priority-row">
                    <span className="eq-q-dot eq-q-dot-rose" />
                    <span>Bring purchase details into focus.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / DESIGN STRATEGY */}
        <section className="eq-section">
          <div className="equilibras-container">
            <span className="eq-eyebrow">02 / DESIGN STRATEGY</span>
            <h2 className="eq-section-heading">
              Three priorities shaped the experience.
            </h2>
            <p className="eq-section-intro">
              We connected brand storytelling with a familiar shopping journey,
              giving each page a clear purpose.
            </p>

            <div className="eq-strategy-grid">
              {/* Card 01 */}
              <div className="eq-strategy-card">
                <div className="eq-card-top">
                  <span className="eq-card-number">PRIORITY 01</span>
                  <h3 className="eq-card-title">Explain the difference</h3>
                  <p className="eq-card-desc">
                    Pair lifestyle imagery with a structured introduction to the
                    brand’s product story and e-bed™ technology.
                  </p>
                </div>
                <div className="eq-card-footer">
                  STORYTELLING · VISUAL HIERARCHY
                </div>
              </div>

              {/* Card 02 */}
              <div className="eq-strategy-card">
                <div className="eq-card-top">
                  <span className="eq-card-number">PRIORITY 02</span>
                  <h3 className="eq-card-title">Guide product discovery</h3>
                  <p className="eq-card-desc">
                    Group the range into four footwear categories, using
                    consistent product cards and clear collection links.
                  </p>
                </div>
                <div className="eq-card-footer">
                  INFORMATION ARCHITECTURE · CONSISTENCY
                </div>
              </div>

              {/* Card 03 */}
              <div className="eq-strategy-card">
                <div className="eq-card-top">
                  <span className="eq-card-number">PRIORITY 03</span>
                  <h3 className="eq-card-title">Support product decisions</h3>
                  <p className="eq-card-desc">
                    Bring imagery, pricing, size selection, and purchase
                    actions together, with supporting information nearby.
                  </p>
                </div>
                <div className="eq-card-footer">
                  DECISION SUPPORT · PROGRESSIVE DISCLOSURE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / THE EXPERIENCE */}
        <section className="eq-section">
          <div className="equilibras-container">
            <span className="eq-eyebrow">03 / THE EXPERIENCE</span>
            <h2 className="eq-section-heading">
              From the brand story to the product decision.
            </h2>
            <p className="eq-section-intro">
              Four connected pages show how we organized the experience around
              understanding, exploring, and choosing.
            </p>

            <div className="eq-experience-stack">
              {/* A. HOMEPAGE */}
              <div className="eq-presentation-panel eq-panel-sage">
                <div className="eq-panel-header">
                  <span className="eq-panel-label">HOMEPAGE</span>
                  <h3 className="eq-panel-heading">
                    Introduce the difference. Open the path to discovery.
                  </h3>
                  <p className="eq-panel-body">
                    The homepage moves from lifestyle imagery into a three-part
                    product story, followed by ambassador content and footwear
                    collections. This gives the brand’s explanation a clear
                    sequence and places shopping within the same journey.
                  </p>
                </div>

                {/* Hero, Explanatory Cards & Ambassador Section Crop */}
                <div className="eq-screenshot-container eq-screenshot-crop-hero">
                  <img
                    src={landingFull}
                    alt="Equilibras Homepage Story and Ambassador Section"
                    className="eq-screenshot-img"
                    style={{ objectPosition: "top center" }}
                    loading="lazy"
                  />
                </div>

                {/* Compact crop showing the four-category shopping section */}
                <div className="eq-screenshot-container eq-screenshot-crop-categories">
                  <div style={{ transform: "translateY(-36.8%)" }}>
                    <img
                      src={landingFull}
                      alt="Equilibras Four Footwear Collections"
                      className="eq-screenshot-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="eq-panel-caption">
                  Lifestyle imagery introduces the brand; structured sections
                  connect its story to the collection.
                </p>
              </div>

              {/* B. SHOP — IMAGE LEFT, EXPLANATION RIGHT */}
              <div className="eq-experience-two-col eq-col-shop">
                <div className="eq-presentation-panel eq-panel-blue">
                  <div className="eq-screenshot-container eq-screenshot-crop-shop">
                    <img
                      src={shopFull}
                      alt="Equilibras Shop Collections Overview"
                      className="eq-screenshot-img"
                      style={{ objectPosition: "top center" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="eq-experience-text-block">
                  <span className="eq-eyebrow">SHOP</span>
                  <h3 className="eq-section-heading" style={{ fontSize: "28px" }}>
                    Give every collection a clear place.
                  </h3>
                  <p className="eq-challenge-body">
                    The Shop page groups the range into e-flips, e-slides,
                    e-sneakers, and e-specialty. Repeated card layouts make
                    product names and prices easier to scan, while collection
                    links provide a clear next step.
                  </p>

                  <div className="eq-check-points">
                    <div className="eq-check-point">
                      <span className="eq-check-bullet" />
                      <span>Four clearly named footwear categories.</span>
                    </div>
                    <div className="eq-check-point">
                      <span className="eq-check-bullet" />
                      <span>Consistent image, name, and price placement.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* C. PRODUCT DETAILS — EXPLANATION LEFT, IMAGE RIGHT */}
              <div className="eq-experience-two-col eq-col-product">
                <div className="eq-experience-text-block">
                  <span className="eq-eyebrow">PRODUCT DETAILS</span>
                  <h3 className="eq-section-heading" style={{ fontSize: "28px" }}>
                    Bring the buying decision into focus.
                  </h3>
                  <p className="eq-challenge-body">
                    The product page places pricing, size selection, and purchase
                    actions beside a large image gallery. Supporting product,
                    delivery, and policy information adds context around the
                    decision.
                  </p>

                  <div className="eq-check-points">
                    <div className="eq-check-point">
                      <span className="eq-check-bullet" />
                      <span>
                        Product imagery stays close to size and purchase
                        controls.
                      </span>
                    </div>
                    <div className="eq-check-point">
                      <span className="eq-check-bullet" />
                      <span>
                        Supporting details are grouped into expandable sections.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="eq-presentation-panel eq-panel-ivory">
                  <div className="eq-screenshot-container eq-screenshot-crop-product">
                    <img
                      src={productFull}
                      alt="Equilibras Product Page Layout and Purchase Controls"
                      className="eq-screenshot-img"
                      style={{ objectPosition: "top center" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* D. OUR STORY — FULL-WIDTH PRESENTATION */}
              <div className="eq-presentation-panel eq-panel-sage">
                <div className="eq-panel-header">
                  <span className="eq-panel-label">OUR STORY</span>
                  <h3 className="eq-panel-heading">
                    Give the brand story room to breathe.
                  </h3>
                  <p className="eq-panel-body">
                    A dedicated story page separates the brand’s origins from
                    the shopping interface. A focused introduction, supporting
                    imagery, and wearer stories give visitors space to explore the
                    brand in more depth.
                  </p>
                </div>

                <div className="eq-screenshot-container eq-screenshot-crop-story">
                  <img
                    src={storyFull}
                    alt="Equilibras Our Story - Origin, Science, and Wearer Stories"
                    className="eq-screenshot-img"
                    style={{ objectPosition: "top center" }}
                    loading="lazy"
                  />
                </div>

                <p className="eq-panel-caption">
                  A dedicated space for brand background and wearer
                  perspectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / PROBLEMS & SOLUTIONS */}
        <section className="eq-section">
          <div className="equilibras-container">
            <span className="eq-eyebrow">04 / PROBLEMS & SOLUTIONS</span>
            <h2 className="eq-section-heading">
              Client challenges. Our design solutions.
            </h2>
            <p className="eq-section-intro">
              How NaviX Media translated Equilibras™’s brand and commerce needs
              into a consistent website experience.
            </p>

            <div className="eq-comparison-container">
              {/* Header row */}
              <div className="eq-comparison-header">
                <div>CLIENT CHALLENGE</div>
                <div>NAVIX MEDIA’S SOLUTION</div>
                <div>VALUE FOR THE CLIENT</div>
              </div>

              {/* ROW 1 */}
              <div className="eq-comparison-row">
                <div className="eq-cell">
                  <span className="eq-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="eq-tag-badge eq-badge-rose">CHALLENGE</span>
                  <h4 className="eq-cell-title">
                    Explain the brand’s difference alongside its products.
                  </h4>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="eq-tag-badge eq-badge-lime">SOLUTION</span>
                  <p className="eq-cell-text">
                    Structured the homepage around lifestyle imagery, a three-part
                    product story, and clear routes into the collection.
                  </p>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="eq-tag-badge eq-badge-teal">CLIENT VALUE</span>
                  <p className="eq-cell-text">
                    A dedicated sequence for communicating the brand’s
                    positioning.
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="eq-comparison-row">
                <div className="eq-cell">
                  <span className="eq-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="eq-tag-badge eq-badge-rose">CHALLENGE</span>
                  <h4 className="eq-cell-title">
                    Present several footwear categories coherently.
                  </h4>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="eq-tag-badge eq-badge-lime">SOLUTION</span>
                  <p className="eq-cell-text">
                    Grouped the Shop page into four collections with consistent
                    product cards and collection links.
                  </p>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="eq-tag-badge eq-badge-teal">CLIENT VALUE</span>
                  <p className="eq-cell-text">
                    A repeatable structure for presenting the footwear range.
                  </p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="eq-comparison-row">
                <div className="eq-cell">
                  <span className="eq-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="eq-tag-badge eq-badge-rose">CHALLENGE</span>
                  <h4 className="eq-cell-title">
                    Bring product information and purchase choices together.
                  </h4>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="eq-tag-badge eq-badge-lime">SOLUTION</span>
                  <p className="eq-cell-text">
                    Placed pricing, size selection, and purchase actions beside
                    the gallery, with supporting details grouped below.
                  </p>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="eq-tag-badge eq-badge-teal">CLIENT VALUE</span>
                  <p className="eq-cell-text">
                    A focused product presentation that supports informed
                    purchase decisions.
                  </p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="eq-comparison-row">
                <div className="eq-cell">
                  <span className="eq-mobile-col-label">CLIENT CHALLENGE</span>
                  <span className="eq-tag-badge eq-badge-rose">CHALLENGE</span>
                  <h4 className="eq-cell-title">
                    Give the brand’s background space beyond product listings.
                  </h4>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">NAVIX MEDIA’S SOLUTION</span>
                  <span className="eq-tag-badge eq-badge-lime">SOLUTION</span>
                  <p className="eq-cell-text">
                    Created a dedicated Our Story page with background
                    information, supporting imagery, and wearer perspectives.
                  </p>
                </div>

                <div className="eq-cell">
                  <span className="eq-mobile-col-label">VALUE FOR THE CLIENT</span>
                  <span className="eq-tag-badge eq-badge-teal">CLIENT VALUE</span>
                  <p className="eq-cell-text">
                    A clear destination for communicating the brand’s origins and
                    identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA (Approved InternMe Component) */}
        <section className="eq-section">
          <div className="equilibras-container">
            <div className="eq-cta-panel">
              <div className="eq-cta-left">
                <h2 className="eq-cta-heading">
                  Make your brand easier to understand and explore.
                </h2>
                <p className="eq-cta-subtext">
                  Let’s connect your story, products, and customer journey through
                  thoughtful design.
                </p>
              </div>

              <div className="eq-cta-right">
                <button
                  onClick={() => navigate("/contact")}
                  className="eq-cta-btn-primary"
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
                  className="eq-view-all-projects-btn"
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
