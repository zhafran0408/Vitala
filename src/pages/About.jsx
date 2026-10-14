/** @format */

import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Leaf,
  Mountain,
  Sparkles,
  MapPin,
  Camera,
  Users,
  Star,
  Globe,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import { images } from "../data/images";

function About() {
  return (
    <div className="overflow-hidden bg-[#f5f2e9] text-[#17251f]">
      <section className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto min-h-[640px] max-w-[1400px] overflow-hidden rounded-[28px] sm:min-h-[700px]">
          <img
            src={images.about}
            alt="Indonesian adventure landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:left-8 sm:top-8">
            <span className="size-1.5 animate-pulse rounded-full bg-white" />
            About Vitala
          </div>

          <div className="absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:right-8 sm:top-8 md:flex">
            <MapPin className="size-3" />
            Nusantara
          </div>

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
            <div className="max-w-4xl text-white">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                <span className="h-px w-8 bg-white/40" />
                More than a destination
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[88px]">
                Made for
                <br />
                the curious.
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Vitala dibuat untuk mereka yang selalu ingin melihat lebih
                jauh, mencoba hal baru, dan menemukan cerita di setiap
                perjalanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e0dbcd] bg-[#efe9dc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#e0dbcd] lg:grid-cols-4">
          {[
            { value: "120+", label: "Destinations" },
            { value: "8K+", label: "Travelers" },
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
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#dfe5d9]">
                <Compass className="size-4 text-[#315341]" />
              </span>

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                Our story
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Adventure starts
              <br />
              with curiosity.
            </h2>

            <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-[#66736b] sm:text-base">
              <p>
                Vitala lahir dari satu hal sederhana: rasa penasaran untuk
                melihat apa yang ada di luar rutinitas.
              </p>
              <p>
                Dari jalur pegunungan yang panjang, hutan yang tenang, sampai
                pesisir yang jauh, setiap perjalanan memberi kita kesempatan
                untuk menemukan sesuatu yang baru.
              </p>
            </div>

            <Link
              to="/classes"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#18372a] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#244b39]"
            >
              Explore destinations
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4">
            <div className="group col-span-3 row-span-6 overflow-hidden rounded-[20px]">
              <img
                src={images.mountain}
                alt="Mountain landscape"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group col-span-2 row-span-3 overflow-hidden rounded-[20px] bg-[#dfe5d9]">
              <img
                src={images.hero}
                alt="Mountain view"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="col-span-2 row-span-3 flex flex-col justify-between rounded-[20px] border border-[#e0dbcd] bg-[#faf7f0] p-5">
              <Mountain className="size-6 text-[#315341]" />
              <div>
                <p className="text-sm font-semibold">Find your own path.</p>
                <p className="mt-1 text-xs leading-5 text-[#66736b]">
                  Tidak semua perjalanan harus mengikuti jalan yang sama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#18372a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Sparkles className="size-4 text-[#c9d6bb]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  What we believe
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Keep exploring.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                Karena dunia terlalu luas untuk hanya dilihat dari satu
                tempat.
              </p>
            </div>

            <div className="hidden h-px flex-1 bg-white/10 lg:block" />
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                no: "01",
                icon: Compass,
                title: "Explore",
                desc: "Temukan tempat, jalur, dan pengalaman yang belum pernah kamu lihat sebelumnya.",
              },
              {
                no: "02",
                icon: Leaf,
                title: "Experience",
                desc: "Nikmati perjalanan itu sendiri, bukan hanya mengejar tempat tujuan.",
              },
              {
                no: "03",
                icon: Mountain,
                title: "Remember",
                desc: "Bawa pulang cerita yang lebih berarti daripada sekadar foto perjalanan.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.no}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] sm:p-8"
                >
                  <div className="absolute right-5 top-5 text-5xl font-semibold tracking-tighter text-white/5 transition-colors duration-500 group-hover:text-white/10">
                    {item.no}
                  </div>

                  <div className="mb-8 flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors duration-500 group-hover:bg-[#c9d6bb]">
                    <Icon className="size-5 text-white transition-colors duration-500 group-hover:text-[#18372a]" />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Camera className="size-4 text-[#315341]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                  Moments
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                Glimpses of
                <br />
                the journey.
              </h2>
            </div>

            <Link
              to="/classes"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#18372a]"
            >
              View all
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[20px]">
              <img
                src={images.hero}
                alt="Journey"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5 translate-y-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  Summit trail
                </p>
                <p className="mt-1 text-lg font-semibold">Mount Rinjani</p>
              </div>
            </div>

            {[
              { src: images.mountain, label: "Highlands", place: "Dieng" },
              { src: images.about, label: "Coastline", place: "Nusa Penida" },
              { src: images.mountain, label: "Forest", place: "Ubud" },
              { src: images.about, label: "Village", place: "Wae Rebo" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[20px]"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />
                <div className="absolute bottom-4 left-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {item.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto min-h-[560px] max-w-[1400px] overflow-hidden rounded-[28px]">
          <img
            src={images.hero}
            alt="Vitala mountain adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur-md sm:right-8 sm:top-8 md:flex">
            <Globe className="size-3" />
            17.000+ islands
          </div>

          <div className="relative flex min-h-[560px] items-end p-7 sm:p-10 lg:p-14">
            <div className="max-w-3xl text-white">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
                <span className="h-px w-8 bg-white/40" />
                Keep moving
              </p>

              <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                The world is bigger
                <br />
                <span className="text-white/50">than your routine.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                Tinggalkan yang familiar sesekali. Ambil jalan yang berbeda
                dan biarkan perjalanan menjadi bagian dari ceritamu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Heart className="size-4 text-[#315341]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                  Our promise
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Travel that
                <br />
                feels personal.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#66736b]">
              Setiap rekomendasi dibuat manual oleh tim lokal kami — bukan
              algoritma. Karena perjalanan terbaik dimulai dari cerita, bukan
              dari daftar.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Local first",
                desc: "Guide kami orang lokal yang paham betul medannya.",
              },
              {
                icon: Compass,
                title: "Curated routes",
                desc: "Rute dipilih manual, bukan hasil auto-generate.",
              },
              {
                icon: Leaf,
                title: "Low impact",
                desc: "Kami jaga setiap tempat tetap seperti saat kamu temukan.",
              },
              {
                icon: Star,
                title: "Real reviews",
                desc: "Ulasan asli dari traveler yang benar-benar pergi.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group rounded-[20px] border border-[#e0dbcd] bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#18372a]/20 hover:bg-white"
                >
                  <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-[#dfe5d9] transition-colors duration-300 group-hover:bg-[#18372a]">
                    <Icon className="size-4 text-[#315341] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#66736b]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[24px] bg-[#18372a] p-8 text-white sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-14">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
              Your next adventure
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              There&apos;s always
              <br />
              somewhere new.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
              Mulai perjalananmu dan temukan tempat yang mungkin belum pernah
              kamu bayangkan.
            </p>
          </div>

          <Link
            to="/classes"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#18372a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9e5d9]"
          >
            Explore destinations
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
