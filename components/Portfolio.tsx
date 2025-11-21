'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Shield,
  Cpu,
  Award,
  Briefcase,
  Code,
  Terminal,
  ChevronDown,
  Menu,
  X,
  FileText,
  Download,
  Flag,
  MapPin,
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [filterTag, setFilterTag] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark] = useState(true);
  const [showResumeMenu, setShowResumeMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'about', label: 'About', icon: Code },
    { id: 'projects', label: 'Projects', icon: Cpu },
    { id: 'skills', label: 'Skills', icon: Shield },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const projects = [
    {
      title: 'ARTEMIS',
      subtitle: 'Advanced Reactive Threat Elimination & Monitoring System',
      description:
        'Full-spectrum security platform combining ML-powered phishing detection (90%+ accuracy) with hardware-based wireless defense and cloud honeypot infrastructure.',
      tags: ['Security', 'ML', 'Cloud'],
      tech: ['Python', 'Scikit-learn', 'Flask', 'AWS EC2', 'ESP32'],
      highlights: [
        'Naive Bayes classifier achieving 90%+ phishing detection accuracy',
        'ESP8266/ESP32 system blocking 85%+ deauth attacks',
        'AWS EC2 honeypots for threat intelligence gathering',
        'Lightweight WAF with SQLi/XSS protection and rate limiting',
      ],
      github: 'https://github.com/05Atharva/ARTEMIS',
      featured: true,
    },
    {
      title: 'Harvest-Health',
      subtitle: 'AI-Powered Crop Monitoring Rover',
      description:
        'IoT-enabled agricultural solution using CNN for real-time crop disease detection, with automated farmer notifications via cloud integration.',
      tags: ['ML', 'IoT'],
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'ThingSpeak', 'Twilio'],
      highlights: [
        'CNN model with 90%+ accuracy for potato leaf disease detection',
        'Custom rover with sensors for autonomous field monitoring',
        'Real-time cloud data transmission via ThingSpeak',
        'SMS alert system using Twilio API integration',
      ],
      github: 'https://github.com/05Atharva/Harvest-Health',
    },
    {
      title: 'ResponseForge',
      subtitle: 'NIST-Compliant Incident Response Automation',
      description:
        'Enterprise-grade React application automating NIST SP 800-61 incident response plan generation with 92% enterprise validation rating.',
      tags: ['Security', 'Web'],
      tech: ['React.js', 'JavaScript', 'HTML/CSS'],
      highlights: [
        'NIST SP 800-61 compliant plan generation',
        '90% reduction in manual IR planning effort',
        'PDF export in under 2 minutes',
        '92% relevance rating in enterprise simulations',
      ],
      github: 'https://github.com/05Atharva/ResponseForge',
    },
    {
      title: 'Automotive Part QC Classifier',
      subtitle: 'Industrial AI Quality Control System',
      description:
        'Production-ready computer vision system for automated part inspection using transfer learning, deployed as standalone executable for factory floor operations.',
      tags: ['ML', 'Industrial'],
      tech: ['TensorFlow', 'MobileNetV2', 'OpenCV', 'PyInstaller'],
      highlights: [
        'Transfer learning with MobileNetV2 for part classification',
        'Reliable detection across multiple part variants',
        'Packaged as .exe for non-technical factory use',
        'Real-time quality assessment pipeline',
      ],
    },
  ];

  const skills = {
    security: [
      { name: 'Penetration Testing', level: 85, tools: ['Nmap', 'Burp Suite'] },
      { name: 'Network Security', level: 90, tools: ['CCNA Certified', 'WAF', 'Honeypots'] },
      { name: 'Threat Detection', level: 85, tools: ['SIEM', 'IDS/IPS'] },
      { name: 'Secure Development', level: 80, tools: ['OWASP', 'MFA Implementation'] },
    ],
    ml: [
      { name: 'Deep Learning', level: 85, tools: ['TensorFlow', 'Keras', 'CNNs'] },
      { name: 'Classical ML', level: 88, tools: ['Scikit-learn', 'XGBoost', 'Random Forest'] },
      { name: 'Computer Vision', level: 82, tools: ['OpenCV', 'MobileNetV2', 'YOLO'] },
      { name: 'Model Deployment', level: 80, tools: ['Flask', 'AWS EC2', 'Docker'] },
    ],
    engineering: [
      { name: 'Python Development', level: 90 },
      { name: 'Cloud Infrastructure', level: 75, tools: ['AWS EC2', 'ThingSpeak'] },
      { name: 'Web Development', level: 78, tools: ['React', 'Flask', 'REST APIs'] },
      { name: 'IoT & Embedded', level: 80, tools: ['ESP32', 'Sensors', 'Firmware'] },
    ],
  };

  const experience = {
    company: 'Encrypta Inc.',
    role: 'R&D Intern',
    period: 'Dec 2024 - Mar 2025',
    achievements: [
      'Engineered secure desktop authenticator using Python, Node.js, and Electron.js',
      'Implemented HTTPS and WebSocket encryption achieving zero data leaks in testing',
      'Deployed multi-factor authentication reducing attack vectors by 70%',
      'Applied secure coding practices throughout the development lifecycle',
    ],
  };

  const certifications = [
    { name: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco', date: 'May 2025' },
    { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google & Coursera', date: 'Jul 2024' },
    { name: 'Network Essentials', issuer: 'Cisco', date: 'Jun 2024' },
  ];

  const achievements = [
    { title: 'CTF Winner - NigVanta\'25', description: 'Capture The Flag Competition Champion' },
    { title: 'Innovators Challenge 2k24', description: 'Winners - 24 Hour Hackathon' },
  ];

  // 🔹 Blogs: DefendTheCloud & CTF Chronicles
  const blogs = [
    {
      title: 'DefendTheCloud',
      subtitle: 'Cybersecurity × AI/ML',
      description:
        'Deep dives into cloud security, adversarial ML defenses, threat modeling, red-team simulations, and secure AI engineering.',
      url: 'https://defendthecloud.blogspot.com/', // TODO: replace with actual link
      icon: Shield,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/20',
    },
    {
      title: 'CTF Chronicles',
      subtitle: 'CTF Walkthroughs & Writeups',
      description:
        'Step-by-step walkthroughs of CTF challenges across web exploitation, crypto, forensics, OSINT, and reverse engineering with a focus on learning.',
      url: 'https://ctfchronicles.blogspot.com/', // TODO: replace with actual link
      icon: Flag,
      color: 'text-purple-400',
      bg: 'bg-purple-500/20',
    },
  ];

  const filteredProjects =
    filterTag === 'all'
      ? projects
      : projects.filter((p) => p.tags.some((tag) => tag.toLowerCase() === filterTag.toLowerCase()));

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      {/* RESUME MODAL */}
      <AnimatePresence>
        {showResumeMenu && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowResumeMenu(false)}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-md mx-4 p-6 rounded-2xl shadow-xl ${
                isDark ? 'bg-slate-900 border border-cyan-500/20' : 'bg-white border border-gray-200'
              } z-[1000]`}
            >
              <h3
                className={`text-xl font-semibold mb-4 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Download Resume
              </h3>

              {/* AI & ML Resume */}
              <a
                href="/ATHARVA KANAWADE_ML.pdf"
                download="Atharva_Kanawade_ML_Resume.pdf"
                className={`flex items-center space-x-3 px-4 py-4 rounded-xl cursor-pointer ${
                  isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                } transition`}
                onClick={() => setShowResumeMenu(false)}
              >
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Cpu className="text-purple-400" size={22} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    AI & ML Resume
                  </p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Machine Learning focused
                  </p>
                </div>
                <Download className="text-purple-400" size={18} />
              </a>

              <div className={`my-3 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`} />

              {/* Cybersecurity Resume */}
              <a
                href="/ATHARVA KANAWADE Resume.pdf"
                download="Atharva_Kanawade_Cybersecurity_Resume.pdf"
                className={`flex items-center space-x-3 px-4 py-4 rounded-xl cursor-pointer ${
                  isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                } transition`}
                onClick={() => setShowResumeMenu(false)}
              >
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Shield className="text-cyan-400" size={22} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Cybersecurity Resume
                  </p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Security focused
                  </p>
                </div>
                <Download className="text-cyan-400" size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN PAGE */}
      <div
        className={`min-h-screen ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
            : 'bg-gradient-to-br from-gray-50 to-gray-100'
        } transition-colors duration-300`}
      >
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 backdrop-blur-md ${
            isDark ? 'bg-slate-900/80 border-b border-cyan-500/20' : 'bg-white/80 border-b border-gray-200'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                className="flex items-center space-x-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveSection('home')}
              >
                <Terminal className="text-cyan-400" size={24} />
                <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Atharva<span className="text-cyan-400">Kanawade</span>
                </span>
              </motion.div>

              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : isDark
                        ? 'text-gray-300 hover:text-cyan-400'
                        : 'text-gray-600 hover:text-cyan-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-cyan-400"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`md:hidden ${
                  isDark ? 'bg-slate-900' : 'bg-white'
                } border-t ${isDark ? 'border-cyan-500/20' : 'border-gray-200'}`}
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 ${
                      activeSection === item.id
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : isDark
                        ? 'text-gray-300'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <div className="pt-16 relative z-10">
          <AnimatePresence mode="wait">
            {/* HOME */}
            {activeSection === 'home' && (
              <motion.section
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen flex items-center justify-center px-4"
              >
                <div className="max-w-5xl mx-auto text-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                  >
                    <h1
                      className={`text-5xl md:text-7xl font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Hi, I'm{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Atharva Kanawade
                      </span>
                    </h1>
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <Shield className="text-cyan-400" size={32} />
                      <span
                        className={`text-2xl md:text-3xl ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        ×
                      </span>
                      <Cpu className="text-purple-400" size={32} />
                    </div>
                    <p
                      className={`text-xl md:text-2xl ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      } mb-8`}
                    >
                      Cybersecurity × AI Engineer | I Break Things Before Attackers Do
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-lg ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } max-w-3xl mx-auto mb-12`}
                  >
                    From phishing classifiers and cloud honeypots to secure IoT deployments, I design systems that
                    learn from real-world threats, get stronger with every attempt, and ship as production-ready tools
                    —not just side projects.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4"
                  >
                    <button
                      onClick={() => setActiveSection('projects')}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    >
                      View Projects
                    </button>
                    <button
                      onClick={() => setActiveSection('contact')}
                      className={`px-8 py-3 border-2 ${
                        isDark
                          ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                          : 'border-cyan-600 text-cyan-600 hover:bg-cyan-50'
                      } rounded-lg font-semibold transition-all`}
                    >
                      Get In Touch
                    </button>
                  </motion.div>

                  {/* Socials + Resume icon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex justify-center space-x-6"
                  >
                    <a
                      href="https://github.com/05Atharva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={28} />
                    </a>
                    <a
                      href="https://linkedin.com/in/atharvakanawade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Linkedin size={28} />
                    </a>
                    <a
                      href="mailto:atharvakanawade@gmail.com"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Mail size={28} />
                    </a>
                    <button
                      onClick={() => setShowResumeMenu(true)}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FileText size={28} />
                    </button>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* ABOUT */}
            {activeSection === 'about' && (
              <motion.section
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen py-20 px-4"
              >
                <div className="max-w-5xl mx-auto">
                  <motion.h2
                    {...fadeInUp}
                    className={`text-4xl md:text-5xl font-bold mb-8 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    About <span className="text-cyan-400">Me</span>
                  </motion.h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      {...fadeInUp}
                      className={`p-6 rounded-xl ${
                        isDark
                          ? 'bg-slate-800/50 border border-cyan-500/20'
                          : 'bg-white border border-gray-200'
                      } backdrop-blur`}
                    >
                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Background
                      </h3>
                      <p
                        className={`${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        } leading-relaxed`}
                      >
                        Electronics & Telecommunication Engineering student with a unique dual
                        expertise in cybersecurity and machine learning. Currently maintaining a
                        9.02 CGPA while building production-grade AI systems and security
                        infrastructure.
                      </p>
                    </motion.div>

                    <motion.div
                      {...fadeInUp}
                      transition={{ delay: 0.1 }}
                      className={`p-6 rounded-xl ${
                        isDark
                          ? 'bg-slate-800/50 border border-purple-500/20'
                          : 'bg-white border border-gray-200'
                      } backdrop-blur`}
                    >
                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Approach
                      </h3>
                      <p
                        className={`${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        } leading-relaxed`}
                      >
                        I build systems that don't compromise between intelligence and security.
                        Every ML model I deploy considers threat vectors, and every security system
                        I design leverages AI for enhanced detection and response.
                      </p>
                    </motion.div>
                  </div>

                  {/* Certifications & Achievements */}
                  <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="mt-8">
                    <h3
                      className={`text-2xl font-bold mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Certifications & Achievements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-lg ${
                            isDark
                              ? 'bg-slate-800/30 border border-cyan-500/10'
                              : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <Award
                              className="text-cyan-400 flex-shrink-0 mt-1"
                              size={20}
                            />
                            <div>
                              <h4
                                className={`font-semibold ${
                                  isDark ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {cert.name}
                              </h4>
                              <p
                                className={`text-sm ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}
                              >
                                {cert.issuer} • {cert.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-lg ${
                            isDark
                              ? 'bg-slate-800/30 border border-purple-500/10'
                              : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <Award
                              className="text-purple-400 flex-shrink-0 mt-1"
                              size={20}
                            />
                            <div>
                              <h4
                                className={`font-semibold ${
                                  isDark ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {achievement.title}
                              </h4>
                              <p
                                className={`text-sm ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}
                              >
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* BLOG SECTION */}
                  <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.3 }}
                    className="mt-16"
                  >
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      From the <span className="text-cyan-400">Blog</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {blogs.map((blog, idx) => (
                        <motion.a
                          key={idx}
                          href={blog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`group p-6 rounded-xl border backdrop-blur transition-all cursor-pointer ${
                            isDark
                              ? 'bg-slate-800/40 border-cyan-500/20 hover:border-cyan-400/60 hover:bg-slate-800/70'
                              : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-lg'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-3 rounded-lg ${blog.bg} group-hover:scale-110 transition-transform`}
                            >
                              <blog.icon className={blog.color} size={22} />
                            </div>
                            <div className="flex-1">
                              <p
                                className={`text-xs font-medium mb-1 uppercase tracking-wide ${
                                  isDark ? 'text-cyan-300' : 'text-cyan-600'
                                }`}
                              >
                                {blog.subtitle}
                              </p>
                              <h4
                                className={`text-lg font-semibold mb-1 ${
                                  isDark ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {blog.title}
                              </h4>
                              <p
                                className={`text-sm mb-3 ${
                                  isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}
                              >
                                {blog.description}
                              </p>
                              <span
                                className={`inline-flex items-center text-sm font-medium ${
                                  isDark ? 'text-cyan-300' : 'text-cyan-600'
                                }`}
                              >
                                Read More
                                <ExternalLink size={14} className="ml-1" />
                              </span>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* PROJECTS */}
            {activeSection === 'projects' && (
              <motion.section
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen py-20 px-4"
              >
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    {...fadeInUp}
                    className={`text-4xl md:text-5xl font-bold mb-8 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Featured <span className="text-cyan-400">Projects</span>
                  </motion.h2>

                  <motion.div {...fadeInUp} className="flex flex-wrap gap-3 mb-8">
                    {['all', 'security', 'ml', 'cloud', 'iot'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setFilterTag(tag)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          filterTag === tag
                            ? 'bg-cyan-500 text-white'
                            : isDark
                            ? 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </button>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-8"
                  >
                    {filteredProjects.map((project, idx) => (
                      <motion.div
                        key={idx}
                        {...fadeInUp}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-6 rounded-xl ${
                          isDark
                            ? 'bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40'
                            : 'bg-white border border-gray-200 hover:border-cyan-400'
                        } backdrop-blur transition-all hover:shadow-xl`}
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3
                                className={`text-2xl font-bold ${
                                  isDark ? 'text-white' : 'text-gray-900'
                                }`}
                              >
                                {project.title}
                              </h3>
                              {project.featured && (
                                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-sm ${
                                isDark ? 'text-cyan-400' : 'text-cyan-600'
                              } mb-2`}
                            >
                              {project.subtitle}
                            </p>
                            <p
                              className={`${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                              } mb-4`}
                            >
                              {project.description}
                            </p>
                          </div>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <Github size={24} />
                            </a>
                          )}
                        </div>

                        <div className="mb-4">
                          <h4
                            className={`text-sm font-semibold ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            } mb-2`}
                          >
                            Key Highlights:
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {project.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className={`text-sm ${
                                  isDark ? 'text-gray-300' : 'text-gray-700'
                                } flex items-start`}
                              >
                                <span className="text-cyan-400 mr-2">▹</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 ${
                                isDark
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : 'bg-cyan-100 text-cyan-700'
                              } rounded-full text-sm`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 text-xs ${
                                isDark
                                  ? 'bg-slate-700/50 text-gray-300'
                                  : 'bg-gray-100 text-gray-700'
                              } rounded`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* SKILLS */}
            {activeSection === 'skills' && (
              <motion.section
                key="skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen py-20 px-4"
              >
                <div className="max-w-6xl mx-auto">
                  <motion.h2
                    {...fadeInUp}
                    className={`text-4xl md:text-5xl font-bold mb-12 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Technical <span className="text-cyan-400">Arsenal</span>
                  </motion.h2>

                  <div className="space-y-12">
                    {Object.entries(skills).map(([category, skillList], catIdx) => (
                      <motion.div
                        key={category}
                        {...fadeInUp}
                        transition={{ delay: catIdx * 0.1 }}
                      >
                        <h3
                          className={`text-2xl font-bold mb-6 capitalize ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {category === 'ml' ? 'Machine Learning' : category}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {skillList.map((skill, idx) => (
                            <div
                              key={idx}
                              className={`p-4 rounded-lg ${
                                isDark
                                  ? 'bg-slate-800/50 border border-cyan-500/20'
                                  : 'bg-white border border-gray-200'
                              }`}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span
                                  className={`font-semibold ${
                                    isDark ? 'text-white' : 'text-gray-900'
                                  }`}
                                >
                                  {skill.name}
                                </span>
                                <span className="text-cyan-400 text-sm">
                                  {skill.level}%
                                </span>
                              </div>
                              <div
                                className={`w-full h-2 ${
                                  isDark ? 'bg-slate-700' : 'bg-gray-200'
                                } rounded-full overflow-hidden`}
                              >
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: catIdx * 0.1 + idx * 0.05,
                                  }}
                                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                                />
                              </div>
                              {skill.tools && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {skill.tools.map((tool, i) => (
                                    <span
                                      key={i}
                                      className={`px-2 py-1 text-xs ${
                                        isDark
                                          ? 'bg-slate-700 text-gray-300'
                                          : 'bg-gray-100 text-gray-700'
                                      } rounded`}
                                    >
                                      {tool}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="mt-12"
                  >
                    <h3
                      className={`text-2xl font-bold mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Additional Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        'Python',
                        'JavaScript',
                        'TypeScript',
                        'React',
                        'Node.js',
                        'Flask',
                        'Docker',
                        'AWS',
                        'Linux',
                        'Git',
                        'MySQL',
                        'REST APIs',
                        'Bash',
                        'C++',
                        'Java',
                        'Electron.js',
                        'NumPy',
                        'Pandas',
                      ].map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 ${
                            isDark
                              ? 'bg-slate-800/50 border border-cyan-500/20 text-gray-300'
                              : 'bg-white border border-gray-200 text-gray-700'
                          } rounded-lg font-medium`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* EXPERIENCE */}
            {activeSection === 'experience' && (
              <motion.section
                key="experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen py-20 px-4"
              >
                <div className="max-w-5xl mx-auto">
                  <motion.h2
                    {...fadeInUp}
                    className={`text-4xl md:text-5xl font-bold mb-12 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Professional <span className="text-cyan-400">Experience</span>
                  </motion.h2>

                  <motion.div
                    {...fadeInUp}
                    className={`p-8 rounded-xl ${
                      isDark
                        ? 'bg-slate-800/50 border border-cyan-500/20'
                        : 'bg-white border border-gray-200'
                    } backdrop-blur`}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg">
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-2xl font-bold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {experience.role}
                        </h3>
                        <p className="text-cyan-400 font-semibold">
                          {experience.company}
                        </p>
                        <p
                          className={`text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {experience.period}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4
                        className={`font-semibold ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        } mb-3`}
                      >
                        Key Contributions:
                      </h4>
                      {experience.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-cyan-400 mt-1">▹</span>
                          <p
                            className={`${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}
                          >
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-cyan-500/20">
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Python',
                          'Node.js',
                          'Electron.js',
                          'HTTPS',
                          'WebSocket',
                          'MFA',
                          'Secure Coding',
                        ].map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 text-sm ${
                              isDark
                                ? 'bg-slate-700/50 text-gray-300'
                                : 'bg-gray-100 text-gray-700'
                            } rounded`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="mt-12"
                  >
                    <h3
                      className={`text-2xl font-bold mb-6 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Education
                    </h3>
                    <div
                      className={`p-6 rounded-xl ${
                        isDark
                          ? 'bg-slate-800/50 border border-purple-500/20'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                          <Code className="text-white" size={24} />
                        </div>
                        <div>
                          <h4
                            className={`text-xl font-bold ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            Bachelor of Engineering
                          </h4>
                          <p className="text-purple-400 font-semibold">
                            Electronics and Telecommunication
                          </p>
                          <p
                            className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            Marathwada Mitra Mandal&apos;s College of Engineering, Pune
                          </p>
                          <p
                            className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}
                          >
                            Nov 2022 - Jun 2026 • CGPA: 9.02/10.0
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {/* CONTACT */}
            {activeSection === 'contact' && (
              <motion.section
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen flex items-center justify-center px-4"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h2
                    {...fadeInUp}
                    className={`text-4xl md:text-5xl font-bold mb-6 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Let&apos;s <span className="text-cyan-400">Connect</span>
                  </motion.h2>

                  <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.1 }}
                    className={`text-xl ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    } mb-12 max-w-2xl mx-auto`}
                  >
                    Interested in collaborating on security projects, ML research, or building
                    innovative solutions? I&apos;m always open to discussing new opportunities and
                    ideas.
                  </motion.p>

                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid md:grid-cols-2 gap-6 mb-12"
                  >
                    <motion.a
                      {...fadeInUp}
                      href="mailto:atharvakanawade@gmail.com"
                      className={`p-6 rounded-xl ${
                        isDark
                          ? 'bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40'
                          : 'bg-white border border-gray-200 hover:border-cyan-400'
                      } backdrop-blur transition-all group`}
                    >
                      <Mail
                        className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Email
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        atharvakanawade@gmail.com
                      </p>
                    </motion.a>

                    <motion.a
                      {...fadeInUp}
                      transition={{ delay: 0.1 }}
                      href="https://linkedin.com/in/atharvakanawade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-6 rounded-xl ${
                        isDark
                          ? 'bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40'
                          : 'bg-white border border-gray-200 hover:border-cyan-400'
                      } backdrop-blur transition-all group`}
                    >
                      <Linkedin
                        className="mx-auto mb-4 text-[#0A66C2] group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        LinkedIn
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Connect with me
                      </p>
                    </motion.a>

                    <motion.a
                      {...fadeInUp}
                      transition={{ delay: 0.2 }}
                      href="https://github.com/05Atharva"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-6 rounded-xl ${
                        isDark
                          ? 'bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40'
                          : 'bg-white border border-gray-200 hover:border-cyan-400'
                      } backdrop-blur transition-all group`}
                    >
                      <Github
                        className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        GitHub
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Check out my code
                      </p>
                    </motion.a>

                    <motion.div
                      {...fadeInUp}
                      transition={{ delay: 0.3 }}
                      className={`p-6 rounded-xl ${
                        isDark
                          ? 'bg-slate-800/50 border border-cyan-500/20'
                          : 'bg-white border border-gray-200'
                      } backdrop-blur`}
                    >
                      <MapPin className="text-cyan-400 mx-auto mb-4" size={32} />
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        Location
                      </h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Pune, India
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        } mt-1`}
                      >
                        +91 975385785
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Resume button in contact */}
                  <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center space-x-6 relative z-[100]"
                  >
                    <button
                      onClick={() => setShowResumeMenu(true)}
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all inline-flex items-center space-x-2"
                    >
                      <FileText size={20} />
                      <span>Download Resume</span>
                      <ChevronDown
                        size={18}
                        className={`transform transition-transform ${
                          showResumeMenu ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </motion.div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer
          className={`relative z-10 py-8 ${
            isDark
              ? 'bg-slate-900/50 border-t border-cyan-500/20'
              : 'bg-white/50 border-t border-gray-200'
          } backdrop-blur`}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Atharva Kanawade. Built with Next.js, TypeScript & Tailwind CSS.
            </p>
            <p
              className={`text-sm ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              } mt-2`}
            >
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
