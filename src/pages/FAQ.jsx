/** @format */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Search, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ==========================================
// DATA FAQ (BILINGUAL)
// ==========================================
const generalQuestions = [
  {
    q_id: "Apa itu Vitala?",
    q_en: "What is Vitala?",
    a_id: "Vitala adalah platform petualangan untuk menemukan destinasi, aktivitas luar ruangan, dan inspirasi untuk perjalananmu selanjutnya.",
    a_en: "Vitala is an adventure platform for discovering destinations, outdoor activities, and inspiration for your next journey.",
  },
  {
    q_id: "Apakah saya harus menjadi pendaki berpengalaman?",
    q_en: "Do I need to be an experienced adventurer?",
    a_id: "Sama sekali tidak. Petualangan bisa sesederhana menjelajahi jalur baru, mengunjungi tempat baru, atau sekadar menghabiskan waktu di alam terbuka.",
    a_en: "Not at all. Adventure can be as simple as exploring a new trail, visiting a new place, or spending time outdoors.",
  },
  {
    q_id: "Aktivitas apa saja yang bisa saya temukan?",
    q_en: "What activities can I discover?",
    a_id: "Vitala berfokus pada aktivitas seperti hiking, camping, fotografi, backpacking, eksplorasi, dan pengalaman luar ruangan lainnya.",
    a_en: "Vitala focuses on activities such as hiking, camping, photography, backpacking, exploration, and other outdoor experiences.",
  },
];

const destinationQuestions = [
  {
    q_id: "Bisakah saya menggunakan Vitala untuk merencanakan perjalanan?",
    q_en: "Can I use Vitala to plan a trip?",
    a_id: "Ya. Tujuan Vitala adalah membantu kamu menemukan ide dan destinasi yang dapat menginspirasi perjalanan berikutnya.",
    a_en: "Yes. The goal of Vitala is to help you discover ideas and destinations that can inspire your next trip.",
  },
  {
    q_id: "Bagaimana cara memilih destinasi yang tepat?",
    q_en: "How do I choose a destination?",
    a_id: "Mulailah dengan jenis pengalaman yang kamu inginkan. Jelajahi gunung, hutan, pesisir pantai, dan destinasi lain untuk menemukan yang paling cocok.",
    a_en: "Start with the kind of experience you want. Explore mountains, forests, coastlines, and other destinations to find something that fits your journey.",
  },
  {
    q_id: "Apakah destinasi tersebut cocok untuk pemula?",
    q_en: "Are the destinations suitable for beginners?",
    a_id: "Setiap destinasi menawarkan tingkat petualangan yang berbeda. Selalu pertimbangkan kondisi medan, tingkat kesulitan, dan persiapan sebelum berangkat.",
    a_en: "Each destination can offer a different level of adventure. Always consider the conditions, difficulty, and preparation needed before starting a journey.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 selection:bg-slate-900 selection:text-white pt-32 pb-24">
      
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative px-6 pb-16 pt-10 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 lg:pt-20">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black tracking-tighter text-slate-900 pointer-events-none whitespace-nowrap z-0"
        >
          FAQ
        </motion.h1>

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <p className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
              <HelpCircle className="h-4 w-4" />
              Frequently Asked Questions
            </p>
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl">
              Ada Pertanyaan? <br />
              <span className="text-slate-400">Kami punya jawabannya.</span>
            </h1>
            <p className="mt-6 mx-auto max-w-lg text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
              Semua yang perlu kamu tahu sebelum memulai petualangan berikutnya bersama Vitala. <br/>
              <span className="italic text-slate-400">Everything you need to know before starting your next adventure.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          FAQ CONTENT
      ========================================== */}
      <section className="relative z-10 border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
          
          {/* SEARCH BAR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 size-5 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
              <input
                type="text"
                placeholder="Cari pertanyaan... / Search a question..."
                className="h-16 w-full rounded-full border border-slate-200 bg-white pl-14 pr-6 text-sm font-medium shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
              />
            </div>
          </motion.div>

          {/* ACCORDION GENERAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-900" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">Umum / General</p>
            </div>

            <Accordion type="single" collapsible className="border-t border-slate-200">
              {generalQuestions.map((item, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border-slate-200">
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-bold text-slate-900 group-hover:text-slate-600 transition-colors sm:text-lg">
                        {item.q_id}
                      </span>
                      <span className="text-xs font-medium italic text-slate-400">
                        {item.q_en}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-3xl pb-7 pt-2">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base mb-2">
                      {item.a_id}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-400 italic">
                      {item.a_en}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* ACCORDION DESTINATIONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-900" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">Destinasi / Destinations</p>
            </div>

            <Accordion type="single" collapsible className="border-t border-slate-200">
              {destinationQuestions.map((item, index) => (
                <AccordionItem key={index} value={`destination-${index}`} className="border-slate-200">
                  <AccordionTrigger className="py-6 text-left hover:no-underline group">
                    <div className="flex flex-col gap-1">
                      <span className="text-base font-bold text-slate-900 group-hover:text-slate-600 transition-colors sm:text-lg">
                        {item.q_id}
                      </span>
                      <span className="text-xs font-medium italic text-slate-400">
                        {item.q_en}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-3xl pb-7 pt-2">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base mb-2">
                      {item.a_id}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-400 italic">
                      {item.a_en}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          CTA BOTTOM
      ========================================== */}
      <section className="relative z-10 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-8 rounded-[32px] bg-slate-900 p-10 sm:flex-row sm:p-14 shadow-2xl"
          >
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">
                Masih penasaran? / Still curious?
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Petualangan berikutnya ada di luar sana.
              </h2>
            </div>

            <Link
              to="/trips"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-transform duration-300 hover:scale-105"
            >
              Jelajahi Destinasi
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}