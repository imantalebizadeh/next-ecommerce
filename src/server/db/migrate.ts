import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { env } from "@/lib/env";

const sql = postgres(env.DATABASE_URL, { max: 1 });
const db = drizzle(sql);

async function main() {
  try {
    await migrate(db, { migrationsFolder: __dirname + "/migrations" });
    console.log("Migrations successfully executed");
  } catch (error) {
    console.log(error);
  } finally {
    await sql.end();
  }
}

main();
