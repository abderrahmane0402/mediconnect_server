const { Router } = require("express");
const Visite = require("../models/visite");
const DossierMedicale = require("../models/dossier");

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const { dossierMedicale, ...visiteData } = req.body;
    const dossier = await DossierMedicale.findById(dossierMedicale);
    if (!dossier) {
      return res.status(404).json({ error: "Dossier not found" });
    }
    const visite = new Visite({ ...visiteData, dossierMedicale });
    await visite.save();
    dossier.visites.push(visite._id);
    await dossier.save();
    res.status(201).json(visite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/getId/:id", async (req, res) => {
  try {
    const visite = await Visite.findById(req.params.id).populate('dossierMedicale');
    if (!visite) {
      return res.status(404).json({ error: "Visite not found" });
    }
    res.json(visite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/get", async (req, res) => {
  try {
    const visites = await Visite.find().populate('dossierMedicale');
    res.json(visites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/getByDossier/:dossierId", async (req, res) => {
  try {
    const visites = await Visite.find({ dossierMedicale: req.params.dossierId });
    res.json(visites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/put/:id", async (req, res) => {
  try {
    const { dossierMedicale, ...visiteData } = req.body;
    const visite = await Visite.findByIdAndUpdate(req.params.id, visiteData, { new: true });
    if (!visite) {
      return res.status(404).json({ error: "Visite not found" });
    }
    if (dossierMedicale) {
      const dossier = await DossierMedicale.findById(dossierMedicale);
      if (!dossier) {
        return res.status(404).json({ error: "Dossier not found" });
      }
      visite.dossierMedicale = dossierMedicale;
      await visite.save();
    }
    res.json(visite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const visite = await Visite.findByIdAndDelete(req.params.id);
    if (!visite) {
      return res.status(404).json({ error: "Visite not found" });
    }
    await DossierMedicale.updateOne(
      { _id: visite.dossierMedicale },
      { $pull: { visites: visite._id } }
    );
    res.json({ message: "Visite deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
