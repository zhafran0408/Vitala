/** @format */

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import CryptoJS from "crypto-js";

const SECRET_KEY = "vitala-super-secret-key-2026";

const encryptedStorage = {
  getItem: (name) => {
    const str = localStorage.getItem(name);
    if (!str) return null;
    try {
      const bytes = CryptoJS.AES.decrypt(str, SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8) || null;
    } catch (error) {
      return null;
    }
  },
  setItem: (name, value) => {
    const encrypted = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    localStorage.setItem(name, encrypted);
  },
  removeItem: (name) => localStorage.removeItem(name),
};

let MOCK_USERS = [
  { id: "1", email: "admin@test.com", password: "123456", name: "Budi", role: "admin" },
  { id: "2", email: "user@test.com", password: "123456", name: "Siti", role: "user" },
];

export const UsuAuthStore = create(
  persist(
    (set) => ({
      user: null,
      error: null,

      login: (email, password) => {
        const foundUser = MOCK_USERS.find(
          (user) => user.email === email && user.password === password,
        );
        if (foundUser) {
          set({
            user: {
              id: foundUser.id,
              email: foundUser.email,
              name: foundUser.name,
              role: foundUser.role,
            },
            error: null,
          });
          return true;
        }
        set({ error: "Email atau password salah" });
        return false;
      },

      register: (name, email, password, role) => {
        const existingUser = MOCK_USERS.find((user) => user.email === email);
        if (existingUser) {
          set({ error: "Email sudah terdaftar" });
          return false;
        }
        const newUser = {
          id: String(MOCK_USERS.length + 1),
          email,
          password,
          name,
          role,
        };
        MOCK_USERS.push(newUser);
        set({ error: null });
        return true;
      },

      logout: () => {
        set({ user: null, error: null });
      },

      updateProfile: (data) => {
        set((state) => ({
          user: { ...state.user, ...data },
        }));
      },

      // === FUNGSI BARU: RESET PASSWORD ===
      resetPassword: (email, newPassword) => {
        const userIndex = MOCK_USERS.findIndex((u) => u.email === email);
        
        if (userIndex !== -1) {
          // Kalau email ketemu, ganti password-nya
          MOCK_USERS[userIndex].password = newPassword;
          return true;
        }
        // Kalau email nggak ketemu
        return false;
      },
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => encryptedStorage),
    },
  ),
);
