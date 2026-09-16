import {
  ArrowRight,
  Mountain,
  Trees,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { images } from "../data/images";

function Classes() {
  const destinations = [
    {
      title: "Mountain Escape",
      description:
        "Discover dramatic peaks, fresh air, and unforgettable mountain views.",
      image: images.mountain,
      icon: Mountain,
    },
    {
      title: "Forest Trails",
      description:
        "Slow down and explore peaceful trails surrounded by nature.",
      image: images.forest,
      icon: Trees,
    },
    {
      title: "Coastal Journey",
      description:
        "Experience open skies, blue water, and beautiful coastal landscapes.",
      image: images.ocean,
      icon: Waves,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Destinations
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Choose your
            <br />
            next escape.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            From mountains to forests and coastlines, find a destination
            that matches your sense of adventure.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {destinations.map((destination) => {
            const Icon = destination.icon;

            return (
              <article
                key={destination.title}
                className="group overflow-hidden rounded-[2rem] border bg-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 flex size-11 items-center justify-center rounded-full bg-white text-black">
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="text-2xl font-bold">
                    {destination.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {destination.description}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    className="mt-5 px-0 hover:bg-transparent"
                  >
                    <Link to="/sign-in">
                      Discover
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Classes;
