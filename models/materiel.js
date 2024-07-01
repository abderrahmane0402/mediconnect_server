const { Schema, model } = require("mongoose");

const materielSchema = new Schema({
  nomEquipement: {
    type: String,
    required: true,
  },
  etat: {
    type: Boolean,
    default: false,
  },
  operationel: {
    type: Boolean,
    default: false,
  },
});
const Materiel = model("Materiel", materielSchema);

module.exports = Materiel;
