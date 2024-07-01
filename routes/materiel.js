const { Router } = require("express");
const Materiel = require("../models/materiel");

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const materiel = new Materiel(req.body);
    await materiel.save();
    res.status(201).json(materiel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/getId/:id", async (req, res) => {
  try {
    const materiel = await Materiel.findById(req.params.id);
    if (!materiel) {
      return res.status(404).json({ error: "Materiel not found" });
    }
    res.json(materiel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/get", async (req, res) => {
  try {
    const materiels = await Materiel.find();
    res.json(materiels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/put/:id", async (req, res) => {
  try {
    const materiel = await Materiel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!materiel) {
      return res.status(404).json({ error: "Materiel not found" });
    }
    res.json(materiel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const materiel = await Materiel.findByIdAndDelete(req.params.id);
    if (!materiel) {
      return res.status(404).json({ error: "Materiel not found" });
    }
    res.json({ message: "Materiel deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;