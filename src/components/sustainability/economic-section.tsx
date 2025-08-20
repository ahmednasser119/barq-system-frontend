'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import EnvironmentalSection from './environmental-section';

export default function EconomicSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section
            ref={containerRef}
            className="relative bg-black   pt-44 pb-36 z-20"
        >
            <div className='px-[5%]'>
                {/* Background - Same as Leadership Section */}
                <motion.div
                    className="absolute top-[18%] bottom-0 left-0 right-0 z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="relative w-[152px] h-[479px]">
                        {/* Background gradient layer */}
                        <div
                            className="absolute inset-0 w-[152px] h-[479px]"
                            style={{
                                background: "linear-gradient(90deg, #A2E9FF 0%, #0082A9 60% , #031b57 100%)",
                                WebkitMask: "url(/assets/Isolation_Mode_blend.svg) no-repeat center/contain",
                                mask: "url(/assets/Isolation_Mode_blend.svg) no-repeat center/contain"
                            }}
                        />
                        {/* SVG with mix-blend-mode */}
                        <Image
                            src="/assets/Isolation_Mode_blend.svg"
                            alt="Decorative element"
                            width={152}
                            height={479}
                            className="relative w-[152px] h-[479px] object-contain"
                            style={{
                                mixBlendMode: "multiply"
                            }}
                        />
                    </div>
                </motion.div>
                <div className="absolute top-[-30%]  bottom-0 left-[30%] right-0 flex items-center justify-center w-full z-20 ">
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/sustainability/economics-background.svg"
                            alt="Economic background"
                            fill
                            className="object-cover blur-[200px]  w-[820px] h-[918px]"
                        />
                    </div>
                </div>

                <div className="relative z-20">
                    {/* Header */}
                    <motion.div
                        className="text-center flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
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
                            Economic
                        </span>

                        <h2 className="text-white text-[56px] mt-6 font-normal leading-[61px]">
                            Digital Resilience for Growth
                        </h2>
                        <p className="text-[#ECEEEE]  mt-4 text-[18px] font-normal max-w-[876px] text-center ">
                            We believe that digital resilience is the foundation for long-term economic growth. Our approach focuses on delivering technology solutions that empower businesses, enable smarter operations, and support economic development. We align our efforts with global sustainability goals to ensure that our impact is both measurable and meaningful.
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <div className="flex items-center gap-12 justify-center mt-6">
                        <motion.div
                            className="relative "
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >

                            <div className="relative   rounded-[24px] overflow-hidden  max-w-[1280] max-h-[616px] ">
                                <div className="absolute inset-0 bg-[#FFFFFF08] backdrop-blur-[5px]   rounded-[24px] border border-[#FFFFFF20]"></div>
                                <div className="relative p-6 ">
                                    <Image
                                        src="/assets/sustainability/economic.png"
                                        alt="Sustainability commitment"
                                        height={552}
                                        width={1232}
                                        className=" object-contain  w-full h-full "
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <EnvironmentalSection />
        </section>
    );
}
