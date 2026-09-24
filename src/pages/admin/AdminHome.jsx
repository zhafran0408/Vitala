/** @format */

import {
  ArrowUpRight,
  Compass,
  Map,
  MoreHorizontal,
  Plus,
  Tent,
  TrendingUp,
  Users,
} from "lucide-react";

function AdminHome() {
  const stats = [
    {
      label: "Total Users",
      value: "1,284",
      change: "+12.8%",
      icon: Users,
    },
    {
      label: "Destinations",
      value: "24",
      change: "+4.2%",
      icon: Map,
    },
    {
      label: "Activities",
      value: "18",
      change: "+8.4%",
      icon: Tent,
    },
    {
      label: "Adventures",
      value: "3,842",
      change: "+18.6%",
      icon: Compass,
    },
  ];

  const activities = [
    {
      name: "New user registered",
      detail: "Rizky Pratama joined Vitala",
      time: "8 min ago",
      type: "user",
    },
    {
      name: "Destination added",
      detail: "Mount Rinjani was added",
      time: "32 min ago",
      type: "destination",
    },
    {
      name: "Activity updated",
      detail: "Mountain Hiking was updated",
      time: "1 hour ago",
      type: "activity",
    },
    {
      name: "New adventure",
      detail: "Someone explored Raja Ampat",
      time: "2 hours ago",
      type: "adventure",
    },
  ];

  const destinations = [
    {
      name: "Mount Ijen",
      location: "East Java, Indonesia",
      visitors: "842",
      image: "/image/image1.jpg",
    },
    {
      name: "Mount Merbabu",
      location: "Central Java, Indonesia",
      visitors: "716",
      image: "/image/image5.jpg",
    },
    {
      name: "Raja Ampat",
      location: "West Papua, Indonesia",
      visitors: "634",
      image: "/image/image7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="p-5 sm:p-8 lg:p-10">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                System operational
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Good morning, Admin.
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Here's what's happening across your Vitala adventure
              platform today.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-xl border bg-background px-4 py-2.5 text-sm font-medium transition-all hover:bg-muted">
              <ArrowUpRight className="size-4" />
              View website
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
              <Plus className="size-4" />
              Add destination
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-muted transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                    <TrendingUp className="size-3" />
                    {stat.change}
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  {stat.label}
                </p>

                <div className="mt-1 flex items-end justify-between">
                  <h2 className="text-3xl font-bold tracking-tight">
                    {stat.value}
                  </h2>

                  <ArrowUpRight className="mb-1 size-4 text-muted-foreground/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN GRID */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          {/* ACTIVITY */}
          <div className="rounded-2xl border bg-background">
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <h2 className="font-semibold">Recent activity</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Latest activity across Vitala
                </p>
              </div>

              <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                View all
                <ArrowUpRight className="size-3.5" />
              </button>
            </div>

            <div className="divide-y">
              {activities.map((activity, index) => (
                <div
                  key={activity.name}
                  className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/30"
                >
                  <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                    {activity.type === "user" && (
                      <Users className="size-4" />
                    )}

                    {activity.type === "destination" && (
                      <Map className="size-4" />
                    )}

                    {activity.type === "activity" && (
                      <Tent className="size-4" />
                    )}

                    {activity.type === "adventure" && (
                      <Compass className="size-4" />
                    )}

                    {index !== activities.length - 1 && (
                      <span className="absolute left-1/2 top-10 h-8 w-px bg-border" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">
                      {activity.name}
                    </p>

                    <p className="mt-1 truncate text-xs text-muted-foreground">
                      {activity.detail}
                    </p>
                  </div>

                  <span className="shrink-0 text-[11px] text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="rounded-2xl border bg-foreground p-6 text-background">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/50">
                  Platform overview
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Adventure is growing.
                </h2>
              </div>

              <div className="flex size-10 items-center justify-center rounded-xl bg-background/10">
                <TrendingUp className="size-5" />
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-4xl font-bold">18.6%</p>
                  <p className="mt-1 text-xs text-background/50">
                    Monthly growth
                  </p>
                </div>

                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  +4.2%
                </span>
              </div>

              {/* Fake chart */}
              <div className="mt-8 flex h-28 items-end gap-2">
                {[35, 48, 42, 65, 54, 72, 68, 86, 76, 94, 82, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="group relative flex-1"
                    >
                      <div
                        className="w-full rounded-t-md bg-background/20 transition-all duration-500 group-hover:bg-background/40"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ),
                )}
              </div>

              <div className="mt-4 flex justify-between text-[10px] text-background/40">
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
              </div>
            </div>
          </div>
        </div>

        {/* DESTINATIONS */}
        <div className="mt-6 rounded-2xl border bg-background">
          <div className="flex items-center justify-between border-b px-6 py-5">
            <div>
              <h2 className="font-semibold">Popular destinations</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Destinations getting the most attention
              </p>
            </div>

            <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
              Manage
              <ArrowUpRight className="size-3.5" />
            </button>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-3">
            {destinations.map((destination, index) => (
              <div
                key={destination.name}
                className="group overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <span className="absolute left-3 top-3 flex size-7 items-center justify-center rounded-full bg-black/30 text-xs font-semibold text-white backdrop-blur-md">
                    0{index + 1}
                  </span>

                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-semibold">
                      {destination.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/60">
                      {destination.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Explorers
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">
                      {destination.visitors}
                    </p>
                  </div>

                  <button className="flex size-8 items-center justify-center rounded-lg border text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
                    <MoreHorizontal className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <button className="group flex items-center justify-between rounded-2xl border bg-background p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div>
              <p className="text-sm font-semibold">Manage users</p>
              <p className="mt-1 text-xs text-muted-foreground">
                View and manage accounts
              </p>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl bg-muted transition-transform duration-300 group-hover:translate-x-1">
              <Users className="size-4" />
            </div>
          </button>

          <button className="group flex items-center justify-between rounded-2xl border bg-background p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div>
              <p className="text-sm font-semibold">Add destination</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Create a new destination
              </p>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl bg-muted transition-transform duration-300 group-hover:translate-x-1">
              <Map className="size-4" />
            </div>
          </button>

          <button className="group flex items-center justify-between rounded-2xl border bg-background p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div>
              <p className="text-sm font-semibold">Add activity</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Create a new adventure
              </p>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl bg-muted transition-transform duration-300 group-hover:translate-x-1">
              <Tent className="size-4" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;