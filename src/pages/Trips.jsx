/** @format */

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star, Plus, MapPin, Compass, MoveHorizontal } from "lucide-react";

// ==========================================
// KOMPONEN KARTU 3D TILT (Hanya untuk Activities)
// ==========================================
function TiltCard({ act }) {
  const ref = useRef(null);
  
  // Setup nilai gerakan kursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring biar gerakannya mulus (gak kaku)
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Transformasi kursor jadi rotasi
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ rotate: act.rotate }}
      whileHover={{ y: -15, rotate: 0, scale: 1.05, zIndex: 40 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex-shrink-0 w-[280px] sm:w-[320px] snap-center cursor-grab active:cursor-grabbing"
    >
      <div className="absolute inset-0 translate-y-4 translate-x-2 rounded-[32px] bg-slate-200/60 blur-sm" />
      
      <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] border-[6px] border-white shadow-xl">
        <img src={act.image} alt={act.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
        
        <div className="absolute top-5 left-5 flex gap-1" style={{ transform: "translateZ(30px)" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < act.rating ? "fill-white text-white" : "text-white/40"}`} />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-3xl font-medium capitalize mb-5">{act.title}</h3>
          <div className="flex justify-between text-xs text-white/90 border-t border-white/20 pt-4">
            <div>
              <p className="font-semibold mb-1 uppercase tracking-widest text-[9px] text-white/60">Price</p>
              <p className="font-medium text-sm">{act.price}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold mb-1 uppercase tracking-widest text-[9px] text-white/60">Duration</p>
              <p className="font-medium text-sm">{act.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// DATA
// ==========================================
const ACTIVITIES = [
  { id: 1, title: "Hiking", price: "$399 - $599", duration: "4 hours", rating: 5, image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop", rotate: -3 },
  { id: 2, title: "Culture", price: "$150 - $300", duration: "2 hours", rating: 5, image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop", rotate: 2 },
  { id: 3, title: "Diving", price: "$500 - $800", duration: "6 hours", rating: 5, image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop", rotate: -1 },
  { id: 4, title: "Sunrise", price: "$200 - $400", duration: "5 hours", rating: 4, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop", rotate: 3 },
];

const PLACES = [
  { id: 1, name: "Candi Borobudur", location: "Magelang", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Pura Besakih", location: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Monumen Nasional", location: "Jakarta", image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Danau Toba", location: "Sumatera Utara", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Kawah Ijen", location: "Banyuwangi", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Raja Ampat", location: "Papua", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop" },
];

export default function Trips() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-slate-900 selection:bg-slate-900 selection:text-white pt-32 pb-24">
      
      {/* HERO SECTION */}
      <section className="relative mb-24 flex flex-col items-center justify-center px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black tracking-tighter text-slate-900 pointer-events-none whitespace-nowrap z-0"
        >
          EXPLORE
        </motion.h1>

        <motion.div
          initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 max-w-4xl"
        >
          <motion.p variants={fadeUp} className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
            <Compass className="h-4 w-4" />
            Discover Indonesia
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold leading-[1.05] tracking-tighter sm:text-7xl lg:text-[90px] text-slate-900">
            Your Next<br />
            <span className="text-slate-400">Adventure.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 mx-auto max-w-2xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base lg:text-lg">
            Dari sudut kota yang penuh kehidupan hingga keindahan alam yang memukau. Jelajahi budaya, temukan tempat tersembunyi, dan rasakan sisi Indonesia yang belum pernah kamu kenal.
          </motion.p>
        </motion.div>
      </section>

      {/* POPULAR ACTIVITIES */}
      <section className="relative mb-32">
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-black tracking-tighter text-slate-900/[0.03] pointer-events-none whitespace-nowrap z-0">
          ACTIVITIES
        </h1>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col items-center mb-12">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold tracking-tight">
              Popular Activities
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
              <MoveHorizontal className="h-3.5 w-3.5" /> Geser untuk melihat
            </motion.p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32" />

            <div className="flex w-full gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 py-12 sm:px-12 lg:px-20" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {ACTIVITIES.map((act) => (
                <TiltCard key={act.id} act={act} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PLACES */}
      <section className="relative mb-32">
        <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-black tracking-tighter text-slate-900/[0.03] pointer-events-none whitespace-nowrap z-0">
          PLACES
        </h1>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center text-3xl font-bold tracking-tight mb-12">
            Popular Places
          </motion.h2>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PLACES.map((place) => (
              <motion.div 
                key={place.id} 
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-[24px] cursor-pointer shadow-sm hover:shadow-2xl transition-all"
              >
                <img src={place.image} alt={place.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute bottom-6 left-6 text-white translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-1">{place.name}</h3>
                  <p className="text-sm text-white/70 flex items-center gap-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <MapPin className="h-3.5 w-3.5" /> {place.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-24 flex justify-center pb-20">
        <Link to="/signin" className="group inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-transparent px-10 py-5 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-105">
          Mulai Petualangan
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}