'use client';

import { Globe } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Navbar({ isHomePage }: { isHomePage?: boolean }) {
    const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
    const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
    const whoWeAreRef = useRef<HTMLDivElement>(null);
    const whatWeDoRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            // Check if click is outside who we are dropdown
            if (whoWeAreRef.current && !whoWeAreRef.current.contains(target)) {
                setIsWhoWeAreOpen(false);
            }

            // Check if click is outside what we do dropdown  
            if (whatWeDoRef.current && !whatWeDoRef.current.contains(target)) {
                setIsWhatWeDoOpen(false);
            }
        }

        // Use mousedown instead of click for better responsiveness
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const whoWeAreItems = [
        { label: 'About BARQ', href: '#about' },
        { label: 'Leadership', href: '#leadership' },
        { label: 'Awards & Accolades', href: '#awards' },
        { label: 'Sustainability', href: '/sustainability' },
        { label: 'Alliances', href: '#alliances' }
    ];

    const whatWeDoItems = [
        { label: 'AI Solutions', href: '#ai' },
        { label: 'Cybersecurity', href: '#cybersecurity' },
        { label: 'Managed Services', href: '#managed-services' }
    ];

    return (
        <motion.header
            className={`relative z-[100] flex items-center justify-between py-[30px] ${isHomePage ? 'mb-[100px]' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: isHomePage ? 4.2 : 0.2, ease: "easeOut" }}
        >
            {/* Logo */}
            <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
            </motion.div>

            {/* Navigation Menu */}
            <motion.nav
                className="hidden md:flex items-center space-x-3 text-white nav-text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
                {/* Who We Are Dropdown */}
                <div className="relative" ref={whoWeAreRef}>
                    <div
                        className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors px-5"
                        onClick={() => setIsWhoWeAreOpen(!isWhoWeAreOpen)}
                    >
                        <span>Who We Are</span>
                        <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: isWhoWeAreOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                    </div>

                    <AnimatePresence>
                        {isWhoWeAreOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-sm border border-gray-800/50 rounded-lg shadow-2xl overflow-hidden z-[9999]"
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="py-2">
                                    {whoWeAreItems.map((item, index) => {
                                        const handleItemClick = (e: React.MouseEvent) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsWhoWeAreOpen(false);

                                            // Handle navigation
                                            if (item.href.startsWith('/')) {
                                                window.location.href = item.href;
                                            } else {
                                                window.location.href = item.href;
                                            }
                                        };

                                        return (
                                            <motion.div
                                                key={item.label}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="relative"
                                            >
                                                <div
                                                    className="block px-6 py-3 text-white text-[16px] font-normal hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-200 border-b border-gray-800/30 last:border-b-0 cursor-pointer"
                                                    onClick={handleItemClick}
                                                    onMouseDown={(e) => e.stopPropagation()}
                                                >
                                                    <span className="text-sm font-light">{item.label}</span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* What We Do Dropdown */}
                <div className="relative" ref={whatWeDoRef}>
                    <div
                        className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors px-5"
                        onClick={() => setIsWhatWeDoOpen(!isWhatWeDoOpen)}
                    >
                        <span>What We Do</span>
                        <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ rotate: isWhatWeDoOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                    </div>

                    <AnimatePresence>
                        {isWhatWeDoOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-sm border border-gray-800/50 rounded-lg shadow-2xl overflow-hidden z-[9999]"
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="py-2">
                                    {whatWeDoItems.map((item, index) => {
                                        const handleItemClick = (e: React.MouseEvent) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setIsWhatWeDoOpen(false);

                                            // Handle navigation
                                            if (item.href.startsWith('/')) {
                                                window.location.href = item.href;
                                            } else {
                                                window.location.href = item.href;
                                            }
                                        };

                                        return (
                                            <motion.div
                                                key={item.label}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                className="relative"
                                            >
                                                <div
                                                    className="block px-6 py-3 text-white hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-200 border-b border-gray-800/30 last:border-b-0 cursor-pointer"
                                                    onClick={handleItemClick}
                                                    onMouseDown={(e) => e.stopPropagation()}
                                                >
                                                    <span className="text-sm font-light">{item.label}</span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <a href="#" className="hover:text-blue-300 transition-colors px-5">Insights</a>
                <a href="#" className="hover:text-blue-300 transition-colors px-5">Careers</a>
                <a href="#" className="hover:text-blue-300 transition-colors px-5">Contact Us</a>
            </motion.nav>

            {/* Language and Search */}
            <motion.div
                className="flex items-center space-x-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <div className="flex items-center space-x-2 text-white">
                    <Globe />
                    <span>EN</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <button className="text-white hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </motion.div>
        </motion.header>
    );
}
