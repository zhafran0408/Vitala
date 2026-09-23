/** @format */

import { create } from "zustand";
import { persist } from "zustand/middleware";

let MOCK_USERS = [
  {
    id: "1",
    email: "admin@test.com",
    password: "123",
    name: "Budi",
    role: "admin",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "123",
    name: "Siti",
    role: "user",
  },
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

        set({
          error: "Email atau password salah",
        });

        return false;
      },

      register: (name, email, password, role) => {
        const existingUser = MOCK_USERS.find((user) => user.email === email);

        if (existingUser) {
          set({
            error: "Email sudah terdaftar",
          });

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

        set({
          error: null,
        });

        return true;
      },

      logout: () => {
        set({
          user: null,
          error: null,
        });
      },
    }),
    {
      name: "auth-store",
    },
  ),
);
