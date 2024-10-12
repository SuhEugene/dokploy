import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./server/db/schema/index.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: "postgres://dokploy:amukds4wi9001583845717ad2@dokploy-postgres:5432/dokploy",
	},
	out: "drizzle",
	migrations: {
		table: "migrations",
		schema: "public",
	},
});
