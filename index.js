const express = require("express")
const { json } = express
const { dbConnect } = require("./db.js")
const cors = require("cors")
const authRouter = require("./routes/auth.js")
const userRouter = require("./routes/user")

const app = express()
const port = 3001

app.use(cors({ origin: "*" }))
app.use(json())

// routes
app.use("/api/auth", authRouter)
app.use("/user", userRouter)

dbConnect()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.get("/", async (req, res) => {
  res.send({ message: "hello" })
})

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})
