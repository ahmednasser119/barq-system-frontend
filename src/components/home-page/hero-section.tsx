'use client';

import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './navbar';
import Image from 'next/image';
import WhoAreWeSection from './who-are-we-section';

export default function HeroSection() {
    const [isLoading, setIsLoading] = useState(true);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const maxTimer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowContent(true);
            }, 300);
        }, 4000);

        if (videoLoaded) {
            clearTimeout(maxTimer);
            const quickTimer = setTimeout(() => {
                setIsLoading(false);
                setTimeout(() => {
                    setShowContent(true);
                }, 300);
            }, 500);

            return () => {
                clearTimeout(maxTimer);
                clearTimeout(quickTimer);
            };
        }

        return () => clearTimeout(maxTimer);
    }, [videoLoaded]);

    const handleVideoLoad = () => {
        console.log('Video loaded successfully');
        setVideoLoaded(true);
    };

    const handleVideoError = () => {
        console.log('Video failed to load');
        // Video error - no need for additional delay, max timer will handle it
    };

    return (
        <>
            {/* Loading Screen */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="fixed inset-0 z-30 flex items-center justify-center bg-black"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col items-center space-y-6">
                            {/* Animated Logo/Spinner */}
                            <motion.div
                                className="w-16 h-16 border-4 border-[#25B8E4]/20 border-t-[#25B8E4] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Loading Text */}
                            <                                motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
                            </motion.div>

                            {/* Video Loading Status */}
                            {/* <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="flex items-center space-x-2">
                                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${videoLoaded ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'
                                        }`} />
                                    <span className="text-white/40 text-xs">
                                        {videoLoaded ? 'Video loaded successfully' : 'Loading video content...'}
                                    </span>
                                </div>
                            </motion.div> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="relative min-h-screen 2xl:h-[955px] w-full overflow-auto px-[5%]" >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-screen w-full object-cover rotate-180"
                    onLoadedData={handleVideoLoad}
                    onCanPlayThrough={handleVideoLoad}
                    onError={handleVideoError}
                    preload="auto"
                >
                    <source src="/assets/bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Gradient overlay with mix-blend-mode */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(180deg, #004ca4 23.25%, #000 82.5% )",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        mixBlendMode: "overlay"
                    }}
                />
                <div className="absolute inset-0 bg-black/10" />
                <Navbar />

                {/* Hero Content - Only show after video loads */}
                <AnimatePresence>
                    {showContent && (
                        <motion.div
                            className="relative z-[1] flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <div className="max-w-[608px]">
                                <                                motion.div
                                    className="flex items-center mb-6 space-x-2 rounded-[50px] w-fit py-1 px-3 border-[#ffffff1a] border-[1px] bg-[#FFFFFF0A] backdrop-blur-[1px]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                >
                                    <div className='p-2 w-10 h-9 rounded-full flex items-center justify-center bg-[#ffffff1a] border-[#ffffff1a] border-[1px]'>
                                        <Shield className='w-4 h-4 text-white' />
                                    </div>
                                    <span className="text-white/80 text-sm hero-text">Pioneer in Enterprise Security</span>
                                </motion.div>
                                <                                motion.h1
                                    className="text-white text-[56px] hero-heading leading-tight mb-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                                >
                                    Your Technology
                                    Backbone for a Secure
                                    Digital Future
                                </motion.h1>
                                <                                motion.p
                                    className="text-white text-[18px] mb-10 leading-relaxed hero-text pr-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                >
                                    Empowering enterprises across the MENA region with end-to-end IT
                                    services — from infrastructure and automation to seamless connectivity
                                    and cybersecurity excellence.
                                </motion.p>
                                <                                motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                                >
                                    <Button
                                        className="text-white  flex items-center justify-center gap-[10px] text-[18px] h-[56px] font-normal transition-all duration-300 hover:scale-105 hero-text rounded-[12px]"
                                        style={{
                                            background: "linear-gradient(95deg, #318CCC 13.23%, #0040C3 81.63%)",
                                            boxShadow: "4px 8px 24px 0 rgba(36, 107, 253, 0.25)",
                                            padding: "16px 24px"
                                        }}
                                    >
                                        Explore Our Solutions
                                        <Image src="/assets/chevron-right.svg" alt="arrow-right" width={24} height={24} />
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            <WhoAreWeSection />
        </>
    );
}
