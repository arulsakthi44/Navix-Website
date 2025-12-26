import { motion } from 'motion/react';
import SphereImageGrid, { ImageData } from './ui/img-sphere';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shirt from "../assets/shirt.png"

// YouTube video links
const YOUTUBE_VIDEOS = [
  "https://youtube.com/shorts/JK7afoDIt_s?feature=share",
  "https://youtube.com/shorts/gEicDNM51NQ?feature=share",
  "https://youtube.com/shorts/AFWvw3MH9DI?feature=share",
  "https://youtube.com/shorts/uUCSlaILnAw?feature=share",
  "https://youtube.com/shorts/1lVpn3Mczqk?feature=share"
];

// Base images for the sphere
const BASE_IMAGES: Omit<ImageData, 'id'>[] = [
  {
    src: "https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 1",
    title: "Brand Evolution",
    description: "A complete brand transformation that increased market presence by 300%."
  },
  {
    src: "https://images.unsplash.com/photo-1757647016230-d6b42abc6cc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072",
    alt: "Creative Campaign 2",
    title: "Digital Excellence",
    description: "Award-winning digital campaign with 10M+ impressions."
  },
  {
    src: "https://images.unsplash.com/photo-1757906447358-f2b2cb23d5d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 3",
    title: "Social Impact",
    description: "Viral social media strategy generating 500K+ engagements."
  },
  {
    src: "https://images.unsplash.com/photo-1742201877377-03d18a323c18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064",
    alt: "Creative Campaign 4",
    title: "Visual Storytelling",
    description: "Cinematic content that drove 250% conversion increase."
  },
  {
    src: "https://images.unsplash.com/photo-1757081791153-3f48cd8c67ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 5",
    title: "Creative Direction",
    description: "Bold creative approach that redefined industry standards."
  },
  {
    src: "https://images.unsplash.com/photo-1757626961383-be254afee9a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 6",
    title: "Marketing Innovation",
    description: "Groundbreaking campaign that achieved 400% ROI."
  },
  {
    src: "https://images.unsplash.com/photo-1756748371390-099e4e6683ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 7",
    title: "Brand Experience",
    description: "Immersive brand experience reaching 2M+ consumers."
  },
  {
    src: "https://images.unsplash.com/photo-1755884405235-5c0213aa3374?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 8",
    title: "Content Strategy",
    description: "Data-driven content strategy with 85% engagement rate."
  },
  {
    src: "https://images.unsplash.com/photo-1757495404191-e94ed7e70046?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 9",
    title: "Performance Marketing",
    description: "High-performance campaigns delivering consistent 5X ROAS."
  },
  {
    src: "https://images.unsplash.com/photo-1756197256528-f9e6fcb82b04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064",
    alt: "Creative Campaign 10",
    title: "Strategic Launch",
    description: "Product launch campaign exceeding all KPI targets."
  },
  {
    src: "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    alt: "Creative Campaign 11",
    title: "Visual Identity",
    description: "Complete visual identity system for global brand."
  },
  {
    src: Shirt,
    alt: "Creative Campaign 12",
    title: "Experiential Marketing",
    description: "Memorable brand experiences that drive loyalty."
  }
];

// Generate 60 images by repeating the base set
const SPHERE_IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const baseIndex = i % BASE_IMAGES.length;
  const baseImage = BASE_IMAGES[baseIndex];
  const videoIndex = i % YOUTUBE_VIDEOS.length;
  SPHERE_IMAGES.push({
    id: `masterpiece-${i + 1}`,
    ...baseImage,
    alt: `${baseImage.alt} (${Math.floor(i / BASE_IMAGES.length) + 1})`,
    videoUrl: YOUTUBE_VIDEOS[videoIndex]
  });
}

// Sphere configuration
const SPHERE_CONFIG = {
  containerSize: 600,
  sphereRadius: 200,
  dragSensitivity: 0.8,
  momentumDecay: 0.96,
  maxRotationSpeed: 6,
  baseImageScale: 0.15,
  hoverScale: 1.3,
  perspective: 1000,
  autoRotate: true,
  autoRotateSpeed: 0.2
};

export function Masterpieces() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sphereConfig = {
    ...SPHERE_CONFIG,
    containerSize: isMobile ? 350 : 600,
    sphereRadius: isMobile ? 120 : 200,
    baseImageScale: isMobile ? 0.35 : 0.15,
  };

  return (
    <section id="work" className="relative py-20" style={{ paddingTop: '120px' }}>
      {/* Local gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            Our Recent Masterpiece Works
          </h2>
        </motion.div>

        {/* 3D Sphere Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center w-full mx-auto overflow-visible"
        >
          <SphereImageGrid
            images={SPHERE_IMAGES}
            {...sphereConfig}
          />
        </motion.div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-400 mt-8 text-sm"
        >
          Drag to explore • Click to view details
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-[80px] border-[3px] border-solid border-white text-white transition-all duration-300"
              style={{
                backgroundImage: "linear-gradient(100.351deg, rgb(0, 0, 0) 14.842%, rgb(95, 48, 20) 25.921%, rgb(172, 76, 21) 37%, rgb(198, 198, 198) 51.41%, rgb(32, 86, 174) 68.977%, rgb(0, 0, 0) 89.412%)"
              }}
            >
              See More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}