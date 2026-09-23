import { ArrowRight, MapPin, Mountain, Trees, Waves } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { images } from "../data/images";

function Classes() {
  const destinations = [
    {
      title: "Mountain Escape",
      location: "West Java, Indonesia",
      image: images.mountain,
      description:
        "Higher trails, colder mornings, and landscapes that make the climb worth it.",
    },
    {
      title: "Forest Trails",
      location: "Central Java, Indonesia",
      image: images.forest,
      description:
        "Quiet paths, deep green surroundings, and a slower way to explore.",
    },
    {
      title: "Coastal Journey",
      location: "East Java, Indonesia",
      image: images.ocean,
      description:
        "Open skies, endless horizons, and places where the journey feels wide open.",
    },
  ];

  const landscapes = [
    {
      title: "Mountains",
      description: "For higher ground and longer trails.",
      icon: Mountain,
    },
    {
      title: "Forests",
      description: "For quiet paths and hidden places.",
      icon: Trees,
    },
    {
      title: "Coastlines",
      description: "For open skies and endless horizons.",
      icon: Waves,
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="px-6 pb-16 pt-20 sm:px-10 sm:pb-20 sm:pt-24 lg:px-16 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Destinations
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Go somewhere
              <br />
              <span className="text-muted-foreground">
                worth remembering.
              </span>
            </h1>

            <div className="max-w-md lg:ml-auto">
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Discover places beyond the familiar. Choose a landscape,
                follow your curiosity, and see where it takes you.
              </p>

              <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-10 bg-border" />
                Explore below
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL DESTINATION GALLERY */}
      <section className="border-y">
        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-4 px-6 py-6 sm:px-10 lg:px-16">
            {destinations.map((destination, index) => (
              <Link
                key={destination.title}
                to="/sign-in"
                className="group relative block w-[78vw] max-w-[520px] overflow-hidden rounded-2xl sm:w-[55vw] lg:w-[38vw]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <div className="mb-3 flex items-center gap-2 text-xs text-white/60">
                    <MapPin className="size-3.5" />
                    {destination.location}
                  </div>

                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                        0{index + 1}
                      </span>

                      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        {destination.title}
                      </h2>
                    </div>

                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATION */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Featured destination
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Mountain Escape
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              For the days when the best direction is simply up.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <div className="aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
              <img
                src={images.mountain}
                alt="Mountain landscape"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 text-white sm:flex-row sm:items-end sm:justify-between sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <div className="mb-3 flex items-center gap-2 text-xs text-white/60">
                  <MapPin className="size-3.5" />
                  West Java, Indonesia
                </div>

                <p className="text-base leading-7 text-white/70 sm:text-lg">
                  Higher trails, open landscapes, and a little more distance
                  from the everyday.
                </p>
              </div>

              <Link
                to="/sign-in"
                className="group/link inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Explore
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LANDSCAPES */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Choose your landscape
              </p>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Where do you
                <br />
                <span className="text-muted-foreground">
                  want to go?
                </span>
              </h2>
            </div>

            <div className="border-t">
              {landscapes.map((landscape) => {
                const Icon = landscape.icon;

                return (
                  <Link
                    key={landscape.title}
                    to="/sign-in"
                    className="group flex items-center gap-5 border-b py-7 transition-all duration-300 hover:px-3"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border">
                      <Icon className="size-4" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {landscape.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {landscape.description}
                      </p>
                    </div>

                    <ArrowRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-2 group-hover:text-foreground" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 border-t pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Your next destination
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The world is bigger than your routine.
            </h2>
          </div>

          <Link
            to="/sign-up"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
          >
            Start exploring
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Classes;