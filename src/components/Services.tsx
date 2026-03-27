import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Fi11891732 from '../imports/Fi11891732';

const services = [
  {
    id: 'content-creation',
    title: 'Content Creation',
    titleColor: 'text-white',
    items: [
      'Brand Identity & Storytelling',
      'Social Media Content Strategy',
      'Reels, Short Videos & UGC-style Ads',
      'Emotionally Resonant Copywriting',
      'Content Strategy for Engagement + Conversions'
    ]
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    titleColor: 'text-white',
    items: [
      'Meta & Google Ads Setup and Management',
      'Audience Segmentation & Targeting Psychology',
      'Funnel Building & Retargeting Automation',
      'Conversion-Focused Landing Pages',
      'Real-time Reporting & Budget Optimization'
    ]
  },
  {
    id: 'web-design-development',
    title: 'Web Design & Development',
    titleColor: 'text-white',
    items: [
      'UX Research',
      'Wire framing',
      'Website UI',
      'Mobile App UI',
      'Dashboard / SaaS UI',
      'Landing Page',
      'E-Commerce Website'
    ]
  }
];

export function Services() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('content-creation');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl text-white mb-8"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h2>
        </motion.h2>

        {/* Service Accordions */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm overflow-hidden hover:border-[#4A8CFF]/30 transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full flex items-center justify-between p-8 group cursor-pointer"
              >
                <h3 className="text-2xl md:text-3xl font-medium text-left leading-tight">
                  <span 
                    className={openAccordion === service.id ? "relative inline-block font-medium bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] bg-clip-text text-transparent transition-colors duration-300" : "relative inline-block font-medium text-white transition-colors duration-300"}
                    style={{ fontSize: 'inherit', lineHeight: 'inherit', fontWeight: 500 }}
                  >
                    {service.title}
                  </span>
                </h3>
                <motion.div
                  animate={{ rotate: openAccordion === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-8 h-8 transition-colors duration-300 ${openAccordion === service.id ? "text-[#EE6A1F]" : "text-white"}`} />
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {openAccordion === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-4">
                        {service.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="group cursor-pointer"
                          >
                            <div className="relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm rounded-full border border-white/10 shadow-lg hover:border-[#4A8CFF]/30 transition-all duration-300">
                              {/* Icon with spark animation */}
                              <motion.div 
                                className="w-5 h-5 flex-shrink-0 relative"
                                animate={{
                                  rotate: [0, 360],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              >
                                <Fi11891732 />
                                
                                {/* Spark effect */}
                                <motion.div
                                  className="absolute inset-0"
                                  animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [0.8, 1.2, 0.8],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: itemIndex * 0.2
                                  }}
                                >
                                  <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 blur-sm" />
                                </motion.div>
                              </motion.div>
                              
                              {/* Text */}
                              <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                                {item}
                              </span>

                              {/* Glow effect on hover */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4A8CFF]/0 to-purple-500/0 group-hover:from-[#4A8CFF]/10 group-hover:to-purple-500/10 blur-xl transition-all duration-300" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}