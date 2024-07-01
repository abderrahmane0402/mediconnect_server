import express, { json } from "express"
import { dbConnect } from "./db.js"
import cors from "cors"
import authRouter from "./routes/auth.js"
import DossierRouter from "./routes/Dossier.js"


const app = express()
const port = 3001

app.use(cors({ origin: "*" }))
app.use(json())


app.use("/api/auth", authRouter)
app.use("/dossier", DossierRouter)

dbConnect()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.get("/", async (req, res) => {
  res.send({ message: "hello" })
})

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})
