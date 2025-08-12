"use client"
import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const isInView = useInView(footerRef, { once: true, margin: '-100px' });

    return (
        <footer
            ref={footerRef}
            className="text-white py-14"
            style={{
                background: "linear-gradient(175deg, #03080E 13%, #1C3E74 96.02%)"
            }}
        >
            <div className="px-[5%] pb-6">
                <div className="w-full">
                    <div className="flex items-start justify-between gap-16 ">
                        <motion.div
                            className="flex flex-col justify-between gap-22"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <motion.div
                                className=""
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            >
                                <Image src="/assets/logo.svg" alt="logo" width={150} height={100} className='w-[140px] h-fit object-contain' />
                            </motion.div>
                            <motion.div
                                className="flex  gap-6 items-center w-full   "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                <motion.a
                                    href="#"
                                    className="opacity-60"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image src={"/assets/icons/Facebook.svg"} alt="facebook" width={20} height={20} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="opacity-60"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image src={"/assets/icons/Linkedin.svg"} alt="facebook" width={20} height={20} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="opacity-60"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image src={"/assets/icons/Instagram.svg"} alt="facebook" width={20} height={20} />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            <motion.h3
                                className="font-bold text-[18px] mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            >
                                Services
                            </motion.h3>
                            <motion.ul
                                className="space-y-2 text-[#fff] text-[16px] font-normal  "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            >
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Managed Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Cybersecurity</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">AI & Automation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">IT Infrastructure</a></li>
                            </motion.ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        >
                            <motion.h3
                                className="font-bold text-[18px] mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            >
                                Company
                            </motion.h3>
                            <motion.ul
                                className="space-y-2 text-[#fff] text-[16px] font-normal "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            >
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Insights</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Contact</a></li>
                            </motion.ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                        >
                            <motion.h3
                                className="font-bold text-[18px] mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            >
                                Locations
                            </motion.h3>
                            <motion.ul
                                className="space-y-2 text-[#fff] text-[16px] font-normal "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                            >
                                <li className="hover:text-white transition-colors opacity-60">Riyadh, Saudi Arabia</li>
                                <li className="hover:text-white transition-colors opacity-60">Cairo, Egypt</li>
                                <li className="hover:text-white transition-colors opacity-60">Dubai, UAE</li>
                            </motion.ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        >
                            <motion.h3
                                className="font-bold text-[18px] mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                            >
                                Contact Us
                            </motion.h3>
                            <motion.div
                                className="space-y-2 text-[#fff] text-[16px] font-normal "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                            >
                                <div className="hover:text-white transition-colors opacity-60">+966 11 123 4567</div>
                                <div className="hover:text-white transition-colors opacity-60">info@barqsystems.com</div>
                                <div><a href="#" className="hover:text-white transition-colors opacity-60">Contact Form</a></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#333] mx-[5%]" />
            <motion.div
                className="px-[5%] py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
                <div className="flex w-full justify-between items-center">
                    <motion.div
                        className="text-[#fff] text-sm "
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    >
                        <p className='opacity-60'>
                            © 2024 BARQ Systems. All rights reserved.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex space-x-6 text-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                    >
                        <a href="#" className="text-[#fff] hover:text-white transition-colors opacity-60">Privacy Policy</a>
                        <a href="#" className="text-[#fff] hover:text-white transition-colors opacity-60">Terms of Service</a>
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer