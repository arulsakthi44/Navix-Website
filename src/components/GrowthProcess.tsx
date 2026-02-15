import { motion } from 'motion/react';
import { ArrowRight, Phone, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: Phone,
        title: 'Book Your Free Strategy Call',
        description: 'We break down your goals, audit your current setup, and find the fastest profitable growth path.',
    },
    {
        icon: TrendingUp,
        title: 'Get Your Custom Growth Plan',
        description: 'You receive a data-backed plan tailored to your exact brand, covering creatives, audiences, funnel, traffic strategy, everything.',
    },
    {
        icon: Zap,
        title: 'Execute, Optimize & Scale',
        description: 'We launch, test, and optimize nonstop for maximum ROAS. You handle business. We scale profits. And if we don’t hit promised results, we work FREE until we do.',
    },
];

export function GrowthProcess() {
    return (
        <section id="about" className="relative py-24 overflow-hidden">
            {/* Background Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Scale Your Brand in 3 Simple Steps
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        No fluff. No confusion. Just a proven system.
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative mb-20">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[35px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            {/* Step Number Badge */}
                            {/* Step Number Badge */}
                            <div
                                className="flex-none rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(238,106,31,0.3)] group-hover:scale-110 transition-transform duration-300 relative"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    background: '#EE6A1F'
                                }}
                            >
                                <div className="absolute inset-0 rounded-3xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                <step.icon className="text-white w-8 h-8 relative z-10" strokeWidth={2.5} />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <Link to="/contact">
                        <motion.button
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-4 rounded-[80px] border-[3px] border-solid border-white text-white tracking-widest uppercase font-bold"
                            style={{
                                backgroundImage: "linear-gradient(100.351deg, rgb(0, 0, 0) 14.842%, rgb(95, 48, 20) 25.921%, rgb(172, 76, 21) 37%, rgb(198, 198, 198) 51.41%, rgb(32, 86, 174) 68.977%, rgb(0, 0, 0) 89.412%)",
                                fontFamily: '"Bricolage Grotesque", sans-serif'
                            }}
                        >
                            Start Your Growth Journey
                        </motion.button>
                    </Link>

                    {/* <p className="mt-6 text-white/80 text-sm italic">
                        Your growth should be simple and consistent, not chaotic.
                    </p> */}
                </motion.div>

            </div>
        </section>
    );
}
