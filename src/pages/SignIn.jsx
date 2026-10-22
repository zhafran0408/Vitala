/** @format */

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { UsuAuthStore } from "../store/userStore";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const signInSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export default function SignIn() {
  const navigate = useNavigate();
  const login = UsuAuthStore((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data) => {
    const success = login(data.email, data.password);
    if (success) {
      toast.success("Berhasil masuk!");
      const user = UsuAuthStore.getState().user;
      if (user?.role === "admin") navigate("/admin");
      else navigate("/");
    } else {
      toast.error("Email atau password salah!");
    }
  };

  return (
    <div>
      <h1 className="mb-2 text-center text-3xl font-extrabold text-slate-900">Sign In</h1>
      <p className="mb-8 text-center text-sm text-slate-500">Masuk untuk melanjutkan petualangan.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-slate-700">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              {...register("email")}
              placeholder="admin@test.com"
              className="w-full rounded-xl border border-slate-300 py-3.5 pl-11 pr-4 text-sm font-medium focus:border-[#0B132B] focus:outline-none focus:ring-1 focus:ring-[#0B132B]"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="block text-sm font-bold text-slate-700">Password</label>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-[#0B132B]">Lupa password?</a>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-300 py-3.5 pl-11 pr-12 text-sm font-medium focus:border-[#0B132B] focus:outline-none focus:ring-1 focus:ring-[#0B132B]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="mt-6 w-full rounded-xl bg-[#0B132B] py-4 text-sm font-bold text-white transition-colors hover:bg-slate-800 disabled:opacity-70 shadow-lg shadow-[#0B132B]/20"
        >
          {isSubmitting ? "Memproses..." : "Sign In"}
        </motion.button>
      </form>

      <p className="mt-8 text-center text-sm font-medium text-slate-600">
        Belum punya akun? <Link to="/sign-up" className="font-bold text-blue-600 hover:underline">Daftar di sini</Link>
      </p>
    </div>
  );
}