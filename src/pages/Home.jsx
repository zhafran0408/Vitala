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
    <div className="min-h-screen bg-background">
      <Navbar />

      

      <section className="relative h-[calc(100vh-72px)] min-h-[620px] overflow-hidden">
        <img
          src="/images/image1.jpg"
          alt="Mountain adventure"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-md">
              <Compass className="size-4" />
              Vitala / Explore
            </div>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[110px]">
              Adventure
              <br />
              <span className="text-white/70">is waiting.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
              Discover wild landscapes, hidden places, and unforgettable
              moments. Step outside and find somewhere worth remembering.
            </p>

            <Link
              to="/classes"
              className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
            >
              Explore Destinations
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
          Scroll to explore
          <ArrowDown className="size-4 animate-bounce" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              The Vitala Journal
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Go somewhere
              <br />
              you've never been.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              Adventure isn't always about going farther. Sometimes it's
              about taking a different road, finding a quiet trail, or
              discovering something you've never noticed before.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Discover our story
              <ArrowRight className="size-4 transition-transform duration-300 hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative h-[650px] overflow-hidden">
        <img
          src="/images/image2.jpg"
          alt="Forest trail"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 sm:pb-20">
          <div className="max-w-xl text-white">
            <div className="flex items-center gap-3">
              <Trees className="size-5" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                Into the wild
              </span>
            </div>

            <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
              Find your path.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-white/75">
              Leave the noise behind. Follow the trail, breathe the fresh
              air, and see where the journey takes you.
            </p>

            <Link
              to="/classes"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore the trails
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

     
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Destinations
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Choose your escape.
            </h2>
          </div>

          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            View all destinations
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* Mountain */}
          <Link
            to="/classes"
            className="group relative overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/image1.jpg"
              alt="Mountain"
              className="h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="absolute left-7 top-7 flex size-11 items-center justify-center rounded-full bg-white/90 text-black">
              <Mountain className="size-5" />
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                01 / Mountain
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                Higher ground.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                Dramatic peaks, cold air, and views that make every step
                worth it.
              </p>
            </div>
          </Link>

          {/* Coast */}
          <Link
            to="/classes"
            className="group relative overflow-hidden rounded-[2rem] md:mt-20"
          >
            <img
              src="/images/image3.jpg"
              alt="Coastal landscape"
              className="h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="absolute left-7 top-7 flex size-11 items-center justify-center rounded-full bg-white/90 text-black">
              <Compass className="size-5" />
            </div>

            <div className="absolute bottom-7 left-7 right-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                02 / Coast
              </p>

              <h3 className="mt-3 text-4xl font-bold">
                Follow the horizon.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                Open skies, endless water, and a reason to keep moving.
              </p>
            </div>
          </Link>
        </div>
      </section>

    
      <section className="bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/image4.jpg"
              alt="Camping adventure"
              className="h-[550px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div>
            <div className="flex size-12 items-center justify-center rounded-full bg-background">
              <Tent className="size-5" />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Slow down
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Sleep under
              <br />
              the stars.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Sometimes the best adventure is simply stepping away from
              the screen, setting up camp, and watching the world get
              quiet.
            </p>

            <Link
              to="/benefits"
              className="mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-background"
            >
              Discover activities
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

    
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <img
            src="/images/image3.jpg"
            alt="Adventure"
            className="h-[550px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Your next chapter
              </p>

              <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
                The world is waiting.
              </h2>

              <p className="mx-auto mt-6 max-w-xl leading-7 text-white/75">
                Pack light. Stay curious. Go somewhere worth remembering.
              </p>

              <Link
                to="/sign-up"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1"
              >
                Start Exploring
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;