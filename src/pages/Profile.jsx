import { ArrowRight, LogOut, Mail, User, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { UsuAuthStore } from "../store/userStore";

function Profile() {
  const navigate = useNavigate();

  const user = UsuAuthStore((state) => state.user);
  const logout = UsuAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl items-center px-6 py-20">
          <div className="w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Profile
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Your journey
              <br />
              <span className="text-muted-foreground">
                starts here.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              Sign in to access your Vitala profile and continue exploring.
            </p>

            <Link
              to="/sign-in"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
            >
              Sign in
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Profile
              </p>

              <h1 className="mt-5 text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                {user.name}
              </h1>

              <p className="mt-5 text-lg text-muted-foreground">
                Your journey with Vitala.
              </p>
            </div>

            <div className="flex size-16 items-center justify-center rounded-full border">
              <User className="size-7" />
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNT */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* TITLE */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Account
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Your details.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              The information connected to your Vitala account.
            </p>
          </div>

          {/* DETAILS */}
          <div className="border-t">
            <div className="flex items-center gap-5 border-b py-7">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border">
                <UserRound className="size-4" />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </p>

                <p className="mt-1 text-lg font-semibold">
                  {user.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 border-b py-7">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border">
                <Mail className="size-4" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>

                <p className="mt-1 truncate text-lg font-semibold">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 border-b py-7">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border">
                <User className="size-4" />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Role
                </p>

                <p className="mt-1 text-lg font-semibold capitalize">
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUE EXPLORING */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Keep exploring
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Your next destination
                <br />
                <span className="text-muted-foreground">
                  is still out there.
                </span>
              </h2>
            </div>

            <Link
              to="/classes"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
            >
              Explore destinations
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ACCOUNT ACTION */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <button
          type="button"
          onClick={handleLogout}
          className="group inline-flex items-center gap-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <LogOut className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Sign out
        </button>
      </section>
    </div>
  );
}

export default Profile;