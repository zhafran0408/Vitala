/** @format */

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Map, Compass, Heart, Mouse } from "lucide-react";

// ==========================================
// KOMPONEN TOMBOL (HOVER COLOR SHIFT)
// ==========================================
function FramerButton({ to, text, variant = "solid" }) {
  const isSolid = variant === "solid";

  return (
    <motion.div
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="initial"
      className="inline-block"
    >
      <Link
        to={to}
        className={`group relative inline-flex items-center gap-3 rounded-xl border px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
          isSolid
            ? "bg-white text-black border-white hover:bg-gray-200"
            : "bg-transparent text-white border-white/30 hover:bg-white hover:text-black"
        }`}
      >
        <span>{text}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  // Parallax yang lebih terasa
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.3]);

  // Varian animasi untuk teks Hero (Staggered)
  const textContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const textItem = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* ==========================================
          SECTION 1: HERO (SPLIT SCREEN FULL)
      ========================================== */}
      <section className="relative flex h-[100dvh] w-full flex-col lg:flex-row overflow-hidden bg-black text-white">
        
        {/* SISI KIRI: TEKS & GAMBAR BLUR */}
        <div className="relative h-[50vh] w-full lg:h-full lg:w-[45%] overflow-hidden flex flex-col justify-center px-8 sm:px-16 lg:px-24">
          
          <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0 h-[110%] -top-[5%]">
            <img
              src="/image/Night Jakarta.jpg" 
              alt="Jakarta Blur"
              className="h-full w-full object-cover blur-2xl scale-125 opacity-60"
            />
          </motion.div>
          
          <div className="absolute inset-0 z-0 bg-black/40" />

          <motion.div 
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col mt-20 lg:mt-0"
          >
            <motion.p 
              variants={textItem}
              className="mb-4 text-sm sm:text-lg font-light tracking-[0.4em] text-white/90 uppercase"
            >
              Discover Indonesia
            </motion.p>
            
            <motion.h1 
              variants={textItem}
              className="text-6xl sm:text-7xl lg:text-[90px] font-black uppercase tracking-tighter leading-none"
            >
              Jakarta
            </motion.h1>

            <motion.p 
              variants={textItem}
              className="mt-8 max-w-sm text-sm font-medium leading-relaxed text-white/70"
            >
              Jakarta is the bustling capital of Indonesia. It is home to a vibrant mix of cultures, modern skyscrapers, historical sites, and an unforgettable nightlife that never sleeps.
            </motion.p>

            <motion.div 
              variants={textItem}
              className="mt-12"
            >
              <Link
                to="/trips"
                className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.3em] text-white uppercase transition-colors hover:text-white/60"
              >
                see more
                <span className="h-px w-12 bg-white/30 transition-all duration-300 group-hover:w-24 group-hover:bg-white" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* SISI KANAN: GAMBAR TAJAM */}
        <div className="relative h-[50vh] w-full lg:h-full lg:w-[55%] overflow-hidden">
          <motion.div style={{ y: yBg }} className="absolute inset-0 h-[110%] -top-[5%]">
            <img
              src="/image/Night Jakarta.jpg" 
              alt="Jakarta Sharp"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/40 to-transparent hidden lg:block" />
        </div>

        {/* SCROLL INDICATOR (Muncul di Desktop) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-[22.5%] -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==========================================
          SECTION 2: KEUNGGULAN
      ========================================== */}
      <section className="relative z-10 bg-white px-6 py-24 sm:px-12 lg:px-20 border-t border-slate-100">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Kenapa Memilih <span className="text-slate-400">Vitala?</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Kami merancang perjalanan yang bukan cuma soal tempat, tapi soal pengalaman yang akan kamu ingat selamanya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Map, title: "Destinasi Terkurasi", desc: "Setiap tempat dipilih langsung oleh tim kami yang sudah ke lapangan." },
              { icon: Compass, title: "Local Guide", desc: "Dipandu oleh warga lokal yang paling mengerti seluk-beluk daerahnya." },
              { icon: Heart, title: "Pengalaman Berkesan", desc: "Bukan sekadar foto, tapi cerita yang akan kamu bawa pulang." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.1)",
                    borderColor: "rgba(15, 23, 42, 0.1)"
                  }} 
                  className="group rounded-3xl border border-slate-100 bg-white p-8 transition-all shadow-sm"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex size-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 mb-6 transition-colors group-hover:bg-slate-900 group-hover:text-white"
                  >
                    <Icon className="size-7" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: CTA
      ========================================== */}
      <section className="relative z-10 bg-white px-6 py-20 sm:px-12 lg:px-20 border-t border-slate-100 text-slate-900 overflow-hidden">
        {/* Ornamen Background CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] -z-10" />

        <div className="mx-auto max-w-6xl text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Siap Untuk Petualangan Berikutnya?
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="mt-8 flex justify-center"
          >
             <FramerButton to="/trips" text="Lihat Destinasi" variant="solid" />
          </motion.div>
        </div>
      </section>

    </div>
  );
}