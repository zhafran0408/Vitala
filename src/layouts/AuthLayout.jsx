import { ArrowLeft, Compass } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const location = useLocation();

  const isSignUp = location.pathname === "/sign-up";

  const image = isSignUp
    ? "/images/image5.jpg"
    : "/images/image4.jpg";

  const title = isSignUp
    ? "Start your journey."
    : "Adventure is waiting.";

  const description = isSignUp
    ? "Create your account and discover places worth remembering."
    : "Discover new places, explore the outdoors, and find your next unforgettable journey.";

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT - IMAGE */}
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src={image}
            alt="Vitala adventure"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-10 top-10 z-10 flex items-center gap-3 text-white"
          >
            <div className="flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
              <Compass className="size-5" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Vitala
            </span>
          </Link>

          {/* Text */}
          <div className="absolute bottom-12 left-10 right-10 z-10 text-white">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Vitala
            </p>

            <h1 className="max-w-xl text-6xl font-bold leading-[0.9] tracking-[-0.05em] xl:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70">
              {description}
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
              <span className="h-px w-10 bg-white/40" />
              Explore more. Live more.
            </div>
          </div>

          
        </div>

        {/* RIGHT - FORM */}
        <div className="relative flex min-h-screen items-center justify-center p-6 sm:p-10">

          {/* Mobile Logo */}
          <div className="absolute left-6 top-6 lg:hidden">
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <div className="flex size-9 items-center justify-center rounded-full bg-foreground text-background">
                <Compass className="size-4" />
              </div>

              <span className="font-bold">
                Vitala
              </span>
            </Link>
          </div>

          {/* BACK ARROW */}
          <Link
            to="/"
            aria-label="Back to Home"
            className="absolute left-6 top-6 flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-all duration-300 hover:-translate-x-1 hover:bg-muted hover:text-foreground lg:left-10 lg:top-10"
          >
            <ArrowLeft className="size-5" />
          </Link>

          {/* FORM */}
          <div className="w-full max-w-md pt-14 lg:pt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;