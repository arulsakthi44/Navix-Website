import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navixLogo from "../assets/navix-logo.png";


export function Navbar() {
  const menuItems = ['Home', 'Work', 'Services', 'Contact'];
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
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
      }, 100); // Small delay to ensure page is rendered
    }
  }, [location]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();

    // Close mobile menu when clicking a link
    setMobileMenuOpen(false);

    // Add a small delay to allow menu to close before scrolling
    setTimeout(() => {
      // If clicking "Home", navigate to home page
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
    }, 300); // Delay to allow mobile menu to close
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left aligned and bigger */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl tracking-wider cursor-pointer"
            >
              <img
                src={navixLogo}
                alt="NaViX Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Menu - Hidden on mobile */}
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item)}
                  className="text-white/90 tracking-wider transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-white/5"
      >
        <ul className="px-6 py-4 space-y-4">
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleClick(e, item)}
                className="block text-white/90 tracking-wider transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer py-2"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}