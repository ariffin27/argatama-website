import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import projects from "../../data/projects";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) return <p className="p-4">Loading...</p>;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <>
      {/* === NAVBAR === */}
      <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Logo Argatama" width={50} height={50} />
            <div>
              <h1 className="font-bold text-base md:text-lg uppercase">Argatama Teknik Sejahtera</h1>
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
        <div className="container mx-auto px-4 py-8">
          {/* Tombol Back */}
          <div className="mb-4">
            <Link href="/projects">
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                &larr; Back to Projects
              </button>
            </Link>
          </div>

          {/* Judul & Deskripsi */}
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="mb-6">{project.description}</p>

          {/* Main Image */}
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full max-h-[500px] object-cover mb-6 cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
          />

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={img}
                  alt={`${project.title} ${idx}`}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-4.553a1 1 0 00-1.414-1.414L13.586 8.586a2 2 0 01-2.828 0L5.861 3.414a1 1 0 10-1.414 1.414L9.344 10a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-4.553 4.553a1 1 0 001.414 1.414L13.586 17.414a2 2 0 002.828 0l2.828-2.828a2 2 0 000-2.828L15 10z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              index={lightboxIndex}
              slides={project.images.map((img) => ({ src: img }))}
              close={() => setLightboxOpen(false)}
              plugins={[Zoom]}
              zoom={{ maxZoomPixelRatio: 3 }}
            />
          )}
        </div>

        {/* === FOOTER === */}
        <footer className="bg-gray-800 text-gray-300 py-8 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Argatama Teknik Sejahtera. All Rights Reserved.</p>
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
