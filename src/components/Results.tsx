import { motion } from 'motion/react';
import React from 'react';
// import {
//     LineChart,
//     Line,
//     AreaChart,
//     Area,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//     PieChart,
//     Pie,
//     Cell,
//     BarChart,
//     Bar,
// } from 'recharts';

/* ---------------- DATA MOCKS ---------------- */

/* ---------------- DATA CONSTANTS REMOVED ---------------- */
// Data constants removed as we are switching to static images.


/* ---------------- SUB-COMPONENTS ---------------- */

import Resultone from "../assets/result-1.jpg";
import Resulttwo from "../assets/result-2.jpeg";
import Resultthree from "../assets/result-3.jpeg";
import Resultfour from "../assets/result-4.jpeg";
import Resultfive from "../assets/result-5.jpg";
import Resultsix from "../assets/result-6.jpeg";

interface ChartContainerProps {
    children: React.ReactNode;
}

function ChartContainer({ children }: ChartContainerProps) {
    return (
        <div className="w-full h-[220px] bg-white/5 rounded-xl border border-white/5 overflow-hidden p-1 relative flex items-center justify-center">
            {/* Grid overlay for "dashboard" feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />
            {children}
        </div>
    );
}

interface ResultCardProps {
    delay: number;
    metric: string;
    caption: string;
    descriptor: string;
    imageSrc: string;
}

function ResultCard({ delay, metric, caption, descriptor, imageSrc }: ResultCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-6 hover:border-white/20 transition-colors group"
        >
            {/* Chart/Image Area */}
            <ChartContainer>
                <div className="w-[320px] h-[160px] flex items-center justify-center">
                    <motion.img
                        src={imageSrc}
                        alt={descriptor}
                        className="max-w-full max-h-full object-contain rounded-lg relative z-0 opacity-90 hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>


                {/* Vignette effect */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-20" />
            </ChartContainer>

            {/* Metrics Area */}
            <div className="min-h-[140px] flex flex-col justify-start">
                <h3 className="text-4xl font-bold text-[#EE6A1F] mb-1">
                    {metric}
                </h3>
                <p className="text-white font-medium text-lg mb-2">{caption}</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
                    {descriptor}
                </p>
            </div>
        </motion.div>
    );
}

/* ---------------- MAIN COMPONENT ---------------- */

export function Results() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        The Results We Delivered
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real growth. Built quietly. Sustained consistently.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Revenue Growth */}
                    <ResultCard
                        delay={0}
                        metric="₹30L Revenue"
                        caption="in 60 Days"
                        descriptor="School Admissions"
                        imageSrc={Resultone}
                    />

                    {/* Card 2: Funnel Scaling */}
                    <ResultCard
                        delay={0.1}
                        metric="42% Valid Leads"
                        caption="Per Month"
                        descriptor="HRMS – SaaS"
                        imageSrc={Resulttwo}
                    />

                    {/* Card 3: AOV Optimization */}
                    <ResultCard
                        delay={0.2}
                        metric="₹18 CPL"
                        caption="Local Booking Funnel"
                        descriptor="F&B (Dine-In Bookings)"
                        imageSrc={Resultthree}
                    />

                    {/* Card 4: New Product Launch */}
                    <ResultCard
                        delay={0.3}
                        metric="100+ Leads in 30 Days"
                        caption="Hyper-Local Performance Ads"
                        descriptor="Sports Arena (Local Market)"
                        imageSrc={Resultfour}
                    />

                    {/* Card 5: Market Expansion */}
                    <ResultCard
                        delay={0.4}
                        metric="3× ROAS"
                        caption="Performance-led education funnels"
                        descriptor="Teacher Training – EdTech"
                        imageSrc={Resultfive}
                    />

                    {/* Card 6: Sustained Growth */}
                    <ResultCard
                        delay={0.5}
                        metric="₹9 – ₹20 CPL"
                        caption="Fast-moving inventory acquisition"
                        descriptor="Rental & Real Estate"
                        imageSrc={Resultsix}
                    />
                </div>
            </div>
        </section>
    );
}
