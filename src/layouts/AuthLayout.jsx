import {
  ArrowLeft,
  Compass,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

import { Button } from "@/components/ui/button";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hidden bg-primary p-10 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <Compass className="size-5" />

            <span className="text-xl font-bold">
              Vitala
            </span>
          </Link>

          <div>
            <p className="max-w-lg text-6xl font-bold leading-tight">
              Adventure
              <br />
              is waiting.
            </p>

            <p className="mt-6 max-w-md leading-7 opacity-80">
              Discover new places, explore the outdoors, and find your
              next unforgettable journey.
            </p>
          </div>

          <p className="text-sm opacity-60">
            Explore more. Live more.
          </p>
        </div>

        <div className="relative flex items-center justify-center p-6">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="absolute left-6 top-6"
          >
            <Link to="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>

          <div className="w-full max-w-md pt-14 lg:pt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;