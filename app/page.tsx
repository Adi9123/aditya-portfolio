"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Portfolio() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("hero");

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
        "Autonomous delivery drone using CrossFlight flight controller and custom low-cost telemetry module, enabling waypoint navigation and real-time mission control.",
      tags: [
        "CrossFlight FC",
        "Waypoint Navigation",
        "MAVLink Telemetry",
        "Mission Planner",
        "Autonomous Flight",
      ],
    },
    {
      category: "FPV / Racing",
      title: "5-Inch FPV Racing Drone",
      emoji: "🏁",
      description:
        "High-performance racing drone built on SpeedyBee F405 V3 flight controller, custom-tuned for acceleration and stability.",
      tags: [
        "SpeedyBee F405 V3",
        "PID Tuning",
        "FPV System",
        "Racing Frame",
        "BetaFlight",
      ],
    },
    {
      category: "FPV / Micro",
      title: "3-Inch Micro FPV Drone",
      emoji: "⚡",
      description:
        "Lightweight 3-inch FPV platform engineered for indoor and tight-space flying with optimized power efficiency.",
      tags: [
        "SpeedyBee Mini FC",
        "Indoor Flight",
        "PID Tuning",
        "Lightweight Frame",
        "Efficient Power",
      ],
    },
    {
      category: "Robotics / Automation",
      title: "Line-Following Material Handling Bot",
      emoji: "🤖",
      description:
        "ESP32-based autonomous robot with IR sensor array, PID motor control, 4-DOF robotic arm and ultrasonic obstacle detection.",
      tags: [
        "ESP32",
        "PID Control",
        "Wi-Fi/Bluetooth",
        "Robotic Arm",
        "Autonomous Navigation",
      ],
    },
    {
      category: "Environmental / IoT",
      title: "Autonomous Water Surface Cleaning Bot",
      emoji: "🌊",
      description:
        "Fusion 360 designed autonomous cleaning bot. Secured Rank 1 at Smart India Hackathon Internal Round.",
      tags: ["Fusion 360", "Mobile Control", "SIH Winner", "Automation"],
    },
    {
      category: "Design / CAD",
      title: "Pneumatic Switch Automation System",
      emoji: "⚙️",
      description:
        "Designed automated pneumatic switch systems for utility vehicles, improving operational efficiency.",
      tags: [
        "AutoCAD",
        "Fusion 360",
        "Pneumatic Systems",
        "Industrial Design",
        "Automation",
      ],
    },
  ];

  // -------------------- ACHIEVEMENTS -----------------------
  const achievements = [
    {
      title: "World Rank 3 & AIR 2",
      event: "Technoxian Drone Racing 2025",
      detail: "Among 32 international teams",
    },
    {
      title: "1st Place",
      event: "Uddan 2K23 Drone Competition",
      detail: "College championship",
    },
    {
      title: "2nd Place",
      event: "MMCOE Dexterity 2K24",
      detail: "Drone Racing Simulator",
    },
    {
      title: "Level 2 Cleared",
      event: "AeroGCS Global Competition",
      detail: "International event",
    },
    {
      title: "1st Place (Internal)",
      event: "Smart India Hackathon 2024",
      detail: "Water Cleaning Bot",
    },
  ];

  // -------------------- SKILLS -----------------------
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
    "Design & Automation": [
      "AutoCAD",
      "Fusion 360",
      "Pneumatic Systems",
      "Mechanical Design",
      "CAD Modeling",
    ],
    "Embedded Systems": [
      "ESP32",
      "Arduino",
      "Microcontrollers",
      "Sensors & Actuators",
      "Circuit Design",
      "PCB Handling",
    ],
    "Programming & Tools": [
      "Python",
      "C/C++",
      "MATLAB",
      "Git",
      "Linux",
      "Arduino IDE",
      "MAVLink",
    ],
    "Soft Skills": [
      "Team Leadership",
      "Project Management",
      "Problem Solving",
      "Technical Documentation",
    ],
  };

  // -------------------- RENDER -----------------------
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            AS
          </div>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection("projects")} className="hover:text-blue-400">
              Projects
            </button>
            <button onClick={() => scrollToSection("achievements")} className="hover:text-blue-400">
              Achievements
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-blue-400">
              Skills
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="text-7xl mb-6">👨‍✈️</div>

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Hi, I'm Aditya Shinde.
        </h1>

        <p className="text-2xl text-gray-300 mt-4">
          UAV Systems Engineer | FPV Drone Pilot
        </p>

        <p className="text-gray-400 max-w-2xl mt-4">
          World Rank 3 FPV Pilot • Vice-Captain RC Drone Club • Autonomous Aerial Systems Developer
        </p>

        {/* ---------- HERO ACTION BUTTONS ---------- */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

          <a
            href="https://www.linkedin.com/in/adityashinde9"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all flex items-center justify-center"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:shindeadi0123@mail.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all flex items-center justify-center"
          >
            <Mail size={24} />
          </a>

          <a
            href="tel:+918626080604"
            className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-all flex items-center justify-center"
          >
            <Phone size={24} />
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
        <h2 className="text-5xl font-bold text-center">Things I've built</h2>
        <p className="text-gray-400 text-center mt-2 mb-14">
          UAV systems, FPV drones & autonomous robotics projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-all"
            >
              <div className="text-5xl">{p.emoji}</div>
              <p className="text-blue-400 text-sm uppercase mt-2">{p.category}</p>
              <h3 className="text-2xl font-bold mt-3">{p.title}</h3>
              <p className="text-gray-300 mt-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Achievements</h2>
        <p className="text-gray-400 text-center mt-2 mb-14">
          International rankings, hackathons & drone racing accomplishments.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
            >
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
        <p className="text-gray-400 text-center mt-2 mb-14">
          Technical expertise across UAV systems, embedded electronics & automation.
        </p>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="bg-gray-900/60 border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-blue-400">{category}</h3>

              <div className="flex flex-wrap gap-3 mt-4">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 mt-4 mb-12">
          Interested in UAV systems, FPV drones or collaboration?
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="mailto:shindeadi0123@mail.com"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold flex items-center justify-center"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/adityashinde9"
            target="_blank"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold flex items-center justify-center"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="tel:+918626080604"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold flex items-center justify-center"
          >
            <Phone size={20} />
            Call Me
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
