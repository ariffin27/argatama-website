import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";



export default function Home() {
  const slides = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg", "/slide4.png", "/slide5.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#industrial", label: "Industrial" },
    { href: "#services", label: "Our Services" },
    { href: "#clients", label: "Clients" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Us" },
  ];

  const clients = [
    "Bintang Toedjoe",
    "Saka Farma",
    "PT Kino",
    "Cosphar",
    "SKS",
    "AMS",
    "Ikong Farma",
    "Ledian Hotel Serang",
    "ritz carlton",
    "PT Laut Selatan Industri",
    "PT Indo Suaka Batam",
    "PT Energi Graha Sagara",
  ];

  const projects = [
    "furnace.jpg",
    "boiler_installation.jpg",
    "Compressor-installation-project.jpg",
    "boiler-cleaning-project.jpg",
  ];

  return (
    <>
      <Head>
        <title>Argatama Teknik Sejahtera | Spesialis Boiler, Kompresor & Hydrant</title>
        <meta
          name="description"
          content="Argatama Teknik Sejahtera - Spesialis Boiler, Kompresor Udara & Hydrant sejak 2009. Penyedia solusi industri terpercaya."
        />
      </Head>

      <main className={`${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-800"} font-sans`}>
        
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
                <a key={l.href} href={l.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
            </nav>

            {/* Mobile menu & dark mode */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {l.label}
                </a>
              ))}
            </motion.nav>
          )}
        </header>

        <div className="h-20"></div>

        {/* === HERO === */}
        <section id="home" className="h-screen relative overflow-hidden">
          {slides.map((src, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
              style={{ y: yParallax }}
            >
              <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          ))}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Welcome to Argatama Teknik Sejahtera
              </h2>
              <p className="mt-4 text-lg">
                Since 2009, we have been a trusted partner in providing boiler and compressor system solutions for various industrial sectors. Supported by a professional team and high-quality products, we are committed to helping improve your operational efficiency and business performance. Entrust your technical needs to us — because at Argatama, we don’t just sell products, we deliver solutions.
              </p>
              <a
                href="#about"
                className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
              >
                More Information
              </a>
            </motion.div>
          </div>
        </section>

        {/* === ABOUT US === */}
<section className="py-20 bg-gray-50 dark:bg-gray-950" id="about">
  <div className="max-w-7xl mx-auto px-4">
    {/* Grid Teks + Gambar */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Deskripsi */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Your Trusted Partner in Boiler and Compressor Solutions Since 2009
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Welcome to Argatama Teknik Sejahtera, a trusted partner in delivering high-quality and reliable solutions in the fields of boiler systems and compressors. Since our establishment in 2009, we have remained committed to supporting the operational efficiency and long-term success of our clients across various industries.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          We specialize in providing innovative, reliable, and customized solutions tailored to meet the specific technical needs of each client. Backed by a team of experienced professionals, we work closely with every partner to ensure our products and services contribute to smoother operations, enhanced productivity, and industrial growth.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          At Argatama, we believe that our strength lies in the trust and long-term relationships we've built with our clients. We take the time to understand the unique challenges of your industry—allowing us to deliver the right solutions that help your business grow and succeed.
        </p>
      </div>

      {/* Gambar Pendamping */}
      <div className="relative h-72 w-full md:h-96 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <Image
          src="/images/about/about_us.png" // 
          alt="Boiler or Workshop"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Visi & Misi dalam kotak */}
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {/* Misi */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 className="text-xl font-semibold mb-4 text-yellow-500">Our Mission</h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Delivering the Best Solutions: Provide high-quality products and services that meet the specific technical needs of each industry, while prioritizing efficiency, reliability, and safety.</li>
          <li>Continuous Innovation: Continuously innovate in product and service development to support more efficient and environmentally friendly industrial advancements.</li>
          <li>Customer Satisfaction: Maintain strong, mutually beneficial relationships with customers by providing technical support and tailored solutions to ensure their operational success.</li>
          <li>Sustainability & Social Responsibility: Implement sustainable business practices and focus on improving community and environmental well-being.</li>
          <li>Human Resource Development: Develop the competence and expertise of our team through continuous training and development.</li>
        </ul>
      </div>

      {/* Visi */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 className="text-xl font-semibold mb-4 text-yellow-500">Vision</h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          To be a leading company providing innovative and reliable solutions in the fields of boiler systems and compressors, committed to supporting the success and operational efficiency of industries worldwide.
        </p>
      </div>
    </div>
  </div>
</section>



        {/* === WHY CHOOSE US === */}
        <section className="py-20 bg-gray-900 text-gray-100" id="advantages">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400">
              Why Choose Us?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {["Experienced since 2009","High-quality & guaranteed products","Professional technical team","Fast & responsive service","Maximum after-sales support"].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-green-500 text-3xl flex-shrink-0">✅</span>
                  <p className="leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === INDUSTRIAL SOLUTIONS === */}
        <section className="py-20 bg-gray-50 dark:bg-gray-950" id="industrial">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Industrial Solutions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              At Argatama Teknik Sejahtera, we specialize in providing high-quality solutions for various industries that require reliable boiler and compressor systems. Our expertise spans across several key sectors, including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {title:"FOOD AND BEVERAGE",desc:"Operating 24/7, food and beverage industries need reliable steam generators and instruments for diverse, hygienic processes, ensuring consistent steam and avoiding contamination."},
                {title:"TEXTILE AND FABRIC",desc:"Needs reliable steam for varied operations, including stain prevention. System design must account for fluctuating demands to avoid carryover risks from sudden steam load peaks."},
                {title:"AUTOMOTIVE",desc:"Emphasizes fuel-efficiency and eco-friendliness, utilizing oil-free air and automated processes. Steam aids in vulcanization, sterilization, and other production procedures."},
                {title:"PHARMACEUTICAL & CHEMICAL",desc:"Requires efficient, varied steam generation, precise control, and monitoring to ensure quality and prevent contamination in line with food-grade standards."},
                {title:"PACKAGING",desc:"With varying process temperatures, it requires fuel-burning flexibility for efficient heat provision, while also managing water quality due to extensive steam usage and blowdown."},
                {title:"HOTEL & HOSPITAL",desc:"Focus on constant 24/7 hot water demand, requires robust boiler tolerance to manage consumption swings in both hospitality services and critical healthcare operations."},
                {title:"CONSTRUCTION MATERIALS",desc:"Reliable low-pressure steam generators to maintain stable storage temperatures, preserving material properties and facilitating construction material modifications."},
                {title:"PETROCHEMICAL & POWER PLANT",desc:"Steam is vital for refinery and electricity generation processes. These require precise control and monitoring due to potential risks from varied fuel compositions and pollution."}
              ].map((item, idx)=>(
                <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h4 className="font-semibold text-lg mb-2 text-yellow-500">{item.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === OUR SERVICES === */}
        <section id="services" className="py-20 bg-gray-900 text-gray-100">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 text-yellow-400">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {title:"Boiler Installation & Maintenance",desc:"Installation, maintenance, and modification of industrial boiler systems to improve efficiency and performance."},
                {title:"Air Compressor System",desc:"Installation and servicing of air compressor systems for industrial applications."},
                {title:"Fire Hydrant System",desc:"Design, installation, and maintenance of industrial fire hydrant systems."},
                {title:"Piping Installation & Fabrication",desc:"Installation and fabrication of industrial piping systems with high standards of safety and precision."}
              ].map((s,i)=>(
                <div key={i} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">{s.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === CLIENTS === */}
        <section id="clients" className="py-16 bg-gray-100 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Clients</h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  variants={{hidden:{opacity:0,y:30},visible:{opacity:1,y:0}}}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 10 }}
                  className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow p-3 hover:shadow-lg"
                >
                  <Image
                    src={`/images/clients/${client.replace(/\s+/g,"_").toLowerCase()}.png`}
                    alt={client}
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 h-56 relative">
                <Image src="/images/certificates/certificate1.jpg" alt="Client Certificate 1" fill className="object-contain"/>
              </div>
              <div className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 h-56 relative">
                <Image src="/images/certificates/certificate2.jpg" alt="Client Certificate 2" fill className="object-contain"/>
              </div>
            </div>
          </div>
        </section>

        {/* === OUR PROJECTS === */}
<section id="projects" className="py-20 bg-gray-900 text-gray-100">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12 text-yellow-400">Our Projects</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {projects.map((img, idx) => {
        const slug = img.replace(/\.[^/.]+$/, "").toLowerCase().replace(/_/g, "-");
        return (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <Link href={`/projects/${slug}`}>
  <Image
    src={`/images/projects/${img.endsWith('.jpg') ? img : img + '.jpg'}`}
    alt={img.replace(/_/g, ' ').replace(/\.[^/.]+$/, '')}
    width={400}
    height={300}
    className="object-cover w-full h-48 cursor-pointer"
  />
</Link>
         </motion.div>
        );
      })}
    </div>

    <div className="mt-10">
      <Link
        href="/projects"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
      >
        View More Projects
      </Link>
    </div>
  </div>
</section>

        {/* === CONTACT === */}
<section id="contact" className="py-16">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
    
    {/* Info Kontak */}
    <div>
      <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
      <p>Argatama Teknik Sejahtera</p>
      <p>
        Office:{" "}
        <a
          href="https://maps.app.goo.gl/YZM8corkt4dr7BRL8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          Jl. Sawo No. 37, Desa Mekarjaya, Kec. Sukmajaya, Kota Depok
        </a>
      </p>
      <p>
        Workshop:{" "}
        <a
          href="https://maps.app.goo.gl/iYe7PSy7W6c7ATut8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          Jl. Grafika No.III, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412
        </a>
      </p>
      <p className="mt-3 flex flex-col space-y-2">
  <a
    href="https://wa.me/6281288162627"
    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 underline"
  >
    <Phone size={18} className="flex-shrink-0" />
    <span>+62 812-8816-2627</span>
  </a>

  <a
    href="https://wa.me/62811140380"
    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 underline"
  >
    <Phone size={18} className="flex-shrink-0" />
    <span>+62 811-140-380</span>
  </a>

  <a
    href="mailto:argatamateknik@gmail.com"
    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 underline"
  >
    <Mail size={18} className="flex-shrink-0" />
    <span>argatamateknik@gmail.com</span>
  </a>
</p>
</div>


    {/* Form Kontak */}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        // default kirim ke WhatsApp 1
        const url = `https://wa.me/6281288162627?text=Halo Argatama,%0ANama: ${encodeURIComponent(
          name
        )}%0AEmail: ${encodeURIComponent(email)}%0APesan: ${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }}
      className="space-y-4"
    >
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
      >
        Send via WhatsApp
      </button>
    </form>
  </div>
</section>


        {/* === FOOTER === */}
<footer className="bg-gray-800 text-gray-300 py-8 text-center">
  <p className="mb-2">&copy; {new Date().getFullYear()} Argatama Teknik Sejahtera. All Rights Reserved.</p>

  <div className="text-sm space-y-1 md:space-y-0 md:flex md:justify-center md:gap-4">
    <span>
      Office:{" "}
      <a
        href="https://maps.app.goo.gl/YZM8corkt4dr7BRL8"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-400"
      >
        Jl. Sawo No. 37, Depok
      </a>
    </span>
    <span>
      Workshop:{" "}
      <a
        href="https://maps.app.goo.gl/iYe7PSy7W6c7ATut8"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-400"
      >
        Jl. Grafika No.III, Depok
      </a>
    </span>
    <span>
      <a href="https://wa.me/6281288162627" className="underline text-blue-400">
        WhatsApp
      </a>{" "}
      •{" "}
      <a href="mailto:argatamateknik@gmail.com" className="underline text-blue-400">
        Email: argatamateknik@gmail.com
      </a>
    </span>
  </div>
</footer>
</main>
    </>
  );
}

