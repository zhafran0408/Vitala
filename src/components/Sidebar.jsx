/** @format */

import {
  Compass,
  Home,
  Info,
  Map,
  MessageCircleQuestion,
  Sparkles,
  User,
  X,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

function Sidebar({ open, onClose }) {
  const menus = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "About",
      path: "/about",
      icon: Info,
    },
    {
      name: "Destinations",
      path: "/classes",
      icon: Map,
    },
    {
      name: "Activities",
      path: "/benefits",
      icon: Sparkles,
    },
    {
      name: "FAQ",
      path: "/faq",
      icon: MessageCircleQuestion,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <button
        type='button'
        aria-label='Close sidebar'
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-all duration-300 ${
          open ?
            "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-background shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className='flex h-full flex-col'>
          {/* Header */}
          <div className='flex h-20 items-center justify-between border-b px-5'>
            <Link
              to='/'
              onClick={onClose}
              className='group flex items-center gap-3'>
              <img
                src='/image/vitala-logo2.png'
                alt='Vitala'
                className='size-10 object-contain'
              />

              <div>
                <p className='font-bold tracking-tight'>Vitala</p>

                <p className='text-xs text-muted-foreground'>Explore more</p>
              </div>
            </Link>

            {/* Close */}
            <button
              type='button'
              onClick={onClose}
              aria-label='Close sidebar'
              className='flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:rotate-90 hover:bg-muted hover:text-foreground'>
              <X className='size-5' />
            </button>
          </div>

          {/* Navigation */}
          <nav className='hide-scrollbar flex-1 overflow-y-auto px-4 py-7'>
            <p className='mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/60'>
              Explore
            </p>

            <div className='space-y-1.5'>
              {menus.map((menu, index) => {
                const Icon = menu.icon;

                return (
                  <NavLink
                    key={menu.path}
                    to={menu.path}
                    end={menu.path === "/"}
                    onClick={onClose}
                    style={{
                      transitionDelay: open ? `${index * 40}ms` : "0ms",
                    }}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-300 ${
                        open ?
                          "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                      } ${
                        isActive ?
                          "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`
                    }>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 ${"group-hover:scale-105"}`}>
                      <Icon className='size-[18px]' />
                    </span>

                    <span>{menu.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
