import { Router } from "express"
import Utilisateur from "../models/user"

const router = Router()

router.post("/login" , async (req, res) => {
  try {
    const { login, password } = req.body
    const user = await Utilisateur.findOne({ cin : login }).select()
    if (!user) {
      return res
        .status(400)
        .send({ message: "User not found" })
    }
    if (!bcrypt.compareSync(password, user.password)) {
      res.status(400).send({ message: "password incorrect", status: "error" })
      return
    }

    const token = generateAccessToken(user.id)
    res.send({
      message: "User logged in successfully",
      status: "success",
      data: {
        token,
        user,
      },
    })
  } catch (error) {
    res.status(500).json({ message: error.message, status: "error" })
  }
})

export default router
