'use client';

import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './navbar';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden px-[5%]"
            style={{
                background: "linear-gradient(180deg, rgba(0, 76, 164, 0.00) 23.25%, #000 82.5%), linear-gradient(0deg, rgba(0, 123, 255, 0.15) 0%, transparent 30%)"
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover rotate-180"
            >
                <source src="/assets/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/10" />
            <Navbar />
            <div className="relative z-10 flex items-center">
                <div className="max-w-[608px]">
                    <motion.div
                        className="flex items-center mb-6 space-x-2 rounded-[50px] w-fit py-1 px-3 border-[#ffffff1a] border-[1px] bg-[#FFFFFF0A] backdrop-blur-[1px]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                        <div className='p-2 w-10 h-9 rounded-full flex items-center justify-center bg-[#ffffff1a] border-[#ffffff1a] border-[1px]'>
                            <Shield className='w-4 h-4 text-white' />
                        </div>
                        <span className="text-white/80 text-sm hero-text">Pioneer in Enterprise Security</span>
                    </motion.div>
                    <motion.h1
                        className="text-white text-[56px] hero-heading leading-tight mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    >
                        Your Technology
                        Backbone for a Secure
                        Digital Future
                    </motion.h1>
                    <motion.p
                        className="text-white text-[18px] mb-10 leading-relaxed hero-text pr-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    >
                        Empowering enterprises across the MENA region with end-to-end IT
                        services — from infrastructure and automation to seamless connectivity
                        and cybersecurity excellence.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    >
                        <Button
                            className="text-white px-6 py-4 text-[18px] h-[56px] transition-all duration-300 hover:scale-105 hero-text rounded-[12px]"
                            style={{
                                background: "linear-gradient(95deg, var(--Secondary-Blue-100, #318CCC) 13.23%, #0040C3 81.63%)",
                                boxShadow: "4px 8px 24px 0 rgba(36, 107, 253, 0.25)"
                            }}
                        >
                            Explore Our Solutions
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
