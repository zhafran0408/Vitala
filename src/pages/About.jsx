import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { images } from "../data/images";

function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[520px]">
          <img
            src={images.about}
            alt="Indonesian adventure landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

          <div className="relative flex h-full items-end px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-3xl text-white">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
                  About Vitala
                </p>

                <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                  Made for
                  <br />
                  the curious.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
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
              Our story
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Adventure starts with curiosity.
            </h2>

            <div className="mt-6 max-w-lg space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Vitala was created for people who find their best moments
                outside.
              </p>

              <p>
                From quiet forests to open mountain trails, we believe
                adventure is not only about where you go, but what you
                discover along the way.
              </p>

              <p>
                Find a new place, take a different path, and create a story
                worth remembering.
              </p>
            </div>

            <Link
              to="/classes"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore destinations
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="bg-muted/40 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              What we believe
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Keep exploring.
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-semibold">Explore</h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                Discover places, landscapes, and experiences beyond the
                familiar.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Experience</h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                Enjoy the journey itself, not only the destination.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Remember</h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                Turn every journey into something worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL STATEMENT */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[560px]">
          <img
            src={images.mountain}
            alt="Mountain landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

          <div className="relative flex min-h-[560px] items-end px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-3xl text-white">
                <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  The world is bigger
                  <br />
                  <span className="text-white/55">than your routine.</span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
                  Leave the familiar behind and let the journey become part
                  of your story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Your next adventure
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Start exploring.
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

export default About;
