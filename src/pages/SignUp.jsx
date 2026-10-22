/** @format */

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { UsuAuthStore } from "../store/userStore";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

const signUpSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak sama",
  path: ["confirmPassword"],
});

export default function SignUp() {
  const navigate = useNavigate();
  const registerUser = UsuAuthStore((state) => state.register);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    const success = registerUser(data.name, data.email, data.password, "user");
    if (success) {
      toast.success("Akun berhasil dibuat! Silakan masuk.");
      navigate("/sign-in");
    } else {
      toast.error("Email sudah terdaftar!");
    }
  };

  return (
    <div>
      <h1 className="mb-2 text-center text-3xl font-extrabold text-slate-900">Sign Up</h1>
      <p className="mb-8 text-center text-sm text-slate-500">Buat akun untuk mulai menjelajah.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-slate-700">Nama Lengkap</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              {...register("name")}
              placeholder="Masukkan nama"
              className="w-full rounded-xl border border-slate-300 py-3.5 pl-11 pr-4 text-sm font-medium focus:border-[#0B132B] focus:outline-none focus:ring-1 focus:ring-[#0B132B]"
            />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-slate-700">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              {...register("email")}
              placeholder="email@example.com"
              className="w-full rounded-xl border border-slate-300 py-3.5 pl-11 pr-4 text-sm font-medium focus:border-[#0B132B] focus:outline-none focus:ring-1 focus:ring-[#0B132B]"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-slate-700">Password</label>
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

        <div>
          <label className="mb-1.5 block text-sm font-bold text-slate-700">Konfirmasi Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-300 py-3.5 pl-11 pr-4 text-sm font-medium focus:border-[#0B132B] focus:outline-none focus:ring-1 focus:ring-[#0B132B]"
            />
          </div>
          {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="mt-6 w-full rounded-xl bg-[#0B132B] py-4 text-sm font-bold text-white transition-colors hover:bg-slate-800 disabled:opacity-70 shadow-lg shadow-[#0B132B]/20"
        >
          {isSubmitting ? "Memproses..." : "Create Account"}
        </motion.button>
      </form>

      <p className="mt-8 text-center text-sm font-medium text-slate-600">
        Sudah punya akun? <Link to="/sign-in" className="font-bold text-blue-600 hover:underline">Masuk di sini</Link>
      </p>
    </div>
  );
}

