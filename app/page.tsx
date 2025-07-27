"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Eye,
  Award,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState(null)
  const [typedText, setTypedText] = useState("")

  const fullText = "Frontend and Cloud Enthusiast"

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "internships",
        "achievements",
        "certifications",
        "activities",
        "education",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
    "MySQL",
    "Flask",
    "Tailwind CSS",
    "React Native",
    "OpenCV",
    "IoT",
    "AWS",
    "Raspberry Pi",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Figma",
  ]

  const projects = [
    {
      id: 1,
      title: "EZWay",
      description:
        "Built a mobile app to simplify campus navigation with interactive maps, real-time announcements, and chatbot-based location assistance tailored for college students and visitors.",
      features: [
        "Modern UI with smooth animations and gradients",
        "Interactive campus map integration",
        "Responsive design for both iOS and Android",
        "Secure authentication system",
        "Event management and announcements",
        "Department and faculty information",
        "Emergency help and safety features",
      ],
      techStack: [
        "React Native",
        "NativeWind (Tailwind CSS)",
        "React Native WebView",
        "React Native Animatable",
        "Mappedin",
      ],
      github: "https://github.com/Akshada-5/MAD.git",
      live: "#",
    },
    {
      id: 2,
      title: "Reposapians",
      description:
        "AI-powered platform connecting project owners with contributors through smart listings, PR filtering, and reward-based contributions.",
      features: [
        "Rewards on Contributions – Unlike traditional open-source platforms, developers receive recognition and tangible rewards for their contributions. Over time, earned reward vouchers can be redeemed for exclusive perks and benefits.",
        "AI-Driven PR Review – intelligent system filters out low-quality pull requests and highlights meaningful contributions, saving project owners valuable time.",
        "Smart Project Listing and Insights – AI-powered insights help contributors find relevant and high-quality projects instantly, eliminating spam and irrelevant listings.",
        "Seamless Collaboration – Built-in meeting scheduling, direct messaging, and progress tracking ensure smooth interaction between owners and contributors.",
      ],
      techStack: ["React.js", "Django", "Tailwind CSS", "SQLite3"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Peak Mind AI",
      description:
        "Platform to enhance student engagement, confidence, and well-being, with integrated stress detection.",
      features: [
        "AI-Powered Chatbot – 24/7 real-time motivation support.",
        "Community Meetups (Q&A & Webinars) – Peer interaction & expert mentorship.",
        "Smart Learning – Personalized Adaptive Quizzing & Course Recommendations",
      ],
      techStack: ["React.js", "Flask", "OpenCV", "Firebase"],
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "Smart Shield",
      description:
        "SmartShield is an IoT-based personal safety device designed to assist women in alerting emergency contacts during unsafe situations.",
      features: [
        "Emergency Switch Activation: A single press sends an email alert with the user's location and a captured image.",
        "LAN-Based Location Tracking: Captures the user's current location using LAN.",
        "Photo Attachment: Captures and sends an image to give emergency contacts more context.",
      ],
      techStack: ["Raspberry Pi", "IoT", "Python", "Camera Module"],
      github: "https://github.com/Akshada-5/SmartShield.git",
      live: "#",
    },
    {
      id: 5,
      title: "PBL: Admission Criteria Comparison Tool",
      description:
        "Developed an Admission Criteria Comparison Tool for undergraduate students, designed to alleviate the challenges associated with college selection based on CET scores.",
      features: [
        "Smart college filtering",
        "Online geolocation fetching",
        "Details of the college staff",
        "Important Information related to admission criteria",
        "Comparison between two colleges",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
      github: "https://github.com/Akshada-5/PBL_SY_24.git",
      live: "#",
    },
  ]

  const achievements = [
    {
      title: "HackOverflow 3.0 Finalist",
      description: "Emerged as national finalists",
      organization: "PHCOE Mumbai",
      icon: "🏆",
      image: "/images/achievements/hack3.jpg",
    },
    {
      title: "GHR Hack 1.0 Finalist",
      description: "Emerged as national finalists",
      organization: "G H Raisoni College, Jalgaon",
      icon: "🥇",
      image: "/images/achievements/ghr.jpg",
    },
    {
      title: "IIC Winner",
      description: "Won the Institution's Innovation Council competition for innovative project development.",
      organization: "Institution's Innovation Council",
      icon: "🎯",
      image: "/images/achievements/iic.jpg",
    },
    {
      title: "Smart India Hackathon 2024 Finalist",
      description: "Emerged as Top 5 National Finalist",
      organization: "IES Institute of Technology and Management, Bhopal",
      icon: "🚀",
      image: "/images/achievements/sih.jpg",
    },
    {
      title: "IoT Mini Project Competition",
      description: "Secured 3rd position",
      organization: "KKWIEER",
      icon: "🥉",
      image: "/images/achievements/iot.jpg",
    },
  ]

  const certifications = [
    { name: "NPTEL DAA", year: "2024", icon: "📊" },
    { name: "NPTEL DBMS", year: "2024", icon: "🗄️" },
    { name: "Cloud Computing 101 (AWS)", year: "2025", icon: "☁️" },
    { name: "Getting Started with Storage (AWS)", year: "2025", icon: "💾" },
    { name: "Getting Started with Compute (AWS)", year: "2025", icon: "⚡" },
    { name: "Getting Started with Networking (AWS)", year: "2025", icon: "🌐" },
  ]

  const activities = [
    {
      title: "Young Indians – KKWIEER | Member",
      period: "March 2025 – Present",
      type: "membership",
    },
    {
      title: "Interactive 3D Campus Map Project",
      description: "Developed and deployed during Innov-era Hackathon",
      period: "March 2025",
      type: "project",
    },
    {
      title: "Innov-era Hackathon | Participant Affairs Team Member",
      period: "March 2025",
      type: "role",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "K. K. Wagh Institute of Engineering and Research, Nashik",
      period: "2022 – Present",
      grade: "CGPA: 8.12",
      type: "degree",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "HSC Board",
      period: "2020 – 2022",
      grade: "66.50%",
      type: "secondary",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "CBSE Board",
      period: "2019 – 2020",
      grade: "77.83%",
      type: "secondary",
    },
  ]

  const internships = [
    {
      title: "Frontend Developer Intern – Selected",
      company: "AICTE Idea Lab Internship (EduVision Internship Team)",
      period: "Selected",
      description:
        "Selected for the prestigious AICTE Idea Lab Internship program focusing on frontend development and innovative educational technology solutions.",
      type: "work",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/10 to-slate-900"></div>
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
            >
              Akshada Pawar
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "internships", label: "Internships" },
                { id: "achievements", label: "Achievements" },
                { id: "education", label: "Education" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-teal-400 ${
                    activeSection === item.id ? "text-teal-400 border-b-2 border-teal-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-md bg-slate-900/95 border-t border-slate-700/50"
            >
              <div className="px-4 py-4 space-y-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "internships", label: "Internships" },
                  { id: "achievements", label: "Achievements" },
                  { id: "education", label: "Education" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto w-36 h-36 rounded-full overflow-hidden border-4 border-teal-400/50 shadow-2xl shadow-teal-500/20"
            >
              <Image
                src="/images/profile.jpg"
                alt="Akshada Pawar"
                width={144}
                height={144}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Akshada Pawar
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-300 h-12"
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/25"
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="text-gray-400 cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-8">
              <CardContent className="p-0">
                <p className="text-gray-300 leading-relaxed text-lg text-center">
                  Skilled in full-stack development and have a strong interest in Cloud Technologies. With a confident
                  approach and a team mindset, I bring ideas to life by blending creativity, communication, and
                  collaboration. I'm passionate about creating innovative solutions that make a real impact.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills &{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)",
                  borderColor: "rgba(20, 184, 166, 0.5)",
                }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-3 text-center text-gray-300 hover:text-white hover:border-teal-400/50 transition-all duration-300 cursor-pointer"
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 overflow-hidden hover:border-teal-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-slate-700 rounded-full p-2 text-white hover:bg-slate-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-teal-400 mb-3">Overview</h4>
                    <p className="text-gray-300 text-lg">{selectedProject.description}</p>
                  </div>

                  {selectedProject.features && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-teal-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <span className="text-teal-400 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-teal-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <Badge key={tech} className="bg-teal-600 text-white">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white bg-transparent"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Internships
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {internships.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-6 hover:border-teal-500/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-teal-400" />
                      <Badge variant="outline" className="border-teal-400 text-teal-400">
                        {item.period}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                    <h4 className="text-teal-400 mb-3">{item.company}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 overflow-hidden hover:border-teal-500/50 transition-all duration-300 h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                      <span className="text-2xl">{achievement.icon}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-5 h-5 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                    <p className="text-teal-400 text-sm font-medium">{achievement.organization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-6 hover:border-teal-500/50 transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="text-3xl mb-3">{cert.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                    <Badge variant="outline" className="border-teal-400 text-teal-400">
                      {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co & Extra-Curricular Section */}
      <section id="activities" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Co &{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Extra-Curricular
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-6 hover:border-teal-500/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-teal-400" />
                      <Badge variant="outline" className="border-teal-400 text-teal-400">
                        {activity.period}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{activity.title}</h3>
                    {activity.description && <p className="text-gray-400 text-sm">{activity.description}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-6 hover:border-teal-500/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-teal-400" />
                      <Badge variant="outline" className="border-teal-400 text-teal-400">
                        {edu.period}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                    <h4 className="text-teal-400 mb-2">{edu.institution}</h4>
                    <p className="text-gray-300 font-medium">{edu.grade}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's connect and discuss opportunities to work together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Connect with me",
                href: "https://www.linkedin.com/in/akshada-pawar-3089a4274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "View my code",
                href: "https://github.com/Akshada-5",
                color: "from-gray-600 to-gray-700",
              },
              {
                icon: Mail,
                label: "Email",
                value: "Send a message",
                href: "mailto:akshadapawar43@gmail.com",
                color: "from-teal-600 to-teal-700",
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block"
              >
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-6 hover:border-teal-500/50 transition-all duration-300 text-center">
                  <CardContent className="p-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Akshada Pawar
              </div>
              <p className="text-gray-400">© {new Date().getFullYear()} Akshada Pawar. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
