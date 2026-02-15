import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        text: "Navix Ai has completely transformed how we approach data analysis. The insights we get are deeper and faster than ever before. It's truly a game-changer for our strategic planning.",
        name: "Arul",
        role: "CEO of Navix Studio"
    },
    {
        text: "The scalability of this platform is unmatched. We went from processing thousands to millions of data points overnight without a hitch. The support team is also world-class.",
        name: "Sarah Chen",
        role: "CTO at TechFlow"
    },
    {
        text: "Implementation was a breeze. The API documentation is clear, and the SDKs are well-maintained. We integrated Navix into our core product in less than a week.",
        name: "Marcus Rodriguez",
        role: "Lead Engineer at DataSphere"
    },
    {
        text: "I've used many AI tools, but the accuracy and intuitive interface of Navix stand out. It empowers our non-technical team members to leverage advanced AI capabilities effortlessly.",
        name: "Emily Watson",
        role: "Product Director at InnovateX"
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
