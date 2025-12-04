"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Portfolio() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -------------------- PROJECTS -----------------------
  const projects = [
    {
      category: "UAV / Autonomy",
      title: "Autonomous Quadcopter",
      emoji: "🛰️",
      description:
        "Autonomous delivery drone using CrossFlight flight controller and MAVLink telemetry for waypoint navigation.",
      tags: ["CrossFlight", "MAVLink", "Mission Planner", "Pixhawk", "Autonomous"],
    },
    {
      category: "FPV / Racing",
      title: "5-Inch FPV Racing Drone",
      emoji: "🏁",
      description:
        "High-performance racing drone built on SpeedyBee F405 V3 with custom PID tuning.",
      tags: ["SpeedyBee F405", "PID Tuning", "FPV", "Betaflight"],
    },
    {
      category: "FPV / Micro",
      title: "3-Inch Indoor Micro Drone",
      emoji: "⚡",
      description:
        "Lightweight 3-inch drone optimized for tight indoor flying with efficient power design.",
      tags: ["Micro Drone", "Indoor FPV", "SpeedyBee", "Lightweight"],
    },
    {
      category: "Robotics / Automation",
      title: "Material Handling Bot",
      emoji: "🤖",
      description:
        "ESP32-based robot with obstacle detection, PID motor control & robotic arm.",
      tags: ["ESP32", "PID", "Navigation", "Automation"],
    },
    {
      category: "Environmental / IoT",
      title: "Water Surface Cleaning Bot",
      emoji: "🌊",
      description:
        "Fusion 360–designed autonomous cleaning bot that won SIH Internal Round.",
      tags: ["Fusion 360", "IoT", "SIH Winner"],
    },
    {
      category: "Design / CAD",
      title: "Pneumatic Switch Automation",
      emoji: "⚙️",
      description:
        "Automated pneumatic switch systems for utility vehicles using AutoCAD & Fusion 360.",
      tags: ["Fusion 360", "AutoCAD", "Pneumatics"],
    },
  ];

  const achievements = [
    { title: "World Rank 3 & AIR 2", event: "Technoxian Drone Racing 2025", detail: "Among 32 international teams" },
    { title: "1st Place", event: "Uddan 2K23 Drone Competition", detail: "College Championship" },
    { title: "2nd Place", event: "MMCOE Dexterity 2K24", detail: "Drone Racing Simulator" },
    { title: "Level 2 Cleared", event: "AeroGCS Global Competition", detail: "International Event" },
    { title: "1st Place (Internal)", event: "Smart India Hackathon 2024", detail: "Water Cleaning Bot" },
  ];

  const skills: Record<string, string[]> = {
    "UAV & Drone Systems": [
      "FPV Racing", "PID Tuning", "Autonomous Navigation", "Telemetry", "Mission Planner",
      "Betaflight", "Pixhawk", "APM", "SpeedyBee",
    ],
    "Design & CAD": ["Fusion 360", "AutoCAD", "Mechanical Design"],
    "Embedded Systems": ["ESP32", "Arduino", "Sensors", "PCB Handling"],
    "Programming": ["Python", "C/C++", "MATLAB", "Linux"],
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
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
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="text-7xl mb-6">👨‍✈️</div>

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Hi, I'm Aditya Shinde.
        </h1>

        <p className="text-2xl text-gray-300 mt-4">UAV Systems Engineer | FPV Drone Pilot</p>
        <p className="text-gray-400 max-w-2xl mt-4">
          World Rank 3 FPV Pilot • Vice-Captain RC Drone Club • Autonomous Aerial Systems Developer
        </p>

        {/* CONTACT BUTTONS — FIXED, NO PHONE */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adityashinde9"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all flex items-center justify-center"
          >
            <Linkedin size={24} />
          </a>

          {/* Email — FIXED To: Field */}
          <a
            href="mailto:shindeadi0123@mail.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all flex items-center justify-center"
            title="Email me"
          >
            <Mail size={24} />
          </a>

          {/* Resume – UAV */}
          <a
            href="/resume-uav.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all"
          >
            <ExternalLink size={18} />
            Resume – UAV Engineer
          </a>

          {/* Resume – Electronics */}
          <a
            href="/resume-electronics.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition-all"
          >
            <ExternalLink size={18} />
            Resume – Electronics
          </a>
        </div>

        <button onClick={() => scrollToSection("projects")} className="mt-12 animate-bounce">
          <ChevronDown size={36} className="text-gray-400" />
        </button>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Things I've Built</h2>
        <p className="text-gray-400 text-center mt-2 mb-14">UAV systems, FPV drones & embedded robotics.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all">
              <div className="text-5xl">{p.emoji}</div>
              <div className="text-blue-400 text-xs uppercase mt-2">{p.category}</div>
              <h3 className="text-2xl font-bold mt-3">{p.title}</h3>
              <p className="text-gray-300 mt-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Achievements</h2>
        <p className="text-gray-400 text-center mt-2 mb-14">Competitions, international rankings & awards.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
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
        <p className="text-gray-400 text-center mt-2 mb-14">Technical capabilities & tools.</p>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-blue-400">{category}</h3>

              <div className="flex flex-wrap gap-3 mt-4">
                {items.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT – NO PHONE */}
      <section id="contact" className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 mt-4 mb-12">Interested in UAV systems, FPV racing or collaboration?</p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          {/* Email Button */}
          <a
            href="mailto:shindeadi0123@mail.com"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adityashinde9"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-gray-800 text-gray-500">
        © 2025 Aditya Shinde — UAV Systems Engineer | FPV Drone Pilot
      </footer>
    </div>
  );
}
