/** @format */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LogOut, Settings, User, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { UsuAuthStore } from "../store/userStore";
import Sidebar from "./Sidebar";

function Navbar() {
  const navigate = useNavigate();
  const user = UsuAuthStore((state) => state.user);
  const logout = UsuAuthStore((state) => state.logout);
  
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/sign-in");
  };

  const userName = user?.name || "User";
  const initial = userName.charAt(0).toUpperCase();

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        // MENGGUNAKAN FLOATING PILL DENGAN BACKGROUND GELAP TRANSPARAN
        className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-[#0B132B]/90 px-4 py-3 shadow-2xl backdrop-blur-md sm:px-6 sm:py-4"
      >
        <div className="flex items-center justify-between">
          
          {/* KIRI: Hamburger (Mobile) + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center justify-center p-2 text-white md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>

            <Link to="/" className="group flex items-center">
              <img
                src="/image/vitala-logo-white.png"
                alt="Vitala"
                className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* TENGAH: Menu Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {[
              { name: "Home", path: "/" },
              { name: "Trips", path: "/trips" },
              { name: "News", path: "/news" },
              { name: "About", path: "/about" },
              { name: "FAQ", path: "/faq" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* KANAN: Akun / Login */}
          <div className="relative">
            {user ? (
              <>
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-3 sm:pr-4 transition-all hover:border-white/40 hover:bg-white/20"
                >
                  {user.avatar ? (
                    <img src={user.avatar} alt={userName} className="flex size-8 sm:size-9 items-center justify-center rounded-full object-cover border border-white/20 shadow-md" />
                  ) : (
                    <div className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#0B132B] shadow-md">
                      {initial}
                    </div>
                  )}
                  
                  <div className="hidden text-left sm:block">
                    <p className="max-w-[120px] truncate text-sm font-bold text-white">
                      {userName}
                    </p>
                  </div>
                  <ChevronDown className={`size-4 text-white/50 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {open && (
                    <>
                      <div className="fixed inset-0 z-[-1]" onClick={() => setOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 top-[calc(100%+16px)] z-50 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0B132B] p-2 shadow-2xl"
                      >
                        <div className="mb-2 rounded-xl bg-white/5 px-4 py-3">
                          <p className="truncate text-sm font-bold text-white">{userName}</p>
                          <p className="truncate text-xs text-white/50">{user.email}</p>
                        </div>

                        <div className="space-y-1">
                          <Link
                            to="/settings"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            <Settings className="size-4" />
                            <span>Pengaturan</span>
                          </Link>

                          <div className="my-1 h-px bg-white/10" />

                          <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
                          >
                            <LogOut className="size-4" />
                            <span>Keluar</span>
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                to="/sign-in"
                className="rounded-full bg-white px-4 py-2 sm:px-6 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0B132B] transition-transform hover:scale-105 hover:bg-gray-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </motion.header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

export default Navbar;