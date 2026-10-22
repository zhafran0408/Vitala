/** @format */

import { X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar({ open, onClose }) {
  const menus = [
    { name: "Home", path: "/" },
    { name: "Trips", path: "/trips" },
    { name: "News", path: "/news" }, // <--- Tambah Menu News di Sidebar
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay Gelap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
          />

          {/* Panel Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-[70] w-[280px] bg-[#0B132B] text-white shadow-2xl md:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
                <Link to="/" onClick={onClose} className="flex items-center gap-2">
                  <img src="/image/vitala-logo-white.png" alt="Vitala" className="h-8 object-contain" />
                </Link>

                <button
                  onClick={onClose}
                  className="flex size-9 items-center justify-center rounded-full text-white/50 transition-all hover:rotate-90 hover:bg-white/10 hover:text-white"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-7">
                <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40">
                  Menu
                </p>

                <div className="space-y-1">
                  {menus.map((menu, index) => {
                    return (
                      <motion.div
                        key={menu.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <NavLink
                          to={menu.path}
                          end={menu.path === "/"}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                              isActive
                                ? "bg-white text-[#0B132B] font-bold shadow-md"
                                : "text-white/60 hover:bg-white/10 hover:text-white"
                            }`
                          }
                        >
                          {menu.name}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;