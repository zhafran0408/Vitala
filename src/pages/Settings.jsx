/** @format */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Camera, User, Mail, Save, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { UsuAuthStore } from "../store/userStore";

export default function Settings() {
  const user = UsuAuthStore((state) => state.user);
  const updateProfile = UsuAuthStore((state) => state.updateProfile);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [avatar, setAvatar] = useState(user?.avatar || null);
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Ukuran foto maksimal 2MB ya bre!");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSave = () => {
    if (!name || !email) {
      toast.error("Nama dan Email nggak boleh kosong!");
      return;
    }

    updateProfile({ name, email, avatar });
    toast.success("Profil berhasil diperbarui!");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <Link 
          to="/" 
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-xl"
        >
          <div className="bg-[#0B132B] p-8 text-center sm:p-12">
            <h1 className="text-3xl font-extrabold text-white">Pengaturan Akun</h1>
            <p className="mt-2 text-slate-400">Kelola profil dan preferensi kamu di sini.</p>
          </div>

          <div className="space-y-10 p-8 sm:p-12">
            <div className="flex flex-col items-center">
              <div 
                onClick={() => fileInputRef.current.click()}
                className="group relative h-32 w-32 cursor-pointer overflow-hidden rounded-full border-4 border-slate-100 shadow-lg transition-transform hover:scale-105"
              >
                {avatar ? (
                  <img src={avatar} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
                    <User className="h-12 w-12" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                className="hidden" 
              />
              
              <p className="mt-4 text-sm font-medium text-slate-500">
                Klik foto untuk mengganti
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <User className="h-4 w-4 text-slate-400" /> Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:border-[#0B132B] focus:bg-white focus:ring-4 focus:ring-[#0B132B]/10"
                  placeholder="Masukkan nama kamu"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Mail className="h-4 w-4 text-slate-400" /> Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:border-[#0B132B] focus:bg-white focus:ring-4 focus:ring-[#0B132B]/10"
                  placeholder="Masukkan email"
                />
              </div>
            </div>

            {/* TOMBOL SIMPAN */}
            <motion.button
              onClick={handleSave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B132B] px-6 py-4 text-sm font-bold text-white shadow-lg transition-colors hover:bg-slate-800"
            >
              <Save className="h-5 w-5" />
              Simpan Perubahan
            </motion.button>

          </div>
        </motion.div>
      </div>
    </div>
  );
}