import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, FileText, Menu, X } from 'lucide-react';

export default function EnhancedPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastText, setToastText] = useState('');

  const copyEmail = async () => {
    const email = 'shindeadi0123@gmail.com';
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setToastText(email);
    } catch (err) {
      setToastText('Failed to copy — ' + email);
    }
    setTimeout(() => setToastText(''), 3000);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Projects exactly as on live site
  const projects = [
    {
      icon: '🛰️',
      category: 'UAV / Autonomy',
      title: 'Autonomous Quadcopter',
      description: 'Autonomous delivery drone using CrossFlight flight controller and MAVLink telemetry for waypoint navigation.',
      tags: ['CrossFlight', 'MAVLink', 'Mission Planner', 'Pixhawk', 'Autonomous'],
    },
    {
      icon: '🏁',
      category: 'FPV / Racing',
      title: '5-Inch FPV Racing Drone',
      description: 'High-performance racing drone built on SpeedyBee F405 V3 with custom PID tuning.',
      tags: ['SpeedyBee F405', 'PID Tuning', 'FPV', 'Betaflight'],
    },
    {
      icon: '⚡',
      category: 'FPV / Micro',
      title: '3-Inch Indoor Micro Drone',
      description: 'Lightweight 3-inch drone optimized for tight indoor flying with efficient power design.',
      tags: ['Micro Drone', 'Indoor FPV', 'SpeedyBee', 'Lightweight'],
    },
    {
      icon: '🤖',
      category: 'Robotics / Automation',
      title: 'Material Handling Bot',
      description: 'ESP32-based robot with obstacle detection, PID motor control & robotic arm.',
      tags: ['ESP32', 'PID', 'Navigation', 'Automation'],
    },
    {
      icon: '🌊',
      category: 'Environmental / IoT',
      title: 'Water Surface Cleaning Bot',
      description: 'Fusion 360–designed autonomous cleaning bot that won SIH Internal Round.',
      tags: ['Fusion 360', 'IoT', 'SIH Winner'],
    },
    {
      icon: '⚙️',
      category: 'Design / CAD',
      title: 'Pneumatic Switch Automation',
      description: 'Automated pneumatic switch systems for utility vehicles using AutoCAD & Fusion 360.',
      tags: ['Fusion 360', 'AutoCAD', 'Pneumatics'],
    },
  ];

  // Achievements exactly as on live site
  const achievements = [
    { title: 'World Rank 3 & AIR 2', event: 'Technoxian Drone Racing 2025', detail: 'Among 32 international teams' },
    { title: '1st Place', event: 'Uddan 2K23 Drone Competition', detail: 'College Championship' },
    { title: '2nd Place', event: 'MMCOE Dexterity 2K24', detail: 'Drone Racing Simulator' },
    { title: 'Level 2 Cleared', event: 'AeroGCS Global Competition', detail: 'International Event' },
    { title: '1st Place (Internal)', event: 'Smart India Hackathon 2024', detail: 'Water Cleaning Bot' },
  ];

  // Skills exactly as on live site
  const skillCategories = [
    {
      title: 'UAV & Drone Systems',
      skills: ['FPV Racing', 'PID Tuning', 'Autonomous Navigation', 'Telemetry', 'Mission Planner', 'Betaflight', 'Pixhawk', 'APM', 'SpeedyBee'],
    },
    { title: 'Design & CAD', skills: ['Fusion 360', 'AutoCAD', 'Mechanical Design'] },
    { title: 'Embedded Systems', skills: ['ESP32', 'Arduino', 'Sensors', 'PCB Handling'] },
    { title: 'Programming', skills: ['Python', 'C/C++', 'MATLAB', 'Linux'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Toast */}
      {toastText && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {toastText}
        </div>
      )}

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Aditya Shinde
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#projects" className="block py-2 hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#achievements" className="block py-2 hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Achievements</a>
              <a href="#skills" className="block py-2 hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block py-2 hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-800">
                <img src="/profile.jpg" alt="Aditya Shinde - Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="text-center md:text-left max-w-2xl">
              <div className="text-5xl mb-4">👨‍✈️</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Aditya Shinde</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-400 font-semibold mb-4">UAV Systems Engineer | FPV Drone Pilot</p>
              <p className="text-lg text-slate-300 mb-8">World Rank 3 FPV Pilot • Vice-Captain RC Drone Club • Autonomous Aerial Systems Developer</p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="/resume-uav.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <FileText size={20} /> Resume – UAV Engineer
                </a>
                <a href="/resume-electronics.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                  <FileText size={20} /> Resume – Electronics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Things I've Built</h2>
          <p className="text-center text-slate-400 mb-12">UAV systems, FPV drones & embedded robotics</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all hover:scale-105">
                <div className="text-4xl mb-4">{project.icon}</div>
                <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700 text-xs rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Achievements</h2>
          <p className="text-center text-slate-400 mb-12">Competitions, international rankings & awards</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/30">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">{a.title}</h3>
                <p className="text-blue-400 mb-1">{a.event}</p>
                <p className="text-slate-400 text-sm">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Skills & Expertise</h2>
          <p className="text-center text-slate-400 mb-12">Technical capabilities & tools</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400 mb-8">Interested in UAV systems, FPV racing or collaboration?</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={copyEmail} className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Mail size={20} /> Email Me
            </button>
            <a href="https://www.linkedin.com/in/adityashinde9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2025 Aditya Shinde — UAV Systems Engineer | FPV Drone Pilot</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
