/** @format */

import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  MapPin,
  Mountain,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { images } from "../data/images";

function Home() {
  const destinations = [
    {
      title: "Gunung Rinjani",
      location: "Lombok, Indonesia",
      image: images.mountain,
    },
    {
      title: "Bromo",
      location: "East Java, Indonesia",
      image: images.hero,
    },
    {
      title: "Tumpak Sewu",
      location: "Lumajang, Indonesia",
      image: images.camping,
    },
    {
      title: "Raja Ampat",
      location: "West Papua, Indonesia",
      image: images.ocean,
    },
  ];

  return (
    <div className="overflow-hidden bg-[#f5f2e9] text-[#17251f]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto min-h-[680px] max-w-[1400px] overflow-hidden rounded-[28px] sm:min-h-[720px]">
          <img
            src={images.hero}
            alt="Vitala adventure landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

          {/* Hero label */}
          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:left-8 sm:top-8">
            <span className="size-1.5 rounded-full bg-white" />
            Explore Indonesia
          </div>

          {/* Hero content */}
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
            <div className="max-w-4xl text-white">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                <span className="h-px w-8 bg-white/40" />
                Explore beyond the ordinary
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[92px]">
                More than a trip,
                <br />
                it&apos;s a journey.
              </h1>

              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  Temukan destinasi terbaik, pengalaman baru, dan perjalanan
                  yang layak untuk dikenang.
                </p>

                <Link
                  to="/classes"
                  className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#17251f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9e5d9]"
                >
                  Jelajahi sekarang
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESTINATIONS
      ====================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#dfe5d9]">
                  <Compass className="size-4 text-[#315341]" />
                </span>

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                  Destinasi pilihan
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Jelajahi tempat yang
                <br />
                layak dikenang.
              </h2>
            </div>

            <Link
              to="/classes"
              className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#315341]"
            >
              Lihat semua
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <Link
                key={destination.title}
                to="/classes"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#ddd8cc]">
                  <div className="aspect-[0.82] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] text-white/65">
                      <MapPin className="size-3" />
                      {destination.location}
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {destination.title}
                      </h3>

                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#17251f] transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="bg-[#e8e5db] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#315341]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                Tentang Vitala
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Perjalanan bukan
              <br />
              cuma soal tempat.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#66736b] sm:text-base">
              Vitala hadir untuk membantu kamu menemukan perjalanan yang lebih
              berarti. Dari pegunungan, hutan, sampai pesisir Indonesia,
              setiap tempat punya cerita yang berbeda.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#18372a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#244b39]"
            >
              Kenal Vitala
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src={images.about}
                alt="Vitala journey"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-[#f5f2e9]/90 p-5 shadow-xl backdrop-blur-xl sm:left-auto sm:w-[330px]">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#dfe5d9]">
                  <Mountain className="size-5 text-[#315341]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Find your own path.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#66736b]">
                    Setiap perjalanan punya cerita yang hanya bisa kamu
                    temukan sendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND STATEMENT
      ====================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#18372a] text-white">
          <div className="relative px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-white/10" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <Sparkles className="size-4 text-[#d8c98d]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                    The Vitala way
                  </p>
                </div>

                <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Jelajahi alam.
                  <br />
                  Temukan dirimu.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                  Pergi lebih jauh, lihat lebih banyak, dan buat cerita yang
                  pantas untuk dibawa pulang.
                </p>
              </div>

              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <p className="text-sm leading-7 text-white/55">
                  Bukan tentang seberapa jauh kamu pergi. Tapi tentang apa
                  yang kamu temukan sepanjang perjalanan.
                </p>

                <Link
                  to="/about"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Discover Vitala
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px]">
          <img
            src={images.adventure}
            alt="Start your next adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

          <div className="relative min-h-[430px] p-8 text-white sm:p-12 lg:p-16">
            <div className="flex min-h-[350px] flex-col justify-end">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
                Your next chapter
              </p>

              <h2 className="max-w-2xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Pergi ke tempat
                <br />
                yang belum pernah kamu lihat.
              </h2>

              <Link
                to="/classes"
                className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17251f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9e5d9]"
              >
                Mulai menjelajah
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;