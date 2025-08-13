'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

const InsightsNewsSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const insightsData = [
        {
            id: 1,
            date: "March 25, 2025",
            title: "The Future of Managed IT in the MEA Region",
            image: "/assets/what_we_do_section/managed_services.jpg",
            buttonText: "Read Report"
        },
        {
            id: 2,
            date: "April 9, 2025",
            title: "Building Secure Cloud Environments in the GCC",
            image: "/assets/what_we_do_section/cybersecurity.jpg",
            buttonText: "Read Report"
        },
        {
            id: 3,
            date: "May 3, 2025",
            title: "AI-Powered Automation Trends in Saudi Enterprises",
            image: "/assets/what_we_do_section/ai.jpg",
            buttonText: "Read Report"
        }
    ];

    return (
        <section
            ref={containerRef}
            className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-black px-[5%] py-20 overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.p
                        className="text-cyan-400 text-lg font-semibold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Stay Ahead of the Curve
                    </motion.p>

                    <motion.h2
                        className="text-white text-5xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Insights & News
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Button
                            className="text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 border-2 bg-transparent transition-all duration-300"
                        >
                            View All
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    {insightsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>

                            {/* Glass morphism overlay on hover */}
                            <motion.div
                                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                }}
                            ></motion.div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                                <motion.p
                                    className="text-cyan-400 text-sm font-semibold mb-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                                >
                                    {item.date}
                                </motion.p>

                                <motion.h3
                                    className="text-white text-xl font-bold mb-4 leading-tight"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                                >
                                    {item.title}
                                </motion.h3>

                                <motion.div
                                    className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                                >
                                    <Button
                                        className="text-white bg-transparent border border-white/30 hover:bg-white hover:text-black px-4 py-2 text-sm transition-all duration-300"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                        }}
                                    >
                                        {item.buttonText}
                                        <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default InsightsNewsSection;

