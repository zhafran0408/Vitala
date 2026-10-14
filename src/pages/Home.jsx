/** @format */

import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  MapPin,
  Mountain,
  Sparkles,
  Star,
  Users,
  Leaf,
  Camera,
  Calendar,
} from "lucide-react";

import { Link } from "react-router-dom";

import { images } from "../data/images";

function Home() {
  const destinations = [
    {
      title: "Gunung Rinjani",
      location: "Lombok, Indonesia",
      image: images.mountain,
      tag: "Trekking",
      days: "4D 3N",
      rating: "4.9",
    },
    {
      title: "Bromo",
      location: "East Java, Indonesia",
      image: images.hero,
      tag: "Sunrise",
      days: "2D 1N",
      rating: "4.8",
    },
    {
      title: "Tumpak Sewu",
      location: "Lumajang, Indonesia",
      image: images.camping,
      tag: "Waterfall",
      days: "3D 2N",
      rating: "4.9",
    },
    {
      title: "Raja Ampat",
      location: "West Papua, Indonesia",
      image: images.ocean,
      tag: "Ocean",
      days: "5D 4N",
      rating: "5.0",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#f5f2e9] text-[#17251f]">
      <section className="relative px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto min-h-[680px] max-w-[1400px] overflow-hidden rounded-[28px] sm:min-h-[740px]">
          <img
            src={images.hero}
            alt="Vitala adventure landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25" />

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:left-8 sm:top-8">
            <span className="size-1.5 animate-pulse rounded-full bg-white" />
            Explore Indonesia
          </div>

          <div className="absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:right-8 sm:top-8 md:flex">
            <Calendar className="size-3" />
            Trip season 2026
          </div>

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
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
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
            {destinations.map((destination, i) => (
              <Link key={destination.title} to="/classes" className="group">
                <div className="relative overflow-hidden rounded-2xl bg-[#ddd8cc]">
                  <div className="aspect-[0.82] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                      {destination.tag}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                    <Star className="size-3 fill-[#f2c94c] text-[#f2c94c]" />
                    {destination.rating}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-[10px] text-white/65">
                        <MapPin className="size-3" />
                        {destination.location}
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                        {destination.days}
                      </span>
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {destination.title}
                      </h3>

                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#17251f] transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </div>

                  <span className="absolute -bottom-8 -right-8 size-24 rounded-full bg-[#18372a]/0 transition-all duration-500 group-hover:bg-[#18372a]/20" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#18372a] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <Sparkles className="size-4 text-[#c9d6bb]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  Why Vitala
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Perjalanan yang
                <br />
                dibuat dengan teliti.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55">
              Bukan sekadar daftar tempat. Setiap rute kami pilih manual,
              dipandu orang lokal, dan dirancang supaya kamu bisa fokus
              menikmati perjalanan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                no: "01",
                icon: Compass,
                title: "Curated routes",
                desc: "Rute dipilih manual oleh tim yang pernah ke sana langsung.",
              },
              {
                no: "02",
                icon: Users,
                title: "Local guides",
                desc: "Dipandu orang lokal yang paham medan dan cerita di baliknya.",
              },
              {
                no: "03",
                icon: Leaf,
                title: "Low impact",
                desc: "Kami jaga setiap tempat tetap asri untuk yang datang setelahmu.",
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
                  <p className="text-sm font-semibold">Find your own path.</p>

                  <p className="mt-1 text-xs leading-5 text-[#66736b]">
                    Setiap perjalanan punya cerita yang hanya bisa kamu temukan
                    sendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Camera className="size-4 text-[#315341]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                  Moments
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl">
                Cerita dari
                <br />
                para penjelajah.
              </h2>
            </div>

            <Link
              to="/classes"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#18372a]"
            >
              Lihat semua
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[20px]">
              <img
                src={images.hero}
                alt="Journey highlight"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  Featured trip
                </p>
                <p className="mt-1 text-lg font-semibold">Sunrise di Bromo</p>
              </div>
            </div>

            {[
              { src: images.mountain, label: "Trekking", place: "Rinjani" },
              { src: images.camping, label: "Camping", place: "Dieng" },
              { src: images.about, label: "Village", place: "Wae Rebo" },
              { src: images.ocean, label: "Ocean", place: "Raja Ampat" },
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

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#18372a] text-white">
          <div className="relative px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
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
                  Bukan tentang seberapa jauh kamu pergi. Tapi tentang apa yang
                  kamu temukan sepanjang perjalanan.
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

      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px]">
          <img
            src={images.adventure}
            alt="Start your next adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          <div className="relative min-h-[440px] p-8 text-white sm:p-12 lg:p-16">
            <div className="flex min-h-[360px] flex-col justify-end">
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