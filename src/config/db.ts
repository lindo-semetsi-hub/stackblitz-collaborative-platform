import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export const connectDB = async () => {
  try {
    await pool.query("Select 1");
    console.log("Connected");
  } catch (error) {
    console.error(" Connection Failed", error);
    process.exit(1);
  }
};