import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cursor from "./Cursor";
import Galaxy from "./Galaxy";

export default function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      {/* CURSOR */}
      <Cursor />

      <div className={`font-sans transition duration-500 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}>
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About dark={dark} />
        <Project dark={dark}/>
        <Skills dark={dark} />
        <Contact dark={dark} />
        <Footer />
      </div>
    </>
  );
}

// =========================
// NAVBAR
// =========================
function Navbar({ dark, setDark }) {
  return (
    <nav className="flex justify-between items-center p-5 bg-black/50 backdrop-blur sticky top-0 z-50">
      <h1 className="text-xl font-bold text-cyan-400">MyPortfolio</h1>

      <div className="flex items-center gap-6 text-sm">
        <a href="#about">About</a>
        <a href="#projects">Project</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded-xl bg-cyan-400 text-black hover:scale-110 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

// =========================
// HERO
// =========================
function Hero() {
  const text = "Sheza Saffana";

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-5 relative overflow-hidden">

      {/* GALAXY */}
      <Galaxy />

      {/* FOTO */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-6 z-10"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-30"></div>

        <img
          src="/foto (2).jpg"
          alt="profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-cyan-400 relative z-10 shadow-2xl"
        />
      </motion.div>

      {/* NAMA */}
      <motion.h2 className="text-5xl font-bold mb-4 z-10">
        Halo, Saya{" "}
        <span className="text-cyan-400">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h2>

      <p className="text-gray-300 z-10">
        Seorang Pelajar yang Suka Mempelajari IT
      </p>

      <a href="#skills" className="z-10 mt-6">
        <button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl hover:scale-110 transition shadow-lg">
          Lihat Skills
        </button>
      </a>
    </section>
  );
}

// =========================
// ABOUT
// =========================
function About({ dark }) {
  const [active, setActive] = useState(null);

  const data = [
    { title: "Nama", value: "Sheza Saffana" },
    { title: "TTL", value: "Sabang, 06-02-2010" },
    { title: "SD", value: "SDN 1 Sabang (2016 - 2021)" },
    { title: "SMP", value: "Mahad Tahfiz Al-Ikhlas (2022 - 2024)" },
    { title: "SMA", value: "MAN 1 Banda Aceh (2025 - Sekarang)" },
  ];

  return (
    <section id="about" className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400 text-center">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`p-6 rounded-2xl cursor-pointer transition ${
              active === index
                ? "bg-gray-800 shadow-[0_0_25px_#22d3ee]"
                : dark
                ? "bg-gray-900 hover:bg-gray-800"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            <h3 className="text-cyan-400 font-bold">{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// =========================
// PROJECT
// =========================
function Project({ dark }) {
  const projects = [
    {
      title: "Website Portfolio Pribadi",
      desc: "Website portfolio modern dengan React, Tailwind, animasi, dark mode.",
       link: "#",
    },
  
  ];

  return (
    <section id="projects" className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-cyan-400">
        My Project
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transition transform hover:scale-105 ${
              dark ? "bg-gray-900 hover:bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {item.desc}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-400 hover:underline"
            >
              Lihat Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// =========================
// SKILL
// =========================

function Skills({ dark }) {
  const techSkills = [
    { name: "Microsoft Word", icon: "📝" },
    { name: "Canva", icon: "🎨" },
  ];

  const personalSkills = [
    { name: "Memanah", icon: "🏹" },
    { name: "Berenang", icon: "🏊" },
    { name: "Disiplin", icon: "🔥" },
    { name: "Kerja Sama", icon: "🤝" },
  ];

  return (
    <section id="skills" className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-cyan-400">
        My Skills
      </h2>

      {/* TECH */}
      <div className="mb-12">
        <h3 className="text-xl mb-6 text-cyan-300">💻 Tech Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl text-center bg-gray-900 shadow-lg hover:shadow-cyan-400/60 cursor-pointer"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PERSONAL */}
      <div>
        <h3 className="text-xl mb-6 text-pink-400">🌟 Personal Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl text-center bg-gray-900 shadow-lg hover:shadow-pink-400/60 cursor-pointer"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================
// CONTACT
// =========================
function Contact({ dark }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    instagram: "",
    github: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">
        Connect With Me
      </h2>

      <p className="text-gray-400 mb-6">
        Tertarik berteman denganku? Yuk hubungi aku !
      </p>

      <div className={`max-w-xl mx-auto mb-10 p-6 rounded-2xl ${
        dark ? "bg-gray-900" : "bg-white"
      }`}>
        <a 
  href="mailto:s.saffana@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="block hover:text-cyan-400 transition"
>
  📧 s.saffana@gmail.com
</a>

<a 
  href="https://instagram.com/shzasaffana_"
  target="_blank"
  rel="noopener noreferrer"
  className="block hover:text-pink-400 transition"
>
  📸 @shezasaff_
</a>

<a 
  href="https://github.com/shezasaffana06-arch"
  target="_blank"
  rel="noopener noreferrer"
  className="block hover:text-blue-400 transition"
>
  💻 github.com/shezasaffana06-arch
</a>
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        <input name="name" placeholder="Nama" onChange={handleChange} className="w-full p-3 rounded-xl bg-gray-800 text-white"/>
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-3 rounded-xl bg-gray-800 text-white"/>
        <input name="instagram" placeholder="Instagram" onChange={handleChange} className="w-full p-3 rounded-xl bg-gray-800 text-white"/>
        <input name="github" placeholder="Github" onChange={handleChange} className="w-full p-3 rounded-xl bg-gray-800 text-white"/>

        <button className="w-full bg-cyan-400 py-3 rounded-xl">
          Kirim 🚀
        </button>
      </div>
    </section>
  );
}

// =========================
// FOOTER
// =========================
function Footer() {
  return (
    <footer className="text-center p-5 bg-black mt-10">
      <p className="text-gray-500">© 2026 Sheza</p>
    </footer>
  );
}