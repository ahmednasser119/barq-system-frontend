'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import InsightsNewsSection from './insights-news-section';

const AwardsSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const awards = [
        {
            id: 1,
            image: '/assets/awards/awards_1.jpg',
            title: 'Modon Excellence Award',
            date: '2024',
            description: 'Excellence Award for a 9-year national partnership'
        },
        {
            id: 2,
            image: '/assets/awards/awards_3.png',
            title: 'AI-Dabbagh Leadership Summit Awards',
            date: '2023',
            description: 'Leadership Excellence in Technology Innovation'
        },
        {
            id: 3,
            image: '/assets/awards/awards_2.png',
            title: 'North Africa Service Provider Partner',
            date: '2022',
            description: 'Outstanding Service Provider Partnership'
        }
    ];

    return (
        <section ref={containerRef} className=" z-20 ">
            <div className="w-full px-[5%] py-20 ">
                <div className="absolute inset-0 flex items-center justify-center w-full h-full z-20 overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/insights/insights_background.png"
                            alt="Insights background"
                            width={820}
                            height={918}
                            className="object-cover  absolute top-[40%] right-[-40%] w-full blur-[200px] "
                        />
                        {/* Top-right gradient overlay */}
                        <div className="absolute top-[-20%] right-0 w-full h-full bg-gradient-to-bl from-black via-transparent to-transparent"></div>
                    </div>
                </div>
                {/* Main Layout */}
                <div className="grid lg:grid-cols-2 gap-8 items-start w-full relative min-h-[100vh] ">
                    {/* Left Side - Charts */}
                    <div className="mb-16 mt-8 w-full sticky top-8  ">
                        <motion.h3
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className=" text-[24px] font-bold mb-4 "
                                style={{
                                    background: 'linear-gradient(54deg, #60C1CA 15.02%, #25B8E4 82.83%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                Recognized for Excellence
                            </span>
                        </motion.h3>
                        <motion.h2
                            className="text-white text-[48px] font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Awards & Recognition
                        </motion.h2>
                        <motion.p
                            className="text-[#fff] text-[24px]  max-w-[620px] font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            50+ Industry Awards Earned Including Modon Excellence Award for a 9-year national partnership.
                        </motion.p>
                        <motion.div
                            className="relative order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="relative w-full max-w-[500px]">
                                <div
                                    className="w-full "
                                    style={{
                                        background: "linear-gradient(90deg, black 0%, #050f23 10%, #14327e 30%, #1e468b 50% , #2f6d96 70%, #134A83 100%)",
                                        maskImage: `url(/assets/awards/awards_left.svg)`,
                                        WebkitMaskImage: `url(/assets/awards/awards_left.svg)`,
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskPosition: 'left center',
                                        WebkitMaskPosition: 'left center',
                                        height: '130px'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Award Images Stack */}
                    <div className="relative flex justify-end gap-4 z-30">
                        <div className="w-full flex flex-col gap-10 max-w-[620px]">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={award.id}
                                    className={`relative group  h-[350px] w-[310px] ${index == 1 ? 'self-end' : 'self-start'}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                                >
                                    <div className="relative overflow-hidden rounded-lg border w-full h-full border-gray-700/30">
                                        {/* Award Image */}
                                        <div className="relative w-[310px] h-[350px]">
                                            <Image
                                                src={award.image}
                                                alt={award.title}
                                                width={310}
                                                height={350}
                                                className="object-cover w-[310px] h-[350px] transition-transform duration-300 group-hover:scale-105"
                                            />

                                            {/* Gradient Overlay */}
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.9) 100%)'
                                                }}
                                            />

                                            {/* Award Content */}
                                            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-b from-black/0  to-black/90 p-8 ">
                                                <div className="rounded text-[#25B8E4] text-[16px]  font-light mb-2">
                                                    {award.date}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-white text-[24px] font-bold flex-1 leading-tight">
                                                        {award.title}
                                                    </h3>
                                                    {/* Date Badge */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Gradient Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Left side gradient */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-1/2"
                    style={{
                        // background: 'radial-gradient(ellipse at center left, rgba(73, 193, 236, 0.1) 0%, transparent 70%)'
                    }}
                />

                {/* Right side gradient */}
                {/* <div
                    className="absolute right-0 top-0 bottom-0 w-1/2 "
                    style={{
                        background: 'radial-gradient(ellipse at center right, rgba(49, 140, 204, 0.1) 0%, transparent 70%)'
                    }}
                /> */}
            </div>
            <InsightsNewsSection />
        </section>
    );
};

export default AwardsSection;