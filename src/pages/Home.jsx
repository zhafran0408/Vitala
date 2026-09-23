import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import { images } from "../data/images";

function Home() {
  const destinations = [
    {
      title: "Mountain Escape",
      location: "West Java, Indonesia",
      image: images.mountain,
    },
    {
      title: "Into the Forest",
      location: "Central Java, Indonesia",
      image: images.forest,
    },
    {
      title: "Coastal Journey",
      location: "East Java, Indonesia",
      image: images.ocean,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <img
          src={images.hero}
          alt="Vitala adventure landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="relative flex min-h-[calc(100vh-4rem)] items-end px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              Explore Indonesia
            </p>

            <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Adventure
              <br />
              is waiting.
            </h1>

            <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                Discover beautiful places, follow new trails, and find your
                next unforgettable journey.
              </p>

              <Link
                to="/classes"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Explore destinations
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Destinations
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Find your next escape.
              </h2>
            </div>

            <Link
              to="/classes"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold"
            >
              View all
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.title}
                to="/classes"
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="mb-2 flex items-center gap-2 text-xs text-white/65">
                    <MapPin className="size-3.5" />
                    {destination.location}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {destination.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-muted/40 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={images.about}
              alt="Exploring nature with Vitala"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="lg:pl-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              About Vitala
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Go somewhere worth remembering.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
              Vitala is made for people who want more than just a destination.
              Discover mountains, forests, coastlines, and experiences that
              make every journey memorable.
            </p>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Our story
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl">
          <img
            src={images.adventure}
            alt="Start your next adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative flex min-h-[380px] flex-col justify-end p-8 text-white sm:p-12 lg:p-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Your next adventure
            </p>

            <h2 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Ready to go
              <br />
              somewhere new?
            </h2>

            <Link
              to="/classes"
              className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
            >
              Start exploring
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;