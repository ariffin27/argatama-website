import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import projects from "../data/projects";

export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [lightboxImages, setLightboxImages] = useState([]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ];

  const openLightbox = (images, idx) => {
    setLightboxImages(images);
    setLightboxIndex(idx);
  };

  return (
    <>
      {/* === NAVBAR === */}
      <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo CV Argatama" width={50} height={50} />
            <div>
              <h1 className="font-bold text-base md:text-lg uppercase">CV. Argatama Teknik Sejahtera</h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Specialist Boiler, Air Compressor & Hydrant</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue-600 dark:hover:text-blue-400">{l.label}</a>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? "🌙" : "☀️"}
            </button>
          </nav>

          {/* Mobile menu & dark mode */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? "🌙" : "☀️"}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      <div className="h-20"></div>

      {/* === CONTENT === */}
      <main className={`${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-900 text-gray-100"} min-h-screen font-sans`}>
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12 text-yellow-400 text-center">Our Projects</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {projects.map((project, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="overflow-hidden rounded-2xl shadow-lg">
                <Link href={`/projects/${project.slug}`}>
                  <div className="cursor-pointer">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                  </div>
                </Link>
                <h3 className="mt-2 font-semibold text-center">{project.title}</h3>
                <p className="text-sm text-gray-300 text-center">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxIndex >= 0 && (
          <Lightbox
            open={lightboxIndex >= 0}
            close={() => setLightboxIndex(-1)}
            slides={lightboxImages.map((img) => ({ src: img }))}
            index={lightboxIndex}
            on={{ indexChange: (i) => setLightboxIndex(i) }}
          />
        )}

        {/* === FOOTER === */}
        <footer className="bg-gray-800 text-gray-300 py-8 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} CV. Argatama Teknik Sejahtera. All Rights Reserved.</p>
          <div className="text-sm space-y-1 md:space-y-0 md:flex md:justify-center md:gap-4">
            <span>Office: <a href="https://maps.app.goo.gl/YZM8corkt4dr7BRL8" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Jl. Sawo No. 37, Depok</a></span>
            <span>Workshop: <a href="https://maps.app.goo.gl/iYe7PSy7W6c7ATut8" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Jl. Grafika No.III, Depok</a></span>
            <span><a href="https://wa.me/6281288162627" className="underline text-blue-400">WhatsApp</a> • <a href="mailto:argatamateknik@gmail.com" className="underline text-blue-400">Email: argatamateknik@gmail.com</a></span>
          </div>
        </footer>
      </main>
    </>
  );
}
