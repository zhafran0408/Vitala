import {
  Backpack,
  Camera,
  Compass,
  Footprints,
  Map,
  Tent,
} from "lucide-react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { images } from "../data/images";

function Benefits() {
  const activities = [
    {
      title: "Hiking",
      description:
        "Follow beautiful trails and discover landscapes from a new perspective.",
      icon: Footprints,
    },
    {
      title: "Camping",
      description:
        "Disconnect from the everyday and spend a night closer to nature.",
      icon: Tent,
    },
    {
      title: "Exploration",
      description:
        "Find new places and create your own path through the outdoors.",
      icon: Compass,
    },
    {
      title: "Photography",
      description:
        "Capture landscapes, details, and moments from every journey.",
      icon: Camera,
    },
    {
      title: "Backpacking",
      description:
        "Travel light and experience more along the way.",
      icon: Backpack,
    },
    {
      title: "Navigation",
      description:
        "Plan your route and discover destinations worth exploring.",
      icon: Map,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Activities
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Find what
              <br />
              moves you.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Adventure can look different for everyone. Choose an
              activity that makes you want to step outside.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={images.adventure}
              alt="Outdoor adventure"
              className="aspect-video w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
                  <Icon className="size-6" />
                </div>

                <h2 className="mt-6 text-xl font-bold">
                  {activity.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Benefits;