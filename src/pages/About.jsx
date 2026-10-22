/** @format */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Mountain,
  Star,
  Users,
  Leaf,
  Heart,
  Map,
} from "lucide-react";

// 5 Gambar Nusantara untuk Card Deck
const IMAGES = [
  "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1000&auto=format&fit=crop", // Monas
  "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=1000&auto=format&fit=crop", // Borobudur
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop", // Raja Ampat
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop", // Bromo
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop", // Bali
];

// ==========================================
// KOMPONEN TOMBOL (SAMA KAYAK DI HOME)
// ==========================================
function FramerButton({ to, text, variant = "solid", icon: Icon = ArrowRight }) {
  const isSolid = variant === "solid";
  const isLight = variant === "light";

  let btnClass = "";
  if (isSolid) {
    btnClass = "bg-slate-900 text-white border-slate-900 hover:bg-white hover:text-slate-900 hover:border-slate-900";
  } else if (isLight) {
    // Buat tombol di background gelap
    btnClass = "bg-white text-slate-900 border-white hover:bg-slate-900 hover:text-white hover:border-slate-900";
  } else {
    // Outline biasa di background putih
    btnClass = "bg-transparent text-slate-900 border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900";
  }

  return (
    <motion.div
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="initial"
      className="inline-block"
    >
      <Link
        to={to}
        className={`group relative inline-flex items-center gap-3 rounded-xl border px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${btnClass}`}
      >
        <span>{text}</span>
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

// ==========================================
// KOMPONEN ANIMASI ANGKA (COUNT UP)
// ==========================================
function Counter({ to, suffix = "", decimals = 0, duration = 2 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(decimals) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [to, duration, inView, suffix, decimals]);

  return <span ref={nodeRef}>{0 + suffix}</span>;
}

// ==========================================
// HALAMAN ABOUT
// ==========================================
export default function About() {
  const [cards, setCards] = useState(IMAGES);

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) {
      setCards((prev) => {
        const newCards = [...prev];
        const firstCard = newCards.shift();
        newCards.push(firstCard);
        return newCards;
      });
    }
  };

  // Varian animasi untuk teks Hero
  const textReveal = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      
      {/* ==========================================
          SECTION 1: HERO
      ========================================== */}
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-24 pb-12 lg:px-20">
        
        {/* Teks Background Raksasa */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black tracking-tighter text-slate-900 pointer-events-none whitespace-nowrap z-0"
        >
          VITALA
        </motion.h1>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          
          {/* KIRI: Draggable Card Deck */}
          <div className="relative flex h-[400px] sm:h-[500px] flex-col items-center justify-center">
            <div className="relative h-72 w-72 sm:h-96 sm:w-96">
              <AnimatePresence>
                {cards.map((src, index) => {
                  const isTop = index === 0;
                  return (
                    <motion.div
                      key={src}
                      style={{ zIndex: cards.length - index }}
                      animate={{
                        scale: 1 - index * 0.05,
                        y: index * 15,
                        rotate: index === 0 ? 0 : index % 2 === 0 ? 4 : -4,
                      }}
                      drag={isTop ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.8}
                      onDragEnd={handleDragEnd}
                      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                      className={`absolute inset-0 overflow-hidden rounded-[32px] border-4 border-white shadow-2xl bg-slate-100 ${
                        isTop ? "cursor-grab" : ""
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Nusantara ${index}`}
                        className="h-full w-full object-cover pointer-events-none"
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* KANAN: Teks Editorial */}
          <div className="flex flex-col justify-center">
            <motion.p
              custom={0} variants={textReveal} initial="hidden" animate="visible"
              className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-400"
            >
              <span className="h-px w-8 bg-slate-300" />
              About Vitala
            </motion.p>

            <motion.h2
              custom={1} variants={textReveal} initial="hidden" animate="visible"
              className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Beyond <br />
              <span className="text-slate-400">Expectations.</span>
            </motion.h2>

            <motion.p
              custom={2} variants={textReveal} initial="hidden" animate="visible"
              className="mt-6 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base"
            >
              Vitala berawal dari rasa ingin tahu tentang dunia yang lebih luas. Dari sudut kota yang penuh kehidupan hingga desa dengan budaya yang terjaga, dari destinasi tersembunyi hingga tempat ikonik yang mendefinisikan Indonesia. Kami percaya, petualangan terbaik dimulai saat kamu berani melihat lebih jauh.
            </motion.p>

            <motion.div
              custom={3} variants={textReveal} initial="hidden" animate="visible"
              className="mt-10"
            >
              {/* TOMBOL HERO PAKAI FRAMER BUTTON */}
              <FramerButton to="/trips" text="See more" variant="solid" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: STATISTIK
      ========================================== */}
      <section className="border-y border-slate-100 bg-white px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 divide-x divide-slate-100 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <div className="flex items-baseline gap-1 text-4xl font-extrabold text-slate-900">
              <Counter to={120} suffix="+" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Destinations</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <div className="flex items-baseline gap-1 text-4xl font-extrabold text-slate-900">
              <Counter to={8} suffix="K+" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Travelers</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <div className="flex items-baseline gap-1 text-4xl font-extrabold text-slate-900">
              <Counter to={45} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Local Guides</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <div className="flex items-baseline gap-1 text-4xl font-extrabold text-slate-900">
              <Counter to={4.9} decimals={1} />
              <Star className="h-4 w-4 fill-slate-900" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Average Rating</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: PHILOSOPHY (WHAT WE BELIEVE)
      ========================================== */}
      <section className="bg-white px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              What we believe.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-500">
              Indonesia punya lebih banyak cerita daripada yang bisa kamu bayangkan. Kami percaya setiap tempat menyimpan perspektif baru, setiap perjalanan membuka pengalaman berbeda, dan setiap petualangan membuatmu melihat dunia dengan cara yang baru.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Compass, title: "Explore", desc: "Jelajahi tempat-tempat luar biasa, temukan hidden gems, dan lihat Indonesia dari sudut pandang yang berbeda." },
              { icon: Leaf, title: "Experience", desc: "Rasakan kehidupan lokal, temukan budaya baru, dan nikmati setiap momen di sepanjang perjalanan." },
              { icon: Mountain, title: "Remember", desc: "Bawa pulang lebih dari sekadar foto. Kumpulkan cerita, kenangan, dan pengalaman yang akan selalu berarti." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="group border-t-2 border-slate-100 pt-8 transition-colors hover:border-slate-900"
                >
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: PROMISE (TRAVEL THAT FEELS PERSONAL)
      ========================================== */}
      <section className="bg-slate-50 px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Travel that feels personal.
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md text-sm leading-relaxed text-slate-500"
            >
              Perjalanan yang berkesan bukan hanya tentang ke mana kamu pergi, tetapi juga bagaimana kamu mengalaminya. Kami menghadirkan rekomendasi pilihan yang menghubungkanmu dengan tempat, orang, dan cerita autentik Indonesia.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Local first", desc: "Jelajahi destinasi bersama orang-orang lokal yang mengenal karakter dan cerita di balik setiap tempat." },
              { icon: Map, title: "Curated journeys", desc: "Temukan pilihan destinasi dan rute yang dikurasi untuk menghadirkan pengalaman yang lebih bermakna." },
              { icon: Leaf, title: "Travel responsibly", desc: "Jelajahi dengan penuh kesadaran, hormati budaya setempat, dan bantu menjaga keunikan setiap destinasi." },
              { icon: Heart, title: "Real experiences", desc: "Temukan inspirasi dari pengalaman nyata para traveler yang telah menjelajahi berbagai sudut Indonesia." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0,0,0,0.05)" }}
                  className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: CTA
      ========================================== */}
      <section className="bg-white px-6 py-24 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-slate-900 px-8 py-20 text-center shadow-2xl sm:px-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              There's always <br />
              <span className="text-slate-400">somewhere new.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-slate-300">
              <strong className="text-white">Indonesia is full of surprises.</strong> <br/>
              Dari kota yang tak pernah tidur hingga tempat-tempat tersembunyi yang belum banyak dikenal, selalu ada sesuatu yang baru untuk ditemukan. Lihat Indonesia lebih dekat, jelajahi lebih jauh, dan temukan petualanganmu berikutnya.
            </p>
            <div className="mt-10 flex justify-center">
              {/* TOMBOL CTA PAKAI FRAMER BUTTON (variant light karena bg gelap) */}
              <FramerButton 
                to="/trips" 
                text="Explore Destinations" 
                variant="light" 
                icon={ArrowUpRight} 
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
