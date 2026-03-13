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

// import Video1 from "../assets/videos/cs.mp4";
import Video2 from "../assets/videos/nakear.mp4";
import Shirt from "../assets/i2gbanner.png";
import Resultsglobie from "../assets/results-globie.png";
import Pplsync1 from "../assets/videos/ppl-sync-video1.mp4";
import Pplsync2 from "../assets/videos/ppl-sync-video2.mp4";
import Pplone from "../assets/Pplone.png";
import Ppltwo from "../assets/Ppltwo.png";
import Pplthree from "../assets/Pplthree.png";
import Pplfour from "../assets/Pplfour.png";
import Pplfive from "../assets/Pplfive.png";

import Dravibanner from "../assets/dravibanner.jpg";
import Dravidam1 from "../assets/videos/dravidam1.mp4";
import Dravidam2 from "../assets/videos/dravidam2.mp4";

import Kutirbanner from "../assets/kutirbanner.jpg";
import Resultkutir from "../assets/kutir-result.png";
import Kutirimpact from "../assets/kutir-impacts.png";
import Kutirone from "../assets/videos/kutir1.mp4";
import Kutirtwo from "../assets/videos/kutir2.mp4";

import Cs360 from "../assets/videos/cs.mp4";
import Csimpact from "../assets/csresult.png";
import Csvideo from "../assets/videos/csvideo.mp4";

import Pplbanner from "../assets/pplbanner.png";
import Pplimpact from "../assets/ppl-result.png";
import Pplsresult from "../assets/ppls-result.png";

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

import Masalaimpact from "../assets/masalaimpact.png";
import Masalabanner from "../assets/masalabanner.jpg";
// import Masala from "../assets/masala1.jpeg";
import Masalavideo from "../assets/videos/masala.mp4";


interface AudienceInsight {
  title: string;
  description: string;
}

interface WhatWeDid {
  description: string;
}

interface whItWorked {
  description: string;
}

interface ourResult {
  description: string;
}

interface capabilitiesUsed {
  description: string;
}

interface clientImpact {
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
  whatWeDid?: WhatWeDid[];
  whItWorked?: whItWorked[];
  ourResult?: ourResult[];
  capabilitiesUsed?: capabilitiesUsed[];
  clientImpact?: clientImpact[];
  audienceInsights?: AudienceInsight[];
  resultImage?: string;
  deliveryVideos?: any[]; // Restored for JSX compatibility
  processImages: string[];
}

const PROJECT_DATA: { [key: number]: ProjectData } = {
  1: {
    id: 1,
    title: "Globie - i2G",
    description: "...",
    category: "applications",
    imageUrl: Shirt,
    impactImage: Nakearstats,
    client: "Quantum Capital",
    year: "2024",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription:
      "An ed-tech platform aiming to humanize learning and stand out in a competitive digital ecosystem.",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],

    // ✅ ADD THIS
    whatWeDid: [
      {
        description:
          "Conceptualized and built Globbie, a brand mascot, entirely from scratch. Scope included concept design, character sketching, illustration, animation, voice creation, and AI-led static & video ad content integrated into the brand ecosystem.",
      },
      {
        description:
          "Complete video production from content scripting, screenplay, video shoot and creation, editing, sound design to create a complete ad and high-engagement content videos.",
      },
    ],

    // ✅ ADD THIS
    whItWorked: [
      {
        description:
          "Characters create emotion-led immediate recognition. Mascot-led storytelling improves recall, engagement, and trust especially in education marketing.",
      },
    ],

    resultImage: Resultsglobie,

    capabilitiesUsed: [
      { description: "Brand Mascot Creation" },
      { description: "AI Creatives" },
      { description: "Animation" },
      { description: "Voice Design" },
      { description: "Performance Content" },
    ],


    clientImpact: [
      {
        description:
          "Gave the brand a face—and the audience a reason to remember it.",
      },
    ],

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
    id: 2,
    title: "Ppl Sync",
    description: "...",
    category: "applications",
    imageUrl: Pplbanner,
    impactImage: Pplimpact,
    client: "Ppl-Sync",
    year: "2026",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "A performance-focused B2B SaaS platform operating in a cost-sensitive acquisition market.",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],
    resultImage: Pplsresult,
    deliveryVideos: ["gEicDNM51NQ", "C5QmzX6idC4"],

    // ✅ ADD THIS
    whatWeDid: [
      {
        description:
          "Executed AI-based static and video ad creatives designed for speed, clarity, and performance.",
      },
      {
        description:
          "Replaced traditional production-heavy workflows with scalable AI-led creative systems.",
      },
    ],

    // ✅ ADD THIS
    whItWorked: [
      {
        description:
          "In B2B, clarity beats complexity. AI enabled faster iterations, sharper messaging, and continuous optimization without production bottlenecks.",
      },
    ],

    capabilitiesUsed: [
      { description: "AI Advertising" },
      { description: "B2B SaaS Marketing" },
      { description: "Performance Creative" },
      { description: "Motion Design" },
    ],


    clientImpact: [
      {
        description:
          "Smarter creatives. Lower spend. Better results.",
      },
    ],

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

    processImages: [Pplone, Ppltwo, Pplthree, Pplfour, Pplfive],
  },

  3: {
    id: 3,
    title: "Dravidam",
    description: "...",
    category: "applications",
    imageUrl: Dravibanner,
    impactImage: Pplimpact,
    client: "Ppl-Sync",
    year: "2026",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "A premium South Indian restaurant in the Delhi NCR region, blending authentic flavors with a modern dining experience.",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],
    resultImage: Pplsresult,
    deliveryVideos: ["_hgCZjSOR0g", "JK7afoDIt_s"],

    // ✅ ADD THIS
    whatWeDid: [
      {
        description:
          " Produced high-quality cinematic food and ambience videos, enhanced with AI-generated shots, dynamic camera movements, refined audio design, and sharp copywriting.",
      },
      {
        description:
          "The content was designed to elevate perception—positioning Dravidam as a premium culinary destination, not just another restaurant reel.",
      },
    ],

    // ✅ ADD THIS
    whItWorked: [
      {
        description:
          "Food sells through emotion. AI-powered visuals combined with cinematic storytelling amplified texture, movement, and mood—driving desire and discovery on social platforms.",
      },
    ],

    capabilitiesUsed: [
      { description: "AI Video Enhancement" },
      { description: "Cinematic Editing" },
      { description: "Food & Hospitality Marketing" },
      { description: "Audio Design" },
      { description: "Copywriting" },
    ],


    clientImpact: [
      {
        description:
          "Turned scrolling into cravings and views into visits.",
      },
    ],

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

    processImages: [],
  },


  4: {
    id: 4,
    title: "Kutir",
    description: "...",
    category: "applications",
    imageUrl: Kutirbanner,
    impactImage: Resultkutir,
    client: "Ppl-Sync",
    year: "2026",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "A house rental service provider focused on helping tenants find quality homes quickly in a competitive local market.",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],
    resultImage: Kutirimpact,
    deliveryVideos: ["ZDEi5EmQDHg", "AFWvw3MH9DI"],

    // ✅ ADD THIS
    whatWeDid: [
      {
        description:
          "Executed on-ground content shoots combined with AI-powered video creatives designed with strong hooks and scroll-stopping narratives.",
      },
      {
        description:
          "The content strategy focused on clarity, speed, and trust—highlighting real spaces, real value, and real availability, optimized for social discovery",
      },
    ],

    // ✅ ADD THIS
    whItWorked: [
      {
        description:
          "In real estate, visibility + urgency drive action. AI-enabled videos allowed faster iterations, sharper hooks, and consistent output—keeping listings top-of-mind while demand was high.",
      },
    ],

    capabilitiesUsed: [
      { description: "AI Video Creatives" },
      { description: "Real Estate Content" },
      { description: "On-Ground Shoots" },
      { description: "Performance Hooks" },
      { description: "Social Media Strategy" },
    ],


    clientImpact: [
      {
        description:
          "We reduced vacancy time by replacing brokers & forms with instant intent conversations.",
      },
    ],

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

    processImages: [],
  },


  5: {
    id: 5,
    title: "CS360",
    description: "...",
    category: "applications",
    imageUrl: Kutirbanner,
    impactImage: Resultkutir,
    videoUrl: Cs360,
    client: "Courtside-360",
    year: "2026",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "Courtside 360 scaled court bookings and coaching enquiries by turning hyper-local sports content into a WhatsApp-first booking engine that converted impulse interest into instant conversations.",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],
    resultImage: Csimpact,
    deliveryVideos: ["7jJB1SIpSpA"],

    // ✅ ADD THIS
    whatWeDid: [
      {
        description:
          "Build a hyper-local, WhatsApp-first booking funnel using high-energy sports content. We focused on 3-second scroll-stopping reels designed to immediately signal availability, location, and action.",
      },
    ],

    // ✅ ADD THIS
    whItWorked: [
      {
        description:
          "Sports decisions are impulse-driven. By reducing friction and sending users directly to WhatsApp, we converted interest into instant booking conversations.",
      },
    ],

    capabilitiesUsed: [
      { description: "Performance Marketing" },
      { description: "Short-form Video Ads" },
      { description: "Hyper-local Targeting" },
      { description: "WhatsApp Funnel" },
    ],


    clientImpact: [
      {
        description:
          "We didn’t run awareness ads. We built a direct booking engine connecting athletes straight to availability.",
      },
    ],

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

    processImages: [],
  },

  6: {
    id: 6,
    title: "Nakear",
    description: "...",
    category: "applications",
    imageUrl: Kutirbanner,
    impactImage: Nakearstats,
    videoUrl: Video2,
    client: "Ppl-Sync",
    year: "2026",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "Nakear, a premium formal wear brand specializing in high-quality shirts, aimed to scale profitably in a crowded fashion market by shifting from generic product imagery to lifestyle-driven storytelling and optimizing its website for a seamless, mobile-first shopping experience.",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],
    resultImage: Kutirimpact,
    deliveryVideos: ["jcuhKC6WATo"],

    // ✅ ADD THIS
    whatWeDid: [
      {
        description:
          "Implemented Dynamic Product Ads (DPA) to retarget website visitors with the exact products they viewed, significantly reducing Cost Per Acquisition while increasing purchase intent.",
      },
      {
        description:
          "Produced high-fidelity lifestyle and product videos highlighting fabric texture, breathability, and fit—designed to resonate with working professionals seeking premium quality. Redesigned mobile product pages with Quick Buy CTAs, improved size guidance, and trust signals to remove friction and accelerate purchase decisions.",
      },

    ],

    // ✅ ADD THIS
    whItWorked: [
      {
        description:
          "Redesigned mobile product pages with Quick Buy CTAs, improved size guidance, and trust signals to remove friction and accelerate purchase decisions.",
      },
    ],

    capabilitiesUsed: [
      { description: "Performance Marketing" },
      { description: "UI/UX Optimization" },
      { description: "Lifestyle Video Production" },
      { description: "DPA" },
      { description: "Conversion Strategy" },
    ],


    clientImpact: [
      {
        description:
          "By combining premium creative execution with data-driven performance optimization, Navix Media transformed Nakear into a scalable, high-growth D2C brand—building a reliable sales engine that delivers consistent returns.",
      },
    ],

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

    processImages: [Nakone, Naktwo, Nakthree, Nakfour],
  },

  7: {
    id: 7,
    title: "Masala Mandi",
    description: "...",
    category: "applications",
    imageUrl: Masalabanner,
    impactImage: Resultkutir,
    client: "Courtside-360",
    year: "2026",
    services: ["UI/UX Design", "Dashboard Development", "Data Visualization"],
    fullDescription: "To stand out in a saturated food market, we transformed cinematic food storytelling into instant chat-driven dining intent.",
    conceptDescription: "...",
    moodboardImages: [],
    sketchImages: [],
    resultImage: Masalaimpact,
    deliveryVideos: ["FWm1J1PAOqI"],

    // ✅ ADD THIS
    whatWeDid: [
      {
        description:
          "Use sensory, cinematic food content paired with direct-to-chat conversions. We focused on making food feel irresistible on-screen and converting that craving instantly.",
      },
    ],

    // ✅ ADD THIS
    whItWorked: [
      {
        description:
          "Food decisions are emotional. By triggering appetite visually and removing all friction to enquire, we converted scrolling into dining intent.",
      },
    ],

    capabilitiesUsed: [
      { description: "Food Content Production" },
      { description: "Short-form Video Ads" },
      { description: "Hyper-local Targeting" },
      { description: "Direct Chat Funnels" },
    ],


    clientImpact: [
      {
        description:
          "We converted scrolling into tables booked, not just likes.",
      },
    ],

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

    processImages: [],
  },

  // 8: {
  //   id: 8,
  //   title: "Project 8",
  //   description:
  //     "An innovative digital experience crafted for forward-thinking brands.",
  //   category: "applications",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
  //   impactImage: Nakearstats,
  //   videoUrl: undefined,
  //   client: "Client Name",
  //   year: "2024",
  //   services: ["UI/UX Design", "Development", "Brand Strategy"],
  //   ourStrategy: [],
  //   fullDescription:
  //     "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
  //   conceptDescription:
  //     "Add your strategy details here with subsections if needed.",
  //   moodboardImages: [
  //     "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  //     "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
  //     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  //     "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  //   ],
  //   sketchImages: [
  //     "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
  //     "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
  //     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
  //   ],
  //   processDescription:
  //     "Add your audience insights or process description here.",
  //   processImages: [
  //     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
  //     "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
  //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
  //     "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
  //   ],
  // },
  // 9: {
  //   id: 9,
  //   title: "Project 9",
  //   description:
  //     "An innovative digital experience crafted for forward-thinking brands.",
  //   category: "applications",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
  //   impactImage: Nakearstats,
  //   videoUrl: undefined,
  //   client: "Client Name",
  //   year: "2024",
  //   services: ["UI/UX Design", "Development", "Brand Strategy"],
  //   ourStrategy: [],
  //   fullDescription:
  //     "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
  //   conceptDescription:
  //     "Add your strategy details here with subsections if needed.",
  //   moodboardImages: [
  //     "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  //     "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
  //     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  //     "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  //   ],
  //   sketchImages: [
  //     "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
  //     "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
  //     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
  //   ],
  //   processDescription:
  //     "Add your audience insights or process description here.",
  //   processImages: [
  //     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
  //     "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
  //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
  //     "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
  //   ],
  // },
  // 10: {
  //   id: 10,
  //   title: "Project 10",
  //   description:
  //     "An innovative digital experience crafted for forward-thinking brands.",
  //   category: "applications",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080",
  //   impactImage: Nakearstats,
  //   videoUrl: undefined,
  //   client: "Client Name",
  //   year: "2024",
  //   services: ["UI/UX Design", "Development", "Brand Strategy"],
  //   ourStrategy: [],
  //   fullDescription:
  //     "Add your project overview here. Describe the challenge, objectives, and what makes this project unique.",
  //   conceptDescription:
  //     "Add your strategy details here with subsections if needed.",
  //   moodboardImages: [
  //     "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  //     "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
  //     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  //     "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  //   ],
  //   sketchImages: [
  //     "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
  //     "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
  //     "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
  //   ],
  //   processDescription:
  //     "Add your audience insights or process description here.",
  //   processImages: [
  //     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
  //     "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
  //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
  //     "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200",
  //   ],
  // },
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

          {/* What We Did */}
          {project.whatWeDid && project.whatWeDid.length > 0 && (
            <motion.div className="max-w-7xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl text-white mb-6">
                What We Did
              </h2>

              <div className="space-y-4 max-w-6xl">
                {project.whatWeDid.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-400 text-lg leading-relaxed"
                  >
                    {item.description}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Why It Worked */}
          {project.whItWorked && project.whItWorked.length > 0 && (
            <motion.div className="max-w-7xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl text-white mb-6">
                Why It Worked
              </h2>

              <div className="space-y-4 max-w-6xl">
                {project.whItWorked.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-400 text-lg leading-relaxed"
                  >
                    {item.description}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Our Results */}
          {project.impactImage && project.id !== 5 && project.id !== 7 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto mb-32"
            >
              <h2 className="text-3xl md:text-5xl text-white mb-12">
                Our Results
              </h2>

              <img
                src={project.impactImage}
                alt="Our Results"
                className="w-full max-w-5xl rounded-3xl object-cover"
              />
            </motion.div>
          )}



          {/* Our Impacts */}
          {project.impactImage && project.id !== 3 && project.id !== 6 && (
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
                  src={project.resultImage}
                  alt={`${project.title} Impact`}
                  className="
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
                />
              </motion.div>
            </motion.div>
          )}




          {/* Capabilities Used */}
          {project.capabilitiesUsed && project.capabilitiesUsed.length > 0 && (
            <motion.div className="max-w-7xl mx-auto mt-24 mb-20">
              <h2 className="text-3xl md:text-5xl text-white mb-8">
                Capabilities Used
              </h2>

              <div className="flex flex-wrap gap-4 max-w-6xl">
                {project.capabilitiesUsed.map((item, index) => {
                  const pillColors = [
                    "bg-blue-500/25 text-blue-200 border-blue-400/50",
                    "bg-purple-500/25 text-purple-200 border-purple-400/50",
                    "bg-green-500/25 text-green-200 border-green-400/50",
                    "bg-pink-500/25 text-pink-200 border-pink-400/50",
                    "bg-orange-500/25 text-orange-200 border-orange-400/50",
                  ];

                  return (
                    <span
                      key={index}
                      className="
    px-6 py-3
    rounded-full
    bg-white
    text-black
    font-semibold
    border border-black
  "
                    >
                      {item.description}
                    </span>

                  );
                })}
              </div>
            </motion.div>
          )}


          {/* Client Impact */}
          {project.clientImpact && project.clientImpact.length > 0 && (
            <motion.div className="max-w-7xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl text-white mb-6">
                Client Impact
              </h2>

              <div className="space-y-4 max-w-6xl">
                {project.clientImpact.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-400 text-lg leading-relaxed"
                  >
                    {item.description}
                  </p>
                ))}
              </div>
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
                Our Delivery Few Outputs
              </h2>

              {/* Delivery Videos */}
              {/* {project.deliveryVideos && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 justify-items-center">
                  {project.deliveryVideos.map((video, index) => (
                    <motion.video
                      key={index}
                      src={video}
                      controls
                      muted
                      playsInline
                      className="w-full max-w-[380px] h-[240px] aspect-[4/3] rounded-2xl object-cover"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  ))}
                </div>
              )} */}
              {project.deliveryVideos && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl">
                  {project.deliveryVideos.map((youtubeId, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex justify-start"
                    >
                      <div className="w-full max-w-sm rounded-2xl overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                          title={`Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-[600px] rounded-2xl"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              {/* <div className="space-y-6 max-w-6xl w-full mb-12">
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
              </div> */}

              {/* Process Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.processImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    // className="relative aspect-video rounded-2xl overflow-hidden group"
                    className="relative h-[400px] rounded-2xl overflow-hidden group"
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


          {/* Audience Insights */}
          {/* {project.audienceInsights && (
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
)} */}


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
