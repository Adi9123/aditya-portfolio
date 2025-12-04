{/* Hero action buttons (full replacement with 2 resume downloads) */}
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

  {/* Email */}
  <a
    href="mailto:shindeadi0123@mail.com"
    className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all flex items-center justify-center"
  >
    <Mail size={24} />
  </a>

  {/* Phone */}
  <a
    href="tel:+918626080604"
    className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-all flex items-center justify-center"
  >
    <Phone size={24} />
  </a>

  {/* Resume – UAV Engineer */}
  <a
    href="/resume-uav.pdf"
    download
    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all"
  >
    <ExternalLink size={18} />
    Resume – UAV Engineer
  </a>

  {/* Resume – Electronics/General */}
  <a
    href="/resume-electronics.pdf"
    download
    className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition-all"
  >
    <ExternalLink size={18} />
    Resume – Electronics
  </a>

</div>
