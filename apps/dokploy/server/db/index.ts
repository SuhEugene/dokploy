import { type PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

declare global {
	// eslint-disable-next-line no-var -- only var works here
	var db: PostgresJsDatabase<typeof schema> | undefined;
}

export let db: PostgresJsDatabase<typeof schema>;
if (process.env.NODE_ENV === "production") {
	db = drizzle(postgres("postgres://dokploy:amukds4wi9001583845717ad2@dokploy-postgres:5432/dokploy"), {
		schema,
	});
} else {
	if (!global.db)
		global.db = drizzle(postgres("postgres://dokploy:amukds4wi9001583845717ad2@dokploy-postgres:5432/dokploy"), {
			schema,
		});

	db = global.db;
}
