import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navixLogo from "../assets/navix-logo.png";
import { clearSavedWorkScroll } from '../utils/scrollRestoration';


interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/projects' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: MenuItem) => {
    // If middle click or ctrl/cmd click, allow browser to open link in new tab
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }

    e.preventDefault();
    setMobileMenuOpen(false);

    setTimeout(() => {
      if (item.name === 'Home') {
        if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      if (item.name === 'Work') {
        clearSavedWorkScroll();
        navigate('/projects');
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      if (item.name === 'Services') {
        if (location.pathname === '/') {
          const element = document.getElementById('services');
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
          navigate('/#services');
        }
        return;
      }

      if (item.name === 'Contact') {
        navigate('/contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left aligned and bigger */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="text-2xl tracking-wider cursor-pointer">
              <img
                src={navixLogo}
                alt="NaViX Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu - Hidden on mobile */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item)}
                  className="text-white/90 tracking-wider transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item)}
                className="block text-white/90 tracking-wider transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] cursor-pointer py-2"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}