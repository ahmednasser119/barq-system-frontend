'use client';

import { Globe } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.header
            className="relative z-10 flex items-center justify-between py-[30px] mb-[100px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors px-5">
                    <span>Who We Are</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-300 transition-colors px-5">
                    <span>What We Do</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
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
