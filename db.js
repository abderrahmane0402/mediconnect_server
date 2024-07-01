const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connection = {}

async function dbConnect() {
  if (connection.isConnected) {
    return
  }
  const db = await mongoose.connect(process.env.DATABASE_URL, {
    dbName: "mediconnect",
  })

  connection.isConnected = db.connections[0].readyState
}

module.exports = { dbConnect }
