import dotenv from "dotenv";
dotenv.config();

console.log("SERVER FILE STARTED ");

import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

console.log("PORT:", process.env.PORT);
console.log("DATABASE:", process.env.DATABASE_URL ? "Loaded" : "Missing");

const startServer = async () => {

  console.log("Connecting DB...");

  await connectDB();

  console.log("Starting Express...");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

};

startServer();