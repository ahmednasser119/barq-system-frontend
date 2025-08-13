'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }: CounterProps) {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(counterRef, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const startCount = 0;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / (duration * 1000), 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.floor(startCount + (end - startCount) * easeOut);
                setCount(currentCount);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={counterRef}>
            {prefix}{count}{suffix}
        </span>
    );
}

export default function WhoAreWeSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const stats = [
        { value: 4, label: 'Regional Offices', prefix: '', suffix: '' },
        { value: 400, label: 'Employees', prefix: '+', suffix: '' },
        { value: 1500, label: 'Customers Across MEA', prefix: '+', suffix: '' },
        { value: 100, label: 'Vendors & Partners', prefix: '+', suffix: '' },
        { value: 50, label: 'Awards', prefix: '+', suffix: '' }
    ];

    return (
        <section
            ref={containerRef}
            className="px-[5%] pt-16 pb-32 bg-black "
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-[55%] right-0 bottom-0 left-0 flex items-center justify-center z-10">
                <div className="relative w-full h-full  ">
                    <Image
                        src="/assets/who_are_we_background.png"
                        alt="Background ellipse"
                        width={1660}
                        height={620}
                        className="object-contain  rounded-4xl"
                    />
                </div>
            </motion.div>

            <div className="">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-shrink-0 lg:w-auto w-full">
                        <div className="flex items-start gap-6">
                            <motion.div
                                className="flex flex-col gap-2 mt-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Image src="/assets/who-we-are.svg" alt="line" width={200} height={200} className='w-[57px] h-[181px] object-contain' />
                            </motion.div>
                            <motion.h2
                                className="text-blue-400 text-2xl font-semibold mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Who Are We?
                            </motion.h2>
                        </div>
                    </div>
                    <div className="flex-1">
                        <motion.p
                            className="text-[#EDEDED] text-[32px] leading-relaxed mb-[86px] "
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            At BARQ Systems, we are more than just a technology solutions provider—we
                            are a catalyst for digital transformation across the Middle East. With decades of
                            experience in IT integration and enterprise services, we empower organizations
                            to evolve, innovate, and lead through next-generation infrastructure,
                            cybersecurity, automation, and AI-powered solutions.
                        </motion.p>
                        <div className="flex items-center justify-between w-full">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                                >
                                    <div className="text-white text-[48px] mb-3">
                                        <AnimatedCounter
                                            end={stat.value}
                                            prefix={stat.prefix}
                                            suffix={stat.suffix}
                                            duration={2.5}
                                        />
                                    </div>
                                    <div className="text-[#C9C9C9] text-[16px] leading-tight">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
