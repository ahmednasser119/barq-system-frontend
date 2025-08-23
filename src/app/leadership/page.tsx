'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Navbar from '@/components/home-page/navbar';
import MemberBioModal from '@/components/leadership/member-bio-modal';
import Footer from '@/components/footer';
import { leadershipTeam, executiveTeam, allTeamMembers, TeamMember } from '@/data/leadership';

export default function LeadershipPage() {
    const containerRef = useRef<HTMLElement>(null);
    const leadershipRef = useRef<HTMLElement>(null);
    const executiveRef = useRef<HTMLElement>(null);

    const isInView = useInView(containerRef, { once: true, margin: '-100px' });
    const isLeadershipInView = useInView(leadershipRef, { once: true, margin: '-100px' });
    const isExecutiveInView = useInView(executiveRef, { once: true, margin: '-100px' });

    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
    const [currentTeamType, setCurrentTeamType] = useState<'leadership' | 'executive'>('leadership');

    const openModal = (member: TeamMember) => {
        // Determine which team this member belongs to
        const isLeadershipMember = leadershipTeam.some(m => m.id === member.id);
        const currentTeam = isLeadershipMember ? leadershipTeam : executiveTeam;
        const teamType = isLeadershipMember ? 'leadership' : 'executive';

        const memberIndex = currentTeam.findIndex(m => m.id === member.id);
        setCurrentMemberIndex(memberIndex);
        setSelectedMember(member);
        setCurrentTeamType(teamType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    const navigateToNext = () => {
        const currentTeam = currentTeamType === 'leadership' ? leadershipTeam : executiveTeam;
        const nextIndex = (currentMemberIndex + 1) % currentTeam.length;
        setCurrentMemberIndex(nextIndex);
        setSelectedMember(currentTeam[nextIndex]);
    };

    const navigateToPrevious = () => {
        const currentTeam = currentTeamType === 'leadership' ? leadershipTeam : executiveTeam;
        const prevIndex = currentMemberIndex === 0 ? currentTeam.length - 1 : currentMemberIndex - 1;
        setCurrentMemberIndex(prevIndex);
        setSelectedMember(currentTeam[prevIndex]);
    };

    const selectMember = (index: number) => {
        const currentTeam = currentTeamType === 'leadership' ? leadershipTeam : executiveTeam;
        setCurrentMemberIndex(index);
        setSelectedMember(currentTeam[index]);
    };

    const memberCardStyles = {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60%, #000 100%), rgba(255, 255, 255, 0.04)`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.10)',
        borderRadius: '12px'
    };

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section
                ref={containerRef}
                className="relative bg-black px-[8%] overflow-hidden h-[2003px]"
            >
                {/* Navbar */}
                <div className="relative z-30">
                    <Navbar isHomePage={false} />
                </div>

                {/* Background Images - Same as Sustainability */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="absolute top-[-0%] right-0 bottom-0 left-[0%] z-5"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/leadership/leadership-page.svg"
                            alt="Background pattern"
                            width={1400}
                            height={1600}
                            className="object-cover h-[1600px] w-full opacity-50 "
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute top-[-80%] left-0 bottom-0 right-[-100%] z-5"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/sustainability/Group 1171274894.svg"
                            alt="Left background"
                            fill
                            className="object-cover object-left blur-[200px] opacity-90"
                        />
                    </div>
                </motion.div>

                {/* Content Layer */}
                <div className="relative z-20 mt-[135px]">
                    {/* Leadership Team Section */}
                    <div
                        ref={leadershipRef as React.RefObject<HTMLDivElement>}
                        className="relative "
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className=""
                        >
                            <h2 className="text-white text-[48px] font-bold  mb-6 max-w-[450px] leading-[57.6px]">
                                Meet Our Leadership Team
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className="text-[#ECEEEE] text-[16px] font-normal max-w-[520px] mb-8"
                        >
                            Our leadership team brings together diverse experience and a shared commitment to delivering world-class solutions, building strong partnerships, and empowering our people
                        </motion.p>

                        <div className="flex justify-center gap-6 mb-20">
                            {leadershipTeam.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="cursor-pointer group"
                                    onClick={() => openModal(member)}
                                >
                                    <div
                                        className="w-[410px] h-[492px] py-8 px-4 flex flex-col relative overflow-hidden transition-transform duration-300"
                                        style={memberCardStyles}
                                    >
                                        {/* Image Container - Takes up most of the space */}
                                        <div className="flex-1 flex items-end justify-center   w-full h-[300px] relative">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={580}
                                                height={535}
                                                className={`h-full 
                                                    ${member.id === "ahmed-alyamani"
                                                        ? "w-full object-cover object-left-top pl-4"
                                                        : member.id === "mohamed-jazeel"
                                                            ? "w-full object-contain"
                                                            : "w-full object-cover"
                                                    }`}
                                            />
                                        </div>
                                        {/* Text Container - Fixed at bottom */}
                                        <div className="bg-black h-[126px] py-8 px-4 flex flex-col  justify-center"
                                            style={{
                                                borderRadius: "12px",
                                                border: "1px solid rgba(255, 255, 255, 0.10)",
                                                background: "rgba(0, 0, 0, 0.24)",
                                                backdropFilter: "blur(10px)"
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                                                    fontStyle: "normal",
                                                    fontWeight: "700",
                                                    lineHeight: "140%"

                                                }}
                                                className="text-white text-[24px] mb-1">
                                                {member.name}
                                            </h3>
                                            <p
                                                className="text-[16px] font-medium leading-tight"
                                                style={{

                                                    color: "#ECEEEE",
                                                    fontFamily: "Frutiger LT Std",
                                                    fontSize: "16px",
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    lineHeight: "150%"
                                                }}
                                            >
                                                {member.position}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Executive Team Section */}
                    <div
                        ref={executiveRef as React.RefObject<HTMLDivElement>}
                        className="relative mt-40"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isExecutiveInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6 }}
                            className=" "
                        >
                            <h2 className="text-white text-[48px] font-bold  mb-6 max-w-[420px] leading-[57.6px]">
                                Meet Our Executive Team
                            </h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6 }}
                                className="text-[#ECEEEE] text-[16px] font-normal max-w-[520px] mb-8"
                            >
                                Guiding BARQ Systems with vision, expertise, and innovation—our executive leaders drive growth, inspire excellence, and shape the future of technology in the region.
                            </motion.p>
                        </motion.div>

                        <div className="flex  justify-center gap-6 w-full">
                            {executiveTeam.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isExecutiveInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="cursor-pointer group"
                                    onClick={() => openModal(member)}
                                >
                                    <div
                                        className="w-[194px] h-[492px] py-8  relative flex flex-col transition-transform duration-300"
                                        style={{
                                            borderRadius: "12px",
                                            border: "1px solid rgba(255, 255, 255, 0.10)",
                                            backdropFilter: "blur(10px)",
                                        }}
                                    >
                                        <div className=" relative" >
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={194}
                                                height={385}
                                                className="object-cover h-[385px] w-[194px] "
                                            />
                                            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent' />
                                        </div>

                                        <div
                                            style={{
                                                borderRadius: "12px",
                                                border: "1px solid rgba(255, 255, 255, 0.10)",
                                                background: "rgba(0, 0, 0, 0.24)",
                                                backdropFilter: "blur(10px)"
                                            }}
                                            className="absolute p-4 bottom-6 left-4 right-4  h-[173px] z-20">
                                            <h3 className="text-white text-[24px] font-bold mb-1 leading-tight">
                                                {member.name}
                                            </h3>
                                            <p
                                                className="text-[14px] font-normal  text-[#ECEEEE] leading-tight"
                                            >
                                                {member.position}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >


            {/* Bio Modal */}
            <MemberBioModal
                isOpen={isModalOpen}
                onClose={closeModal}
                member={selectedMember}
                onNext={navigateToNext}
                onPrevious={navigateToPrevious}
                onSelectMember={selectMember}
                currentIndex={currentMemberIndex}
                totalMembers={currentTeamType === 'leadership' ? leadershipTeam.length : executiveTeam.length}
                teamMembers={currentTeamType === 'leadership' ? leadershipTeam : executiveTeam}
            />

            {/* Footer */}
            <Footer />
        </div >
    );
}
