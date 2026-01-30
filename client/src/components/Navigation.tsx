import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["about", "education", "skills", "projects", "contact", "home"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/puneet-atmanand", label: "GitHub", hoverClass: "hover:bg-black hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/puneet-atmanand-iti-a99846328/", label: "LinkedIn", hoverClass: "hover:bg-[#0077b5] hover:text-white" },
    { icon: Instagram, href: "https://www.instagram.com/puneeth_atmanand", label: "Instagram", hoverClass: "hover:bg-pink-600 hover:text-white" },
    { icon: Mail, href: "mailto:atmananditi50@gmail.com", label: "Email", hoverClass: "hover:bg-pink-600 hover:text-white" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Left Section: Avatar + Name + Subtitle */}
          <a href="#" className="flex items-center gap-4 group">
            {/* Avatar with Initials */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-extrabold text-sm tracking-widest font-orbitron">PAI</span>
            </div>

            {/* Name and Subtitle */}
            <div className="hidden md:block">
              <h1 className="text-gray-900 font-semibold text-base leading-tight group-hover:text-pink-600 transition-colors">
                Puneet Atmanand Iti
              </h1>
              <p className="text-gray-500 text-xs leading-tight">
                Creative Developer · Engineer · Problem Solver
              </p>
            </div>
          </a>

          {/* Center Section: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 text-base font-bold font-orbitron tracking-wide pb-1 border-b-2 ${activeSection === link.id
                  ? "text-pink-600 border-pink-600"
                  : "text-gray-700 border-transparent hover:text-pink-600"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:flex w-9 h-9 rounded-lg bg-gray-100 items-center justify-center transition-all duration-300 border border-gray-200 text-gray-600 ${social.hoverClass}`}
                aria-label={social.label}
              >
                <social.icon size={18} className="transition-colors duration-300" />
              </a>
            ))}

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-gray-900 hover:text-purple-600 ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white/95 border-b border-gray-200"
        >
          <div className="flex flex-col p-6 space-y-4">
            {/* Mobile Name (if hidden on small screens) */}
            <div className="md:hidden pb-4 border-b border-gray-100">
              <h1 className="text-gray-900 font-semibold text-base">
                Puneet Atmanand Iti
              </h1>
              <p className="text-gray-500 text-xs">
                Creative Developer · Engineer · Problem Solver
              </p>
            </div>

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-bold transition-colors ${activeSection === link.id ? "text-pink-600" : "text-gray-600 hover:text-pink-600"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex gap-3 pt-4 border-t border-gray-700">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-gray-800/50 flex items-center justify-center transition-all duration-300 border border-gray-700/50 text-gray-400 ${social.hoverClass}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
