
const { Schema, model } = require("mongoose")

const mongoose = require("mongoose");

const visiteSchema = new mongoose.Schema({
  daten: { type: Date, required: true },
  docteur: { type: String, default: "aa" },
  postTravail: { type: String, required: true },
  poid: { type: Number, required: true },
  taille: { type: Number, required: true },
  visionOD: { type: Number, required: true },
  visionOG: { type: Number, required: true },
  auditionOD: { type: Number, required: true },
  auditionOG: { type: Number, required: true },
  maa: { type: String, required: true },
  ExamenClinique: { type: String, required: true },
  ExamenComplementaires: { type: String, required: true },
  ConclusionMedical: { type: String, required: true },
  Scan: [{ type: String }],
  dossierMedicale: { type: mongoose.Schema.Types.ObjectId, ref: 'DossierMedicale', required: true },
});

const Visite = mongoose.model("Visite", visiteSchema);
module.exports = Visite;
// const Visite = model('Visite', visiteSchema);

// module.exports = Visite;