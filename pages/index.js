import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, CheckCircle2 } from "lucide-react";

export default function Home() {
  const slides = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];
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
    { href: "#services", label: "Our Service" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <>
      <Head>
        <title>CV. Argatama Teknik Sejahtera | Spesialis Boiler, Kompresor & Hydrant</title>
        <meta
          name="description"
          content="CV. Argatama Teknik Sejahtera - Spesialis Boiler, Kompresor Udara & Hydrant sejak 2009. Penyedia solusi industri terpercaya."
        />
        <meta name="keywords" content="Boiler, Kompresor, Hydrant, Service, Instalasi, Overhaul, Depok, Jakarta" />
        <meta name="author" content="CV. Argatama Teknik Sejahtera" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="CV. Argatama Teknik Sejahtera" />
        <meta property="og:description" content="Spesialis Boiler, Kompresor Udara & Hydrant sejak 2009." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.argatamateknik.com" />
        <meta property="og:image" content="/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CV. Argatama Teknik Sejahtera" />
        <meta name="twitter:description" content="Spesialis Boiler, Kompresor Udara & Hydrant sejak 2009." />
        <meta name="twitter:image" content="/logo.png" />

        <link rel="canonical" href="https://www.argatamateknik.com" />

        {/* Google Analytics (replace G-XXXXXXX) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}}
        />

        {/* Facebook Pixel (replace XXXXXXXXXXXXXXX) */}
        <script
          dangerouslySetInnerHTML={{ __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXX');
            fbq('track', 'PageView');
          `}}
        />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXX&ev=PageView&noscript=1" />
        </noscript>
      </Head>

      <div className={`${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-800"} font-sans`}>
        {/* NAVBAR */}
        <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full placeholder-box overflow-hidden">
                {/* Replace with your logo */}
              </div>
              <div>
                <h1 className="font-bold text-base md:text-lg uppercase">CV. Argatama Teknik Sejahtera</h1>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Spesialis Boiler, Kompresor Udara & Hydrant</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-blue-600 dark:hover:text-blue-400">{l.label}</a>
              ))}
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                {darkMode ? "🌙" : "☀️"}
              </button>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                {darkMode ? "🌙" : "☀️"}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
            </div>
          </div>

          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow"
            >
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400">{l.label}</a>
              ))}
            </motion.nav>
          )}
        </header>

        {/* HERO */}
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
              <Image src={src} alt={`Slide ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          ))}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-3xl text-white">
              <h2 className="text-4xl md:text-5xl font-bold">Welcome to Argatama Teknik Sejahtera</h2>
              <p className="mt-4 text-lg">Specialist in Boiler, Air Compressor & Hydrant since 2009</p>
              <a href="#about" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">More Information</a>
            </motion.div>
          </div>
        </section>

        {/* HOME: About snippet */}
        <section className="py-16" id="about">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Selamat Datang di Argatama Teknik Sejahtera</h3>
              <p>
                Sejak tahun 2009, kami telah menjadi mitra terpercaya dalam menyediakan solusi sistem boiler dan kompresor untuk berbagai sektor industri.
                Dengan dukungan tim profesional dan produk berkualitas tinggi, kami berkomitmen membantu meningkatkan efisiensi operasional dan kinerja bisnis Anda.
                Percayakan kebutuhan teknis Anda kepada kami — karena di Argatama, kami tidak hanya menjual produk, tapi memberikan solusi.
              </p>
              <p className="italic text-gray-600 dark:text-gray-300">
                English: Since 2009, we have been a trusted partner in providing boiler and compressor system solutions for various industries. Supported by a professional team and high‑quality products, we are committed to improving your operational efficiency and business performance. Trust your technical needs to us—at Argatama, we don’t just sell products, we deliver solutions.
              </p>
              <a href="#full-about" className="inline-block mt-2 text-blue-600 dark:text-blue-400 underline">Go to About Us</a>
            </div>
            <div className="rounded-2xl overflow-hidden placeholder-box h-72 md:h-auto flex items-center justify-center">
              {/* Place an image here */}
              <span className="text-sm text-gray-500">(Place your factory/boiler/compressor image)</span>
            </div>
          </div>
        </section>

        {/* OUR SERVICE */}
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-10">Our Service</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {["Instalasi", "Maintenance", "Sparepart", "Modification", "Overhaul"].map((s) => (
                <div key={s} className="p-6 rounded-2xl shadow placeholder-box text-center">
                  <h4 className="font-semibold">{s}</h4>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="#full-services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">View All Service</a>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">Mengapa Memilih Kami?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Pengalaman sejak 2009",
                "Produk berkualitas & bergaransi",
                "Tim teknis profesional",
                "Layanan cepat & responsif",
                "Dukungan purna jual maksimal",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-5 rounded-2xl placeholder-box">
                  <CheckCircle2 className="mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FULL ABOUT US SECTION */}
        <section id="full-about" className="py-16 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <h3 className="text-3xl font-bold">About Us</h3>
            <p className="text-lg font-semibold">Your Trusted Partner in Boiler and Compressor Solutions Since 2009</p>
            <p>Welcome to Argatama Teknik Sejahtera, a trusted partner in delivering high-quality and reliable solutions in the fields of boiler systems and compressors. Since our establishment in 2009, we have remained committed to supporting the operational efficiency and long-term success of our clients across various industries.</p>
            <p>We specialize in providing innovative, reliable, and customized solutions tailored to meet the specific technical needs of each client. Backed by a team of experienced professionals, we work closely with every partner to ensure our products and services contribute to smoother operations, enhanced productivity, and industrial growth.</p>
            <p>At Argatama, we believe that our strength lies in the trust and long-term relationships we've built with our clients. We take the time to understand the unique challenges of your industry—allowing us to deliver the right solutions that help your business grow and succeed.</p>
            <p>This company profile reflects our vision, mission, and core values, along with our commitment to continuous innovation, customer satisfaction, and sustainable business practices.</p>
            <p>We look forward to continuing as your reliable partner in realizing the best industrial solutions. Thank you for your trust and collaboration.</p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-3">
                <h4 className="text-2xl font-semibold">Mission</h4>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Delivering the Best Solutions:</strong> Provide high-quality products and services that meet the specific technical needs of each industry, while prioritizing efficiency, reliability, and safety.</li>
                  <li><strong>Continuous Innovation:</strong> Continuously innovate in product and service development to support more efficient and environmentally friendly industrial advancements, utilizing the latest and best technologies in the boiler and compressor industry.</li>
                  <li><strong>Customer Satisfaction:</strong> Maintain strong, mutually beneficial relationships with customers by providing technical support and tailored solutions to ensure their operational success.</li>
                  <li><strong>Sustainability and Social Responsibility:</strong> Implement sustainable business practices, be socially responsible, and focus on improving the well-being of the community and the environment.</li>
                  <li><strong>Human Resource Development:</strong> Develop the competence and expertise of our team through continuous training and development to ensure the highest quality of service for our customers.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-semibold">Vision</h4>
                <p>To be a leading company providing innovative and reliable solutions in the fields of boiler systems and compressors, committed to supporting the success and operational efficiency of industries worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIAL */}
        <section id="industrial" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-10">Industrial Sectors We Serve</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Food and Beverage", desc: "Operates 24/7 requiring reliable steam generators and hygienic instruments to ensure consistent steam without contamination." },
                { title: "Textile and Fabric", desc: "Needs reliable steam for varied operations, including stain prevention. Design must handle fluctuating demands to avoid carryover during peak loads." },
                { title: "Automotive", desc: "Focuses on fuel efficiency and eco‑friendliness, utilizing oil‑free air and automation. Steam assists vulcanization, sterilization, and more." },
                { title: "Pharmaceutical & Chemical", desc: "Requires efficient steam generation with precise control and monitoring to ensure quality and prevent contamination." },
                { title: "Packaging", desc: "Varying process temperatures demand fuel flexibility and careful water management due to high steam usage and blowdown." },
                { title: "Hotel & Hospital", desc: "Constant 24/7 hot water demand; robust boilers needed to manage rapid consumption swings in hospitality and healthcare." },
                { title: "Construction Materials", desc: "Reliable low‑pressure steam maintains stable storage temperatures and supports material modifications." },
                { title: "Petrochemical & Power Plant", desc: "Steam is vital for refining and power generation with precise control due to fuel variability and pollution risks." },
              ].map((i) => (
                <div key={i.title} className="p-6 rounded-2xl placeholder-box">
                  <h4 className="font-semibold text-lg mb-2">{i.title}</h4>
                  <p className="text-sm leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <section id="clients" className="py-16 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-10">Clients</h3>
            <p className="text-center mb-6 text-sm text-gray-600 dark:text-gray-300">Upload logo tiap klien ke folder <code>/public/images/clients</code> dan ganti placeholder di bawah.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Bintang Toedjoe","Saka Farma","PT Kino","Cosphar","SKS","AMS","Ikong Farma","Ledian Hotel Serang","PT Recife","PT Laut Selatan Industri","PT Indo Suaka Batam","PT Energi Graha Sagara"].map((c, idx) => (
                <div key={idx} className="h-20 rounded-2xl placeholder-box flex items-center justify-center text-center p-2 text-xs">{c}</div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-10">Contact Us</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p><strong>Company:</strong><br/>CV. Argatama Teknik Sejahtera</p>
                <p><strong>Office Address:</strong><br/>Jl. Sawo No. 37, Desa Mekarjaya, Kec. Sukmajaya, Kota Depok</p>
                <p><strong>Workshop:</strong><br/>Tirtajaya, Kec. Sukmajaya, Kota Depok<br/><a className="text-blue-600 dark:text-blue-400 underline" href="https://maps.app.goo.gl/SFV3XfMLGjF3XzHm8" target="_blank">View on Google Maps</a></p>
                <p><strong>Phone/WhatsApp:</strong> <a href="https://wa.me/6281288162627" className="text-blue-600 dark:text-blue-400 underline">081288162627</a></p>
                <p><strong>Email:</strong> <a href="mailto:argatamateknik@gmail.com" className="text-blue-600 dark:text-blue-400 underline">argatamateknik@gmail.com</a></p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;
                  const url = `https://wa.me/6281288162627?text=Hello Argatama Teknik Sejahtera,%0AMy name is ${encodeURIComponent(name)}.%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
                className="space-y-4"
              >
                <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800" />
                <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800" />
                <textarea name="message" rows="5" placeholder="Your Message" required className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800"></textarea>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700" type="submit">Send via WhatsApp</button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-800 text-gray-300 py-8 text-center">
          <div className="max-w-7xl mx-auto px-4 space-y-2">
            <p>&copy; {new Date().getFullYear()} CV. Argatama Teknik Sejahtera. All Rights Reserved.</p>
            <p className="text-sm">Jl. Sawo No. 37, Desa Mekarjaya, Kec. Sukmajaya, Kota Depok • <a className="underline" href="https://wa.me/6281288162627">WhatsApp</a> • <a className="underline" href="mailto:argatamateknik@gmail.com">Email</a></p>
          </div>
        </footer>
      </div>
    </>
  );
}
