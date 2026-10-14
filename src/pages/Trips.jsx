/** @format */

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Star,
  Users,
  Mountain,
  Waves,
  Trees,
  Footprints,
  Calendar,
  Shield,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { images } from "../data/images";

const TRIPS = [
  {
    id: 1,
    title: "Rinjani Summit",
    location: "Lombok, NTB",
    duration: "4D / 3N",
    difficulty: "Hard",
    price: 3500000,
    rating: 4.9,
    reviews: 342,
    tag: "Best Seller",
    icon: Mountain,
    image: images.mountain,
    desc: "Trekking ke puncak 3.726 mdpl lewat jalur Sembalun. Danau Segara Anak, sunrise, dan crater rim.",
  },
  {
    id: 2,
    title: "Bromo Sunrise",
    location: "East Java",
    duration: "2D / 1N",
    difficulty: "Easy",
    price: 1250000,
    rating: 4.8,
    reviews: 528,
    tag: "Favorite",
    icon: Mountain,
    image: images.hero,
    desc: "Sunrise dari Penanjakan, kawah Bromo, dan savana Teletubbies Hill. Cocok untuk pemula.",
  },
  {
    id: 3,
    title: "Raja Ampat Dive",
    location: "West Papua",
    duration: "5D / 4N",
    difficulty: "Medium",
    price: 6800000,
    rating: 5.0,
    reviews: 187,
    tag: "Premium",
    icon: Waves,
    image: images.ocean,
    desc: "Diving di salah satu spot terbaik dunia. Manta, coral garden, dan hidden lagoon.",
  },
  {
    id: 4,
    title: "Tumpak Sewu",
    location: "Lumajang, Jatim",
    duration: "3D / 2N",
    difficulty: "Medium",
    price: 2100000,
    rating: 4.9,
    reviews: 412,
    tag: "Trending",
    icon: Trees,
    image: images.forest,
    desc: "Air terjun 120m dengan 1000 cabang aliran. Bisa turun ke dasar lewat jalur khusus.",
  },
  {
    id: 5,
    title: "Wae Rebo Village",
    location: "Flores, NTT",
    duration: "3D / 2N",
    difficulty: "Easy",
    price: 1850000,
    rating: 4.9,
    reviews: 265,
    tag: "Cultural",
    icon: Footprints,
    image: images.camping,
    desc: "Menginap di kampung adat 1.100 mdpl. Hidup bersama warga, tanpa sinyal, tanpa listrik.",
  },
  {
    id: 6,
    title: "Dieng Plateau",
    location: "Central Java",
    duration: "2D / 1N",
    difficulty: "Easy",
    price: 950000,
    rating: 4.7,
    reviews: 634,
    tag: "Weekend",
    icon: Mountain,
    image: images.adventure,
    desc: "Sunrise Sikunir, kawah Sikidang, candi Arjuna, dan telaga warna. Paket weekend singkat.",
  },
];

const MOMENTS = [
  {
    image: images.mountain,
    caption: "Summit attack · 2.850m",
    trip: "Rinjani Summit",
    height: "h-96",
  },
  {
    image: images.hero,
    caption: "Sunrise watch · Bromo",
    trip: "Bromo Sunrise",
    height: "h-64",
  },
  {
    image: images.camping,
    caption: "Camp night · Segara Anak",
    trip: "Rinjani Summit",
    height: "h-80",
  },
  {
    image: images.ocean,
    caption: "Coral dive · Raja Ampat",
    trip: "Raja Ampat Dive",
    height: "h-96",
  },
  {
    image: images.forest,
    caption: "Village walk · Wae Rebo",
    trip: "Wae Rebo Village",
    height: "h-72",
  },
];

const HOW_IT_WORKS = [
  { icon: Sparkles, title: "Pilih Trip", desc: "Browse paket sesuai level & durasi." },
  { icon: Calendar, title: "Booking", desc: "Pilih tanggal, isi data, bayar DP." },
  { icon: Shield, title: "Persiapan", desc: "Briefing, gear list, dan latihan." },
  { icon: Footprints, title: "Berangkat", desc: "Guide lokal jemput di meeting point." },
];

const TESTIMONIALS = [
  {
    name: "Raka Pratama",
    role: "Trekker · Bandung",
    image: images.about,
    quote:
      "Guide-nya sabar banget, briefing detail, dan logistik rapi. Rasanya kayak jalan sendiri tapi aman.",
    trip: "Rinjani Summit",
    rating: 5,
  },
  {
    name: "Sarah Wijaya",
    role: "Traveler · Jakarta",
    image: images.benefits.hero,
    quote:
      "Pertama kali ikut open trip dan langsung jatuh cinta. Detail kecil diperhatiin banget.",
    trip: "Bromo Sunrise",
    rating: 5,
  },
  {
    name: "Dimas Anggara",
    role: "Photographer · Surabaya",
    image: images.benefits.activities,
    quote:
      "Rute visualnya juara. Golden hour di Raja Ampat bener-bener nggak bisa dijelasin pakai kata.",
    trip: "Raja Ampat Dive",
    rating: 5,
  },
];

const formatIDR = (num) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);

export default function Trips() {
  const scrollGallery = (dir) => {
    const el = document.getElementById("moment-gallery");
    if (!el) return;
    const amount = 340;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  const featured = TRIPS[0];
  const rest = TRIPS.slice(1);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f2e9] text-[#17251f]">
      <section className="relative px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto min-h-[680px] max-w-[1400px] overflow-hidden rounded-[28px] sm:min-h-[720px]">
          <img
            src={images.hero}
            alt="Adventure landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30" />

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:left-8 sm:top-8">
            <span className="size-1.5 animate-pulse rounded-full bg-white" />
            Nusantara Expeditions
          </div>

          <div className="absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md sm:right-8 sm:top-8 md:flex">
            <Calendar className="size-3" />
            Season 2026
          </div>

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
            <div className="max-w-4xl text-white">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                <span className="h-px w-8 bg-white/40" />
                Curated trips, expert guides
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[88px]">
                Perjalanan yang
                <br />
                <span className="font-serif italic font-normal">
                  diingat selamanya.
                </span>
              </h1>

              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  42 rute pilihan di seluruh Indonesia. Dipandu orang lokal,
                  dikurasi manual, diuji langsung.
                </p>

                <Link
                  to="/sign-up"
                  className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#17251f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9e5d9]"
                >
                  Booking sekarang
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e0dbcd] bg-[#efe9dc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#e0dbcd] lg:grid-cols-4">
          {[
            { value: "42", label: "Curated Routes" },
            { value: "2.8K", label: "Explorers" },
            { value: "45", label: "Local Guides" },
            { value: "4.9", label: "Avg Rating", star: true },
          ].map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center gap-2 px-4 py-10 text-center transition-colors duration-300 hover:bg-[#e6e0d2] sm:py-14"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-[-0.04em] text-[#18372a] transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                  {stat.value}
                </span>
                {stat.star && (
                  <Star className="size-4 fill-[#18372a] text-[#18372a]" />
                )}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#66736b]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#dfe5d9]">
                  <Sparkles className="size-4 text-[#315341]" />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                  Paket unggulan
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Discover the best
                <br />
                <span className="font-serif italic font-normal text-[#315341]">
                  adventures.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#66736b]">
              Setiap paket udah termasuk guide lokal, logistik, tiket masuk,
              dan dokumentasi.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Link
              to="/sign-up"
              className="group relative col-span-1 overflow-hidden rounded-[24px] lg:row-span-2"
            >
              <div className="aspect-[4/5] w-full overflow-hidden lg:h-full lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="rounded-full bg-[#f2c94c] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                  {featured.tag}
                </span>
              </div>

              <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                <Star className="size-3 fill-[#f2c94c] text-[#f2c94c]" />
                {featured.rating} ({featured.reviews})
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <div className="mb-3 flex items-center gap-2 text-xs text-white/70">
                  <MapPin className="size-3.5" />
                  {featured.location}
                </div>

                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {featured.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  {featured.desc}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-white/70">
                  <div className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {featured.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mountain className="size-3.5" />
                    {featured.difficulty}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="size-3.5" />
                    Max 12
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-white/20 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Mulai dari
                    </p>
                    <p className="text-2xl font-semibold">
                      {formatIDR(featured.price)}
                      <span className="text-sm font-normal text-white/60">
                        /pax
                      </span>
                    </p>
                  </div>

                  <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#17251f] transition-all duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </div>
            </Link>

            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((trip) => {
                const Icon = trip.icon;
                return (
                  <Link
                    key={trip.id}
                    to="/sign-up"
                    className="group flex flex-col overflow-hidden rounded-[20px] border border-[#e0dbcd] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#18372a]/20 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#17251f] backdrop-blur-md">
                          {trip.tag}
                        </span>
                      </div>

                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                        <Star className="size-2.5 fill-[#f2c94c] text-[#f2c94c]" />
                        {trip.rating}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center gap-1.5 text-[10px] text-[#66736b]">
                        <MapPin className="size-3" />
                        {trip.location}
                      </div>

                      <h3 className="text-lg font-semibold tracking-tight">
                        {trip.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-3 text-[11px] text-[#66736b]">
                        <div className="flex items-center gap-1">
                          <Clock className="size-3" />
                          {trip.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon className="size-3" />
                          {trip.difficulty}
                        </div>
                      </div>

                      <div className="mt-4 flex items-end justify-between border-t border-[#e0dbcd] pt-3">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.16em] text-[#66736b]">
                            Mulai dari
                          </p>
                          <p className="text-sm font-bold text-[#18372a]">
                            {formatIDR(trip.price)}
                          </p>
                        </div>

                        <span className="flex size-8 items-center justify-center rounded-full bg-[#18372a] text-white transition-all duration-300 group-hover:rotate-45">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e0dbcd] bg-[#e8e5db] py-20 sm:py-24">
        <div className="mb-10 flex items-end justify-between gap-4 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-4">
            <div>
              <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                <span className="size-2 rounded-full bg-[#315341]" />
                Captured moments
              </p>
              <h2 className="max-w-xl text-3xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Jejak dari
                <br />
                <span className="font-serif italic font-normal text-[#315341]">
                  para penjelajah.
                </span>
              </h2>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollGallery("prev")}
                className="flex size-10 items-center justify-center rounded-full border border-[#c9c3b3] transition-all hover:bg-[#18372a] hover:text-white"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => scrollGallery("next")}
                className="flex size-10 items-center justify-center rounded-full border border-[#c9c3b3] transition-all hover:bg-[#18372a] hover:text-white"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          id="moment-gallery"
          className="flex gap-4 overflow-x-auto px-6 pb-4 sm:px-10 lg:px-16 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {MOMENTS.map((m, i) => (
            <div
              key={i}
              className={`group relative w-72 shrink-0 overflow-hidden rounded-2xl ${m.height}`}
            >
              <img
                src={m.image}
                alt={m.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {m.trip}
                </p>
                <p className="mt-1 text-sm font-semibold">{m.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
              How it works
            </p>
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl">
              Booking trip dalam
              <br />
              <span className="font-serif italic font-normal text-[#315341]">
                4 langkah simpel.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[20px] border border-[#e0dbcd] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#18372a]/20"
                >
                  <span className="absolute right-4 top-4 text-4xl font-semibold tracking-tighter text-[#18372a]/5 transition-colors group-hover:text-[#18372a]/10">
                    0{i + 1}
                  </span>

                  <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-[#dfe5d9] transition-colors group-hover:bg-[#18372a]">
                    <Icon className="size-4 text-[#315341] transition-colors group-hover:text-white" />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66736b]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#18372a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Sparkles className="size-4 text-[#c9d6bb]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  Captured journeys
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Kata mereka
                <br />
                <span className="font-serif italic font-normal text-[#c9d6bb]">
                  yang udah jalan.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-white/50">
              <Star className="size-4 fill-[#f2c94c] text-[#f2c94c]" />
              4.9 dari 2.847 review
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-[20px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="size-3.5 fill-[#f2c94c] text-[#f2c94c]"
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm leading-7 text-white/70">
                  "{t.quote}"
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-[11px] text-white/50">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9d6bb]">
                    {t.trip.split(" ")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px]">
          <img
            src={images.adventure}
            alt="Next adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

          <div className="relative min-h-[440px] p-8 text-white sm:p-12 lg:p-16">
            <div className="flex min-h-[360px] flex-col justify-end">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
                Your next chapter
              </p>

              <h2 className="max-w-2xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Siap jalan
                <br />
                <span className="font-serif italic font-normal text-white/70">
                  ke tempat baru?
                </span>
              </h2>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/sign-up"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17251f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9e5d9]"
                >
                  Booking sekarang
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  Lihat gear dulu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}