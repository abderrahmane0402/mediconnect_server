import { Schema, model } from "mongoose"

const utilisateurSchema = new Schema({
  nom: { type: String, required: true },
  date_creation: { type: Date, default: Date.now },
  prenom: { type: String, required: true },
  telephone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  adresse: { type: String, required: true },
  daten: { type: Date, required: true },
  cin: { type: String, required: true, unique: true },
  posteTravail: { type: String, required: true },
  PPR: { type: String, required: true, unique: true },
})

const Utilisateur = model("Utilisateur", utilisateurSchema)

export default Utilisateur