import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        text: "Navix transformed our digital presence and website, improving our brand positioning. Their content and performance campaigns delivered consistent leads with clear execution and measurable results.",
        name: "Narayanan",
        role: "Founder of Nakear clothing"
    },
    {
        text: "Working with Navix was effortless. Their team understands branding, storytelling, and audience psychology extremely well. The creatives they produced elevated our brand image instantly.",
        name: "Neethu chandran",
        role: "COO at Event by Color theory"
    },
    {
        text: "Your service helped us showcase our property in a way that actually attracted buyers. The video content and ad campaigns brought in serious inquiries much faster than we expected.",
        name: "Punith",
        role: "CEO at Kutir"
    },
    {
        text: "Within a short span, Navix helped us improve our online visibility and generate qualified leads. Their performance marketing approach is structured, data-driven, and focused on ROI.",
        name: "Sai Pranav",
        role: "Founder of Courtside 360"
    }
];

export function Testimonials() {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Powering enterprise companies, <br className="hidden md:block" />
                        startups, and everything in between
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-[#0A0F1C]/80 backdrop-blur-sm border border-white/5 group-hover:border-transparent rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            {/* Gradient Border Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#EE6A1F] to-[#1A70FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                                <div className="w-full h-full bg-[#0A0F1C] rounded-2xl" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col p-6">
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-white/20" fill="currentColor" />
                                </div>

                                {/* Review Text */}
                                <p className="text-white/90 text-lg leading-relaxed mb-8 flex-grow">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex flex-col mt-auto">
                                    <span className="text-white font-bold text-xl mb-1">
                                        {testimonial.name}
                                    </span>
                                    <span className="text-white/90 text-sm">
                                        {testimonial.role}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
