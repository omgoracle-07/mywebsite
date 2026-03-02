const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://omg723308_db_user:YOUR_PASSWORD@cluster0.depairg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db("omgoracleDB"); // database name
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.log("❌ MongoDB Error:", error);
    }
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB };