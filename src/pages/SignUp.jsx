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

function SignUp() {
  const navigate = useNavigate();

  const register = UsuAuthStore((state) => state.register);
  const storeError = UsuAuthStore((state) => state.error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Semua data harus diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak sama.");
      return;
    }

    // Semua akun dari Sign Up otomatis menjadi user
    const success = register(name, email, password, "user");

    if (success) {
      navigate("/sign-in");
    }
  };

  const displayError = error || storeError;

  return (
    <div className="relative w-full">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 size-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 size-[420px] rounded-full bg-muted blur-[120px]" />
      </div>

      <Card className="overflow-hidden rounded-[2rem] border border-border/50 bg-background/95 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {/* Header */}
        <CardHeader className="px-7 pb-7 pt-8 sm:px-10 sm:pt-10">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-md">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                Join Vitala
              </p>

              <CardTitle className="text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Start your journey.
              </CardTitle>

              <CardDescription className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                Create your account and discover places worth remembering.
              </CardDescription>
            </div>

            {/* Logo */}
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-muted/30 p-2 sm:size-16">
              <img
                src="/image/vitala-logo2.png"
                alt="Vitala"
                className="size-full object-contain"
              />
            </div>
          </div>

          <div className="mt-7 h-px w-full bg-border/60" />
        </CardHeader>

        <CardContent className="px-7 pb-8 sm:px-10 sm:pb-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
              >
                Name
              </label>

              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
              >
                Email
              </label>

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
              />
            </div>

            {/* Password */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                >
                  Password
                </label>

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label
                  htmlFor="confirm-password"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                >
                  Confirm
                </label>

                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
                />
              </div>
            </div>

            {/* Error */}
            {displayError && (
              <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                  <span className="text-xs font-bold text-red-500">!</span>
                </div>

                <p className="text-sm text-red-500">{displayError}</p>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="group mt-2 h-12 w-full rounded-xl text-sm font-semibold shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Create Account

              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </form>

          {/* Login */}
          <div className="mt-7 border-t border-border/60 pt-6">
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="font-semibold text-foreground transition-colors duration-200 hover:text-primary"
              >
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bottom text */}
      <div className="mt-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/50">
        <span className="h-px w-8 bg-border" />
        Explore more
        <span className="h-px w-8 bg-border" />
      </div>
    </div>
  );
}

export default SignUp;

