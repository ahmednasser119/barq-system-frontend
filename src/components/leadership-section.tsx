'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function LeadershipSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section
            ref={containerRef}
            className="relative  bg-black px-[5%]"
        >
            <motion.div
                className="absolute top-0 left-0 z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Image
                    src="/assets/Isolation_Mode.svg"
                    alt="Decorative element"
                    width={152}
                    height={479}
                    className="w-[152px] h-[479px] object-contain"
                />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center w-full h-full z-10">
                <div className="relative w-full h-full ">
                    <Image
                        src="/assets/leadership_background.png"
                        alt="Leadership background"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="relative z-20">
                <motion.div
                    className="flex justify-center pt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <span className=" text-[24px] font-bold  tracking-wider"
                        style={{
                            background: 'linear-gradient(54deg, #60C1CA 15.02%, #25B8E4 82.83%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Leadership Insight
                    </span>
                </motion.div>
                <motion.h2
                    className="text-white text-[48px] font-bold leading-tight text-center mt-6 z-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    From Our Leadership
                </motion.h2>
            </div>
            <div className="relative z-20  py-14  flex items-center ">
                <div className=" w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div
                                className="relative w-full max-w-[618px] rounded-[24px] overflow-hidden"
                                style={{
                                    background: `url(/assets/leadership_image_background.jpg) lightgray 50% / cover no-repeat, url(/assets/leadership_image_background.jpg) lightgray 50% / cover no-repeat`,
                                    backgroundBlendMode: 'soft-light, normal'
                                }}
                            >
                                <div className="absolute inset-0 bg-[#FFFFFF08] backdrop-blur-[5px] rounded-[24px] border border-[#FFFFFF20]"></div>
                                <div className="relative p-8">
                                    <Image
                                        src="/assets/leadership.jpg"
                                        alt="Leadership"
                                        width={434}
                                        height={620}
                                        className="w-full h-auto rounded-[16px] object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <Image src="/assets/quote.svg" alt="quote" width={40} height={40} />
                                <blockquote className="text-[#FFF] text-[32px] font-light leading-12 pt-2 ">
                                    &quot;We partner with our customers to enable them to digitally transform their business.
                                    That keeps them ahead of the competition and improves their bottom lines.&quot;
                                </blockquote>
                            </motion.div>
                            <motion.div
                                className="space-y-4 pt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                <div className="text-white text-[18px]  font-bold">
                                    Mahmoud Soliman,
                                </div>
                                <div className="text-[#B2BABB] text-[18px] font-normal">
                                    President & CEO
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
