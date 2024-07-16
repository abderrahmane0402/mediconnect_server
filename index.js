const express = require("express")
const { json } = express
const { dbConnect } = require("./db.js")
const cors = require("cors")
const authRouter = require("./routes/auth.js")
const userRouter = require("./routes/user")
const dossierRouter = require("./routes/Dossier.js")
const MaterielRouter = require("./routes/materiel.js")
const VisiteRouter = require("./routes/visite.js")



const app = express()
const port = 3001

app.use(cors({ origin: "*" }))
app.use(json({ limit: "15mb" }))
app.use(json())


app.use("/api/auth", authRouter)
app.use("/user", userRouter)
app.use("/dossier", dossierRouter)
app.use("/materiel", MaterielRouter)
app.use("/visite", VisiteRouter)



dbConnect()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.get("/", async (req, res) => {
  res.send({ message: "hello" })
})

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})
