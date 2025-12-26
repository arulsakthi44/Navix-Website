import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import navixLogo from "../assets/navix-logo.png";


export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 py-16" style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4 flex flex-col items-center w-[260px]">
  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <img 
      src={navixLogo} 
      alt="NaViX Logo" 
      className="w-full h-auto max-h-20 object-contain cursor-pointer hover:opacity-80 transition-opacity"
    />
  </Link>

  <motion.div
    className="text-white text-[20px] whitespace-nowrap text-center"
    animate={{ backgroundPosition: ['-200px', '500px'] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{
      background: 'linear-gradient(to right, #9f9f9f 0%, #fff 10%, #868686 20%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 700,
    }}
  >
    Navigate | Visualise | Xelerate
  </motion.div>

  <p className="text-white/30 text-xs pt-2 text-center">
    © 2025 NaViX. All rights reserved.
  </p>
</div>


          {/* Quick Links placeholder (intentionally empty to preserve layout)*/}
          <div className="space-y-4">
            <h3 className="text-white/90 tracking-wide text-xl">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Work', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 transition-all text-base bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text hover:text-transparent"
                    style={{
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'inherit',
                    }}
                    whileHover={{ 
                      x: 5,
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white/90 tracking-wide text-xl">Get In Touch</h3>
            <p className="bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
  navixstudios@gmail.com
</p>

<p className="bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
  +91 63698 70655
</p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {['Instagram', /* 'LinkedIn' */].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-white/50 hover:text-[#4A8CFF] transition-colors text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#4A8CFF]/5 blur-[100px] pointer-events-none" />
      </div>
    </footer>
  );
}