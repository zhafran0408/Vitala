import {
  ArrowDown,
  ArrowRight,
  Compass,
  Mountain,
  Tent,
  Trees,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-end overflow-hidden">
        <img
          src="/images/image1.jpg"
          alt="Indonesian mountain landscape"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-5xl text-white">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] backdrop-blur-xl">
              <Compass className="size-4" />
              Vitala / Indonesia
            </div>

            <h1 className="text-6xl font-bold leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[110px]">
              Adventure
              <br />
              <span className="text-white/55">is waiting.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Discover Indonesia through wild landscapes, hidden trails,
              unforgettable journeys, and places that make you want to keep
              exploring.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/classes"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                Explore Destinations
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="inline-flex h-12 items-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/60 md:flex">
          <span>Scroll to explore</span>
          <ArrowDown className="size-4 animate-bounce" />
        </div>

      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                The Vitala Journal
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Go somewhere
              <br />
              <span className="text-muted-foreground">you've never been.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              Adventure isn't always about going farther. Sometimes it's about
              taking a different road, finding a quiet trail, watching the
              sunrise, and discovering something you've never noticed before.
            </p>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Discover our story
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* mini stats */}
        <div className="mt-20 grid border-y sm:grid-cols-3">
          <div className="border-b py-7 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-3xl font-bold">17K+</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Islands to explore
            </p>
          </div>

          <div className="border-b py-7 sm:border-b-0 sm:px-8 sm:border-r">
            <p className="text-3xl font-bold">300+</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Mountains across Indonesia
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <p className="text-3xl font-bold">∞</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Places waiting for you
            </p>
          </div>
        </div>
      </section>

      {/* ================= WILD SECTION ================= */}
      <section className="relative min-h-[680px] overflow-hidden">
        <img
          src="/images/image3.jpg"
          alt="Indonesian forest landscape"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-end px-6 pb-16 sm:pb-20">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3">
              <Trees className="size-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                Into the wild
              </span>
            </div>

            <h2 className="mt-5 text-6xl font-bold leading-[0.9] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
              Find
              <br />
              your path.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              Leave the noise behind. Follow the trail, breathe the fresh air,
              and see where the journey takes you.
            </p>

            <Link
              to="/classes"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              Explore the trails
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Destinations
              </p>
            </div>

            <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              Choose your
              <br />
              <span className="text-muted-foreground">escape.</span>
            </h2>
          </div>

          <Link
            to="/classes"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            View all destinations
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Mountain */}
          <Link
            to="/classes"
            className="group relative min-h-[620px] overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/image2.jpg"
              alt="Indonesian mountain"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />

            <div className="absolute left-7 top-7 flex size-12 items-center justify-center rounded-full bg-white/90 text-black backdrop-blur-md">
              <Mountain className="size-5" />
            </div>

            

            <div className="absolute bottom-8 left-7 right-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Mountain
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Higher ground.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
                Dramatic peaks, cold air, and views that make every step worth
                it.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                Explore
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Coast */}
          <Link
            to="/classes"
            className="group relative mt-0 min-h-[620px] overflow-hidden rounded-[2rem] md:mt-24"
          >
            <img
              src="/images/image3.jpg"
              alt="Indonesian coast"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/10" />

            <div className="absolute left-7 top-7 flex size-12 items-center justify-center rounded-full bg-white/90 text-black backdrop-blur-md">
              <Compass className="size-5" />
            </div>

           

            <div className="absolute bottom-8 left-7 right-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Coast
              </p>

              <h3 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Follow the horizon.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
                Open skies, endless water, and a reason to keep moving.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
                Explore
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= CAMPING ================= */}
      <section className="bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 sm:py-36 lg:grid-cols-2 lg:items-center">
          <div className="group overflow-hidden rounded-[2rem]">
            <img
              src="/images/image4.jpg"
              alt="Camping adventure in Indonesia"
              className="h-[520px] w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-[620px]"
            />
          </div>

          <div>
            <div className="flex size-12 items-center justify-center rounded-full border bg-background">
              <Tent className="size-5" />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Slow down
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              Sleep under
              <br />
              <span className="text-muted-foreground">the stars.</span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
              Sometimes the best adventure is simply stepping away from the
              screen, setting up camp, and watching the world get quiet.
            </p>

            <Link
              to="/benefits"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-background"
            >
              Discover activities
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="group relative min-h-[580px] overflow-hidden rounded-[2.5rem]">
          <img
            src="/images/image6.jpg"
            alt="Indonesian outdoor adventure"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          <div className="relative z-10 flex min-h-[580px] items-center justify-center px-6 text-center text-white">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Your next chapter
              </p>

              <h2 className="mt-6 text-6xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                The world
                <br />
                is waiting.
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Pack light. Stay curious. Go somewhere worth remembering.
              </p>

              <Link
                to="/sign-up"
                className="group mt-9 inline-flex h-13 items-center gap-3 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                Start Exploring
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="absolute bottom-7 left-7 text-xs uppercase tracking-[0.25em] text-white/40">
            VITALA / 06
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;