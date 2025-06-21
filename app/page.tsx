"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Code2, Palette, Users, Award,
  MonitorSmartphone, Wrench, Brain, User, MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const skills = [
    {
      name: "Web & App Development",
      icon: Code2,
      level: 90,
      tags: ["HTML5", "CSS3", "JavaScript", "React.js", "React Native", "Firebase"],
    },
    {
      name: "UI/UX Design",
      icon: MonitorSmartphone,
      level: 85,
      tags: ["Figma", "Typography", "Color Theory", "Design Systems", "Responsive Design",],
    },
    {
      name: "Programming",
      icon: Brain,
      level: 95,
      tags: ["C++", "DSA", "OOP", "Algorithms", "Problem Solving"],
    },
    {
      name: "Tools & Technologies",
      icon: Wrench,
      level: 80,
      tags: ["VS Code", "GitHub", "Canva"],
    },

    {
      name: "Soft Skills",
      icon: Users,
      level: 88,
      tags: ["Teamwork", "Leadership", "Communication", "Time Management"],
    },
  ];

  const projects = [
    {
      title: "EcoClassify – Smart Waste Classifier App",
      description:
        "React Native app using a Flask-hosted ML model to classify waste. Tracks user eco-behavior using Firebase integration.",
      image: "/projects/ecoclassify.png", // Replace with actual image
      tags: ["React Native", "Firebase", "Flask", "Hugging Face", "ML"],
      github: "https://github.com/rasika2670/SmartWasteClassifier",
      live: "#", // Replace with deployment link
    },
    {
      title: "QRide – Vehicle Rental Website",
      description:
        "Bike rental platform with features like time-based bookings, real-time tracking, payments, and support.",
      image: "/projects/qride.png",
      tags: ["MongoDB", "React.js", "Tailwind CSS", "ExpressJS", "NodeJS"],
      github: "https://github.com/rasika2670/QRides",
      live: "https://qrides.netlify.app/",
    },
    {
      title: "College ERP System",
      description:
        "ERP system with modules for student management, attendance, exam scheduling, and fee processing.",
      image: "/projects/college-erp.png",
      tags: ["React.js", "MongoDB", "Tailwind CSS", "Flask", "Figma"],
      github: "https://github.com/rasika2670/College-ERP-System",
      live: "#",
    },
  ];

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"]

  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/xeoklvdo", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-[#6431b9] to-[#0c99a4] bg-clip-text text-transparent"
              >
              <a href="#">
                Rasika.
              </a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20" />
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4"
              >
                <div className="w-32 h-32 mx-auto my-8 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rasu.jpeg"
                    alt="Rasika Mhaske"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#6431b9] to-[#0c99a4] bg-clip-text text-transparent">
                    Rasika Mhaske
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  UI/UX Designer & Full-Stack Developer
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                  Computer Science & Design student passionate about creating beautiful, functional digital experiences.
                  I bridge the gap between design and development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="/Rasika_Mhaske_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#6431b9] to-[#0c99a4] overflow-hidden group"
                  >
                    <span className="relative z-10">Download Resume</span>
                    <span className="absolute top-0 left-0 h-full bg-[#6431b9] w-0 transition-all duration-500 group-hover:w-full z-0"></span>
                  </Button>
                </a>

              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center space-x-6 my-12"
              >
                {[
                  {
                    Icon: Github,
                    href: "https://github.com/rasika2670",
                    external: true,
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/rasika-mhaske-b28918260/",
                    external: true,
                  },
                  {
                    Icon: Mail,
                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rasikamhaske26@gmail.com",
                    external: true,
                  },
                ].map(({ Icon, href, external }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : ""}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-violet-200 dark:hover:bg-violet-900 transition-colors mb-8"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 justify-evenly items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="pl-16"
              >
                <div className="relative">
                  <Image
                    src="\images\rasika.png"
                    alt="About Rasika"
                    width={400}
                    height={400}
                    className=" w-[400px] h-[400px] object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 pr-16"
              >
                <h3 className="text-2xl font-bold">Passionate about Design & Technology</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hi! I'm Rasika Mhaske, a Computer Science and Design student passionate about web development and UI/UX design. I love creating clean, responsive, and user-friendly digital experiences that blend creativity with functionality.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Apart from development, I'm actively involved in tech communities and college events, where I often contribute through design, leadership, and collaboration. I'm always eager to learn new tools and keep improving my skills. My goal is to grow as a developer and designer while building meaningful solutions that have a positive impact.
                </p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Award className="h-12 w-12 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 h-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl border-0">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-[#6431b9] to-[#0c99a4] mr-4">
                          <skill.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                      </div>

                      {/* Tag badges */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {skill.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border-0 h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary" className="rounded-full" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" className="rounded-full" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live
                            </a>
                          </Button>

                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#6431b9] to-[#0c99a4] mx-auto rounded-full mb-6" />
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Whether it's collaboration, feedback, or just a hello — feel free to drop a message!
              </p>
            </motion.div>

            {/* Toast Message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500 text-white font-medium px-6 py-3 rounded-full mb-6 text-center max-w-md mx-auto"
              >
                🎉 Message sent successfully!
              </motion.div>
            )}

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-xl max-w-2xl mx-auto space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <User className="h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-transparent outline-none w-full text-sm text-gray-800 dark:text-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="bg-transparent outline-none w-full text-sm text-gray-800 dark:text-white"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <div className="flex items-start gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-2xl">
                  <MessageSquare className="h-5 w-5 mt-1 text-gray-500" />
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="bg-transparent outline-none w-full text-sm text-gray-800 dark:text-white resize-none h-32"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#6431b9] to-[#0c99a4] overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute top-0 left-0 h-full bg-[#6431b9] w-0 transition-all duration-500 group-hover:w-full z-0" />
                </button>
              </div>
            </motion.form>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-gray-900 dark:bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Rasika Mhaske | All Rights Reserved
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}
