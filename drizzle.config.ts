import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/schema.ts",
  out: "./drizzle", //migrations folder path. For each schema there is one migration folder
  verbose: true,
  strict: true,
});