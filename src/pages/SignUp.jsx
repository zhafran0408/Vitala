import { useState } from "react";
import { ArrowRight, Compass } from "lucide-react";

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
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [role, setRole] = useState("user");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !role
    ) {
      setError("Semua data harus diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak sama.");
      return;
    }

    const success = register(
      name,
      email,
      password,
      role,
    );

    if (success) {
      navigate("/sign-in");
    }
  };

  const displayError = error || storeError;

  return (
    <div className="relative">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 size-[400px] rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -right-40 bottom-20 size-[400px] rounded-full bg-muted blur-3xl" />
      </div>

      {/* Card */}
      <Card className="overflow-hidden rounded-[2rem] border shadow-sm">
        <CardHeader className="px-7 pt-8 text-center sm:px-9 sm:pt-10">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-sm">
            <Compass className="size-6" />
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Join Vitala
            </p>

            <CardTitle className="text-3xl font-bold tracking-tight">
              Start your journey.
            </CardTitle>

            <CardDescription className="mt-2 text-sm leading-6">
              Create your account and start exploring.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-7 pb-8 sm:px-9 sm:pb-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium"
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
                className="h-11 rounded-xl"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
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
                className="h-11 rounded-xl"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label
                htmlFor="role"
                className="text-sm font-medium"
              >
                Role
              </label>

              <select
                id="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setError("");
                }}
                className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
              >
                <option value="user">
                  User
                </option>

                <option value="admin">
                  Admin
                </option>
              </select>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium"
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
                className="h-11 rounded-xl"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium"
              >
                Confirm Password
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
                className="h-11 rounded-xl"
              />
            </div>

            {/* Error */}
            {displayError && (
              <p className="text-sm text-red-500">
                {displayError}
              </p>
            )}

            {/* Button */}
            <Button
              type="submit"
              className="group h-11 w-full rounded-xl"
            >
              Create Account

              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs text-muted-foreground">
              OR
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-semibold text-foreground transition-colors hover:text-primary"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Explore more. Live more.
      </p>
    </div>
  );
}

export default SignUp;