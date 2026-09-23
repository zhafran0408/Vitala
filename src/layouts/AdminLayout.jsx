import { Navigate, Outlet } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";

import { UsuAuthStore } from "../store/userStore";

function AdminLayout() {
  const user = UsuAuthStore((state) => state.user);

  // BELUM LOGIN
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  // USER BIASA TIDAK BOLEH MASUK ADMIN
  if (user.role !== "admin") {
    return <Navigate to="/user" replace />;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />

      <main className="min-h-screen md:pl-64">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;