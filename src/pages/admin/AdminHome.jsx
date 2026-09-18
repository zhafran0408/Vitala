import {
  Compass,
  Map,
  Tent,
  Users,
} from "lucide-react";

function AdminHome() {
  return (
    <div className="p-6 sm:p-8 lg:p-10">
      {/* HEADER */}
      <div>
        <p className="text-sm font-medium text-primary">
          Vitala Admin
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome back, Admin.
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your adventure platform from here.
        </p>
      </div>

      {/* STATS */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border bg-background p-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
            <Users className="size-5" />
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Users
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            128
          </h2>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
            <Map className="size-5" />
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Destinations
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            24
          </h2>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
            <Tent className="size-5" />
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Activities
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            18
          </h2>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
            <Compass className="size-5" />
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Adventures
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            342
          </h2>
        </div>
      </div>

      {/* RECENT */}
      <div className="mt-8 rounded-2xl border bg-background p-6">
        <h2 className="text-xl font-bold">
          Recent Activity
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Your latest Vitala activity will appear here.
        </p>
      </div>
    </div>
  );
}

export default AdminHome;