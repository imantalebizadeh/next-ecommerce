import { type SQL, sql } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const userRole = pgEnum("user_role", ["user", "admin"]);

export const usersTable = pgTable("users", {
  id: text("id").primaryKey().notNull(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  fullName: varchar("full_name", { length: 255 }).generatedAlwaysAs(
    (): SQL => sql`${usersTable.firstName} || ' ' || ${usersTable.lastName}`,
  ),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: text("password").notNull(),
  avatarUrl: varchar("avatar_url", { length: 500 }).notNull(),
  role: userRole("role").default("user"),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export const sessionsTable = pgTable("sessions", {
  id: text("id").primaryKey().notNull(),
  userId: text("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const otpsTable = pgTable("otps", {
  id: text("id").primaryKey().notNull(),
  userId: text("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  code: varchar("code", { length: 8 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
