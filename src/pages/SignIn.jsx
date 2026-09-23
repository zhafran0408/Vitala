/** @format */

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
    <div className='relative'>
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute -left-40 top-20 size-[400px] rounded-full bg-primary/10 blur-3xl' />

        <div className='absolute -right-40 bottom-20 size-[400px] rounded-full bg-muted blur-3xl' />
      </div>

      <Card className='overflow-hidden rounded-[2rem] border shadow-sm'>
        <CardHeader className='px-7 pt-8 text-center sm:px-9 sm:pt-10'>
          <div className='mx-auto flex size-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-sm'>
            <Compass className='size-6' />
          </div>

          <div className='mt-6'>
            <p className='mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary'>
              Welcome to Vitala
            </p>

            <CardTitle className='text-3xl font-bold tracking-tight'>
              Welcome back.
            </CardTitle>

            <CardDescription className='mt-2 text-sm leading-6'>
              Sign in and continue your adventure.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className='px-7 pb-8 sm:px-9 sm:pb-10'>
          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Email */}
            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium'>
                Email
              </label>

              <Input
                id='email'
                type='email'
                placeholder='you@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='h-11 rounded-xl'
              />
            </div>

            {/* Password */}
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='text-sm font-medium'>
                  Password
                </label>

                <button
                  type='button'
                  className='text-xs font-medium text-muted-foreground transition-colors hover:text-foreground'>
                  Forgot password?
                </button>
              </div>

              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='h-11 rounded-xl'
              />
            </div>

            {/* Error */}
            {error && <p className='text-sm text-red-500'>{error}</p>}

            {/* Submit */}
            <Button type='submit' className='group h-11 w-full rounded-xl'>
              Sign In
              <ArrowRight className='ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1' />
            </Button>
          </form>

          <div className='my-7 flex items-center gap-4'>
            <div className='h-px flex-1 bg-border' />

            <span className='text-xs text-muted-foreground'>OR</span>

            <div className='h-px flex-1 bg-border' />
          </div>

          <p className='text-center text-sm text-muted-foreground'>
            Don't have an account?{" "}
            <Link
              to='/sign-up'
              className='font-semibold text-foreground transition-colors hover:text-primary'>
              Create one
            </Link>
          </p>
        </CardContent>
      </Card>

      <p className='mt-8 text-center text-xs text-muted-foreground'>
        Explore more. Live more.
      </p>
    </div>
  );
}

export default SignIn;
