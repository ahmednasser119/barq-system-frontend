'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, LinkedinIcon, MailIcon, XIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { TeamMember, allTeamMembers } from '@/data/leadership';
import { cn } from '@/lib/utils';

interface MemberBioModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: TeamMember | null;
    onNext: () => void;
    onPrevious: () => void;
    onSelectMember: (index: number) => void;
    currentIndex: number;
    totalMembers: number;
    teamMembers?: TeamMember[];
}

export default function MemberBioModal({
    isOpen,
    onClose,
    member,
    onNext,
    onPrevious,
    onSelectMember,
    currentIndex,
    totalMembers,
    teamMembers = allTeamMembers
}: MemberBioModalProps) {
    if (!member) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay className="bg-black/80 backdrop-blur-md" />
            <DialogContent
                className={cn(
                    "w-full min-w-[90%] max-w-none h-[85vh] max-h-none p-0  overflow-hidden",
                    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                )}
                style={{
                    borderRadius: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    background: "rgba(0, 0, 0, 0.64)",
                    backdropFilter: "blur(10px)"
                }}
                showCloseButton={false}
            >
                <div className="relative w-full h-full bg-[#525252]">
                    {/* Background with Glass Effect */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[#000000A3] backdrop-blur-[10px] border border-[#FFFFFF20] rounded-2xl" />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                        <XIcon size={24} />
                    </button>

                    {/* Content */}
                    <div className="relative z-10 flex h-full">
                        {/* Left Side - Image */}
                        <motion.div
                            className="w-[45%] flex items-center justify-center p-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div
                                style={{
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255, 255, 255, 0.10)",
                                    background: "url(" + member.image + ") lightgray 50% / contain no-repeat, rgba(255, 255, 255, 0.04)",
                                    backdropFilter: "blur(10px)"
                                }}
                                className="relative w-full max-w-[500px] h-[414px] ">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl z-10" />
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            className="w-[55%] p-8 flex flex-col justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <div className="max-w-2xl">
                                {/* Name and Position */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <h2 className="text-white text-[36px] font-bold leading-[48px] mb-4">
                                        {member.name}
                                    </h2>
                                    <p
                                        className="text-[24px]  mb-4 text-[#ECEEEE] font-bold"
                                    >
                                        {member.position}
                                    </p>
                                </motion.div>

                                {/* Bio */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    <p className="text-[#D9DDDD] text-[18px] leading-[27px] mb-[52px]">
                                        {member.bio}
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="  flex items-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    <div className="flex justify-center gap-4 ">
                                        <button
                                            onClick={onPrevious}
                                            className="w-[58px] h-14   flex items-center justify-center rounded-full border-[3px] bg-transparent border-[#5DADE2] text-[#5DADE2] hover:bg-transparent transition-all duration-300"
                                        >
                                            <Image src="/assets/arrow-left.png" alt="arrow-left" width={14} height={18} className='hover:fill-white' />
                                        </button>
                                        <button
                                            onClick={onNext}
                                            className="w-[58px] h-14   flex items-center justify-center rounded-full border-[3px] bg-transparent border-[#5DADE2] text-[#5DADE2] hover:bg-transparent transition-all duration-300"
                                        >
                                            <Image src="/assets/arrow-right.png" alt="arrow-right" width={14} height={18} className='hover:fill-white' />
                                        </button>
                                    </div>
                                </motion.div>


                                {/* Contact Links */}

                            </div>
                        </motion.div>
                    </div>

                    {/* Member Thumbnails Navigation */}

                    {/* Member Counter */}
                    {/* <motion.div
                        className="absolute top-6 left-6 text-white/70 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {currentIndex + 1} of {totalMembers}
                    </motion.div> */}
                </div>
            </DialogContent>
        </Dialog >
    );
}
