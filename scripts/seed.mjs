import { Client } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env.local if DATABASE_URL is not set
const envPath = path.resolve(__dirname, "../.env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

const connectionString = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!connectionString) {
  console.error("❌ Error: DATABASE_URL or DATABASE_URL_UNPOOLED is not defined in .env.local");
  process.exit(1);
}

console.log("🌱 Connecting to Neon Postgres via Client...");

async function seed() {
  const schemaPath = path.resolve(__dirname, "schema.sql");
  const schemaSql = fs.readFileSync(schemaPath, "utf-8");

  const client = new Client(connectionString);
  try {
    await client.connect();
    console.log("Connected. Applying schema.sql...");

    // Execute the schema script
    await client.query(schemaSql);
    console.log("✅ Schema and seed statements executed successfully!");

    // Verify dishes count
    const countRes = await client.query("SELECT count(*) FROM dishes");
    console.log(`✨ Seed complete! Dishes in database: ${countRes.rows[0]?.count || 0}`);

    // Verify categories count
    const catRes = await client.query("SELECT count(*) FROM categories");
    console.log(`✨ Categories in database: ${catRes.rows[0]?.count || 0}`);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

seed();
