const mongoose = require('mongoose')

const mongoConnect = () => {
    const MONGO_URL = "mongodb://127.0.0.1:27017/FacebookClone";

    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("open", () => {
        console.log("✅ Connected to MongoDB");
    });

    db.on("error", (error) => {
        console.error("MongoDB connection error:", error);
    });
}

module.exports = mongoConnect