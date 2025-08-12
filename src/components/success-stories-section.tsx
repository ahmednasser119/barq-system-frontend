'use client'

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface SuccessStory {
    id: number;
    title: string;
    image: string;
    logo: string;
    description: string;
    caseStudyLink: string;
}

const successStories: SuccessStory[] = [
    {
        id: 1,
        title: 'MNT-Halan',
        image: '/assets/success_stories_section/success_stores_2.png',
        logo: '/assets/success_stories_section/success_stores_2_logo.png',
        description: 'Digital transformation and fintech infrastructure optimization for Egypt\'s leading mobility platform.',
        caseStudyLink: '#'
    },
    {
        id: 2,
        title: 'BARQ Systems & EMKAN (AlRajhi Group)',
        image: '/assets/success_stories_section/success_stories_1.png',
        logo: '',
        description: 'EMKAN, a subsidiary of AlRajhi Group, partnered with BARQ Systems for a groundbreaki...',
        caseStudyLink: '#'
    },
    {
        id: 3,
        title: 'King Saud University',
        image: '/assets/success_stories_section/success_stores_3.png',
        logo: '/assets/success_stories_section/success_stores_3_logo.png',
        description: 'Comprehensive IT infrastructure modernization and smart campus solutions implementation.',
        caseStudyLink: '#'
    }
];

export default function SuccessStoriesSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });
    const [hoveredStory, setHoveredStory] = useState<number | null>(null);

    return (
        <section
            ref={containerRef}
            className="relative  pt-[120px] pb-20 overflow-hidden"
        >
            {/* Content Layer */}
            <div className="relative z-20">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <motion.div
                        className="inline-block mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span
                            className="text-[24px] font-bold tracking-wider"
                            style={{
                                background: 'linear-gradient(54deg, #60C1CA 15.02%, #25B8E4 82.83%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Real Results, Real Clients
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-white text-[48px] font-bold leading-tight mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Our Success Stories
                    </motion.h2>

                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button className="inline-flex items-center gap-2 px-6 py-4 border-[2px] border-[#25B8E4] text-[#25B8E4] rounded-[8px] hover:bg-[#25B8E4] hover:text-white text-[16px] font-bold transition-all duration-300">
                            View All
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

                {/* Success Stories Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className=""
                >
                    <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-center gap-8">
                        {/* Left Card */}
                        <motion.div
                            key={successStories.find(story => story.id === 1)?.id}
                            className="relative group cursor-pointer lg:order-1"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            onHoverStart={() => setHoveredStory(1)}
                            onHoverEnd={() => setHoveredStory(null)}
                        >
                            <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 w-[410px] h-[400px]">
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        scale: hoveredStory === 1 ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Image
                                        src={successStories.find(story => story.id === 1)?.image || ''}
                                        alt={successStories.find(story => story.id === 1)?.title || ''}
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </motion.div>

                                <motion.div
                                    className="absolute inset-0 bg-blue-500/40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: hoveredStory === 1 ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    {successStories.find(story => story.id === 1)?.logo && (
                                        <motion.div
                                            className="relative w-[256px] h-[186px]"
                                            animate={{
                                                scale: hoveredStory === 1 ? 1.1 : 1,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={successStories.find(story => story.id === 1)?.logo || ''}
                                                alt={`${successStories.find(story => story.id === 1)?.title || ''} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                            </div>
                        </motion.div>

                        {/* Center Card with Description */}
                        <motion.div
                            key={successStories.find(story => story.id === 2)?.id}
                            className="relative group cursor-pointer lg:order-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            onHoverStart={() => setHoveredStory(2)}
                            onHoverEnd={() => setHoveredStory(null)}
                        >
                            <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 w-[410px] h-[400px]">
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        scale: hoveredStory === 2 ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Image
                                        src={successStories.find(story => story.id === 2)?.image || ''}
                                        alt={successStories.find(story => story.id === 2)?.title || ''}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                <motion.div
                                    className="absolute inset-0 bg-blue-500/40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: hoveredStory === 2 ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    {successStories.find(story => story.id === 2)?.logo && (
                                        <motion.div
                                            className="relative w-[256px] h-[186px]"
                                            animate={{
                                                scale: hoveredStory === 2 ? 1.1 : 1,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={successStories.find(story => story.id === 2)?.logo}
                                                alt={`${successStories.find(story => story.id === 2)?.title} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                            </div>

                            {/* Description Box */}
                            <motion.div
                                className="mt-4 px-6 py-8 bg-[#FFFFFF0A] rounded-[16px] backdrop-blur-[10px] border-[1px] border-[#FFFFFF1A] w-[410px]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                            >
                                <h3 className="text-white text-[36px] font-bold mb-2">
                                    {successStories.find(story => story.id === 2)?.title}
                                </h3>
                                <p className="text-[#ECEEEE] text-[16px] leading-relaxed mb-4">
                                    {successStories.find(story => story.id === 2)?.description}
                                </p>
                                <button className="inline-flex items-center gap-2 text-[16px] text-[#25B8E4] font-semibold hover:gap-3 transition-all duration-300">
                                    View Full Case Study
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Right Card */}
                        <motion.div
                            key={successStories.find(story => story.id === 3)?.id}
                            className="relative group cursor-pointer lg:order-3"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            onHoverStart={() => setHoveredStory(3)}
                            onHoverEnd={() => setHoveredStory(null)}
                        >
                            <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 w-[410px] h-[400px]">
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        scale: hoveredStory === 3 ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Image
                                        src={successStories.find(story => story.id === 3)?.image}
                                        alt={successStories.find(story => story.id === 3)?.title}
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </motion.div>

                                <motion.div
                                    className="absolute inset-0 bg-blue-500/40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: hoveredStory === 3 ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    {successStories.find(story => story.id === 3)?.logo && (
                                        <motion.div
                                            className="relative w-[256px] h-[186px]"
                                            animate={{
                                                scale: hoveredStory === 3 ? 1.1 : 1,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={successStories.find(story => story.id === 3)?.logo}
                                                alt={`${successStories.find(story => story.id === 3)?.title} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}