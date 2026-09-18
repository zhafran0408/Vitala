import { Outlet } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />

      
      <main className="min-h-screen md:pl-64">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;