import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Cpu, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "text-neon-cyan",
    border: "border-neon-cyan/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "REST APIs"],
    color: "text-neon-pink",
    border: "border-neon-pink/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(255,0,128,0.2)]"
  },
  {
    category: "Creative",
    icon: Code2,
    items: ["Three.js", "WebGL", "Canvas API", "GSAP", "UI/UX Design"],
    color: "text-neon-lime",
    border: "border-neon-lime/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,255,0,0.2)]"
  },
  {
    category: "Tools",
    icon: Cpu,
    items: ["Git", "Docker", "Vite", "Linux", "AWS"],
    color: "text-purple-400",
    border: "border-purple-400/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-lime">
              TECHNICAL
            </span>{" "}
            ARSENAL
          </h2>
          <div className="h-1 w-24 bg-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`bg-card/50 backdrop-blur-md border ${skill.border} h-full transition-all duration-300 group hover:-translate-y-2 ${skill.glow}`}>
                <CardContent className="p-6">
                  <div className={`mb-4 ${skill.color}`}>
                    <skill.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-4">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center text-gray-400 font-rajdhani text-lg">
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${skill.color.replace('text-', 'bg-')}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
