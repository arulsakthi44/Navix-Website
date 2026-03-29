import { motion } from 'motion/react';
import SphereImageGrid, { ImageData } from './ui/img-sphere';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// YouTube video links
const YOUTUBE_VIDEOS = [
  "https://youtube.com/shorts/1VrlQ7egRNc",
  "https://youtube.com/shorts/2ek2BsfGF0A",
  "https://youtube.com/shorts/JK7afoDIt_s",
  "https://youtube.com/shorts/_hgCZjSOR0g",
  "https://youtube.com/shorts/oNm4p4spx1k",
  "https://youtube.com/shorts/uUCSlaILnAw",
  "https://youtube.com/shorts/1lVpn3Mczqk",
  "https://youtube.com/shorts/gEicDNM51NQ",
  "https://youtube.com/shorts/AFWvw3MH9DI",
  "https://youtube.com/shorts/ZDEi5EmQDHg",
  "https://youtube.com/shorts/FWm1J1PAOqI",
  "https://youtube.com/shorts/keS7PJeRI2U",
  "https://youtube.com/shorts/7jJB1SIpSpA",
];

// Extract YouTube ID from shorts URL
const getYoutubeId = (url: string): string => {
  const match = url.match(/youtube\.com\/shorts\/([^?]+)/);
  return match ? match[1] : '';
};

// Build sphere images directly from YouTube thumbnails
const SPHERE_IMAGES: ImageData[] = [];
for (let i = 0; i < 60; i++) {
  const videoIndex = i % YOUTUBE_VIDEOS.length;
  const url = YOUTUBE_VIDEOS[videoIndex];
  const id = getYoutubeId(url);
  SPHERE_IMAGES.push({
    id: `masterpiece-${i + 1}`,
    src: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    alt: `Masterpiece ${i + 1}`,
    videoUrl: url,
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 md:bg-blue-600/10 rounded-full blur-[100px]" />
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
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Masterpieces
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
              Our Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
