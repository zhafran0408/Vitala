import {
  Compass,
  Home,
  Map,
  Settings,
  Tent,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function AdminSidebar() {
  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: Home,
    },
    {
      name: "Destinations",
      path: "/admin/destinations",
      icon: Map,
    },
    {
      name: "Activities",
      path: "/admin/activities",
      icon: Tent,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r bg-background md:block">
      <div className="flex h-full flex-col">
        
        {/* LOGO */}
        <div className="flex h-20 items-center border-b px-6">
          <Link
            to="/admin"
            className="flex items-center gap-3"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Compass className="size-5" />
            </div>

            <div>
              <p className="font-bold">Vitala</p>
              <p className="text-xs text-muted-foreground">
                Admin Panel
              </p>
            </div>
          </Link>
        </div>

        {/* MENU */}
        <nav className="flex-1 space-y-2 p-4">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <NavLink
                key={menu.path}
                to={menu.path}
                end={menu.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <Icon className="size-5" />
                {menu.name}
              </NavLink>
            );
          })}
        </nav>

        {/* BACK TO WEBSITE */}
        <div className="border-t p-4">
          <Link
            to="/"
            className="flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            ← 
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;