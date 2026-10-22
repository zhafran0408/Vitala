/** @format */

import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import { UsuAuthStore } from "../store/userStore";

function GuestLayout() {
  const user = UsuAuthStore((state) => state.user);

  // Kalau belum login, lempar ke sign-in
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  // Kalau yang login admin, lempar ke halaman admin
  if (user?.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar udah ngurus Sidebar & Tombol Hamburger-nya sendiri */}
      <Navbar />

      {/* Konten Halaman */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;
