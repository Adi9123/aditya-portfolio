"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown } from "lucide-react";

// Type for scrollToSection parameter
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Portfolio = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      category: "UAV / Autonomy",
      title: "Autonomous Quadcopter",
      emoji: "🛰️",
      description:
        "Autonomous delivery drone using CrossFlight flight controller and custom low-cost telemetry module, enabling waypoint navigation and real-time mission control for short-range logistics.",
      tags: ["CrossFlight FC", "Waypoint Navigation", "MAVLink Telemetry", "Mission Planner", "Autonomous Flight"],
    },
    {
      category: "FPV / Racing",
      title: "5-Inch FPV Racing Drone",
      emoji: "🏁",
      description:
        "High-performance 5-inch racing drone built on SpeedyBee F405 V3 flight controller, custom-tuned for rapid acceleration, sharp cornering, and stable control in competitive racing environments.",
      tags: ["SpeedyBee F405 V3", "PID Tuning", "FPV System", "Racing Frame", "BetaFlight"],
    },
    {
      category: "FPV / Micro",
      title: "3-Inch Micro FPV Drone",
      emoji: "⚡",
      description:
        "Lightweight 3-inch FPV platform engineered for indoor and tight-space flying, featuring optimized power efficiency, low-latency response, and precise maneuvering capabilities.",
      tags: ["SpeedyBee Mini FC", "Indoor Flight", "PID Tuning", "Lightweight Frame", "Efficient Power"],
    },
    {
      category: "Robotics / Automation",
      title: "Line-Following Material Handling Bot",
      emoji: "🤖",
      description:
        "ESP32-based autonomous robot with IR sensor array, PID motor control, 4-DOF robotic arm, and ultrasonic obstacle detection for warehouse operations.",
      tags: ["ESP32", "PID Control", "Wi-Fi/Bluetooth", "Robotic Arm", "Autonomous Navigation"],
    },
    {
      category: "Environmental / IoT",
      title: "Autonomous Water Surface Cleaning Bot",
      emoji: "🌊",
      description:
        "Autonomous surface cleaning bot designed in Fusion 360 with real-time mobile control interface. Secured Rank 1 in Internal Smart India Hackathon.",
      tags: ["Fusion 360", "Mobile Control", "SIH Winner", "Eco-Friendly", "Automation"],
    },
    {
      category: "Design / CAD",
      title: "Pneumatic Switch Automation System",
      emoji: "⚙️",
      description:
        "Designed and automated pneumatic switch systems for utility vehicles using AutoCAD and Fusion 360, improving operational efficiency.",
      tags: ["AutoCAD", "Fusion 360", "Pneumatic Systems", "Industrial Design", "Automation"],
    },
  ];

  const achievements = [
    { title: "World Rank 3 & AIR 2", event: "Technoxian Drone Racing 2025", detail: "32 international teams" },
    { title: "1st Place", event: "Uddan 2K23 Drone Competition", detail: "College Championship" },
    { title: "2nd Place", event: "MMCOE Dexterity 2K24", detail: "Drone Racing Simulator" },
    { title: "Level 2 Cleared", event: "AeroGCS Global Competition", detail: "International Event" },
    { title: "1st Place (Internal)", event: "Smart India Hackathon 2024", detail: "Water Cleaning Bot" },
  ];

  const skills: Record<string, string[]> = {
    "UAV & Drone Systems": [
      "FPV Drone Racing",
      "Flight Tuning",
      "Autonomous Navigation",
      "Telemetry Integration",
      "Mission Planner",
      "BetaFlight",
      "Pixhawk",
      "APM",
      "SpeedyBee",
      "CrossFlight",
    ],
    "Design & Automation": ["AutoCAD", "Fusion 360", "Pneumatic Systems", "Mechanical Design", "CAD Modeling"],
    "Embedded Systems": ["ESP32", "Arduino", "Microcontrollers", "Sensors & Actuators", "Circuit Design", "PCB Handling"],
    "Programming & Tools": ["Python", "C/C++", "MATLAB", "Git", "Linux", "Arduino IDE", "MAVLink"],
    "Soft Skills": ["Team Leadership", "Project Management", "Problem Solving", "Technical Documentation"],
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AS
          </div>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection("projects")} className="hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection("achievements")} className="hover:text-blue-400">Achievements</button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-blue-400">Skills</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400">Contact</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center max-w-4xl">
          <div className="text-7xl mb-4">👨‍✈️</div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Hi, I'm Aditya Shinde.
          </h1>
          <p className="text-2xl text-gray-300 mt-4">UAV Systems Engineer | FPV Drone Pilot</p>
          <p className="text-lg text-gray-400 mt-4">
            World Rank 3 in FPV Racing • Vice-Captain RC Drone Club • Autonomous Aerial Systems Developer
          </p>

          <div className="flex gap-4 justify-center mt-10">
            <a href="https://www.linkedin.com/in/adityashinde9" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:shindeadi0123@mail.com" className="p-3 bg-gray-800 rounded-full hover:bg-purple-600">
              <Mail size={24} />
            </a>
            <a href="tel:+918626080604" className="p-3 bg-gray-800 rounded-full hover:bg-green-600">
              <Phone size={24} />
            </a>
          </div>

          <button onClick={() => scrollToSection("projects")} className="mt-10 animate-bounce">
            <ChevronDown size={36} className="text-gray-400" />
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Things I've built</h2>
        <p className="text-gray-400 text-center mt-4 mb-12">
          A mix of UAV systems, FPV drones, and autonomous robotics.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition">
              <div className="text-5xl">{p.emoji}</div>
              <p className="text-blue-400 text-sm mt-2 uppercase">{p.category}</p>
              <h3 className="text-2xl font-bold mt-2">{p.title}</h3>
              <p className="text-gray-300 mt-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, t) => (
                  <span key={t} className="px-3 py-1 bg-gray-800 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Achievements</h2>
        <p className="text-gray-400 text-center mt-4 mb-12">
          International rankings, competition wins & innovation awards.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition">
              <div className="text-3xl">🏆</div>
              <h3 className="text-xl font-bold text-blue-400 mt-2">{a.title}</h3>
              <p className="text-gray-300">{a.event}</p>
              <p className="text-gray-500 text-sm">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Skills & Expertise</h2>
        <p className="text-gray-400 text-center mt-4 mb-12">
          UAV systems, embedded engineering & automation.
        </p>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-blue-400">{category}</h3>

              <div className="flex flex-wrap gap-3 mt-4">
                {items.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Experience</h2>

        <div className="space-y-8 mt-12">
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-blue-400">Team Lead – UAV & Drone Projects</h3>
            <p className="text-lg text-gray-300">Team Vajra, MMCOE</p>
            <p className="text-gray-400 mt-2">2023 – Present</p>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>• Led drone team to World Rank 3 in Technoxian 2025 FPV racing</li>
              <li>• Managed UAV development using Pixhawk, APM, SpeedyBee controllers</li>
              <li>• Supervised flight tuning, embedded systems integration & testing</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-purple-400">Design & Automation Intern</h3>
            <p className="text-lg text-gray-300">VVS System and Solution</p>
            <p className="text-gray-400 mt-2">Jan 2025 – Apr 2025</p>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li>• Built CAD models using AutoCAD & Fusion 360</li>
              <li>• Designed pneumatic actuator systems for utility vehicles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold">Let's Connect</h2>
        <p className="text-xl text-gray-400 mt-4 mb-12">
          Interested in UAV systems, FPV racing, or collaborations?
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="mailto:shindeadi0123@mail.com" className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700">
            <Mail size={20} /> Email Me
          </a>
          <a href="https://www.linkedin.com/in/adityashinde9" target="_blank" className="px-8 py-4 bg-gray-800 rounded-xl font-semibold hover:bg-gray-700">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="tel:+918626080604" className="px-8 py-4 bg-green-600 rounded-xl font-semibold hover:bg-green-700">
            <Phone size={20} /> Call Me
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-gray-800 text-gray-500">
        © 2025 Aditya Shinde — UAV Systems Engineer
      </footer>
    </div>
  );
};

export default Portfolio;
