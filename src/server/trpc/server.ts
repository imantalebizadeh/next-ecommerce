import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";

import { cache } from "react";

import { makeQueryClient } from "@/lib/react-query-client";

import { rootRouter } from "./root";
import { createCallerFactory, createTRPCContext } from ".";

export const getQueryClient = cache(makeQueryClient);
const caller = createCallerFactory(rootRouter)(createTRPCContext);

export const { trpc, HydrateClient } = createHydrationHelpers<
  typeof rootRouter
>(caller, getQueryClient);
