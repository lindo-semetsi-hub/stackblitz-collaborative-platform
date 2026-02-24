import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

console.log("DB FILE LOADED");

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },

  connectionTimeoutMillis: 5000
});

export const connectDB = async () => {
  try {

    console.log("Trying DB query...");

    const result = await pool.query("SELECT NOW()");

    console.log("PostgreSQL Connected");
    console.log(result.rows[0]);

  } catch (error) {

    console.log("DATABASE ERROR:");
    console.log(error);

  }
};