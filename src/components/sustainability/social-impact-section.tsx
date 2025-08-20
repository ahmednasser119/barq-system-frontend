'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import EconomicSection from './economic-section';

const socialImpactAreas = [
    {
        id: 1,
        icon: '/assets/sustainability/icon-1.svg',
        title: 'Empowering Women in Tech',
        description: '',
        bgColor: 'from-[#FF6B6B] to-[#FF8E8E]',
        list: [
            'Increasing female representation',
            'Encouraging leadership roles',
            'Supporting work-life balance',
            'Challenging stereotypes'
        ],
        quote: 'There is no limit to what we, as women, can accomplish',
        quoteAuthor: 'Michelle Obama'
    },
    {
        id: 2,
        icon: '/assets/sustainability/icon-2.svg',
        title: 'Developing Youth Through Education',
        description: 'Through initiatives like BARQ Academy,',
        bgColor: 'from-[#4ECDC4] to-[#45B7B8]',
        list: [
            'Gain hands-on tech training',
            'Build soft skills and confidence',
            'Access career opportunities and mentoring'
        ],
    },
    {
        id: 3,
        icon: '/assets/sustainability/icon-3.svg',
        title: 'Promoting Employee',
        description: 'We prioritize mental and emotional health by:',
        bgColor: 'from-[#45B7D1] to-[#96CEB4]',
        list: ['Offering well-being programs and burnout prevention talks',
            "Fostering a culture of empathy and psychological safety"
        ]
    }
];

export default function SocialImpactSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section
            ref={containerRef}
            className="relative bg-black   pt-[120px]  overflow-hidden z-30"
        >
            <div className='px-[5%]'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    className="absolute top-[10%] right-0  bottom-0 left-[-10%]   z-25">
                    <div className="relative w-full h-full ">
                        <Image
                            src="/assets/sustainability/impact.svg"
                            alt="Background pattern"
                            width={820}
                            height={918}
                            className=" object-cover  h-[918px] w-[1020px] blur-[150px]"
                        />
                    </div>
                </motion.div>
                {/* Content Layer */}
                <div className="relative z-40">
                    {/* Header Section */}
                    <div className=" mb-10 flex flex-col">
                        <motion.div
                            className="inline-block mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
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
                                Social
                            </span>
                        </motion.div>
                        <motion.h2
                            className="text-white text-[54px] font-normal  leading-tight mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Creating Positive Social Impact
                        </motion.h2>
                        <motion.p
                            className="text-[#ECEEEE] text-[18px] font-normal leading-[27px] max-w-[828px] "
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            we believe progress should uplift everyone. We are committed to empowering people — from our workforce to the communities we serve — by fostering diversity & inclusion, safety, education, and opportunity through everything we do.
                        </motion.p>
                    </div>

                    {/* Impact Areas Grid */}
                    <div className="flex items-center gap-10 justify-center ">
                        {socialImpactAreas.map((area, index) => (
                            <motion.div
                                key={area.id}
                                className="group cursor-pointer transition-all duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                            >
                                <div
                                    className="relative w-[400px] min-h-[400px] px-6 py-10 transition-all duration-300"
                                    style={{
                                        borderRadius: "24px",
                                        border: "1px solid rgba(255, 255, 255, 0.16)",
                                        background: "rgba(255, 255, 255, 0.04)",
                                        backdropFilter: "blur(10px)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.border = "0.5px solid #60C1CA";
                                        e.currentTarget.style.boxShadow = "4px 8px 16px 0 rgba(189, 189, 189, 0.16)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "0.5px solid rgba(255, 255, 255, 0.16)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    {/* Content */}
                                    <div className="relative h-full flex flex-col">
                                        {/* Icon */}
                                        <div className="mb-4">
                                            <div className="w-[64px] h-[64px] rounded-full relative overflow-hidden">
                                                <Image
                                                    src={area.icon}
                                                    alt={area.title}
                                                    width={64}
                                                    height={64}
                                                    className="min-w-[64px] min-h-[64px] object-contain w-[64px] h-[64px] transition-all duration-300 group-hover:opacity-0"
                                                />
                                                {/* Gradient overlay icon for hover effect */}
                                                <div
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                                                    style={{
                                                        background: "linear-gradient(180deg, #FFF 0%, #80CDD5 100%)",
                                                        mask: `url(${area.icon}) no-repeat center/contain`,
                                                        WebkitMask: `url(${area.icon}) no-repeat center/contain`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-white text-[24px] font-bold  leading-[33.8px] mb-2">
                                            {area.title}
                                        </h3>

                                        <p className="text-[#D9DDDD] text-[18px] leading-[27px]">
                                            {area.description}
                                            <ul className='list-disc px-5'>

                                                {area.list.map((item, index) => (
                                                    <li key={index} className="text-[#D9DDDD] text-[18px] leading-[27px]">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            {area.quote && (
                                                <div className="text-[#D9DDDD] text-[18px]  mt-8 italic font-thin leading-[150%]">
                                                    <span className=" mx-[1px] text-[#25B8E4] text-[18px] ">
                                                        “
                                                    </span>
                                                    {area.quote}
                                                    <span className=" mx-[1px] text-[#25B8E4] text-[18px] ">
                                                        ”
                                                    </span>
                                                    <span className="text-[#D9DDDD] text-[18px]  ">
                                                        —
                                                        {area.quoteAuthor}
                                                    </span>
                                                </div>
                                            )}
                                        </p>
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    {/* <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#25B8E4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" /> */}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
            <EconomicSection />
        </section>
    );
}
