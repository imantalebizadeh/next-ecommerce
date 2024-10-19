import type { NextAuthConfig } from "next-auth";

import Google from "next-auth/providers/google";

export const authConfig = {
  providers: [Google],
  pages: { signIn: "/sign-in" },
} satisfies NextAuthConfig;
