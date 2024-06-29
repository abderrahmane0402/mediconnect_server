import express, { json } from "express"
import { dbConnect } from "./db.js"
import cors from "cors"
import authRouter from "./routes/auth.js"

const app = express()
const port = 3001

app.use(cors())
app.use(json())

// routes
app.use("/api/auth", authRouter)

dbConnect()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.get("/", async (req, res) => {
  res.send("hi")
})

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})