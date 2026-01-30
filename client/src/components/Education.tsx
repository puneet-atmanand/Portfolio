import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Engineering in Computer Science",
            institution: "Maharaja Institute of Technology Mysore",
            period: "2023 - Present",
            description: "Currently pursuing rigorous coursework in core computer science disciplines, algorithms, and system architecture. Demonstrating consistent academic excellence.",
            achievements: [
                "CGPA: 9.6 / 10",
                "Top Performer in Core Subjects",
                "Attended SIH"
            ]
        },
        {
            degree: "Pre-University College (Science)",
            institution: "JSS RSH PU College, Dharwad",
            period: "2021 - 2023",
            description: "Completed Grade 12 with a focus on Physics, Chemistry, Mathematics, and Biology. Built a strong analytical foundation for engineering.",
            achievements: [
                "Grade: 94%",
                "Excellence in Mathematics & Physics",
                "Played Football Divisions"
            ]
        },
        {
            degree: "High School",
            institution: "JSS SMEM School MR Nagar, Dharwad",
            period: "2018 - 2021",
            description: "Completed secondary education with distinction. Outstanding performance in academics and extracurricular activities.",
            achievements: [
                "Grade: 90%",
                "School Topper in Science",
                "Active Participant in Science Fairs"
            ]
        }
    ];

    return (
        <section id="education" className="py-20 relative overflow-hidden bg-white">
            {/* Background Blobs */}
            <div className="absolute -right-20 top-20 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -left-20 bottom-20 w-80 h-80 bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-pink-50">
                            <GraduationCap className="text-pink-600" size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900">
                            Education
                        </h2>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-2xl rounded-l-none p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 border-l-4 border-l-pink-600 flex flex-col md:flex-row gap-6"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">
                                    <BookOpen size={28} />
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {edu.degree}
                                    </h3>
                                    <div className="flex items-center gap-2 text-pink-600 font-medium text-sm mt-1 md:mt-0">
                                        <Calendar size={14} />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>

                                <h4 className="text-lg text-gray-700 font-medium mb-4 flex items-center gap-2">
                                    {edu.institution}
                                </h4>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {edu.description}
                                </p>

                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
                                        <Award size={16} className="text-pink-600" />
                                        <span>Key Achievements</span>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {edu.achievements.map((achievement, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-sm font-medium bg-white text-gray-700 border border-gray-200 rounded-lg shadow-sm"
                                            >
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
