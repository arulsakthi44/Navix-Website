import { motion } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import navixLogo from "../assets/navix-logo.png";


export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();

    // If clicking "Home" (logo), navigate to home page and scroll to top
    if (sectionId === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If clicking "Work", navigate to projects page
    if (sectionId === 'work') {
      navigate('/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If we're on the home page, just scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);

      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };
  return (
    <footer className="relative bg-black border-t border-white/5 py-16" style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4 flex flex-col items-center w-[260px]">
            <Link to="/" onClick={(e: any) => handleClick(e, 'home')}>
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
              © 2026 NaViX Media. All rights reserved.
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
                    onClick={(e) => handleClick(e, item)}
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
              navixmedia.in@gmail.com
            </p>

            <p className="bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer">
              +91 63698 70655
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <motion.a
                href="https://www.instagram.com/navix._media?igsh=MWhreTg0cTluajlp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#4A8CFF]/5 blur-[100px] pointer-events-none" />
      </div>
    </footer>
  );
}