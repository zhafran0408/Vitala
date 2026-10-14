/** @format */

import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
import { signupSchema } from "@/schemas/signupSchema";

function SignUp() {
  const navigate = useNavigate();

  const registerUser = UsuAuthStore((state) => state.register);
  const storeError = UsuAuthStore((state) => state.error);

  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    setFormError("");

    const success = registerUser(
      data.name,
      data.email,
      data.password,
      "user"
    );

    if (success) {
      navigate("/sign-in");
    }
  };

  const displayError = formError || storeError;

  return (
    <div className="relative w-full">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 size-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 size-[420px] rounded-full bg-muted blur-[120px]" />
      </div>

      <Card className="overflow-hidden rounded-[2rem] border border-border/50 bg-background/95 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                {...register("name")}
                className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
              />

              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

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
                {...register("email")}
                className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
              />

              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

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
                  {...register("password")}
                  className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
                />

                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

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
                  {...register("confirmPassword")}
                  className="h-12 rounded-xl border-border/70 bg-muted/20 px-4 transition-all duration-300 placeholder:text-muted-foreground/40 hover:border-border focus:bg-background"
                />

                {errors.confirmPassword && (
                  <p className="text-xs text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {displayError && (
              <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                  <span className="text-xs font-bold text-red-500">!</span>
                </div>

                <p className="text-sm text-red-500">{displayError}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="group mt-2 h-12 w-full rounded-xl text-sm font-semibold shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Account"}

              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </form>

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

      <div className="mt-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/50">
        <span className="h-px w-8 bg-border" />
        Explore more
        <span className="h-px w-8 bg-border" />
      </div>
    </div>
  );
}

export default SignUp;

