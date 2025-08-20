'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function EnvironmentalSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section
            ref={containerRef}
            className="relative bg-black w-full px-[5%] pt-44 min-h-screen z-5 "
        >
            {/* Blue Curved Decorative Elements - Bottom Right */}
            {/* <motion.div
                className="absolute bottom-0 right-0 z-5"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <div className="relative w-[400px] h-[300px]">
                    <svg
                        width="400"
                        height="300"
                        viewBox="0 0 400 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0 right-0"
                    >
                        <path
                            d="M400 200C350 180 300 160 250 180C200 200 150 220 100 200C50 180 0 160 0 160V300H400V200Z"
                            fill="url(#gradient1)"
                            fillOpacity="0.6"
                        />
                        <path
                            d="M400 220C350 200 300 180 250 200C200 220 150 240 100 220C50 200 0 180 0 180V300H400V220Z"
                            fill="url(#gradient2)"
                            fillOpacity="0.4"
                        />
                        <path
                            d="M400 240C350 220 300 200 250 220C200 240 150 260 100 240C50 220 0 200 0 200V300H400V240Z"
                            fill="url(#gradient3)"
                            fillOpacity="0.3"
                        />
                        <defs>
                            <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#25B8E4" />
                                <stop offset="100%" stopColor="#60C1CA" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#25B8E4" />
                                <stop offset="100%" stopColor="#60C1CA" />
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#25B8E4" />
                                <stop offset="100%" stopColor="#60C1CA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </motion.div> */}
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
                            background: "linear-gradient(336deg, #86caeb 0.85%, #134A83 40.25%)",
                            WebkitMask: "url(/assets/insights/insights_right_background.png) no-repeat center/contain",
                            mask: "url(/assets/insights/insights_right_background.png) no-repeat center/contain"
                        }}
                    />
                    <div className="absolute top-0 right-0 left-0 bottom-0  2xl:h-0 h-[700px]  bg-gradient-to-br  from-black  to-black"></div>
                </div>
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-20 flex items-center gap-16">
                {/* Left Content */}
                <div className="w-1/2">
                    {/* Environmental Label */}
                    <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span
                            className="text-[24px] font-bold leading-[28.8px]"
                            style={{
                                background: 'linear-gradient(54deg, #60C1CA 2.02%, #25B8E4 3.83%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Environmental
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="text-white text-[56px] font-normal leading-[61.6px] mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Technology for a Greener Future
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-[#ECEEEE] text-[18px] font-normal leading-[27px] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Environmental responsibility is at the core of how we operate and innovate. At BARQ, we focus on reducing carbon impact, minimizing e-waste, and embedding sustainability into every stage of our operations to support a more sustainable future.                    </motion.p>

                    {/* Emissions & Waste Management Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h3 className="text-white text-[24px] font-bold mb-2">
                            Emissions & Waste Management
                        </h3>

                        <p className="text-[#ECEEEE] text-[18px] font-normal leading-[27px] mb-6">
                            We address the environmental impact of e-waste and emissions by:
                        </p>

                        {/* Bullet Points with Icons */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="">
                                    <Image
                                        src="/assets/sustainability/env-1.svg"
                                        alt="Certified vendors"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>
                                <span className="text-white text-[18px] leading-[27px]">
                                    Partnering with certified vendors for responsible disposal
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="">
                                    <Image
                                        src="/assets/sustainability/env-2.svg"
                                        alt="Recycling"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>
                                <span className="text-white text-[18px] leading-[27px]">
                                    Recycling metal scrap waste
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="">
                                    <Image
                                        src="/assets/sustainability/env-3.svg"
                                        alt="Net Positive"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>
                                <span className="text-white text-[18px] leading-[27px]">
                                    Aligning practices with our Net Positive goals
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    className="w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <div className="relative">
                        {/* Glassmorphism Container */}
                        <div
                            className="relative rounded-[24px] overflow-hidden p-6"
                            style={{
                                background: "rgba(255, 255, 255, 0.04)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.16)"
                            }}
                        >
                            <div className="relative w-full h-[500px] rounded-[16px] overflow-hidden">
                                <Image
                                    src="/assets/sustainability/environmental.jpg"
                                    alt="Environmental technology - Solar trees"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
