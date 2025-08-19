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
            className="relative bg-black  pl-[5%] py-20 overflow-hidden min-h-[220vh] h-fit"
        >
            {/* Background Images Layering */}
            {/* Ellipse background in the middle */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
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
                transition={{ duration: 0.6, delay: 1.5 }}
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
                transition={{ duration: 0.6, delay: 1.3 }}
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
                            What We Do Best
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-white text-[48px] font-bold leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Our Core Solutions &<br />
                        Services
                    </motion.h2>

                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button className="inline-flex items-center gap-4 px-6 py-4 border-[2px] border-[#25B8E4] text-[#25B8E4] rounded-[8px] hover:bg-[#25B8E4] hover:text-white text-[16px] font-bold transition-all duration-300">
                            View All
                            <ArrowRight size={18} />
                        </button>
                    </motion.div>
                </div>

                {/* Carousel Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative "
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                        setApi={setApi}
                    >
                        <CarouselContent className="-ml-8 space-x-8">
                            {services.map((service, index) =>
                                <CarouselItem
                                    key={service.id}
                                    className="pl-8 md:basis-1/2 lg:basis-1/3 "
                                >
                                    <motion.div
                                        className="relative group cursor-pointer"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                                        onHoverStart={() => setHoveredItem(service.id)}
                                        onHoverEnd={() => setHoveredItem(null)}
                                    >
                                        <div className="relative h-[625px] xl:min-w-[454px] rounded-[16px] overflow-hidden">
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
                                                    className="object-cover"
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
                                                className="absolute inset-0 rounded-[24px] border-2 "
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
                            className="w-12 h-12 flex items-center justify-center rounded-full border hover:border-white/20 bg-transparent border-[#5DADE2] text-[#5DADE2] hover:bg-transparent transition-all duration-300"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            className="w-12 h-12 flex items-center justify-center rounded-full border hover:border-white/20 bg-transparent border-[#5DADE2] text-[#5DADE2] hover:bg-transparent transition-all duration-300"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>

            <SuccessStoriesSection />

        </section >
    );
}