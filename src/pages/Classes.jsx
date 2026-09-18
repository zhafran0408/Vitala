import {
  ArrowDown,
  ArrowRight,
  Mountain,
  Trees,
  Waves,
} from "lucide-react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Classes() {
  const destinations = [
    {
      number: "01",
      title: "Mountain Escape",
      subtitle: "Reach higher.",
      description:
        "Leave the noise behind and discover the calm, challenge, and freedom of the mountains.",
      icon: Mountain,
    },
    {
      number: "02",
      title: "Forest Trails",
      subtitle: "Go deeper.",
      description:
        "Walk beneath the trees, slow down, and discover the beauty hidden beyond the familiar path.",
      icon: Trees,
    },
    {
      number: "03",
      title: "Coastal Journey",
      subtitle: "Follow the horizon.",
      description:
        "Find open skies, endless coastlines, and a different kind of freedom beside the sea.",
      icon: Waves,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b">
        {/* Background shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 size-[550px] rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -right-40 bottom-0 size-[550px] rounded-full bg-muted blur-3xl" />

          <div className="absolute left-1/2 top-0 h-full w-px bg-border/40" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-24">
          <div className="w-full">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Destinations
              </p>
            </div>

            <h1 className="mt-8 max-w-6xl text-7xl font-bold leading-[0.82] tracking-[-0.06em] sm:text-8xl md:text-9xl lg:text-[150px]">
              Choose your
              <br />
              <span className="text-muted-foreground/40">
                next escape.
              </span>
            </h1>

            <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                From mountain peaks to quiet forests and endless coastlines,
                discover a place that makes you want to keep moving.
              </p>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Explore</span>

                <ArrowDown className="size-4 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Where will you go?
              </p>
            </div>

            <h2 className="mt-6 text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Somewhere
              <br />
              <span className="text-muted-foreground/40">
                worth remembering.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Indonesia is full of places waiting to be explored. Choose a
            landscape, follow your curiosity, and let the journey become part
            of the destination.
          </p>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-28 sm:pb-36">
        <div className="space-y-5">
          {destinations.map((destination, index) => {
            const Icon = destination.icon;

            return (
              <Link
                key={destination.title}
                to="/sign-in"
                className={`group relative block overflow-hidden rounded-[2rem] border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-muted/30 sm:p-12 lg:p-16 ${
                  index === 1
                    ? "lg:ml-16"
                    : index === 2
                      ? "lg:mr-16"
                      : ""
                }`}
              >
                {/* Decorative number */}
                <div className="pointer-events-none absolute -right-6 -top-12 text-[180px] font-bold leading-none tracking-[-0.08em] text-muted-foreground/[0.04] transition-transform duration-700 group-hover:translate-x-3">
                  {destination.number}
                </div>

                <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-3 group-hover:bg-foreground group-hover:text-background">
                        <Icon className="size-6" />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.25em] text-muted-foreground">
                        {destination.number}
                      </span>
                    </div>

                    <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                      {destination.title}
                    </p>

                    <h2 className="mt-3 text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                      {destination.subtitle}
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                      {destination.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    Discover

                    <span className="flex size-12 items-center justify-center rounded-full border transition-all duration-500 group-hover:bg-foreground group-hover:text-background">
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="relative z-10 mt-12 h-px w-full overflow-hidden bg-border">
                  <div className="h-full w-0 bg-foreground transition-all duration-700 group-hover:w-full" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                More than a destination
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Don't just
                <br />
                <span className="text-muted-foreground/40">
                  visit somewhere.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                The mountains, forests, and coastlines are only the beginning.
                What matters is how the place makes you feel, what you discover
                along the way, and the memories you take home.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border px-5 py-2.5 text-sm">
                  Mountains
                </span>

                <span className="rounded-full border px-5 py-2.5 text-sm">
                  Forests
                </span>

                <span className="rounded-full border px-5 py-2.5 text-sm">
                  Coastlines
                </span>

                <span className="rounded-full border px-5 py-2.5 text-sm">
                  Wild places
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-20 text-background sm:px-12 sm:py-28 lg:px-20">
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-50">
              Your next escape
            </p>

            <h2 className="mt-5 text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Somewhere out there,
              <br />
              <span className="opacity-40">
                your story begins.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 opacity-60 sm:text-lg">
              Find a place that speaks to you and start planning your next
              adventure.
            </p>

            <Link
              to="/sign-up"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-1"
            >
              Start Exploring

              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="absolute -right-20 -top-20 size-72 rounded-full border border-background/10 sm:size-96" />

          <div className="absolute -bottom-40 right-20 size-96 rounded-full border border-background/10" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Classes;