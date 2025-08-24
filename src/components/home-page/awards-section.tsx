'use client';
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import InsightsNewsSection from './insights-news-section';

const AwardsSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    // Scroll-based animation for the circular overlay
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to overlay opacity (0 to 0.6)
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.55, 0.7, 0.9, 1], [0, 0, 1, 1, 1, 1]);

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
            date: '2014',
            description: 'Leadership Excellence in Technology Innovation'
        },
        {
            id: 3,
            image: '/assets/awards/awards_2.png',
            title: 'North Africa Service Provider Partner',
            date: '2013',
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
                            className="object-cover  absolute top-[50%] right-[-40%] w-full blur-[200px] "
                        />
                        {/* Top-right gradient overlay */}
                        <div className="absolute top-[-20%] right-0 w-full h-full bg-gradient-to-bl from-black via-transparent to-transparent"></div>
                    </div>
                </div>
                {/* Main Layout */}
                <div className="flex items-start gap-8  w-full relative min-h-[100vh] ">
                    {/* Left Side - Charts */}
                    <div className="mb-16 w-1/2 mt-8  sticky top-8  ">
                        <motion.h3
                            className="mb-6 z-30 "
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className=" text-[24px] font-bold mb-4 "
                                style={{
                                    background: 'linear-gradient(54deg, #60C1CA 15.02%, #25B8E4 82.83%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    zIndex: 30
                                }}
                            >
                                Recognized for Excellence
                            </span>
                        </motion.h3>
                        <motion.h2
                            className="text-white text-[48px]  z-30 font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Awards & Recognition
                        </motion.h2>
                        <motion.p
                            className="text-[#fff] text-[24px] z-50  w-full font-light"
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
                            <div className="relative w-full min-w-[500px] h-[126px] mt-6">
                                {/* Circular scroll-based overlay */}
                                <motion.div
                                    className="absolute  top-0 right-[20%] z-20 w-[700px] h-[120px]"
                                    style={{
                                        backgroundColor: 'black',
                                        opacity: overlayOpacity,
                                        transform: "scale(1.6)"
                                    }}
                                />
                                {/* SVG gradient element */}
                                <div
                                    className="relative w-full h-full z-10"
                                    style={{
                                        background: "linear-gradient(90deg, black 0%, #031228 5%, #0a3e93 20%, #1582a8  60%, #1cabc6 70%, #80CDD5 95%)",
                                        WebkitMask: "url(/assets/awards/awards_left.svg) no-repeat right center/contain",
                                        mask: "url(/assets/awards/awards_left.svg) no-repeat right center/contain",
                                        height: '126px',
                                        width: '100%'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Award Images Stack */}
                    <div className="relative  w-1/2 flex justify-end gap-4 z-30 max-w-[620px]">
                        <div className=" flex flex-col gap-10 w-full  justify-start items-start">
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
                                            {/* <Image
                                                src={award.image}
                                                alt={award.title}
                                                width={310}
                                                height={350}
                                                className="object-cover relative bottom-1 w-[310px] h-[350px] transition-transform duration-300 group-hover:scale-105"
                                            /> */}

                                            {/* Gradient Overlay */}
                                            <div
                                                className="absolute   top-[-2px] left-0 right-0 bottom-0"
                                                style={{
                                                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.87%, #000 90%), url(${award.image}) lightgray -53.13px -50.453px / 179.4% 106.59% no-repeat`,
                                                    backgroundSize: 'cover',
                                                    backgroundPositionX: index == 0 ? '22%' : 'center',
                                                    backgroundPositionY: index == 0 ? '-45px' : 'center',
                                                    aspectRatio: index == 0 ? '1/1.28' : '1/1',
                                                    backgroundRepeat: 'no-repeat'
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