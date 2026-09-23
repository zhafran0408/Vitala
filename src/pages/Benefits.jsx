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

function Benefits() {
  const activities = [
    {
      title: "Hiking",
      description: "Follow the trail and see where it takes you.",
      icon: Footprints,
    },
    {
      title: "Camping",
      description: "Slow down and spend a night closer to nature.",
      icon: Tent,
    },
    {
      title: "Exploration",
      description: "Take the unexpected road and discover something new.",
      icon: Compass,
    },
    {
      title: "Photography",
      description: "Capture the places and moments worth remembering.",
      icon: Camera,
    },
    {
      title: "Backpacking",
      description: "Travel light, move freely, and experience more.",
      icon: Backpack,
    },
    {
      title: "Navigation",
      description: "Plan your route and find your way forward.",
      icon: Map,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Activities
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Find what
              <br />
              <span className="text-muted-foreground">
                moves you.
              </span>
            </h1>

            <p className="max-w-md text-base leading-7 text-muted-foreground lg:ml-auto">
              There is more than one way to experience the outdoors. Choose
              your way, step outside, and see where the journey takes you.
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVITY LIST */}
      <section className="border-y">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="border-x">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <Link
                  key={activity.title}
                  to="/classes"
                  className="group flex items-center gap-5 border-b px-5 py-7 transition-colors duration-300 last:border-b-0 hover:bg-muted/50 sm:px-8 sm:py-9 lg:px-10"
                >
                  {/* ICON */}
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                    <Icon className="size-4" />
                  </div>

                  {/* TITLE */}
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {activity.title}
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>

                  {/* ARROW */}
                  <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-2 group-hover:text-foreground" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/40">
              The experience
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Take the long way.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-background/60 sm:text-lg">
              The best part of an adventure is not always reaching the
              destination. Sometimes it is the trail, the view, the quiet
              moments, and everything you discover along the way.
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Why go outside?
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                More than
                <br />
                <span className="text-muted-foreground">
                  just a trip.
                </span>
              </h2>
            </div>

            <div className="grid gap-8 border-t pt-8 sm:grid-cols-3 lg:pt-0 lg:border-t-0">
              <div>
                <h3 className="text-xl font-semibold">Disconnect</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Step away from the routine and make space to breathe.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Discover</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  See new places and experience something outside the
                  familiar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Remember</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Bring home stories and moments worth keeping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Your next move
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Where will you go?
            </h2>
          </div>

          <Link
            to="/classes"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
          >
            Explore destinations
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Benefits;