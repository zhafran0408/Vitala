/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Footprints,
  Tent,
  Compass,
  Camera,
  Backpack,
  Map,
  Quote,
  Sparkles,
} from "lucide-react";

import Footer from "../components/Footer";

// Foto-foto editorial resolusi tinggi dengan aesthetic moody & clean
const ACTIVITIES_DATA = [
  {
    id: "hiking",
    title: "Hiking",
    tagline: "Ascend Beyond the Noise",
    description: "Navigate elevated trails and re-engage your instincts in high-altitude terrain.",
    icon: Footprints,
    quote: "Silence is the loudest sound you will hear at 3,000 meters.",
    elevation: "2,850m",
    coordinates: "45°50'1'N 6°51'54'E",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "camping",
    title: "Wild Camping",
    tagline: "Unplug Under Raw Canopy",
    description: "Immerse in sub-zero overnight expeditions with essential, ultra-durable shelter.",
    icon: Tent,
    quote: "A night under open stars reshapes what you consider comfort.",
    elevation: "1,420m",
    coordinates: "46°35'12'N 8°00'05'E",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "exploration",
    title: "Expeditions",
    tagline: "Off-Grid Boundary Push",
    description: "Forge unmapped paths through dense ridge lines and glacial rivers.",
    icon: Compass,
    quote: "True discovery begins where cell signals and concrete fade.",
    elevation: "3,100m",
    coordinates: "64°08'43'N 21°55'41'W",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "photography",
    title: "Visual Framing",
    tagline: "Document Raw Light",
    description: "Capture the unpredictable interplay of alpine mist, golden hour, and scale.",
    icon: Camera,
    quote: "Light changes in seconds; perspective lasts for decades.",
    elevation: "1,980m",
    coordinates: "63°31'48'N 19°30'42'W",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "backpacking",
    title: "Ultralight Pass",
    tagline: "Everything You Need, Nothing Else",
    description: "Multi-day self-sustained movement engineered for speed and agility.",
    icon: Backpack,
    quote: "Heavy gear burdens the body; excess clutter burdens the mind.",
    elevation: "2,200m",
    coordinates: "42°26'04'N 1°28'00'E",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "navigation",
    title: "Topo Mastery",
    tagline: "Read Terrain Like Text",
    description: "Master orientation, contour reading, and off-grid pathfinding confidence.",
    icon: Map,
    quote: "When you know how to read the landscape, you are never lost.",
    elevation: "1,650m",
    coordinates: "47°00'00'N 12°30'00'E",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Benefits() {
  const [activeActivity, setActiveActivity] = useState(ACTIVITIES_DATA[0]);

  return (
    <div className="relative bg-[#f5f3ec] text-[#17251f] selection:bg-[#17382c] selection:text-white font-sans">
      
      {/* =====================================================
          1. HERO SECTION: Clean & Impactful Editorial Layout
      ====================================================== */}
      <section className="px-6 pt-28 pb-16 sm:px-12 lg:px-20 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex items-center gap-3 mb-8">
            <span className="size-2 rounded-full bg-[#17382c] animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#546258]">
              [ VITALA OUTDOOR DISCIPLINE ]
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] items-end gap-10">
            <h1 className="text-[56px] leading-[0.88] font-semibold tracking-[-0.05em] sm:text-8xl lg:text-[104px]">
              Raw nature, <br />
              <span className="font-serif italic font-normal text-[#43634a]">
                refined path.
              </span>
            </h1>

            <div className="space-y-6 lg:pb-3">
              <p className="text-sm sm:text-base leading-relaxed text-[#5c6860] max-w-md">
                We design outdoor experiences stripped of unnecessary noise. Pure elevation, calibrated discipline, and untouched horizons.
              </p>
              
              <div className="flex items-center gap-8 border-t border-[#d8d4c7] pt-4 text-xs font-mono text-[#78827a]">
                <div>
                  <span className="block text-[#17251f] font-semibold">06</span>
                  <span>Disciplines</span>
                </div>
                <div className="h-6 w-px bg-[#d8d4c7]" />
                <div>
                  <span className="block text-[#17251f] font-semibold">100%</span>
                  <span>Self-Sustained</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          2. DYNAMIC INTERACTIVE GALLERY SECTION
      ====================================================== */}
      <section className="border-y border-[#dcd7c9] bg-[#eae5d8]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            
            {/* LEFT MENU */}
            <div className="divide-y divide-[#dcd7c9] border-r border-[#dcd7c9]">
              {ACTIVITIES_DATA.map((item, index) => {
                const isActive = activeActivity.id === item.id;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveActivity(item)}
                    onMouseEnter={() => setActiveActivity(item)}
                    className={`group relative w-full text-left p-6 sm:p-8 transition-all duration-300 flex items-center justify-between ${
                      isActive ? "bg-[#ded8c8]" : "hover:bg-[#e4ddcd]"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#17382c]" />
                    )}

                    <div className="flex items-center gap-6 min-w-0">
                      <span className="text-xs font-mono font-medium text-[#838a84]">
                        0{index + 1}
                      </span>
                      
                      <div>
                        <h2 className="text-xl font-medium tracking-tight text-[#17251f] flex items-center gap-3">
                          {item.title}
                        </h2>
                        <p className="text-xs text-[#6e7770] mt-1 font-sans">
                          {item.tagline}
                        </p>
                      </div>
                    </div>

                    <div className={`p-3 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#17382c] text-white scale-110" : "bg-transparent text-[#17251f]/40 group-hover:text-[#17251f]"
                    }`}>
                      <ArrowUpRight className="size-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT DYNAMIC DISPLAY CARD WITH HIGH-END OVERLAY */}
            <div className="relative min-h-[580px] p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden bg-[#0e1d16] text-[#f5f3ec]">
              
              {/* Dynamic Image with Smooth Scale Effect */}
              <div className="absolute inset-0 z-0">
                <img
                  key={activeActivity.id}
                  src={activeActivity.image}
                  alt={activeActivity.title}
                  className="size-full object-cover transition-transform duration-1000 ease-out scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09140e] via-[#09140e]/60 to-black/30" />
              </div>

              {/* Top Glass Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-[10px] font-mono tracking-widest text-white/90 backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-[#a3c299]" />
                  <span>{activeActivity.coordinates}</span>
                </div>

                <div className="rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-[10px] font-mono text-[#a3c299] backdrop-blur-md">
                  ELEV. {activeActivity.elevation}
                </div>
              </div>

              {/* Center Editorial Focus */}
              <div className="relative z-10 mt-20 max-w-lg">
                <h3 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-lg">
                  {activeActivity.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  {activeActivity.description}
                </p>

                <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-2xl">
                  <Quote className="size-5 text-[#a3c299] mb-2 opacity-80" />
                  <p className="font-serif italic text-base sm:text-lg text-white/95 leading-relaxed">
                    “{activeActivity.quote}”
                  </p>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="relative z-10 mt-12 flex items-center justify-between border-t border-white/20 pt-6">
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
                  [ EXPLORE DISCIPLINE ]
                </span>

                <Link
                  to="/classes"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-semibold text-[#17382c] transition-all hover:bg-[#a3c299]"
                >
                  <span>View Expeditions</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          3. FEATURED CINEMATIC BANNER
      ====================================================== */}
      <section className="px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#d8d4c7] bg-[#eae5d8] p-8 sm:p-12 lg:p-16">
            
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#43634a] block mb-4">
                  // MANIFESTO
                </span>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#17251f] leading-tight">
                  Designed for those who seek depth over distance.
                </h2>
                <p className="mt-6 text-sm text-[#5c6860] leading-relaxed max-w-md">
                  Modern life constrains our field of view to screens and walls. We curate routes that expand your vision back to where it belongs.
                </p>
              </div>

              {/* Image Frame with Editorial Angle */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-black/10">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
                  alt="Scenic Alpine Horizon"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <p className="text-[10px] font-mono text-[#a3c299] uppercase">ALPINE STANDARD</p>
                    <p className="text-sm font-medium">Mount Pass Zero-Trace</p>
                  </div>
                  <Sparkles className="size-5 text-[#a3c299]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          4. CTA BANNER: Full Dark Clean Finish
      ====================================================== */}
      <section className="px-4 pb-20 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-[#17382c] p-10 sm:p-16 text-white shadow-2xl">
          
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
              alt="Night Sky Outdoor"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#17382c] via-[#17382c]/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#a3c299] block mb-3">
                READY TO STEP OUT?
              </span>
              <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
                Your next horizon is waiting.
              </h2>
            </div>

            <Link
              to="/classes"
              className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 text-xs font-semibold text-[#17382c] transition-all hover:bg-[#a3c299]"
            >
              <span>EXPLORE ALL ROUTES</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
