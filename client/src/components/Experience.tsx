import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            description: "Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Architected microservices infrastructure serving 100K+ users.",
            technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
            achievements: [
                "Reduced application load time by 60% through optimization",
                "Led team of 5 developers in agile environment",
                "Implemented CI/CD pipeline reducing deployment time by 80%"
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Digital Solutions Ltd.",
            period: "2020 - 2022",
            description: "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
            technologies: ["React", "Express", "MongoDB", "REST APIs", "Git"],
            achievements: [
                "Built 10+ responsive web applications from scratch",
                "Improved code quality through implementation of testing frameworks",
                "Mentored junior developers on best practices"
            ]
        },
        {
            title: "Junior Developer",
            company: "StartUp Ventures",
            period: "2019 - 2020",
            description: "Contributed to frontend development of SaaS platform. Gained hands-on experience with modern web technologies and agile methodologies.",
            technologies: ["JavaScript", "React", "CSS", "HTML", "Firebase"],
            achievements: [
                "Developed reusable component library",
                "Participated in code reviews and sprint planning",
                "Implemented responsive designs across multiple devices"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-black/20">
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
                            Experience
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-pink to-neon-cyan hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-neon-cyan border-4 border-black hidden md:block"></div>

                                <div className="md:ml-20 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-neon-cyan/50 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-neon-cyan">
                                                <Briefcase size={18} />
                                                <span className="font-semibold">{exp.company}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                                            <Calendar size={18} />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
                                        <ul className="space-y-1">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="text-gray-300 text-sm flex items-start">
                                                    <span className="text-neon-pink mr-2">▹</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
