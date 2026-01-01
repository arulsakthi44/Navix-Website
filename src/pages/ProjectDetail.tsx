import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "lucide-react";

import Schoolone from "../assets/i2g-1.png";
import Schooltwo from "../assets/i2g-2.png";
import Schoolthree from "../assets/i2g-3.png";
import Schoolfour from "../assets/i2g-4.png";
import Schoolfive from "../assets/i2g-5.png";
import Schoolsix from "../assets/i2g-6.png";

import Video1 from "../assets/videos/cs.mp4";
import Video2 from "../assets/videos/nakear.mp4";
import Shirt from "../assets/i2gbanner.png";

import Nakearstats from "../assets/nakear-stats.png";
import Greenone from "../assets/green.png";
import Greentwo from "../assets/green.png";
import Greenthree from "../assets/green.png";
import Greenfour from "../assets/green.png";

import Stats from "../assets/stats.png";
import Nakone from "../assets/nak-one.png";
import Naktwo from "../assets/nak-two.png";
import Nakthree from "../assets/nak-three.png";
import Nakfour from "../assets/nak-four.png";

interface AudienceInsight {
  title: string;
  description: string;
}
interface ourStrategy {
  title: string;
  description: string;
}

interface ProjectData {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  impactImage: string;
  videoUrl?: string;
  client: string;
  year: string;
  services: string[];
  fullDescription: string;
  conceptDescription: string;
  moodboardImages: string[];
  sketchImages: string[];
  ourStrategy?: ourStrategy[];
  audienceInsights?: AudienceInsight[];
  processImages: string[];
}

const PROJECT_DATA: { [key: number]: ProjectData } = {
  1: {
    id: 1,
    title: "Quantum Finance Dashboard",
    description: "...",
    category: "applications",
    imageUrl: Shirt,
    impactImage: Nakearstats,
    client: "Quantum Capital",
    year: "2024",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "...",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],

    ourStrategy: [],

    audienceInsights: [
      {
        title: "Parent Persona",
        description:
          "Our most active B2C segment was Women aged 30–45 (68% of engagement), focusing on kids' upskilling and online tuition.",
      },
      {
        title: "Investor Persona",
        description:
          "Franchise leads peaked among Men aged 35–50 from Tier 1 and Tier 2 cities seeking stable business opportunities.",
      },
      {
        title: "Content Retention",
        description:
          "The Franchise Opportunity explainer video achieved an 8.5% completion rate, indicating strong investor intent.",
      },
    ],

    processImages: [
      Schoolone,
      Schooltwo,
      Schoolthree,
      Schoolfour,
      Schoolfive,
      Schoolsix,
    ],
  },

  2: {
    id: 1,
    title: "Quantum Finance Dashboard",
    description: "...",
    category: "applications",
    imageUrl: Shirt,
    impactImage: Nakearstats,
    client: "Quantum Capital",
    year: "2024",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "...",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],

    ourStrategy: [],

    audienceInsights: [
      {
        title: "Parent Persona",
        description:
          "Our most active B2C segment was Women aged 30–45 (68% of engagement), focusing on kids' upskilling and online tuition.",
      },
      {
        title: "Investor Persona",
        description:
          "Franchise leads peaked among Men aged 35–50 from Tier 1 and Tier 2 cities seeking stable business opportunities.",
      },
      {
        title: "Content Retention",
        description:
          "The Franchise Opportunity explainer video achieved an 8.5% completion rate, indicating strong investor intent.",
      },
    ],

    processImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
    ],
  },
  3: {
    id: 3,
    title: "Velocity Brand Identity",
    description:
      "Complete brand redesign for a cutting-edge tech startup, featuring bold visuals and modern typography.",
    category: "branding",
    imageUrl:
      "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5ODQwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    impactImage: Nakearstats,
    client: "Velocity Technologies",
    year: "2024",
    services: ["Brand Strategy", "Visual Identity", "Marketing Collateral"],
    ourStrategy: [],
    fullDescription:
      "Velocity's brand identity captures the essence of speed, innovation, and forward-thinking technology. We developed a comprehensive visual system that includes logo design, color palette, typography, iconography, and brand guidelines. The identity system is designed to scale across all touchpoints—from digital platforms to physical merchandise.",
    conceptDescription:
      "We wanted Velocity's brand to communicate momentum and cutting-edge innovation. The angular logo mark suggests speed and direction, while the bold color palette ensures high visibility in the competitive tech landscape. Every design decision was made to position Velocity as a leader in their industry.",
    moodboardImages: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    ],
    sketchImages: [
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800",
      "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=800",
      "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800",
    ],
    processDescription:
      "Our branding process began with deep-dive workshops with the Velocity team to understand their mission, values, and vision. We explored dozens of concepts before landing on the final direction. The iterative process included competitor analysis, stakeholder presentations, and refinement based on feedback.",
    processImages: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200",
    ],
  },
  4: {
    id: 4,
    title: "Project 4",
    description:
      "An innovative digital experience crafted for forward-thinking brands.",
    category: "applications",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
    impactImage: Nakearstats,
    videoUrl: undefined,
    client: "Client Name",
    year: "2024",
    services: ["UI/UX Design", "Development", "Brand Strategy"],
    ourStrategy: [],
    fullDescription:
      "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
    conceptDescription:
      "Add your strategy details here with subsections if needed.",
    moodboardImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    ],
    sketchImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    ],
    processDescription:
      "Add your audience insights or process description here.",
    processImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
    ],
  },
  5: {
    id: 5,
    title: "Project 5",
    description:
      "An innovative digital experience crafted for forward-thinking brands.",
    category: "applications",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
    impactImage: Nakearstats,
    videoUrl: undefined,
    client: "Client Name",
    year: "2024",
    services: ["UI/UX Design", "Development", "Brand Strategy"],
    ourStrategy: [],
    fullDescription:
      "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
    conceptDescription:
      "Add your strategy details here with subsections if needed.",
    moodboardImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    ],
    sketchImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    ],
    processDescription:
      "Add your audience insights or process description here.",
    processImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
    ],
  },
  6: {
    id: 6,
    title: "Nakear - Premium Formal Wear",
    description:
      "Scaling a premium formal wear brand through lifestyle storytelling and mobile-first optimization.",
    category: "branding",
    imageUrl: Shirt,
    impactImage: Nakearstats,
    videoUrl: Video1,
    client: "Nakear",
    year: "2024",
    services: ["Performance Marketing", "UI/UX Optimization", "Brand Strategy"],
    ourStrategy: [],
    fullDescription:
      "Nakear, a premium formal wear brand specializing in high-quality shirts, faced the challenge of scaling in a crowded fashion market. The goal was to build a sustainable 4.0× ROAS by transitioning from generic product images to lifestyle-driven storytelling and optimizing the website's UI/UX for a frictionless mobile checkout.",
    conceptDescription: `
Catalog Sales & DPA:
We implemented Dynamic Product Ads (DPA) that automatically retargeted website visitors with the exact shirt they viewed, significantly lowering the Cost Per Acquisition (CPA).

Fabric-First Creative:
Formal wear is about texture. We produced high-fidelity video ads focusing on the fabric’s breathability and fit, achieving a 24% Hook Rate among professional men.

Conversion Rate Optimization (CRO):
We redesigned the mobile product pages to include "Quick Buy" buttons and trust badges, leading to a 35% increase in Add-to-Cart (ATC) rates.
`,
    moodboardImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    ],
    sketchImages: [
      Stats,
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    ],
    processDescription:
      "The Corporate Professional: Our primary converters were Men aged 24–44 (82% of revenue) residing in Tier 1 cities (Bengaluru, Mumbai, Delhi). Shopping Behavior: 92% of all purchases occurred on Mobile devices, confirming the importance of our Mobile-First UI/UX strategy. Peak Engagement: Ads performed best between 7:00 PM and 11:00 PM, aligning with the after-office scrolling habits of our target audience.",
    processImages: [Greenone, Greentwo, Greenthree, Greenfour],
  },

  7: {
    id: 7,
    title: "Project 7",
    description:
      "An innovative digital experience crafted for forward-thinking brands.",
    category: "applications",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
    impactImage: Nakearstats,
    videoUrl: Video2,
    client: "Client Name",
    year: "2024",
    services: ["UI/UX Design", "Development", "Brand Strategy"],
    ourStrategy: [],
    fullDescription:
      "Nakear, a premium formal wear brand specializing in high-quality shirts, faced the challenge of scaling in a crowded fashion market. The goal was to build a sustainable $4.0 × ROAS by transitioning from generic product images to lifestyle-driven storytelling and optimizing the website's UI/UX for a frictionless mobile checkout.",
    conceptDescription:
      "Add your strategy details here with subsections if needed.",
    moodboardImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    ],
    sketchImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    ],
    audienceInsights: [
      {
        title: "Corporate Professional",
        description:
          "Our primary converters were Men aged 24–44 (82% of revenue) residing in Tier-1 cities such as Bengaluru, Mumbai, and Delhi.",
      },
      {
        title: "Shopping Behavior",
        description:
          "92% of all purchases occurred on mobile devices, reinforcing the importance of a Mobile-First UI/UX strategy.",
      },
      {
        title: "Peak Engagement",
        description:
          "Ads performed best between 7:00 PM and 11:00 PM, aligning with after-office browsing and shopping behavior.",
      },
    ],
    processImages: [Nakone, Naktwo, Nakthree, Nakfour],
  },

  8: {
    id: 8,
    title: "Project 8",
    description:
      "An innovative digital experience crafted for forward-thinking brands.",
    category: "applications",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
    impactImage: Nakearstats,
    videoUrl: undefined,
    client: "Client Name",
    year: "2024",
    services: ["UI/UX Design", "Development", "Brand Strategy"],
    ourStrategy: [],
    fullDescription:
      "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
    conceptDescription:
      "Add your strategy details here with subsections if needed.",
    moodboardImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    ],
    sketchImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    ],
    processDescription:
      "Add your audience insights or process description here.",
    processImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
    ],
  },
  9: {
    id: 9,
    title: "Project 9",
    description:
      "An innovative digital experience crafted for forward-thinking brands.",
    category: "applications",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
    impactImage: Nakearstats,
    videoUrl: undefined,
    client: "Client Name",
    year: "2024",
    services: ["UI/UX Design", "Development", "Brand Strategy"],
    ourStrategy: [],
    fullDescription:
      "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
    conceptDescription:
      "Add your strategy details here with subsections if needed.",
    moodboardImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    ],
    sketchImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    ],
    processDescription:
      "Add your audience insights or process description here.",
    processImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
    ],
  },
  10: {
    id: 10,
    title: "Project 10",
    description:
      "An innovative digital experience crafted for forward-thinking brands.",
    category: "applications",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
    impactImage: Nakearstats,
    videoUrl: undefined,
    client: "Client Name",
    year: "2024",
    services: ["UI/UX Design", "Development", "Brand Strategy"],
    ourStrategy: [],
    fullDescription:
      "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
    conceptDescription:
      "Add your strategy details here with subsections if needed.",
    moodboardImages: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    ],
    sketchImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    ],
    processDescription:
      "Add your audience insights or process description here.",
    processImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
    ],
  },
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PROJECT_DATA[Number(id)];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/projects")}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="pt-32 pb-20 px-6">
          {/* Back Button */}
          <div className="max-w-7xl mx-auto mb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate("/projects")}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Projects</span>
            </motion.button>
          </div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto mb-20"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-video md:h-[600px] md:aspect-auto">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>

          {/* Project Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto mb-20"
          ></motion.div>

          {/* Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-32"
          >
            <h2 className="text-3xl md:text-5xl text-white mb-8 text-center">
              Overview
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Our Strategy */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-7xl mx-auto mb-32"
          >
            <h2 className="text-3xl md:text-5xl text-white mb-8 pt-[100px]">
              Our Strategy
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-5xl">
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Catalog Sales & DPA:
                </h4>
                <p>
                  We implemented Dynamic Product Ads (DPA) that automatically
                  retargeted website visitors with the exact shirt they viewed,
                  significantly lowering the Cost Per Acquisition (CPA).
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">
                  Fabric-First Creative:
                </h4>
                <p>
                  Since formal wear is all about texture and fit, we produced
                  high-fidelity video ads highlighting fabric breathability,
                  drape, and tailoring— achieving a 24% hook rate among working
                  professionals.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">
                  Conversion Rate Optimization (CRO):
                </h4>
                <p>
                  We redesigned mobile product pages with Quick Buy CTAs,
                  improved size guidance, and trust badges, resulting in a 35%
                  increase in Add-to-Cart (ATC) rates.
                </p>
              </div>
            </div>
          </motion.div> */}
          {project.ourStrategy && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-7xl mx-auto mb-20"
            >
              <h2 className="text-3xl md:text-5xl text-white mb-8">
                Our Strategy
              </h2>

              <div className="space-y-6 max-w-6xl w-full mb-12">
                {project.ourStrategy.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-400 text-lg leading-relaxed"
                  >
                    <span className="text-white font-semibold">
                      {item.title}:
                    </span>{" "}
                    {item.description}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Our Impacts */}
          {project.impactImage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-7xl mx-auto mb-32"
            >
              <h2 className="text-3xl md:text-5xl text-white mb-12">
                Our Impacts
              </h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="
                relative
                w-full
                max-h-[200px]
                h-[160px]
                sm:h-[180px]
                md:h-[200px]
                rounded-3xl
                overflow-hidden
                group
              "
              >
                <img
                  src={project.impactImage}
                  alt={`${project.title} Impact`}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                />
              </motion.div>
            </motion.div>
          )}

          {/* Audience Insights */}
          {project.audienceInsights && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-7xl mx-auto mb-20"
            >
              <h2 className="text-3xl md:text-5xl text-white mb-8">
                Audience Insights
              </h2>

              <div className="space-y-6 max-w-6xl w-full mb-12">
                {project.audienceInsights.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-400 text-lg leading-relaxed"
                  >
                    <span className="text-white font-semibold">
                      {item.title}:
                    </span>{" "}
                    {item.description}
                  </p>
                ))}
              </div>

              {/* Process Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.processImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="relative aspect-video rounded-2xl overflow-hidden group"
                  >
                    <img
                      src={image}
                      alt={`Process ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Next Project CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.button
              onClick={() => navigate("/projects")}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-[80px] border-[3px] border-solid border-white text-white tracking-widest"
              style={{
                backgroundImage:
                  "linear-gradient(100.351deg, rgb(0, 0, 0) 14.842%, rgb(95, 48, 20) 25.921%, rgb(172, 76, 21) 37%, rgb(198, 198, 198) 51.41%, rgb(32, 86, 174) 68.977%, rgb(0, 0, 0) 89.412%)",
                fontFamily: '"Bricolage Grotesque", sans-serif',
              }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
