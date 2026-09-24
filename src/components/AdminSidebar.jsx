/** @format */

import { Home, LogOut, Menu, Settings, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UsuAuthStore } from "../store/userStore";

function AdminSidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const user = UsuAuthStore((state) => state.user);
  const logout = UsuAuthStore((state) => state.logout);

  const menus = [
    {
      name: "Home",
      path: "/admin",
      icon: Home,
    },
    {
      name: "Pengaturan",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  const userName = user?.name || "Admin";
  const initial = userName.charAt(0).toUpperCase();

  const handleLogout = () => {
    logout();
    navigate("/sign-in");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        aria-label='Buka menu navigasi'
        aria-expanded={isOpen}
        aria-controls='admin-sidebar'
        className='fixed left-4 top-4 z-40 flex size-10 items-center justify-center rounded-xl border bg-background shadow-sm md:hidden'>
        <Menu className='size-5' aria-hidden='true' />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden'
          aria-hidden='true'
        />
      )}

      {/* Sidebar */}
      <aside
        id='admin-sidebar'
        aria-label='Menu navigasi admin'
        className={`
          fixed inset-y-0 left-0 z-50 w-64 border-r bg-background
          transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
        <div className='flex h-full flex-col'>
          {/* Logo */}
          <div className='flex h-20 items-center justify-between border-b px-6'>
            <NavLink
              to='/admin'
              onClick={() => setIsOpen(false)}
              className='flex items-center gap-3'>
              <img
                src='/image/vitala-logo2.png'
                alt='Vitala'
                className='size-9 object-contain'
              />

              <div>
                <p className='font-bold tracking-tight'>Vitala</p>

                <p className='text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground'>
                  Admin
                </p>
              </div>
            </NavLink>

            {/* Close Button */}
            <button
              type='button'
              onClick={() => setIsOpen(false)}
              aria-label='Tutup menu navigasi'
              className='flex size-9 items-center justify-center rounded-lg hover:bg-muted md:hidden'>
              <X className='size-5' aria-hidden='true' />
            </button>
          </div>

          {/* Menu */}
          <nav aria-label='Menu utama admin' className='flex-1 px-4 py-6'>
            <p className='mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
              Menu
            </p>

            <div className='space-y-1'>
              {menus.map((menu) => {
                const Icon = menu.icon;

                return (
                  <NavLink
                    key={menu.path}
                    to={menu.path}
                    end={menu.path === "/admin"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive ?
                          "bg-foreground text-background shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`
                    }>
                    <Icon className='size-[18px]' aria-hidden='true' />

                    <span>{menu.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </nav>

          {/* Admin Profile */}
          <div className='border-t p-4'>
            <div className='flex items-center gap-3 rounded-xl bg-muted/50 p-3'>
              <div
                className='flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background'
                aria-hidden='true'>
                {initial}
              </div>

              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-semibold'>{userName}</p>

                <p className='truncate text-xs text-muted-foreground'>
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Logout */}
            <button
              type='button'
              onClick={handleLogout}
              aria-label='Logout dari akun admin'
              className='mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'>
              <LogOut className='size-[18px]' aria-hidden='true' />

              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
