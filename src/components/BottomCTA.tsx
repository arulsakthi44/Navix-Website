import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import navixfooter from "../assets/Navix-footer.mp4"

export function BottomCTA() {
  return (
    <section id="contact" className="relative py-20 bg-black" style={{ paddingTop: '20px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center space-y-20">
          {/* Animated NaViX video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-4xl"
          >
            {/* Video container */}
            <div className="relative flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-[20px]"
                style={{ aspectRatio: '1152/720' }}
              >
                <source src={navixfooter} type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* CTA Button */}
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 rounded-[80px] border-[3px] border-solid border-white text-white text-lg tracking-widest"
              style={{
                backgroundImage: "linear-gradient(100.351deg, rgb(0, 0, 0) 14.842%, rgb(95, 48, 20) 25.921%, rgb(172, 76, 21) 37%, rgb(198, 198, 198) 51.41%, rgb(32, 86, 174) 68.977%, rgb(0, 0, 0) 89.412%)",
                fontFamily: '"Bricolage Grotesque", sans-serif'
              }}
            >
              LET'S DO THIS
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}