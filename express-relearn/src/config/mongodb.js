import { MongoClient } from "mongodb";
import { env } from "./environtment.js";

const MONGODB_URI = env.MONGODB_URI;
const MONGODB_DB_NAME = env.MONGODB_DB_NAME;
const client = new MongoClient(MONGODB_URI, {});

let db;

export const connectDB = async () => {
    if (db) return db; // nếu đã connect thì trả về

    try {
        await client.connect();
        console.log("✅ Kết nối MongoDB thành công");

        db = client.db(MONGODB_DB_NAME); // chọn database 'test'
        return db;
    } catch (err) {
        console.error("❌ Lỗi kết nối MongoDB:", err.message);
        process.exit(0);
    }
};


export const closeDB = async () => {
    if (!client) return;
    try {
        await client.close();
        console.log("🔒 Đóng kết nối MongoDB thành công");
    } catch (err) {
        console.error("❌ Lỗi đóng kết nối MongoDB:", err.message);
    }
};
export const getDB = () => db;

