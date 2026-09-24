/** @format */

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { UsuAuthStore } from "../store/userStore";

function SignIn() {
  const navigate = useNavigate();

  const login = UsuAuthStore((state) => state.login);
  const error = UsuAuthStore((state) => state.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (!success) return;

    const user = UsuAuthStore.getState().user;

    if (user.role === "admin") {
      navigate("/admin");
      return;
    }

    if (user.role === "user") {
      navigate("/");
    }
  };

  return (
    <div className="relative w-full">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 size-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 size-[420px] rounded-full bg-muted blur-[120px]" />
      </div>

      {/* Main Card */}
      <Card className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/95 shadow-[0_35px_100px_-40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        {/* Top accent */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

        <CardHeader className="relative px-7 pb-7 pt-8 sm:px-10 sm:pt-10">
          {/* Logo + brand */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-20 items-center justify-center rounded-xl bg-foreground p-2.5 shadow-lg">
                <img
                  src="/image/vitala-logo-white.png"
                  alt="Vitala"
                  className="size-full object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-bold tracking-tight">Vitala</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Explore more
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-border sm:block" />
          </div>

          {/* Heading */}
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-primary">
              Welcome back
            </p>

            <CardTitle className="text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-[2.8rem]">
              Continue
              <br />
              your journey.
            </CardTitle>

            <CardDescription className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Sign in to keep exploring places worth remembering.
            </CardDescription>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-border/60" />
        </CardHeader>

        <CardContent className="px-7 pb-8 sm:px-10 sm:pb-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2.5">
              <label
                htmlFor="email"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
              >
                Email address
              </label>

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-border/60 bg-muted/20 px-4 text-sm transition-all duration-300 placeholder:text-muted-foreground/35 hover:border-border focus:bg-background focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Password */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-[11px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  Forgot password?
                </button>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border-border/60 bg-muted/20 px-4 text-sm transition-all duration-300 placeholder:text-muted-foreground/35 hover:border-border focus:bg-background focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                  <span className="text-xs font-bold text-red-500">!</span>
                </div>

                <p className="text-sm text-red-500">{error}</p>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="group/button relative mt-2 h-12 w-full overflow-hidden rounded-xl text-sm font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                Sign In

                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </span>
            </Button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-border/60" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/50">
              Or
            </span>

            <div className="h-px flex-1 bg-border/60" />
          </div>

          {/* Sign Up */}
          <div className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3.5 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-semibold text-foreground transition-colors duration-200 hover:text-primary"
              >
                Create one
              </Link>
            </p>
          </div>
        </CardContent>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </Card>

      {/* Bottom caption */}
      <div className="mt-6 flex items-center justify-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground/40">
        <span className="h-px w-8 bg-border/70" />
        Adventure is waiting
        <span className="h-px w-8 bg-border/70" />
      </div>
    </div>
  );
}

export default SignIn;