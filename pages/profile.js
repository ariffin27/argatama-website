import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Company Profile | CV. Argatama Teknik Sejahtera</title>
        <meta
          name="description"
          content="Profil lengkap CV. Argatama Teknik Sejahtera - Spesialis Boiler, Kompresor Udara, dan Hydrant sejak 2009."
        />
      </Head>

      <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Company Profile
          </h1>
          <p className="text-gray-300 leading-relaxed mb-8">
            CV. Argatama Teknik Sejahtera berdiri sejak tahun 2009 dan telah
            menjadi mitra terpercaya di bidang sistem <strong>boiler</strong>,
            <strong> kompresor udara</strong>, dan <strong>hydrant</strong>.
            Kami berkomitmen memberikan solusi industri yang efisien, aman, dan
            berkelanjutan.
          </p>

          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
          >
            ← Kembali ke Beranda
          </Link>
        </motion.div>
      </main>
    </>
  );
}
