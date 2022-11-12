const mongoose = require("mongoose");
const {config} = require("dotenv")

config();

async function connect(url) {
    try {
        mongoose.connect(url || process.env.MONGO_DB_LOCAL);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log( error.message)
    }
}

module.exports = connect