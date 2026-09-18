import {
  ArrowDown,
  ArrowRight,
  Compass,
  Map,
  Mountain,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { images } from "../data/images";

function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-end overflow-hidden">
        <img
          src={images.about}
          alt="Indonesian adventure landscape"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl text-white">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/60" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                About Vitala
              </p>
            </div>

            <h1 className="text-6xl font-bold leading-[0.88] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[105px]">
              Explore beyond
              <br />
              <span className="text-white/50">the ordinary.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              A place for curious minds, open roads, wild landscapes, and
              journeys worth remembering.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 md:flex">
          <span>Our story</span>
          <ArrowDown className="size-4 animate-bounce" />
        </div>

       
      </section>

      {/* ================= STORY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Our story
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Adventure starts
              <br />
              <span className="text-muted-foreground">with curiosity.</span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                We believe adventure isn't simply about reaching the highest
                mountain or travelling the farthest distance.
              </p>

              <p>
                It's about choosing a different road, following an unfamiliar
                trail, watching the sky change, and finding something that
                makes you stop for a moment.
              </p>

              <p>
                Vitala exists to inspire that feeling — the feeling of wanting
                to step outside, explore something new, and create stories of
                your own.
              </p>
            </div>

            <Link
              to="/classes"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-1"
            >
              Explore Destinations
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* side visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-muted/50" />

            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={images.about}
                alt="Vitala landscape"
                className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Keep exploring
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  There is always another path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Our philosophy
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
                Go further.
                <br />
                <span className="text-muted-foreground">
                  Stay curious.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Every journey is different. There is no single definition of
              adventure — only places to discover, paths to follow, and
              memories waiting to be made.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border bg-border md:grid-cols-3">
            {/* Explore */}
            <div className="group bg-background p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-full border">
                  <Compass className="size-5" />
                </div>

                <span className="text-xs font-semibold text-muted-foreground">
                  01
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-bold">Explore</h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Discover landscapes, cultures, trails, and places you have
                never experienced before.
              </p>

              <ArrowRight className="mt-8 size-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>

            {/* Wander */}
            <div className="group bg-background p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-full border">
                  <Map className="size-5" />
                </div>

                <span className="text-xs font-semibold text-muted-foreground">
                  02
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-bold">Wander</h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Sometimes the best memories happen when you leave the planned
                route and take the road less travelled.
              </p>

              <ArrowRight className="mt-8 size-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>

            {/* Remember */}
            <div className="group bg-background p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-full border">
                  <Sparkles className="size-5" />
                </div>

                <span className="text-xs font-semibold text-muted-foreground">
                  03
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-bold">Remember</h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Turn every journey into a story, every view into a memory, and
                every adventure into something worth keeping.
              </p>

              <ArrowRight className="mt-8 size-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISUAL BREAK ================= */}
      <section className="relative min-h-[620px] overflow-hidden">
        <img
          src={images.mountain}
          alt="Mountain landscape"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <Mountain className="size-7" />

            <h2 className="mt-7 text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              The best stories
              <br />
              <span className="text-white/50">happen outside.</span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Leave the familiar behind. Take the long way. Let the landscape
              become part of your story.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-10 rounded-[2.5rem] border bg-muted/30 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Ready?
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Your next adventure
              <br />
              <span className="text-muted-foreground">starts here.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Find a destination, choose your activity, and start planning
              where the road takes you next.
            </p>
          </div>

          <Link
            to="/classes"
            className="group inline-flex h-13 items-center justify-center gap-3 rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-1"
          >
            Start Exploring
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
