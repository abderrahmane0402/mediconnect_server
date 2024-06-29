import mongoose from "mongoose"

const DossierSchema = new mongoose.Schema({
  InfoPersonnel: {
    nom: { type: String, required: false },
    prenom: { type: String, required: false },
    ville: { type: String, required: false },
    Date_naiss: { type: Date, required: false },
    Situation_Familiale: { type: String, required: false },
    Adresse: { type: String, required: false },
    Grade: { type: String, required: false },
    Nature_emploi: { type: String, required: false },
    depuis: { type: Number, required: false },
    DPPR: { type: Number, required: false },
    Groupe_sanguin: { type: String, required: false },
  },
  nbr_Dossier: { type: String, required: false },
  delegation_Medicale: { type: String, required: false },
  Formation_Santaire: { type: String, required: false },
  Antecedent_médicaux: {
    Antecedents_Familiaux: [{ type: String }],
    Antecedents_Personnelle: [{ type: String }],
    Antecedents_Personnelle_autre: { type: String },
    Antecedents_Familiaux_autre: { type: String },
  },
  Antecedent_Professionnels: {
    Formation_Scolaire_Profess: { type: String },
    Activités_Profess_Antérieur: { type: String },
    Accidents_Contract_Service: { type: String },
    Maladie_contracté_Service: { type: String },
  },
  Vaccination: [
    {
      Type: { type: String },
      date_V: { type: Date },
      Rappels: { type: String },
      observation: { type: String },
    },
  ],
})

// Create and export the model
const DossierModel = mongoose.model("Dossier", DossierSchema)

export default DossierModel
