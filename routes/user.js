const { Router } = require("express")
const Utilisateur = require("../models/user")

const router = Router()

router.get("/getUsers", async (req, res) => {
  try {
    const users = await Utilisateur.find()
    res.status(200).send(users)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.post("/addUser", async (req, res) => {
  try {
    const {
      nom,
      prenom,
      telephone,
      password,
      adresse,
      daten,
      cin,
      posteTravail,
      PPR,
      user_type,
    } = req.body

    // Validate input
    if (
      !nom ||
      !prenom ||
      !telephone ||
      !password ||
      !adresse ||
      !daten ||
      !cin ||
      !posteTravail ||
      !PPR ||
      !user_type
    ) {
      return res.status(400).send({ message: "All fields are required" })
    }

    // Create a new user
    const newUser = new Utilisateur({
      nom,
      prenom,
      telephone,
      password,
      adresse,
      daten,
      cin,
      posteTravail,
      PPR,
      user_type,
    })

    // Save the user to the database
    await newUser.save()

    // Send a success response
    res.status(201).send({ message: "User added successfully", user: newUser })
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.put("/updateUser/:id", async (req, res) => {
  try {
    const userId = req.params.id
    const updateData = req.body

    // Find the user by ID and update with new data
    const updatedUser = await Utilisateur.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    )

    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" })
    }

    res
      .status(200)
      .send({ message: "User updated successfully", user: updatedUser })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .send({ message: "An error occurred while updating the user", error })
  }
})

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const userId = req.params.id

    // Find the user by ID and delete
    const deletedUser = await Utilisateur.findByIdAndDelete(userId)

    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" })
    }

    res
      .status(200)
      .send({ message: "User deleted successfully", user: deletedUser })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .send({ message: "An error occurred while deleting the user", error })
  }
})

module.exports = router