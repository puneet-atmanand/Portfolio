import { motion } from "framer-motion";
import { Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden bg-white">
            {/* Background Blobs */}
            <div className="absolute -left-20 top-20 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -right-20 bottom-20 w-80 h-80 bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-pink-50">
                            <User className="text-pink-600" size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900">About Me</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left: Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 flex justify-center md:justify-start"
                    >
                        <div className="relative w-full max-w-xs">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
                                <img
                                    src={profileImage}
                                    alt="Puneet Atmanand Iti"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 space-y-6"
                    >
                        {/* Header Section */}
                        <div className="space-y-2">
                            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 leading-tight">
                                Puneet Atmanand Iti
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-500 font-inter font-medium">
                                Creative Developer · Engineer · Problem Solver
                            </p>
                        </div>

                        {/* Bio Paragraphs */}
                        <div className="space-y-6 text-gray-600 font-inter text-lg leading-relaxed text-justify">
                            <p>
                                I’m a creative developer and engineer who enjoys turning ideas into practical,
                                real-world solutions. I like building, experimenting, and learning continuously,
                                whether it’s through code, system design, or exploring new technologies.
                                I work across the development lifecycle, from planning and designing to
                                implementing and improving, with a focus on creating efficient, scalable,
                                and user-friendly solutions. I enjoy breaking down complex problems,
                                thinking logically, and engineering solutions that make processes smarter
                                and more impactful. What excites me most about technology is the balance
                                between analytical thinking and creativity, and how modern tools allow us
                                to build things that were once just ideas.
                            </p>
                            <p>
                                Beyond development, I’m inspired by creativity in everyday life, from design
                                and innovation to exploring new perspectives. I believe strong problem-solving
                                comes from both technical skill and creative thinking. For me, technology is
                                not just about writing code, it’s about designing meaningful solutions,
                                improving experiences, and continuously evolving as a builder and thinker
                                in a fast-moving digital world.
                            </p>
                        </div>

                        {/* Place & Resume */}
                        <div className="pt-4 space-y-8">
                            <div className="flex items-center gap-2 text-lg">
                                <span className="text-pink-600 font-bold">Place:</span>
                                <span className="text-gray-700">Dharwad, India</span>
                            </div>


                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
