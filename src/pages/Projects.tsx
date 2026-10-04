import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useWorkPageScrollRestoration, saveWorkPageScroll } from '../utils/scrollRestoration';
import { SEO } from '../components/SEO';

// Web Development Project Thumbnails
import InternmeThumb from "../assets/internme_thumb_new.png";
import EquilibrasThumb from "../assets/equilibras_thumb_new.jpg";
import EdufusionThumb from "../assets/edufusion_thumb_new.png";
import SrsThumb from "../assets/srs_academy_thumb_new.png";

// Android & iOS App Project Thumbnails
import ProEdgeThumb from "../assets/proedge_app_thumb.jpg";
import PplsyncThumb from "../assets/pplsync_app_thumb.jpg";
import QuickApplyThumb from "../assets/quickapply_app_thumb.jpg";

// Branding & Performance Marketing Project Thumbnails
import Shivam from "../assets/shivam.png";
import Ppl from "../assets/ppl.png";
import Dravi from "../assets/dravi.png";
import Kutirlogo from "../assets/kutirlogo.png";
import Csthree from "../assets/csthree-logo.png";
import Nakearlogos from "../assets/nakearlogos.png";
import Masalalogo from "../assets/masalalogo.png";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  industry: string;
  imageUrl: string;
  externalUrl?: string;
}

const WEB_PROJECTS: Project[] = [
  {
    id: 8,
    title: "Internme - Paid internship in India",
    description: "India's leading paid internship portal offering internships in AI, Data, Full Stack & Core sectors.",
    category: "",
    industry: "EdTech & Career Platform",
    imageUrl: InternmeThumb
  },
  {
    id: 9,
    title: "Equilibras™ - Health & Performance Footwear",
    description: "Patented e-bed™ footwear technology engineered to support how your feet move and function.",
    category: "",
    industry: "HealthTech & Biomechanical Footwear",
    imageUrl: EquilibrasThumb
  },
  {
    id: 10,
    title: "i2Global Edufusion",
    description: "Edufusion digital learning and school management platform for i2Global.",
    category: "",
    industry: "EdTech & K-12 Learning",
    imageUrl: EdufusionThumb
  },
  {
    id: 11,
    title: "SRS Academy - Learning Reimagined",
    description: "An educational platform delivering student-focused learning, competitive programs, and expert mentorship across India.",
    category: "",
    industry: "Education & Teacher Training",
    imageUrl: SrsThumb
  }
];

const APP_PROJECTS: Project[] = [
  {
    id: 12,
    title: "ProEdge",
    description: "Live classes, study materials, quizzes, and progress tracking in one connected learning app.",
    category: "",
    industry: "Education & E-Learning",
    imageUrl: ProEdgeThumb
  },
  {
    id: 13,
    title: "Pplsync",
    description: "Employee records, attendance tracking, and workforce reports in one organized mobile experience.",
    category: "",
    industry: "HR & Workforce Management",
    imageUrl: PplsyncThumb
  },
  {
    id: 14,
    title: "Quick Apply",
    description: "Discover job opportunities, apply with saved details, and track application progress in one place.",
    category: "",
    industry: "Recruitment & Careers",
    imageUrl: QuickApplyThumb
  }
];

const MARKETING_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Globbie for i2Global (Ed-Tech)",
    description: "i2Global needed a unified digital presence to scale student enrollments and attract franchise partners, serving both parents and investors effectively.",
    category: "Performance Marketing",
    industry: "EdTech & Franchise Growth",
    imageUrl: Shivam
  },
  {
    id: 2,
    title: "PPLSync - B2B SaaS",
    description: "A performance-focused B2B SaaS platform operating in a cost-sensitive acquisition market.",
    category: "Branding",
    industry: "B2B SaaS & Tech",
    imageUrl: Ppl
  },
  {
    id: 3,
    title: "Dravidam",
    description: "A premium South Indian restaurant in the Delhi NCR region, blending authentic flavors with a modern dining experience",
    category: "Branding",
    industry: "Hospitality & Fine Dining",
    imageUrl: Dravi
  },
  {
    id: 4,
    title: "Kutir - House Rental & Property Services",
    description: "A house rental service provider focused on helping tenants find quality homes quickly in a competitive local market.",
    category: "Performance Marketing",
    industry: "Real Estate & PropTech",
    imageUrl: Kutirlogo
  },
  {
    id: 5,
    title: "Courtside 360 - Performance & Booking Growth",
    description: "Courtside 360 boosted bookings by converting hyper-local sports content into instant WhatsApp enquiries",
    category: "Performance Marketing",
    industry: "Sports & Facility Management",
    imageUrl: Csthree
  },
  {
    id: 6,
    title: "Nakear",
    description: "Nakear, a premium formal wear brand, scaled in a competitive market by shifting to lifestyle-driven storytelling.",
    category: "E-commerce",
    industry: "Fashion & Apparel",
    imageUrl: Nakearlogos
  },
  {
    id: 7,
    title: "Masala Mandi - Restaurant Footfall Growth",
    description: "We turned cinematic food content into instant dining intent by converting visual cravings directly into chat-based enquiries.",
    category: "Performance Marketing",
    industry: "Food & Beverage (F&B)",
    imageUrl: Masalalogo
  }
];

function ProjectCard({
  project,
  index,
  accentColor = "#4A8CFF",
  onNavigate
}: {
  project: Project;
  index: number;
  accentColor?: string;
  onNavigate?: (id: number) => void;
}) {
  const cardInner = (
    <>
      {/* Gradient Border Wrapper */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EE6A1F] to-[#1A70FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
        <div className="w-full h-full bg-[#0a0a0a] rounded-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-transparent transition-all duration-500 overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-64 min-h-[256px] overflow-hidden flex-shrink-0 bg-black/40">
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Category Badge - only rendered if category is non-empty */}
          {project.category ? (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold">
              {project.category}
            </div>
          ) : null}
        </div>

        {/* Project Info */}
        <div className="p-6 flex-grow flex flex-col min-w-0">
          {/* Industry Tag - prominent & highly visible above title */}
          {project.industry && (
            <div className="mb-2.5">
              <span
                className="text-xs font-bold tracking-widest uppercase inline-block break-words"
                style={{
                  color: accentColor,
                  letterSpacing: '0.08em',
                  fontFamily: '"Bricolage Grotesque", sans-serif'
                }}
              >
                {project.industry}
              </span>
            </div>
          )}

          <h3 className="text-white text-xl mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#EE6A1F] group-hover:to-[#1A70FF] group-hover:bg-clip-text group-hover:text-transparent break-words">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed break-words">
            {project.description}
          </p>
        </div>
      </div>
    </>
  );

  if (project.externalUrl) {
    return (
      <motion.a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        id={`project-card-${project.id}`}
        data-project-id={project.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        aria-label={`View ${project.title} on Google Play`}
        className="group relative overflow-hidden rounded-2xl cursor-pointer h-full block focus:outline-none focus:ring-2 focus:ring-[#4A8CFF] focus:ring-offset-2 focus:ring-offset-black"
      >
        {cardInner}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.id}`}
        id={`project-card-${project.id}`}
        data-project-id={project.id}
        aria-label={`View ${project.title} project details`}
        onClick={(e) => {
          // Allow middle click or ctrl/cmd click to naturally open in new tab
          if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
            e.preventDefault();
            if (onNavigate) {
              onNavigate(project.id);
            }
          }
        }}
        className="group relative overflow-hidden rounded-2xl cursor-pointer h-full block focus:outline-none focus:ring-2 focus:ring-[#4A8CFF] focus:ring-offset-2 focus:ring-offset-black"
      >
        {cardInner}
      </Link>
    </motion.div>
  );
}

export function Projects() {
  const navigate = useNavigate();
  useWorkPageScrollRestoration();

  const handleNavigate = (id: number) => {
    const scrollState = saveWorkPageScroll(id);
    navigate(`/projects/${id}`, {
      state: {
        fromWorkPage: true,
        ...scrollState,
      },
    });
  };

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      <SEO
        title="Our Work & Case Studies | NaviX Media"
        description="Explore NaviX Media's portfolio of web design, mobile applications, and performance marketing projects crafted for growing startups and established brands."
        canonical="https://www.navixmedia.in/projects"
      />
      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
              style={{ margin: 0, padding: 0 }}
            >
              <h1
                className="text-5xl md:text-7xl text-white mb-6"
                style={{ marginTop: 0, marginBottom: '24px' }}
              >
                Our projects
              </h1>
              <p
                className="text-gray-400 text-lg max-w-2xl mx-auto"
                style={{ margin: '0 auto', padding: 0 }}
              >
                Explore our portfolio of cutting-edge digital experiences crafted for visionary brands
              </p>
            </motion.div>

            {/* Section 1: Web Design & Development */}
            <section style={{ margin: 0, padding: 0 }}>
              {/* Dedicated Heading Wrapper with exact padding-block: 50px */}
              <div
                className="category-heading-wrapper"
                style={{
                  paddingTop: '50px',
                  paddingBottom: '50px',
                  paddingLeft: 0,
                  paddingRight: 0,
                  margin: 0
                }}
              >
                <h2
                  className="text-2xl md:text-3xl font-bold tracking-tight text-left"
                  style={{
                    color: '#4A8CFF',
                    fontFamily: '"Bricolage Grotesque", sans-serif',
                    margin: 0,
                    padding: 0,
                    lineHeight: 1.25
                  }}
                >
                  Web Design & Development
                </h2>
              </div>

              {/* 3-Column Card Grid (Internme, Equilibras, Edufusion, SRS Academy) */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                style={{ margin: 0 }}
              >
                {WEB_PROJECTS.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    accentColor="#4A8CFF"
                    onNavigate={handleNavigate}
                  />
                ))}
              </div>
            </section>

            {/* Section 2: Android & iOS Apps */}
            <section style={{ margin: 0, padding: 0 }}>
              {/* Dedicated Heading Wrapper with exact padding-block: 50px */}
              <div
                className="category-heading-wrapper"
                style={{
                  paddingTop: '50px',
                  paddingBottom: '50px',
                  paddingLeft: 0,
                  paddingRight: 0,
                  margin: 0
                }}
              >
                <h2
                  className="text-2xl md:text-3xl font-bold tracking-tight text-left"
                  style={{
                    color: '#A3E635',
                    fontFamily: '"Bricolage Grotesque", sans-serif',
                    margin: 0,
                    padding: 0,
                    lineHeight: 1.25
                  }}
                >
                  Android & iOS Apps
                </h2>
              </div>

              {/* 3-Column Card Grid (ProEdge, Pplsync, Quick Apply) */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                style={{ margin: 0 }}
              >
                {APP_PROJECTS.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    accentColor="#A3E635"
                    onNavigate={handleNavigate}
                  />
                ))}
              </div>
            </section>

            {/* Section 3: Branding & Performance Marketing */}
            <section style={{ margin: 0, padding: 0 }}>
              {/* Dedicated Heading Wrapper with exact padding-block: 50px */}
              <div
                className="category-heading-wrapper"
                style={{
                  paddingTop: '50px',
                  paddingBottom: '50px',
                  paddingLeft: 0,
                  paddingRight: 0,
                  margin: 0
                }}
              >
                <h2
                  className="text-2xl md:text-3xl font-bold tracking-tight text-left"
                  style={{
                    color: '#EE6A1F',
                    fontFamily: '"Bricolage Grotesque", sans-serif',
                    margin: 0,
                    padding: 0,
                    lineHeight: 1.25
                  }}
                >
                  Branding & Performance Marketing
                </h2>
              </div>

              {/* 3-Column Card Grid (Remaining 7 projects) */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                style={{ margin: 0 }}
              >
                {MARKETING_PROJECTS.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    accentColor="#EE6A1F"
                    onNavigate={handleNavigate}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}