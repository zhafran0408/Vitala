/** @format */

import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Leaf,
  Mountain,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { images } from "../data/images";

function About() {
  return (
    <div className="overflow-hidden bg-[#f5f2e9] text-[#17251f]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto min-h-[620px] max-w-[1400px] overflow-hidden rounded-[28px] sm:min-h-[680px]">
          <img
            src={images.about}
            alt="Indonesian adventure landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

          <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:left-8 sm:top-8">
            <span className="size-1.5 rounded-full bg-white" />
            About Vitala
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

      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
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

              <p>
                Kami percaya perjalanan bukan hanya tentang tempat yang
                dituju, tapi juga tentang pengalaman yang kita bawa pulang.
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

          <div className="relative">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src={images.mountain}
                alt="Mountain landscape"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/50 bg-[#f5f2e9]/90 p-5 shadow-xl backdrop-blur-xl sm:left-auto sm:w-[340px]">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#dfe5d9]">
                  <Mountain className="size-5 text-[#315341]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Find your own path.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#66736b]">
                    Tidak semua perjalanan harus mengikuti jalan yang sama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE BELIEVE
      ====================================================== */}
      <section className="bg-[#e8e5db] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="size-4 text-[#315341]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#66736b]">
                What we believe
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Keep exploring.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#66736b] sm:text-base">
              Karena dunia terlalu luas untuk hanya dilihat dari satu tempat.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-[22px] bg-[#f5f2e9] p-7 sm:p-8">
              <div className="mb-8 flex size-11 items-center justify-center rounded-full bg-[#dfe5d9]">
                <Compass className="size-5 text-[#315341]" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">
                Explore
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#66736b]">
                Temukan tempat, jalur, dan pengalaman yang belum pernah kamu
                lihat sebelumnya.
              </p>
            </div>

            <div className="rounded-[22px] bg-[#f5f2e9] p-7 sm:p-8">
              <div className="mb-8 flex size-11 items-center justify-center rounded-full bg-[#dfe5d9]">
                <Leaf className="size-5 text-[#315341]" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">
                Experience
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#66736b]">
                Nikmati perjalanan itu sendiri, bukan hanya mengejar tempat
                tujuan.
              </p>
            </div>

            <div className="rounded-[22px] bg-[#18372a] p-7 text-white sm:p-8">
              <div className="mb-8 flex size-11 items-center justify-center rounded-full bg-white/10">
                <Mountain className="size-5 text-white" />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">
                Remember
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Bawa pulang cerita yang lebih berarti daripada sekadar
                foto perjalanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL STATEMENT
      ====================================================== */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="relative mx-auto min-h-[560px] max-w-[1400px] overflow-hidden rounded-[28px]">
          <img
            src={images.hero}
            alt="Vitala mountain adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative flex min-h-[560px] items-end p-7 sm:p-10 lg:p-14">
            <div className="max-w-3xl text-white">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
                <span className="h-px w-8 bg-white/40" />
                Keep moving
              </p>

              <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                The world is bigger
                <br />
                <span className="text-white/50">
                  than your routine.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                Tinggalkan yang familiar sesekali. Ambil jalan yang berbeda
                dan biarkan perjalanan menjadi bagian dari ceritamu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
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
