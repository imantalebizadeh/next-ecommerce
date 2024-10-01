import { initTRPC } from "@trpc/server";

import { cache } from "react";

export const createTRPCContext = cache(async () => ({
  userId: "1",
}));

type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create();

// Base router and procedure helpers
export const { router, createCallerFactory } = t;
export const publicProcedure = t.procedure;
