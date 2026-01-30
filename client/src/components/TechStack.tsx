import { motion } from "framer-motion";
import { Code2, Database, Brain, Cloud, BarChart, Bot, Laptop } from "lucide-react";

export default function TechStack() {
    // Map display names to Simple Icons slugs or full image URLs
    const techIcons: Record<string, string> = {
        "Python": "python",
        "C": "c",
        "HTML5": "html5",
        "CSS3": "css3",
        "JavaScript": "javascript",
        "FastAPI": "fastapi",
        "Next.js": "nextdotjs",

        "MySQL": "mysql",
        "Oracle DB": "oracle",
        "PostgreSQL": "postgresql",
        "MongoDB": "mongodb",
        "SQL Server": "microsoftsqlserver",
        "Qdrant": "qdrant",
        "Prisma": "prisma",
        "SQLAlchemy": "sqlalchemy",

        "NumPy": "numpy",
        "Pandas": "pandas",
        "SciPy": "scipy",
        "Matplotlib": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
        "Seaborn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/seaborn/seaborn-original.svg",
        "Plotly": "plotly",
        "scikit-learn": "scikitlearn",
        "TensorFlow": "tensorflow",
        "PyTorch": "pytorch",
        "XGBoost": "https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png",
        "LightGBM": "https://raw.githubusercontent.com/microsoft/LightGBM/master/docs/logo/LightGBM_logo_black_text.svg",
        "Selenium": "selenium",

        "AWS": "amazonaws",
        "Informatica": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F10%2FInformatica_logo.png&f=1&nofb=1",
        "PySpark": "apachespark",
        "Render": "render",
        "Docker": "docker",

        "Tableau": "tableau",
        "Power BI": "powerbi",
        "Excel (VBA)": "https://cdn.simpleicons.org/microsoftexcel",
        "Grafana": "grafana",
        "Streamlit": "streamlit",

        "LLMs": "openai",
        "LangChain": "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png",
        "LangGraph": "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
        "Hugging Face": "huggingface"
    };

    const categories = [
        {
            title: "Programming & Frameworks",
            icon: Code2,
            items: [
                "Python", "C", "HTML5", "CSS3", "JavaScript", "FastAPI", "Next.js"
            ],
            color: "text-blue-500"
        },
        {
            title: "Databases & ORMs",
            icon: Database,
            items: [
                "MySQL", "Oracle DB", "PostgreSQL", "MongoDB", "SQL Server", "Qdrant", "Prisma", "SQLAlchemy"
            ],
            color: "text-green-500"
        },
        {
            title: "ML & DS Libraries",
            icon: Brain,
            items: [
                "NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "Plotly", "scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM", "Selenium"
            ],
            color: "text-purple-500"
        },
        {
            title: "Cloud, Data & Infrastructure",
            icon: Cloud,
            items: [
                "AWS", "Informatica", "PySpark", "Render", "Docker"
            ],
            color: "text-gray-600"
        },
        {
            title: "Viz & BI",
            icon: BarChart,
            items: [
                "Tableau", "Power BI", "Excel (VBA)", "Grafana", "Streamlit"
            ],
            color: "text-orange-500"
        },
        {
            title: "Generative AI",
            icon: Bot,
            items: [
                "LLMs (BERT, GPT...)", "LangChain", "LangGraph", "Hugging Face"
            ],
            color: "text-indigo-500"
        }
    ];

    const getIcon = (item: string) => {
        // Handle special cases matching the item text to keys
        let key = item;
        if (item.startsWith("LLMs")) key = "LLMs";
        if (item === "Excel (VBA)") return "https://cdn.simpleicons.org/microsoftexcel";

        const slug = techIcons[key];
        if (!slug) return null;

        // If it's a full URL, return it
        if (slug.startsWith("http")) return slug;

        // Otherwise return simpleicons URL
        return `https://cdn.simpleicons.org/${slug}`;
    };

    return (
        <section id="skills" className="py-20 relative overflow-hidden bg-gray-50">
            {/* Background Blobs */}
            <div className="absolute -left-20 top-20 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -right-20 bottom-20 w-80 h-80 bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

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
                            <Laptop className="text-pink-600" size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900">
                            Tech Stack
                        </h2>
                    </div>
                </motion.div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-600 text-center flex flex-col items-center overflow-hidden"
                        >
                            {/* Top Gradient Border */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="mb-6 relative">
                                <div className={`p-4 rounded-xl bg-[#FFF5F0] flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                    <category.icon className={category.color} size={32} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 font-poppins mb-6">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-2">
                                {category.items.map((item, i) => {
                                    const iconUrl = getIcon(item);
                                    return (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 text-sm font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-100 transition-colors group-hover:bg-pink-50 group-hover:text-pink-600"
                                        >
                                            {iconUrl ? (
                                                <img src={iconUrl} alt={item} className="w-5 h-5 object-contain mr-1" />
                                            ) : (
                                                <span className={`w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')} mr-1`}></span>
                                            )}
                                            {item}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
