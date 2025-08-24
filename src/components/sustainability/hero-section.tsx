'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Navbar from '@/components/home-page/navbar';
import SustainabilityGoalsSection from './goals-section';

export default function SustainabilityHeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section
            ref={containerRef}
            className="relative bg-black px-[5%] lg:px-[5%] md:px-[4%] sm:px-[3%] overflow-hidden h-[1303px] lg:h-[1303px] md:h-auto sm:h-auto"
        >
            {/* Navbar */}
            <div className="relative z-30">
                <Navbar isHomePage={false} />
            </div>            {/* Background Images Layering - Same as What We Do Section */}
            {/* Top background overlay */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2.1 }}
                className="absolute top-[-35%] right-0  bottom-0 left-[30%]  z-5">
                <div className="relative w-full h-full ">
                    <Image
                        src="/assets/sustainability/Group 1171274893.svg"
                        alt="Background pattern"
                        width={1400}
                        height={2600}
                        className=" object-cover  h-[2600px] w-full opacity-8"
                    />
                </div>
            </motion.div>
            {/* left background */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="absolute top-[-130%] left-0 bottom-0 right-[-90%] z-5">
                <div className="relative w-full h-full">
                    <Image
                        src="/assets/sustainability/Group 1171274894.svg"
                        alt="Left background"
                        fill
                        className="object-cover object-left blur-[200px] opacity-90"
                    />
                </div>
            </motion.div>
            {/* Content Layer */}
            <div className="relative z-20 mt-[135px] flex items-center gap-6">
                {/* Header Section */}
                <div className="flex flex-col  w-1/2    ">
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <span
                            className="text-[24px] font-bold leading-[28.8px]"
                            style={{
                                background: 'linear-gradient(54deg,#60C1CA 15.02%, #25B8E4 82.83%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Sustainability
                        </span>
                    </motion.div>
                    <motion.h1
                        className="text-white text-[56px] font-normal leading-[61px] max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        Our Commitment to a Better Future
                    </motion.h1>
                    <motion.p
                        className="text-[#ECEEEE] text-[18px] font-normal  mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        BARQ Systems firmly believes in the transformative power of sustainable practices, viewing sustainability not only as a responsibility to the planet but also, as a tool for meaningful change. The Sustainable Development Goals (SDGs) - a global initiative aimed at eradicating poverty, safeguarding the environment, and ensuring universal access to improved living conditions -lie at the heart of our sustainability approach. At BARQ Systems, we understand that sustainability encompasses more than environmental protection; it also involves caring for our people and the communities we serve. We place immense value on our team and the broader society.
                    </motion.p>
                </div>
                {/* Sustainability Header Image */}
                <motion.div
                    className=" w-1/2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                >
                    <div className="relative w-full  rounded-[24px] overflow-hidden  max-w-[628px] max-h-[500px]">
                        <div className="absolute inset-0 bg-[#FFFFFF08] backdrop-blur-[5px]   rounded-[24px] border border-[#FFFFFF20]"></div>
                        <div className="relative p-6 ">
                            <Image
                                src="/assets/sustainability/sustainability-header.png"
                                alt="Sustainability commitment"
                                height={434}
                                width={580}
                                className="object-cover  w-[580px] h-[434px] "
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <SustainabilityGoalsSection />
        </section>
    );
}
