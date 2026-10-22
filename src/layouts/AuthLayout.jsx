/** @format */

import { Navigate, Outlet, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UsuAuthStore } from "../store/userStore";

function AuthLayout() {
  const user = UsuAuthStore((state) => state.user);
  const location = useLocation();

  if (user) {
    if (user.role === "admin") return <Navigate to="/admin" replace />;
    return <Navigate to="/" replace />;
  }

  const isSignUp = location.pathname === "/sign-up";
  const bgImage = isSignUp
    ? "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop" // Raja Ampat
    : "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1200&auto=format&fit=crop"; // Monas

  return (
    <div className="flex min-h-screen bg-slate-50 md:p-4 lg:p-0">
      <div className="flex w-full flex-col overflow-hidden bg-white md:mx-auto md:max-w-4xl md:flex-row md:rounded-[32px] md:shadow-2xl lg:max-w-none lg:rounded-none lg:shadow-none">
        <div className="relative h-56 w-full shrink-0 md:h-auto md:w-1/2">
          <img
            src={bgImage}
            alt="Vitala Travel"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 md:bg-black/40" />

          <Link to="/" className="absolute left-6 top-6 flex items-center gap-2">
            <img
              src="/image/vitala-logo-white.png"
              alt="Vitala"
              className="h-8 object-contain md:h-10"
            />
          </Link>
          <div className="absolute bottom-12 left-10 right-10 hidden text-white md:block">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
              Discover the <br/> Unexpected.
            </h2>
            <p className="mt-4 text-sm text-white/70 max-w-sm">
              Mulai perjalananmu, temukan tempat tersembunyi, dan ciptakan cerita yang tak terlupakan di penjuru Nusantara.
            </p>
          </div>
        </div>
        <div className="relative z-10 -mt-6 flex w-full flex-1 flex-col justify-center rounded-t-[32px] bg-white px-6 pb-12 pt-8 md:mt-0 md:w-1/2 md:rounded-none md:px-12 lg:px-20">
          <div className="w-full max-w-sm mx-auto">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;
