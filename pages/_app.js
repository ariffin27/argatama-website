import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react'; // ✅ Analytics

export default function MyApp({ Component, pageProps, router }) {
  // 🌀 aktifin smooth scroll global
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <>
      {/* ✅ Analytics harus di luar AnimatePresence */}
      <Analytics />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
