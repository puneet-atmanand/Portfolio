import { motion } from "framer-motion";
import { Github, Laptop, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SkySmart AI Flight Booking",
      category: "AI & Predictions",
      description: "AI-powered flight booking platform with smart price predictions, alerts, and an integrated AI chatbot for a seamless travel experience.",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase", "AI/ML"],
      github: "https://github.com/puneet-atmanand/SkySmart-AI-Flight-Booking-Price-Prediction-Platform",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Smart Crop Recommendation",
      category: "Machine Learning",
      description: "Machine learning system that analyzes soil parameters (N, P, K, pH) and weather data to recommend the most suitable crops for cultivation.",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "Streamlit"],
      github: "https://github.com/puneet-atmanand/Smart-Crop-Recommendation-",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "College News Portal",
      category: "Web Development",
      description: "A centralized digital platform for Maharaja Institute of Technology Mysore to manage and broadcast college news and updates efficiently.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/puneet-atmanand/college-news-portal",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white">
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
              <Laptop className="text-pink-600" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900">
              Projects
            </h2>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-2xl rounded-l-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 border-l-4 border-l-pink-600 flex flex-col"
            >
              {/* Header: Title and Category */}
              <div className="p-6 transition-colors duration-300 group-hover:bg-pink-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]" title={project.title}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-pink-600">
                  <Code2 size={16} />
                  <span className="text-sm font-medium">{project.category}</span>
                </div>
              </div>

              {/* Middle: Project Image */}
              <div className="h-48 overflow-hidden border-y border-gray-100 shrink-0 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-neon-pink hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Bottom: Description and Tech */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4 flex-grow text-sm">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <h4 className="text-sm font-bold text-gray-800 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-xs font-medium bg-pink-50 text-pink-600 rounded-full border border-pink-100 transition-colors group-hover:bg-white"
                      >
                        {tech}
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
