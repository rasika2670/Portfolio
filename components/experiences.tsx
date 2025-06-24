import { motion } from "framer-motion";
import { Sparkles, Users, PenTool } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Creative Team Member",
    org: "MLSC",
    icon: Sparkles,
    description:
      "Designing flyers, Instagram stories, and marketing materials to engage the tech community and promote events.",
    year: "2023 – Present",
  },
  {
    title: "Website Coordinator",
    org: "DESOC",
    icon: PenTool,
    description:
      "Managing the official DESOC website and LinkedIn page, and contributing to the creative team when needed.",
    year: "2023 – Present",
  },
  {
    title: "Design Team Lead",
    org: "Techathon Innovera",
    icon: Users,
    description:
      "Leading the design team, creating event branding, and managing all design-related deliverables and promotions.",
    year: "2024",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] rounded-xl">
                  <exp.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.org} · {exp.year}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
