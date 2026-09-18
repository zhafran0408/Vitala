import {
  ArrowRight,
  Backpack,
  Camera,
  Compass,
  Footprints,
  Map,
  Tent,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Benefits() {
  const activities = [
    {
      number: "01",
      title: "Hiking",
      description:
        "Follow beautiful trails and discover landscapes from a completely different perspective.",
      icon: Footprints,
    },
    {
      number: "02",
      title: "Camping",
      description:
        "Disconnect from the everyday, slow down, and spend a night closer to nature.",
      icon: Tent,
    },
    {
      number: "03",
      title: "Exploration",
      description:
        "Find unfamiliar places, take the unexpected road, and create your own path.",
      icon: Compass,
    },
    {
      number: "04",
      title: "Photography",
      description:
        "Capture landscapes, details, light, and unforgettable moments along the journey.",
      icon: Camera,
    },
    {
      number: "05",
      title: "Backpacking",
      description:
        "Travel light, move freely, and experience more of what the world has to offer.",
      icon: Backpack,
    },
    {
      number: "06",
      title: "Navigation",
      description:
        "Plan your route, read the landscape, and discover destinations worth reaching.",
      icon: Map,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 size-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-32 top-20 size-[500px] rounded-full bg-muted blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-px w-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-24">
          <div className="w-full">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Activities
              </p>
            </div>

            <h1 className="mt-8 max-w-6xl text-7xl font-bold leading-[0.82] tracking-[-0.06em] sm:text-8xl md:text-9xl lg:text-[150px]">
              Find what
              <br />
              <span className="text-muted-foreground/40">
                moves you.
              </span>
            </h1>

            <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Adventure can look different for everyone. Choose an activity,
                step outside, and let the journey begin.
              </p>

              <Link
                to="#activities"
                className="group inline-flex w-fit items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background"
              >
                Discover Activities

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        
      </section>

      {/* ================= INTRO ================= */}
      <section
        id="activities"
        className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Choose your adventure
              </p>
            </div>

            <h2 className="mt-6 text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Move.
              <br />
              <span className="text-muted-foreground/40">
                Discover.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            You don't need a reason to explore. Whether you prefer a quiet
            forest trail, a night beneath the stars, or a long journey with
            nothing but a backpack, there's an adventure waiting for you.
          </p>
        </div>

        {/* ================= ACTIVITY GRID ================= */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="group relative min-h-[340px] bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-muted/40 sm:p-10"
              >
                {/* NUMBER */}
                <div className="absolute right-8 top-8 text-xs font-semibold tracking-[0.2em] text-muted-foreground/40">
                  {activity.number}
                </div>

                {/* ICON */}
                <div className="flex size-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-foreground group-hover:text-background">
                  <Icon className="size-6" />
                </div>

                {/* CONTENT */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {activity.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                    {activity.description}
                  </p>
                </div>

                {/* ARROW */}
                <ArrowRight className="absolute bottom-8 left-8 size-5 text-muted-foreground transition-all duration-500 group-hover:translate-x-2 group-hover:text-foreground sm:bottom-10 sm:left-10" />
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= VISUAL STATEMENT ================= */}
      <section className="border-y bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-40">
                No two journeys are the same
              </p>

              <h2 className="mt-6 text-6xl font-bold leading-[0.85] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Choose your way
                <br />
                <span className="opacity-30">
                  to get outside.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 opacity-60">
                Some people chase summits. Others chase sunsets. Some simply
                want to see what lies beyond the next corner.
              </p>

              <div className="mt-8 flex gap-3">
                <span className="rounded-full border border-background/20 px-5 py-2 text-sm opacity-60">
                  Explore
                </span>

                <span className="rounded-full border border-background/20 px-5 py-2 text-sm opacity-60">
                  Wander
                </span>

                <span className="rounded-full border border-background/20 px-5 py-2 text-sm opacity-60">
                  Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Beyond the activity
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              It's not about
              <br />
              <span className="text-muted-foreground/40">
                the checklist.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              The best part of an adventure isn't always the destination.
              It's the feeling of being somewhere new.
            </p>

            <p>
              It's the early morning air, the sound of your footsteps, the
              unexpected view, and the stories you bring home.
            </p>

            <Link
              to="/classes"
              className="group inline-flex items-center gap-3 pt-3 text-sm font-semibold text-foreground"
            >
              Find your destination

              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-28 sm:pb-36">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-20 text-background sm:px-12 sm:py-28 lg:px-20">
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-50">
              Your adventure
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Don't just imagine it.
              <br />
              <span className="opacity-40">Go.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 opacity-60 sm:text-lg">
              Explore destinations, discover new activities, and find
              somewhere worth remembering.
            </p>

            <Link
              to="/classes"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-1"
            >
              Explore Destinations

              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 size-72 rounded-full border border-background/10 sm:size-96" />

          <div className="absolute -bottom-40 -right-10 size-96 rounded-full border border-background/10" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Benefits;