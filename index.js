const express = require("express");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// ===== ADMIN LOGIN =====
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";

// ===== MONGODB CONNECTION (FINAL CLEAN VERSION) =====
mongoose.connect("mongodb+srv://omg723308_db_user:<db_password>@cluster0.depairg.mongodb.net/?appName=Cluster0")
.then(() => console.log("🔥 MongoDB Connected Successfully"))
.catch(err => console.log("❌ MongoDB Connection Error:", err));

mongoose.connection.on("connected", () => {
    console.log("📦 Mongoose Connection Active");
});

mongoose.connection.on("error", (err) => {
    console.log("⚠️ Mongoose Runtime Error:", err);
});