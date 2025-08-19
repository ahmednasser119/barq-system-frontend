'use client';
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import AwardsSection from './awards-section';
import InsightsNewsSection from './insights-news-section';

const AcademySection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <>
            <section
                ref={containerRef}
                className="relative bg-black pt-0 z-10 "
            >
                <div className="w-full px-[5%] ">
                    {/* Background Images Layering */}
                    {/* Ellipse background in the middle */}
                    <div
                        className="absolute top-[-12%] right-0 bottom-0 left-[0%]  z-0 w-full h-full ">
                        <div className="relative w-full h-full  ">
                            <Image
                                src="/assets/accademy/academy-left-background.png"
                                alt="Background ellipse"
                                width={1280}
                                height={1140}
                                className=" w-[2280px] h-[1550px] object-cover   opacity-80"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <motion.div
                            className=" mb-6 w-full h-full max-h-[500px] z-30"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <Image
                                src={'/assets/accademy/academy-image.png'}
                                alt={'academy'}
                                width={1200}
                                height={1200}
                                className="w-full  object-cover h-[500px] rounded-[24px] "
                            />
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 z-40 flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <div className="w-1/2 pl-8 md:pl-16">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 1.6 }}
                                >
                                    <span className=" text-[24px] font-bold mb-4 "
                                        style={{
                                            background: 'linear-gradient(54deg,  #49C1EC 15.02%, #00AF42 82.83%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        }}
                                    >
                                        Empowering the Future of Tech Talent
                                    </span>
                                </motion.h3>

                                <motion.h2
                                    className="text-white text-[48px] font-bold mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 1.8 }}
                                >
                                    BARQ Academy
                                </motion.h2>
                                <motion.p
                                    className="text-gray-300 text-[18px] leading-relaxed mb-10 max-w-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 2.0 }}
                                >
                                    BARQ Academy is our talent development hub — training future leaders in IT, cybersecurity, and enterprise solutions.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: 2.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        className="text-white  flex items-center justify-center gap-[10px] text-[18px] h-[56px] font-normal transition-all duration-300 hover:scale-105 hero-text rounded-[12px]"
                                        style={{
                                            background: "linear-gradient(95deg, var(--Secondary-Blue-100, #318CCC) 13.23%, #0040C3 81.63%)",
                                            boxShadow: "4px 8px 24px 0 rgba(36, 107, 253, 0.25)",
                                            padding: "16px 24px"
                                        }}
                                    >
                                        Explore BARQ Academy
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <AwardsSection />
            </section>
            {/* <InsightsNewsSection /> */}
        </>

    )
}

export default AcademySection