'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import SuccessStoriesSection from './success-stories-section';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceItem {
    id: number;
    title: string;
    image: string;
    description: string;
}

const services: ServiceItem[] = [
    {
        id: 1,
        title: 'Managed Services',
        image: '/assets/what_we_do_section/managed_services.jpg',
        description: 'Comprehensive IT infrastructure management and support services to optimize your business operations.'
    },
    {
        id: 2,
        title: 'Cybersecurity',
        image: '/assets/what_we_do_section/cybersecurity.jpg',
        description: 'End-to-end protection frameworks that secure your systems and ensure compliance.'
    },
    {
        id: 3,
        title: 'AI & Automation',
        image: '/assets/what_we_do_section/ai.jpg',
        description: 'Advanced artificial intelligence and automation solutions to transform your business processes.'
    },
    {
        id: 4,
        title: 'AI & Automation',
        image: '/assets/what_we_do_section/ai.jpg',
        description: 'Advanced artificial intelligence and automation solutions to transform your business processes.'
    }
];

export default function WhatWeDoSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section
            ref={containerRef}
            className="relative bg-black pl-[5%] lg:pl-[5%] md:pl-[4%] sm:pl-[3%] py-20 lg:py-20 md:py-16 sm:py-12 overflow-hidden min-h-[220vh] lg:min-h-[220vh] md:min-h-[180vh] sm:min-h-[120vh] h-fit"
        >
            {/* Background Images Layering */}
            {/* Ellipse background in the middle */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute top-[-40%] right-0 bottom-0 left-0 flex items-center justify-center z-10 ">
                <div className="relative w-full h-full  ">
                    <Image
                        src="/assets/what_we_do_section/Ellipse_what_we_do.png"
                        alt="Background ellipse"
                        fill
                        className="object-contain  rounded-4xl"
                    />
                </div>
            </motion.div>

            {/* right background starting from middle to right edge */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="absolute top-0 right-0  bottom-[0%] left-[20%] z-5">
                <div className="relative w-full h-full">
                    <Image
                        src="/assets/what_we_do_section/what_we_do_left_background.png"
                        alt="Left background"
                        fill
                        className="object-cover object-left blur-[50px]"
                    />
                </div>
            </motion.div> */}

            {/* Top background overlay */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2.1 }}
                className="absolute top-[35%] right-0  bottom-[-10%] left-[5%] z-5">
                <div className="relative w-full h-full ">
                    <Image
                        src="/assets/what_we_do_section/what_we_do_background.png"
                        alt="Background pattern"
                        fill
                        className="h-full max-h-[833px] object-cover"
                    />
                </div>
            </motion.div>

            {/* left background */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="absolute top-0 right-[35%] rotate-180  bottom-[-10%] left-0 z-5">
                <div className="relative w-full h-full">
                    <Image
                        src="/assets/what_we_do_section/what_we_do_left_background.png"
                        alt="Left background"
                        fill
                        className="object-cover object-left blur-[50px]"
                    />
                </div>
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-20">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.div
                        className="inline-block mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <span
                            className="text-[24px] lg:text-[24px] md:text-[20px] sm:text-[18px] font-bold tracking-wider"
                            style={{
                                background: 'linear-gradient(54deg, #60C1CA 15.02%, #25B8E4 82.83%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            What We Do Best
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-white text-[48px] lg:text-[48px] md:text-[40px] sm:text-[32px] font-bold leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        Our Core Solutions &<br />
                        Services
                    </motion.h2>

                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <button className="inline-flex items-center gap-4 px-6 py-4 border-[2px] border-[#25B8E4] text-[#25B8E4] rounded-[8px] hover:bg-[#25B8E4] hover:text-white text-[16px] font-bold transition-all duration-300 group">
                            View All
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300">
                                <path d="M6.07031 1.08203L6.67188 0.480469C6.94531 0.234375 7.35547 0.234375 7.60156 0.480469L12.9336 5.78516C13.1797 6.05859 13.1797 6.46875 12.9336 6.71484L7.60156 12.0469C7.35547 12.293 6.94531 12.293 6.67188 12.0469L6.07031 11.4453C5.82422 11.1719 5.82422 10.7617 6.07031 10.4883L9.37891 7.34375H1.53125C1.14844 7.34375 0.875 7.07031 0.875 6.6875V5.8125C0.875 5.45703 1.14844 5.15625 1.53125 5.15625H9.37891L6.07031 2.03906C5.82422 1.76562 5.79688 1.35547 6.07031 1.08203Z" fill="currentColor" className="fill-[#25B8E4] group-hover:fill-white transition-all duration-300" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

                {/* Carousel Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="relative "
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                        setApi={setApi}
                    >
                        <CarouselContent className=" ml-0 space-x-6  ">
                            {services.map((service, index) =>
                                <CarouselItem
                                    key={service.id}
                                    className="md:basis-1/2 lg:basis-1/3 "
                                >
                                    <motion.div
                                        className="relative group cursor-pointer"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                                        onHoverStart={() => setHoveredItem(service.id)}
                                        onHoverEnd={() => setHoveredItem(null)}
                                    >
                                        <div className="relative h-[625px] xl:min-w-[454px] rounded-[24px] overflow-hidden">
                                            {/* Service Image */}
                                            <motion.div
                                                className="absolute inset-0"
                                                animate={{
                                                    scale: hoveredItem === service.id ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.6, ease: "easeOut" }}
                                            >
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-fill"
                                                />
                                                {/* Gradient overlay on top of the image */}
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.80) 5.1%, rgba(0, 0, 0, 0.00) 40%)"
                                                    }}
                                                />
                                            </motion.div>
                                            {/* Solution Background Image Overlay - Only on hover */}
                                            <motion.div
                                                className="absolute inset-0 mix-blend-color"
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: hoveredItem === service.id ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                                style={{
                                                    backgroundImage: 'url(/assets/solution-background-image.jpg)',
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundBlendMode: 'soft-light, normal'
                                                }}
                                            />
                                            {/* Dark Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

                                            {/* Content Overlay - Top positioned */}
                                            <div className="absolute inset-0 p-8 flex flex-col justify-start">
                                                <motion.h3
                                                    className="text-white text-[28px] font-bold mb-4"
                                                    initial={{ y: -20, opacity: 0.8 }}
                                                    animate={{
                                                        y: 0,
                                                        opacity: 1
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {service.title}
                                                </motion.h3>

                                                {/* Hover Content */}
                                                <motion.div
                                                    initial={{ y: -30, opacity: 0 }}
                                                    animate={{
                                                        y: hoveredItem === service.id ? 0 : -30,
                                                        opacity: hoveredItem === service.id ? 1 : 0
                                                    }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                    className="space-y-4"
                                                >
                                                    <p className="text-[#fff] text-[16px] leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                    <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-300">
                                                        View Details
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </motion.div>
                                            </div>

                                            {/* Hover Border Effect */}
                                            <motion.div
                                                className="absolute inset-0 rounded-[24px] "
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: hoveredItem === service.id ? 1 : 0
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        {/* Custom Navigation Arrows */}
                        {/* <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-transparent text-white hover:border-[#5DADE2] hover:text-[#5DADE2] hover:bg-transparent" /> */}
                        {/* <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-transparent text-white hover:border-[#5DADE2] hover:text-[#5DADE2] hover:bg-transparent" /> */}
                    </Carousel>

                    {/* Bottom Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={() => api?.scrollPrev()}
                            className="w-[58px] h-14   flex items-center justify-center rounded-full border-[3px] bg-transparent border-[#5DADE2] text-[#5DADE2] hover:bg-transparent transition-all duration-300"
                        >
                            <Image src="/assets/arrow-left.png" alt="arrow-left" width={14} height={18} className='hover:fill-white' />

                            {/* <Image src="/assets/icon-left.svg" alt="arrow-right" width={14} height={18} className='  w-[14px] h-[18px] hover:fill-white' /> */}
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            className="w-[58px] h-14   flex items-center justify-center rounded-full border-[3px] bg-transparent border-[#5DADE2] text-[#5DADE2] hover:bg-transparent transition-all duration-300"
                        >
                            <Image src="/assets/arrow-right.png" alt="arrow-right" width={14} height={18} className='hover:fill-white' />
                        </button>
                    </div>
                </motion.div>
            </div>

            <SuccessStoriesSection />

        </section >
    );
}