/** @format */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Calendar, User } from "lucide-react";

const NEWS_DATA = [
  { id: 1, title: "The Untamed Beauty of Mount Bromo", category: "Mountain", date: "12 Nov 2024", author: "David", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop", isFeatured: true },
  { id: 2, title: "Cultural Heart of Yogyakarta", category: "Heritage", date: "10 Nov 2024", author: "Sarah", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Hidden Paradises in Raja Ampat", category: "Ocean", date: "08 Nov 2024", author: "Budi", image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Jakarta After Dark", category: "City", date: "05 Nov 2024", author: "Alex", image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Essential Tips for First-Time Trekkers", category: "Guide", date: "01 Nov 2024", author: "Raka", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop" },
];

export default function News() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-slate-900 selection:bg-slate-900 selection:text-white pt-32 pb-24">
      
      {/* HERO */}
      <section className="relative mb-16 flex flex-col items-center justify-center px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black tracking-tighter text-slate-900 pointer-events-none whitespace-nowrap z-0"
        >
          JOURNAL
        </motion.h1>

        <motion.div
          initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
            Stories & Guides
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl font-extrabold leading-[1.05] tracking-tighter sm:text-7xl">
            Latest <span className="text-slate-400">News.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 mx-auto max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
            Temukan inspirasi perjalanan, tips liburan, dan cerita seru dari para penjelajah Nusantara.
          </motion.p>
        </motion.div>
      </section>

      {/* BENTO GRID */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[600px]"
        >
          {NEWS_DATA.map((news) => (
            <motion.div
              key={news.id}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-[24px] cursor-pointer shadow-lg ${
                news.isFeatured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
              }`}
            >
              <img
                src={news.image}
                alt={news.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-90 transition-opacity group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-white/70">
                    <Calendar className="h-3 w-3" /> {news.date}
                  </span>
                </div>

                <div>
                  <h3 className={`font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors ${news.isFeatured ? "text-3xl sm:text-5xl" : "text-xl sm:text-2xl"}`}>
                    {news.title}
                  </h3>
                  
                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-xs font-bold text-white">{news.author}</p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 flex justify-center">
          <button className="group inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white">
            Muat Lebih Banyak
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
}