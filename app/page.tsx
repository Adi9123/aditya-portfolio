"use client";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown } from "lucide-react";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      category: "UAV / Autonomy",
      title: "Autonomous Quadcopter",
      emoji: "🛰️",
      description: "Autonomous delivery drone using CrossFlight flight controller and custom low-cost telemetry module, enabling waypoint navigation and real-time mission control for short-range logistics.",
      tags: ["CrossFlight FC", "Waypoint Navigation", "MAVLink Telemetry", "Mission Planner", "Autonomous Flight"]
    },
    {
      category: "FPV / Racing",
      title: "5-Inch FPV Racing Drone",
      emoji: "🏁",
      description: "High-performance 5-inch racing drone built on SpeedyBee F405 V3 flight controller, custom-tuned for rapid acceleration, sharp cornering, and stable control in competitive racing environments.",
      tags: ["SpeedyBee F405 V3", "PID Tuning", "FPV System", "Racing Frame", "BetaFlight"]
    },
    {
      category: "FPV / Micro",
      title: "3-Inch Micro FPV Drone",
      emoji: "⚡",
      description: "Lightweight 3-inch FPV platform engineered for indoor and tight-space flying, featuring optimized power efficiency, low-latency response, and precise maneuvering capabilities.",
      tags: ["SpeedyBee Mini FC", "Indoor Flight", "PID Tuning", "Lightweight Frame", "Efficient Power"]
    },
    {
      category: "Robotics / Automation",
      title: "Line-Following Material Handling Bot",
      emoji: "🤖",
      description: "ESP32-based autonomous robot with IR sensor array, PID motor control, 4-DOF robotic arm controlled via smartphone, and ultrasonic obstacle detection for warehouse operations.",
      tags: ["ESP32", "PID Control", "Wi-Fi/Bluetooth", "Robotic Arm", "Autonomous Navigation"]
    },
    {
      category: "Environmental / IoT",
      title: "Autonomous Water Surface Cleaning Bot",
      emoji: "🌊",
      description: "Autonomous surface cleaning bot designed in Fusion 360 with real-time mobile control interface. Secured Rank 1 in Internal Smart India Hackathon for eco-friendly automation innovation.",
      tags: ["Fusion 360", "Mobile Control", "SIH Winner", "Eco-Friendly", "Automation"]
    },
    {
      category: "Design / CAD",
      title: "Pneumatic Switch Automation System",
      emoji: "⚙️",
      description: "Designed and automated pneumatic switch systems for utility vehicles using AutoCAD and Fusion 360, improving operational efficiency and maintenance workflows.",
      tags: ["AutoCAD", "Fusion 360", "Pneumatic Systems", "Industrial Design", "Automation"]
    }
  ];

  const achievements = [
    { title: "World Rank 3 & AIR 2", event: "Technoxian Drone Racing 2025", detail: "32 international teams" },
    { title: "1st Place", event: "Uddan 2K23 Drone Competition", detail: "College Championship" },
    { title: "2nd Place", event: "MMCOE Dexterity 2K24", detail: "Drone Racing Simulator" },
    { title: "Level 2 Cleared", event: "AeroGCS Global Competition", detail: "International Event" },
    { title: "1st Place (Internal)", event: "Smart India Hackathon 2024", detail: "Water Cleaning Bot" }
  ];

  const skills = {
    "UAV & Drone Systems": ["FPV Drone Racing", "Flight Tuning", "Autonomous Navigation", "Telemetry Integration", "Mission Planner", "BetaFlight", "Pixhawk", "APM", "SpeedyBee", "CrossFlight"],
    "Design & Automation": ["AutoCAD", "Fusion 360", "Pneumatic Systems", "Mechanical Design", "CAD Modeling"],
    "Embedded Systems": ["ESP32", "Arduino", "Microcontrollers", "Sensors & Actuators", "Circuit Design", "PCB Handling"],
    "Programming & Tools": ["Python", "C/C++", "MATLAB", "Git", "Linux", "Arduino IDE", "MAVLink"],
    "Soft Skills": ["Team Leadership", "Project Management", "Problem Solving", "Technical Documentation"]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AS
          </div>
          <div className="flex gap-6 items-center">
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('achievements')} className="hover:text-blue-400 transition-colors">Achievements</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <div className="mb-6 inline-block">
            <div className="text-7xl mb-4">👨‍✈️</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Hi, I'm Aditya Shinde.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            UAV Systems Engineer | FPV Drone Pilot
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            World Rank 3 in FPV Racing • Vice-Captain RC Drone Club • Building autonomous aerial systems with precision and passion
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://www.linkedin.com/in/adityashinde9" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:shindeadi0123@mail.com" className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="tel:+918626080604" className="p-3 bg-gray-800 hover:bg-green-600 rounded-full transition-all hover:scale-110">
              <Phone size={24} />
            </a>
          </div>
          <button onClick={() => scrollToSection('projects')} className="animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Things I've built.</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          A mix of UAV systems, FPV racing drones, autonomous robots, and real-world engineering work.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{project.emoji}</div>
                <div className="flex-1">
                  <div className="text-xs text-blue-400 uppercase tracking-wider mb-2 font-semibold">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-blue-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Achievements.</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          International rankings, competition wins, and recognition in UAV systems.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">{achievement.title}</h3>
              <p className="text-gray-300 font-medium mb-1">{achievement.event}</p>
              <p className="text-gray-500 text-sm">{achievement.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Skills & Expertise.</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Technical capabilities across UAV systems, embedded engineering, and automation.
        </p>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-blue-600 transition-all hover:scale-105 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">Experience.</h2>
        <div className="space-y-8">
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Team Lead – UAV & Drone Projects</h3>
                <p className="text-xl text-gray-300">Team Vajra, MMCOE</p>
              </div>
              <span className="text-gray-400">2023 – Present</span>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Led drone team to World Rank 3 in Technoxian FPV racing competition</li>
              <li>• Managed end-to-end UAV development using Pixhawk, APM, and SpeedyBee flight controllers</li>
              <li>• Supervised flight tuning, testing, and integration of embedded systems</li>
            </ul>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-purple-500 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">Design and Automation Intern</h3>
                <p className="text-xl text-gray-300">VVS System and Solution</p>
              </div>
              <span className="text-gray-400">Jan 2025 – Apr 2025</span>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Developed precise CAD models using AutoCAD and Fusion 360</li>
              <li>• Designed and automated pneumatic switch systems for utility vehicles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Connect.</h2>
        <p className="text-xl text-gray-400 mb-12">
          Interested in UAV systems, FPV racing, or collaboration opportunities? Let's talk.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="mailto:shindeadi0123@mail.com" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
            <Mail size={20} />
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/adityashinde9" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a href="tel:+918626080604" className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
            <Phone size={20} />
            Call Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500">
        <p>© 2025 Aditya Shinde. Built with React + Tailwind CSS.</p>
        <p className="text-sm mt-2">UAV Systems Engineer | World Rank 3 FPV Pilot</p>
      </footer>
    </div>
  );
};

export default Portfolio;