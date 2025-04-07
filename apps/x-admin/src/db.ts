import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

// 確認當前環境
const env = process.env.NODE_ENV || "development";
console.log(process.env.NODE_ENV);

// 根據環境載入對應 .env 檔
const envPath = path.resolve(__dirname, `.env.${env}`);
dotenv.config({ path: envPath });
console.log(process.env.DB_USER);

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

export default pool;
