/** @format */

import {
  LogOut,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { UsuAuthStore } from "../../store/userStore";

function AdminSettings() {
  const navigate = useNavigate();

  const user = UsuAuthStore((state) => state.user);
  const logout = UsuAuthStore((state) => state.logout);

  const userName = user?.name || "Admin";
  const initial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="p-5 sm:p-8 lg:p-10">
        {/* HEADER */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Admin
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Pengaturan
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Kelola profil dan akun administrator Vitala.
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="mt-8 max-w-2xl overflow-hidden rounded-2xl border bg-background">
          <div className="border-b px-6 py-5">
            <h2 className="font-semibold">
              Profil Admin
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Informasi akun administrator yang sedang digunakan.
            </p>
          </div>

          <div className="p-6">
            {/* AVATAR */}
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-full bg-foreground text-xl font-bold text-background">
                {initial}
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {userName}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Administrator
                </p>
              </div>
            </div>

            {/* INFO */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-4 rounded-xl border p-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <User className="size-4" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Nama
                  </p>

                  <p className="mt-0.5 text-sm font-medium">
                    {userName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border p-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <Mail className="size-4" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Email
                  </p>

                  <p className="mt-0.5 text-sm font-medium">
                    {user?.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border p-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <ShieldCheck className="size-4" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Role
                  </p>

                  <p className="mt-0.5 text-sm font-medium capitalize">
                    {user?.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LOGOUT */}
          <div className="border-t bg-muted/20 p-6">
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center justify-between rounded-xl border border-red-500/20 bg-background px-4 py-3.5 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-500/5"
            >
              <span className="flex items-center gap-3">
                <LogOut className="size-4" />
                Logout
              </span>

              <span className="text-xs text-red-500/60">
                Keluar dari akun
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;