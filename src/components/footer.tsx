"use client"
import React from 'react';
import Image from 'next/image';

const Footer = () => {

    return (
        <footer
            className="text-white py-14"
            style={{
                background: "linear-gradient(175deg, #03080E 13%, #1C3E74 96.02%)"
            }}
        >
            <div className="px-[5%] pb-6">
                <div className="w-full">
                    <div className="flex items-start justify-between gap-16 ">
                        <div className="flex flex-col justify-between gap-22">
                            <div className="">
                                <Image src="/assets/logo.svg" alt="logo" width={150} height={100} className='w-[140px] h-fit object-contain' />
                            </div>
                            <div className="flex  gap-6 items-center w-full   ">
                                <a
                                    href="#"
                                    className="opacity-60"
                                >
                                    <Image src={"/assets/icons/Facebook.svg"} alt="facebook" width={20} height={20} />
                                </a>
                                <a
                                    href="#"
                                    className="opacity-60"
                                >
                                    <Image src={"/assets/icons/Linkedin.svg"} alt="facebook" width={20} height={20} />
                                </a>
                                <a
                                    href="#"
                                    className="opacity-60"
                                >
                                    <Image src={"/assets/icons/Instagram.svg"} alt="facebook" width={20} height={20} />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">
                                Services
                            </h3>
                            <ul className="space-y-2 text-[#fff] text-[16px] font-normal  ">
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Managed Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Cybersecurity</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">AI & Automation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">IT Infrastructure</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">
                                Company
                            </h3>
                            <ul className="space-y-2 text-[#fff] text-[16px] font-normal ">
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Insights</a></li>
                                <li><a href="#" className="hover:text-white transition-colors opacity-60">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">
                                Locations
                            </h3>
                            <ul className="space-y-2 text-[#fff] text-[16px] font-normal ">
                                <li className="hover:text-white transition-colors opacity-60">Riyadh, Saudi Arabia</li>
                                <li className="hover:text-white transition-colors opacity-60">Cairo, Egypt</li>
                                <li className="hover:text-white transition-colors opacity-60">Dubai, UAE</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">
                                Contact Us
                            </h3>
                            <div className="space-y-2 text-[#fff] text-[16px] font-normal ">
                                <div className="hover:text-white transition-colors opacity-60">+966 11 123 4567</div>
                                <div className="hover:text-white transition-colors opacity-60">info@barqsystems.com</div>
                                <div><a href="#" className="hover:text-white transition-colors opacity-60">Contact Form</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#333] mx-[5%]" />
            <div className="px-[5%] pt-6">
                <div className="flex w-full justify-between items-center">
                    <div className="text-[#fff] text-sm ">
                        <p className='opacity-60'>
                            © 2024 BARQ Systems. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-[#fff] hover:text-white transition-colors opacity-60">Privacy Policy</a>
                        <a href="#" className="text-[#fff] hover:text-white transition-colors opacity-60">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer