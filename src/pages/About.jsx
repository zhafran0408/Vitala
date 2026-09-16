import {
  ArrowRight,
  Compass,
  Map,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { images } from "../data/images";

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Vitala
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Explore beyond
              <br />
              the ordinary.
            </h1>

            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              We believe adventure is not only about reaching a
              destination. It is about discovering something new along
              the way.
            </p>

            <p className="mt-5 leading-7 text-muted-foreground">
              Vitala brings together destinations, outdoor activities,
              and inspiration for people who want to spend more time
              exploring the world around them.
            </p>

            <Button asChild className="mt-8">
              <Link to="/classes">
                Explore Destinations
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={images.about}
              alt="Vitala adventure landscape"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Philosophy
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Adventure has no single definition.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-background p-8">
              <Compass className="size-7" />

              <h3 className="mt-6 text-xl font-bold">
                Explore
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Discover landscapes, cultures, and places you have never
                experienced before.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8">
              <Map className="size-7" />

              <h3 className="mt-6 text-xl font-bold">
                Wander
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Sometimes the best memories happen when you take the
                road less travelled.
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-8">
              <Sparkles className="size-7" />

              <h3 className="mt-6 text-xl font-bold">
                Remember
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Turn every journey into a story worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
