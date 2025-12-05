"use client";

import React, { useEffect, useState } from "react";
import { Mail, Linkedin, FileText, Menu, X, Briefcase } from "lucide-react";

/* Drive links and resume paths (your provided links) */
const DRIVE_LINK_VIDEO =
  "https://drive.google.com/drive/folders/1w2jiOJnn6IRJDB_DMzEw-r3A4xE9LFUc?usp=sharing";
const DRIVE_LINK_3D =
  "https://drive.google.com/drive/folders/1FlDev0bTpT8CeDiiyRBwA-dk4_ykIKRQ?usp=sharing";

const RESUME_UAV = "/resume-1.pdf";
const RESUME_ELECTRONIC = "/resume-2.pdf";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

type ExpItem = {
  role: string;
  period: string;
  detail: string;
};

export default function HomePage(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastText, setToastText] = useState("");

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const copyEmail = async (): Promise<void> => {
    const email = "shindeadi0123@gmail.com";
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setToastText(email);
    } catch {
      setToastText("Failed to copy — " + email);
    }
    setTimeout(() => setToastText(""), 3000);
  };

  const aboutSummary =
    "UAV Systems Engineer and FPV Drone Pilot with hands-on experience in autonomous quadcopters, flight tuning, telemetry systems and CAD-based design. Skilled in Pixhawk, SpeedyBee, MAVLink, Mission Planner and Fusion 360. Led Team Vajra to World Rank 3 (Technoxian 2025).";

  const projects = [
    {
      title: "Autonomous Quadcopter — Delivery Application",
      detail:
        "Built an autonomous delivery drone using CrossFlight flight controller and MAVLink telemetry. Implemented waypoint navigation and mission execution via Mission Planner.",
    },
    {
      title: "Low-Cost HC-12 Telemetry Kit for UAVs",
      detail:
        "Developed a budget telemetry system using HC-12 (433 MHz), integrated with Pixhawk to stream GPS, battery and attitude data with reliable LOS range up to ~1 km.",
    },
    {
      title: "MBT-Based ADAS System (Model-Based Testing)",
      detail:
        "Model-based design of ADAS modules (lane detection, ACC, obstacle detection) in MATLAB/Simulink with MIL/SIL workflows and code-generation-ready models.",
    },
    {
      title: "5-Inch FPV Racing Drone",
      detail:
        "Performance-tuned 5-inch racing drone on SpeedyBee F405 V3; advanced PID tuning for agility and precision.",
    },
    {
      title: "3-Inch Indoor Micro FPV Drone",
      detail:
        "Lightweight 3-inch drone optimized for tight indoor flying with low-latency control.",
    },
    {
      title: "Water Surface Cleaning Bot",
      detail:
        "Fusion 360–designed autonomous water-surface cleaning bot — SIH internal winner.",
    },
    {
      title: "Material Handling Bot with 4-DOF Arm",
      detail:
        "ESP32-based robot with PID motor control, ultrasonic obstacle detection and smartphone control for warehouse tasks.",
    },
    {
      title: "Pneumatic Switch Automation",
      detail:
        "Designed pneumatic automation systems for utility vehicles using AutoCAD and Fusion 360.",
    },
  ];

  const experience: ExpItem[] = [
    {
      role: "Team Lead – UAV & Drone Projects, Team Vajra (MMCOE)",
      period: "2023 – Present",
      detail:
        "Led UAV team: managed end-to-end UAV development (Pixhawk/APM/SpeedyBee), flight tuning, autonomous missions and team mentoring. Piloted to World Rank 3 at Technoxian Drone Racing 2025.",
    },
    {
      role: "Design & Automation Intern – VVS System and Solution",
      period: "Jan 2025 – Apr 2025",
      detail:
        "Designed CAD models and automated pneumatic switch systems for utility vehicles; improved design-for-maintenance workflows using Fusion 360 & AutoCAD.",
    },
    
  ];

  const achievements = [
    "World Rank 3 & AIR 2 — Technoxian Drone Racing 2025",
    "1st Place — Uddan 2K23 Drone Competition",
    "2nd Place — MMCOE Dexterity 2K24 (Drone Simulator)",
    "Level 2 Cleared — AeroGCS Global Competition",
    "1st Place (Internal) — Smart India Hackathon 2024",
  ];

  const skills = [
    {
      title: "UAV & Drone Systems",
      items: [
        "FPV Racing",
        "PID Tuning",
        "Autonomous Navigation",
        "Telemetry Integration",
        "Mission Planner",
        "Betaflight",
        "Pixhawk",
        "APM",
        "SpeedyBee",
      ],
    },
    {
      title: "Design & CAD",
      items: ["Fusion 360", "AutoCAD", "3D Modelling", "Mechanical Design"],
    },
    {
      title: "Embedded Systems",
      items: ["ESP32", "Arduino", "Sensors", "PCB Handling"],
    },
    {
      title: "Programming & Tools",
      items: ["Python", "C/C++", "MATLAB", "Linux", "Arduino IDE"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* toast */}
      {toastText && (
        <div className="fixed top-4 right-4 bg-green-600 px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {toastText}
        </div>
      )}

      {/* navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-700/50 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Aditya Shinde
          </div>

          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
            <button onClick={() => scrollToSection("achievements")}>Achievements</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("media")}>Media</button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen((s) => !s)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-700 p-4 space-y-3">
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("achievements")}>Achievements</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("media")}>Media</button>
        </div>
      )}

      {/* hero */}
      <header className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6">
              <img
                src="/profile.jpg"
                alt="Aditya"
                className="w-32 h-32 rounded-full border-4 border-slate-700 object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Aditya Shinde
                  </span>
                </h2>
                <p className="text-blue-300 font-semibold">UAV Systems Engineer | FPV Drone Pilot</p>
              </div>
            </div>

            <p className="mt-4 text-slate-300">{aboutSummary}</p>

            <div className="mt-6 flex gap-4">
              <a
                href={RESUME_UAV}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 rounded-lg"
              >
                <FileText size={18} /> UAV Resume
              </a>

              <a
                href={RESUME_ELECTRONIC}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 rounded-lg"
              >
                <FileText size={18} /> Electronic Resume
              </a>
            </div>
          </div>

          {/* Right: Contact + compact experience card */}
          <aside id="contact-section" className="bg-slate-800/60 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold mb-2">Contact</h3>

            <div className="flex flex-col gap-3 mb-4">
              <button onClick={copyEmail} className="w-full inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg">
                <Mail size={16} /> shindeadi0123@gmail.com
              </button>

              <a href="https://www.linkedin.com/in/adityashinde9" target="_blank" rel="noreferrer" className="w-full inline-flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-lg">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

             
          </aside>
        </div>
      </header>

      {/* projects */}
      <section id="projects" className="py-12 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <article key={idx} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">{p.title}</h4>
                <p className="text-slate-300 text-sm">{p.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* experience (cards only) */}
      <section id="experience" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((e, i) => (
              <div key={i} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{e.role}</h3>
                    <p className="text-sm text-slate-400">{e.period}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* achievements */}
      <section id="achievements" className="py-12 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-slate-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((cat, i) => (
              <div key={i} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                <h4 className="font-semibold mb-3">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <span key={it} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* media */}
      <section id="media" className="py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Media</h2>
          <p className="text-slate-400 mb-6">3D models and flight footage.</p>
          <div className="flex justify-center gap-4">
            <a href={DRIVE_LINK_3D} target="_blank" rel="noreferrer" className="px-6 py-3 bg-indigo-600 rounded-lg">
              3D Model Drive Folder
            </a>
            <a href={DRIVE_LINK_VIDEO} target="_blank" rel="noreferrer" className="px-6 py-3 bg-rose-600 rounded-lg">
              Flight Video Drive Folder
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-slate-700 text-center text-slate-400">
        © 2025 Aditya Shinde — UAV Systems Engineer & FPV Drone Pilot
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
