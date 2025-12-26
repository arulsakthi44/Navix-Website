import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Shivam from "../assets/shivam.png"
// import Shivam from "../assets/shivam.png"
// import Shivam from "../assets/shivam.png"
// import Shivam from "../assets/shivam.png"
// import Shivam from "../assets/shivam.png"
// import Shivam from "../assets/shivam.png"
import Nakear from "../assets/hero-section.png"
// import Shivam from "../assets/shivam.png"

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nakear",
    description: "Nakear, a premium formal wear brand, scaled in a competitive market by shifting to lifestyle-driven storytelling.",
    category: "applications",
    imageUrl: Shivam
  },
  {
    id: 2,
    title: "Luxe E-Commerce Platform",
    description: "Premium shopping experience with immersive 3D product views and seamless checkout flow.",
    category: "websites",
    imageUrl: "https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NTk5MzIwNnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Velocity Brand Identity",
    description: "Complete brand redesign for a cutting-edge tech startup, featuring bold visuals and modern typography.",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5ODQwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "FitPro Training App",
    description: "Next-gen fitness application with personalized workout plans and real-time performance tracking.",
    category: "applications",
    imageUrl: "https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NTg4OTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Savoria Restaurant Portal",
    description: "Elegant dining website with interactive menu, reservations system, and chef showcase.",
    category: "websites",
    imageUrl: "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjU5OTMyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Nakear",
    description: "Nakear, a premium formal wear brand, scaled in a competitive market by shifting to lifestyle-driven storytelling.",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1764383381195-5daa5902c3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZyUyMGlkZW50aXR5fGVufDF8fHx8MTc2NTk5MzIxMHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    title: "Nakear",
    description: "Nakear, a premium formal wear brand, scaled in a competitive market by shifting to lifestyle-driven storytelling.",
    category: "E-commerce",
    imageUrl: Nakear
  },
  {
    id: 8,
    title: "Pulse Analytics Platform",
    description: "Advanced business intelligence dashboard with customizable widgets and data visualization.",
    category: "applications",
    imageUrl: "https://images.unsplash.com/photo-1761593280919-766a4acbcfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY1ODg3MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 9,
    title: "Zenith Mobile Experience",
    description: "Intuitive mobile app interface with gesture controls and seamless user experience design.",
    category: "applications",
    imageUrl: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1OTI0MzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 10,
    title: "Vertex Design System",
    description: "Modern website with cutting-edge design patterns and responsive architecture.",
    category: "websites",
    imageUrl: "https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NTk3NTQ5NHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Projects() {
  const navigate = useNavigate();

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
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl text-white mb-6">
                Our projects
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Explore our portfolio of cutting-edge digital experiences crafted for visionary brands
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer h-full"
                >
                  {/* Gradient Border Wrapper */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#EE6A1F] to-[#1A70FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                    <div className="w-full h-full bg-[#0a0a0a] rounded-2xl" />
                  </div>

                  {/* Content Container */}
                  <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-transparent transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-black text-xs uppercase tracking-wider">
                        {project.category}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 
                        className="text-white text-xl mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#EE6A1F] group-hover:to-[#1A70FF] group-hover:bg-clip-text group-hover:text-transparent"
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}