import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  createdAt: timestamp({ withTimezone: true, mode: "date" }).defaultNow(),
  updatedAt: timestamp({ withTimezone: true, mode: "date" }).defaultNow(),
};
