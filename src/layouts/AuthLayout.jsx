/** @format */

import { ArrowLeft } from "lucide-react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

import { UsuAuthStore } from "../store/userStore";

function AuthLayout() {
  const location = useLocation();
  const user = UsuAuthStore((state) => state.user);

  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }

    return <Navigate to="/" replace />;
  }

  const isSignUp = location.pathname === "/sign-up";

  const image = isSignUp
    ? "/image/image7.jpg"
    : "/image/image6.jpg";

  const title = isSignUp
    ? "Start your journey."
    : "Adventure is waiting.";

  const description = isSignUp
    ? "Create your account and discover places worth remembering."
    : "Discover new places, explore the outdoors, and find your next unforgettable journey.";

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={image}
            alt="Vitala adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-black/75" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent" />
          <Link
            to="/"
            className="group absolute left-10 top-9 z-10 flex items-center gap-4"
          >
            <img
              src="/image/vitala-logo-white.png"
              alt="Vitala"
              className="size-14 object-contain transition-transform duration-500 group-hover:scale-110"
            />

            
            <div className="text-white">
              <p className="text-2xl font-bold tracking-[-0.04em]">
                Vitala
              </p>

              <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.32em] text-white/60">
                Explore more
              </p>
            </div>
          </Link>

          <div className="absolute bottom-12 left-10 right-10 z-10 text-white">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-white/50" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                Vitala
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-[-0.055em] xl:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 xl:text-base">
              {description}
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
              <span className="size-1.5 rounded-full bg-white/60" />
              Explore more. Live more.
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-6 sm:p-10">
          
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -left-40 top-20 size-[400px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute -right-40 bottom-20 size-[400px] rounded-full bg-muted blur-[120px]" />
          </div>
          <Link
            to="/"
            aria-label="Back to Home"
            className="group absolute left-6 top-6 z-20 flex size-11 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:bg-background hover:text-foreground sm:left-10 sm:top-10"
          >
            <ArrowLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </Link>

          {/* Mobile logo */}
          <Link
            to="/"
            className="absolute left-1/2 top-6 flex -translate-x-1/2 items-center gap-2 lg:hidden"
          >
            <img
              src="/image/vitala-logo2.png"
              alt="Vitala"
              className="size-9 object-contain"
            />

            <span className="font-bold tracking-tight">
              Vitala
            </span>
          </Link>

          {/* Auth content */}
          <div className="w-full max-w-md pt-16 lg:pt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
