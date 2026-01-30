import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

export default function Recognitions() {
    const certifications = [
        {
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            description: "Validated expertise in designing distributed systems on AWS."
        },
        {
            title: "Professional Cloud Developer",
            issuer: "Google Cloud",
            date: "2022",
            description: "Demonstrated ability to build scalable cloud-native applications."
        },
        {
            title: "Meta Frontend Developer Professional Certificate",
            issuer: "Meta",
            date: "2021",
            description: "Advanced proficiency in React and modern frontend development."
        }
    ];

    const awards = [
        {
            title: "Employee of the Year",
            issuer: "Tech Innovations Inc.",
            date: "2023",
            description: "Recognized for outstanding leadership and technical contribution."
        },
        {
            title: "Best Innovation Award",
            issuer: "Global Hackathon 2022",
            date: "2022",
            description: "First place for AI-powered accessibility tool."
        }
    ];

    return (
        <section id="recognitions" className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink">
                            Recognitions
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <CheckCircle className="text-neon-cyan" />
                            Certifications
                        </h3>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                                        <span className="text-sm text-neon-cyan font-mono">{cert.date}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                                    <p className="text-gray-500 text-sm">{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Awards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Award className="text-neon-pink" />
                            Awards & Honors
                        </h3>
                        <div className="space-y-6">
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-neon-pink/30 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-white">{award.title}</h4>
                                        <span className="text-sm text-neon-pink font-mono">{award.date}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2">{award.issuer}</p>
                                    <p className="text-gray-500 text-sm">{award.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
