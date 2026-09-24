/** @format */

import { useState } from "react";
import {
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { UsuAuthStore } from "../store/userStore";

function Navbar() {
  const navigate = useNavigate();

  const user = UsuAuthStore((state) => state.user);
  const logout = UsuAuthStore((state) => state.logout);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/sign-in");
  };

  const userName = user?.name || "User";

  const initial = userName.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <img
            src="/image/vitala-logo2.png"
            alt="Vitala"
            className="size-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-lg font-bold tracking-tight">
            Vitala
          </span>
        </Link>

        {/* Account */}
        {user && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="group flex items-center gap-3 rounded-full border border-border/60 bg-background/70 py-1.5 pl-1.5 pr-3 transition-all duration-300 hover:border-border hover:bg-muted/50"
            >
              {/* Avatar */}
              <div className="flex size-9 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                {initial}
              </div>

              {/* Name */}
              <div className="hidden text-left sm:block">
                <p className="max-w-[120px] truncate text-sm font-semibold">
                  {userName}
                </p>

                <p className="text-[10px] capitalize text-muted-foreground">
                  {user.role}
                </p>
              </div>

              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {open && (
              <>
                {/* Overlay */}
                <button
                  type="button"
                  aria-label="Close account menu"
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-[-1] cursor-default"
                />

                <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-64 overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                  {/* User info */}
                  <div className="mb-2 rounded-xl bg-muted/40 px-3 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                        {initial}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">
                          {userName}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu */}
                  <div className="space-y-1">
                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
                    >
                      <User className="size-[18px]" />
                      <span>Profile</span>
                    </Link>

                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
                    >
                      <Settings className="size-[18px]" />
                      <span>Pengaturan</span>
                    </Link>

                    <div className="my-2 h-px bg-border/60" />

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-500 transition-all duration-200 hover:bg-red-500/10"
                    >
                      <LogOut className="size-[18px]" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;