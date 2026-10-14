/** @format */

import { z } from "zod";

export const signinSchema = z.object({
  email: z.email("Format email tidak valid"),

  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(6, "Password minimal 6 karakter"),
});