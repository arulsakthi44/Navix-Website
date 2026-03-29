import { motion } from 'motion/react';
import { AuroraTextEffect } from '@/components/lightswind/aurora-text-effect';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Heroanimation from "../assets/videos/heroani.mp4";


export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] flex items-center pt-20" 
      style={{ paddingTop: isMobile ? '100px' : '20px' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Scroll Stopping Content,{' '}
              <AuroraTextEffect className="block mt-2">ROI That Slaps</AuroraTextEffect>
            </h1>

            <p className="text-xl text-white/70 max-w-xl">
              We're not just another marketing agency. We're the bridge between vibes & value.
            </p>

            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-[80px] border-[3px] border-solid border-white text-white tracking-widest"
                style={{
                  backgroundImage: "linear-gradient(100.351deg, rgb(0, 0, 0) 14.842%, rgb(95, 48, 20) 25.921%, rgb(172, 76, 21) 37%, rgb(198, 198, 198) 51.41%, rgb(32, 86, 174) 68.977%, rgb(0, 0, 0) 89.412%)",
                  fontFamily: '"Bricolage Grotesque", sans-serif'
                }}
              >
                LET'S DO THIS
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Block - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden"
          >
            {/* Video Container */}
            <div className="absolute inset-0">

              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={Heroanimation} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Animating tagline - bottom center of video */}
            <style>{`
              @keyframes shimmer {
                0% { background-position: 200% center; }
                100% { background-position: -200% center; }
              }
              .shimmer-text {
                background: linear-gradient(to right, #868686 0%, #868686 40%, #fff 50%, #868686 60%, #868686 100%);
                background-size: 200% auto;
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shimmer 4.5s linear infinite;
                font-weight: 700;
              }
            `}</style>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center whitespace-nowrap text-[18px] z-10">
              <span className="shimmer-text">Navigate • Visualise • Xelerate</span>
            </div>
            
            {/* Glow Effect */}
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] rounded-2xl opacity-20 blur-xl -z-10" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}