'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowRightIcon, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const InsightsNewsSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const insightsData = [
        {
            id: 1,
            date: "March 25, 2025",
            title: "The Future of Managed IT in the MEA Region",
            description: "Explore the evolving landscape of managed IT services and how they're transforming businesses across the Middle East and Africa region.",
            image: "/assets/insights/insights_1.jpg",
            buttonText: "Read Report"
        },
        {
            id: 2,
            date: "April 9, 2025",
            title: "Building Secure Cloud Environments in the GCC",
            description: "Comprehensive insights into creating robust and secure cloud infrastructures that meet the unique requirements of GCC enterprises.",
            image: "/assets/insights/insights_2.jpg",
            buttonText: "Read Report"
        },
        {
            id: 3,
            date: "May 3, 2025",
            title: "AI-Powered Automation Trends in Saudi Enterprises",
            description: "Discover how artificial intelligence and automation are driving digital transformation and operational efficiency in Saudi Arabia.",
            image: "/assets/insights/insights_3.jpg",
            buttonText: "Read Report"
        }
    ];

    return (
        <section
            ref={containerRef}
            className="relative bg-black  pb-20 overflow-hidden w-full  z-10 px-[5%]"
        >
            {/* Main insights background */}


            {/* Left background with gradient overlay */}
            <motion.div
                className="absolute top-0 left-0 bottom-0 right-[50%] z-5"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                <div className="relative w-full h-full">
                    {/* Background gradient layer */}
                    <div
                        className="absolute left-[-10%] top-[0%]  w-[514px] h-[514px]"
                        style={{
                            background: "linear-gradient(90deg, #A2E9FF 0%, #0082A9 20% , #031b57 60%)",
                            WebkitMask: "url(assets/insights/insights_left_background.svg) no-repeat center/contain",
                            mask: "url(assets/insights/insights_left_background.svg) no-repeat center/contain"
                        }}
                    />
                    {/* Black gradient overlay on the left */}
                    <div className="absolute top-[50px] left-[-5%] w-[600px] h-[600px]  right-0 bottom-0 rounded-full "
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #00000033 20%, #000000b3 40%, black 60%, black 100%)',
                        }}
                    ></div>
                </div>
            </motion.div>

            {/* Right background */}
            <motion.div
                className="absolute top-0 right-0 bottom-0 left-[50%] z-5"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 1.6 }}
            >
                <div className="relative w-full h-full bg-gradient-to-b from-black/100 to-black/0">
                    <div
                        className="absolute  top-[47%] right-[-15%]   w-[514px] h-[514px]"
                        style={{
                            background: "linear-gradient(336deg, #B6E6F7 5.85%, #134A83 55.25%)",
                            WebkitMask: "url(/assets/insights/insights_right_background.png) no-repeat center/contain",
                            mask: "url(/assets/insights/insights_right_background.png) no-repeat center/contain"
                        }}
                    />
                    <div className="absolute top-0 right-0 left-0 bottom-0  2xl:h-0 h-[700px]  bg-gradient-to-br  from-black  to-black"></div>
                </div>
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-20">
                {/* Header Section */}
                <motion.div
                    className="flex justify-center pt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <span className="text-[24px] font-bold tracking-wider"
                        style={{
                            background: 'linear-gradient(54deg, #60C1CA 15.02%, #25B8E4 82.83%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Stay Ahead of the Curve
                    </span>
                </motion.div>

                <motion.h2
                    className="text-white text-[48px] font-bold leading-tight text-center mt-6 z-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Insights & News
                </motion.h2>

                <motion.div
                    className="flex justify-center mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <button className="inline-flex items-center gap-4 px-6 py-4 border-[2px] border-[#25B8E4] text-[#25B8E4] rounded-[8px] hover:bg-[#25B8E4] hover:text-white text-[16px] font-bold transition-all duration-300">
                        View All
                        <ArrowRight size={18} />
                    </button>
                </motion.div>
            </div>

            {/* Cards Section */}
            <div className="relative z-20 py-14 flex items-center">
                <div className="w-full">
                    <div className="flex items-center gap-8 justify-center">
                        {insightsData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="relative group cursor-pointer "
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                                onHoverStart={() => setHoveredItem(item.id)}
                                onHoverEnd={() => setHoveredItem(null)}
                            >
                                <div
                                    className="relative w-full xl:min-w-[405px] h-[536px] pb-8 gap-2 flex flex-col justify-end items-center rounded-[24px] overflow-hidden"
                                    style={{
                                        background: `url(${item.image}) `,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPositionX: index == 0 ? '20%' : 'center',
                                        backgroundPositionY: 'center',
                                    }}
                                >
                                    <motion.div
                                        className="relative mx-8 px-6 py-8 rounded-[12px] max-w-[406px] "
                                        style={{
                                            border: "1px solid rgba(255, 255, 255, 0.10)",
                                            background: "rgba(255, 255, 255, 0.04)",
                                            backdropFilter: "blur(10px)"
                                        }}
                                        animate={{
                                            height: hoveredItem === item.id ? "auto" : "fit-content"
                                        }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    >
                                        {/* Date */}
                                        <p className="text-white text-[16px]  mb-4">
                                            {item.date}
                                        </p>

                                        {/* Title */}
                                        <motion.h3
                                            className="text-white text-[24px] font-bold leading-tight"
                                            animate={{
                                                scale: hoveredItem === item.id ? 1.02 : 1
                                            }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            {item.title}
                                        </motion.h3>

                                        {/* Description that appears on hover */}
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{
                                                opacity: hoveredItem === item.id ? 1 : 0,
                                                height: hoveredItem === item.id ? "auto" : 0,
                                                marginTop: hoveredItem === item.id ? 16 : 0
                                            }}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeOut",
                                                delay: hoveredItem === item.id ? 0.05 : 0
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[#fff] text-[16px] leading-relaxed">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="relative w-full mx-8 max-w-[342px] px-6 py-4  rounded-[12px] text-white flex items-center justify-between cursor-pointer group overflow-hidden"
                                        style={{
                                            border: "1px solid rgba(255, 255, 255, 0.10)",
                                            background: "rgba(255, 255, 255, 0.04)",
                                            backdropFilter: "blur(10px)"
                                        }}
                                        whileHover={{
                                            scale: 1.01
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {/* Shimmer/Flash Effect */}
                                        <motion.div
                                            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent "
                                            style={{
                                                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                                                width: "100%",
                                                height: "100%",
                                                transform: "translateX(-100%) skewX(-25deg)"
                                            }}
                                            whileHover={{
                                                transform: "translateX(100%) skewX(-25deg)"
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        <div className='flex items-center gap-2'>
                                            <motion.span
                                                className="relative z-10 text-white font-medium transition-colors duration-300"
                                            >
                                                Read Report
                                            </motion.span>
                                            <motion.div
                                                className="relative z-10"
                                                whileHover={{ x: 4 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <ChevronRight className="w-4 h-4  transition-colors duration-300" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsNewsSection;

