const { Router } = require("express")
const Utilisateur = require("../models/user.js")
const bcrypt = require("bcrypt")
const { generateAccessToken } = require("../middleware.js")

const router = Router()

router.post("/", async (req, res) => {
  try {
    const { login, password } = req.body
    console.log(login, password)
    const user = await Utilisateur.findOne({ cin: login }).select(
      "nom prenom password user_type"
    )

    if (!user) {
      return res.status(400).send({ message: "User not found" })
    }

    if (!bcrypt.compareSync(password, user.password)) {
      res.status(400).send({ message: "password incorrect", status: "error" })
      return
    }

    const token = generateAccessToken(user.id)
    res.status(200).send({
      message: "User logged in successfully",
      token,
      user,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message, status: "error" })
  }
})

module.exports = router
