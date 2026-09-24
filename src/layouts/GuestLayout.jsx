/** @format */

import { Menu } from "lucide-react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { UsuAuthStore } from "../store/userStore";

function GuestLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const user = UsuAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to='/sign-in' replace />;
  }

  if (user?.role === "admin") {
    return <Navigate to='/admin' replace />;
  }

  return (
    <div className='min-h-screen bg-background'>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className='min-h-screen'>
        {/* Floating Hamburger */}
        <button
          type='button'
          onClick={() => setSidebarOpen(true)}
          aria-label='Open menu'
          className={`fixed bottom-6 left-6 z-30 flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
            sidebarOpen ?
              "pointer-events-none scale-90 opacity-0"
            : "opacity-100"
          }`}>
          <Menu className='size-6' />
        </button>

        <Navbar />

        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;
