const mongoose = require("mongoose")

const DossierSchema = new mongoose.Schema({
  InfoPersonnel: {
    nom: { type: String },
    prenom: { type: String },
    ville: { type: String },
    Date_naiss: { type: Date },
    Situation_Familiale: { type: String },
    Adresse: { type: String },
    Grade: { type: String },
    Nature_emploi: { type: String },
    depuis: { type: Number },
    DPPR: { type: Number },
    Groupe_sanguin: { type: String },
  },
  visites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visite' }],
  nbr_Dossier: { type: String },
  delegation_Medicale: { type: String },
  Formation_Santaire: { type: String },
  Antecedent_médicaux: {
    Antecedents_Familiaux: [{ type: String }],
    Antecedents_Personnelle: [{ type: String }],
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
  Vaccinationautre: [
    {
      Type: { type: String },
      date_V: { type: Date },
      Rappels: { type: String },
      observation: { type: String },
    },
  ],
  PremierExam: {
    Date_exam: { type: Date },
    Docteur: { type: String },
    Post_de_Travail: { type: String },
    Poids: { type: Number },
    Taille: { type: Number },
    Appareil_auditif: {
      OG: { type: String },
      OD: { type: String },
      Scan: [{ type: String }],
    },
    Appareil_Oculaire: {
      Appareil_Oculaire_AC: {
        OD_Pres: { type: String },
        OG_Pres: { type: String },
        OD_Loin: { type: String },
        OG_Loin: { type: String },
      },
      Appareil_Oculaire_SC: {
        OD_Pres: { type: String },
        OG_Pres: { type: String },
        OD_Loin: { type: String },
        OG_Loin: { type: String },
      },
      Scan: [{ type: String }],
    },
    Téguments: {
      observation: { type: String },
      autre: { type: String },
    },
    Examen_radiologique: {
      observation: { type: String },
      Scan: [{ type: String }],
      autre: { type: String },
    },
    Appareil_respiratoire_rhinopharynx: {
      observation: { type: String },
      Scan: [{ type: String }],
    },
    Appareil_cadiovasculaire: {
      observation: { type: String },
      Scan: [{ type: String }],
    },
    Varices: {
      observation: { type: String },
      autre: { type: String },
    },
    T_A: { type: String },
    Pouls: { type: String },
    Appareil_digestif: {
      observation: { type: String },
      Scan: [{ type: String }],
    },
    Appareil_hématologique_réticulaire: {
      observation: { type: String },
      Scan: [{ type: String }],
    },
    Gangloins: { type: String },
    Rate: { type: String },
    Glandes_endocriniennes: {
      Thyroïde: {
        Check: { type: Boolean },
        sousNom: { type: String },
        observation: { type: String },
        autreobservation: { type: String },
      },
      Glandes_surrénales: {
        Check: { type: Boolean },
        observation: { type: String },
        autreobservation: { type: String },
      },
      Hypophyse: {
        Check: { type: Boolean },
        observation: { type: String },
        autreobservation: { type: String },
      },
      Autres: { type: String },
      Scan: [{ type: String }],
    },
    Système_nerveux: {
      Lesion_cérébrale: {
        Check: { type: Boolean },
        observation: { type: String },
        autreobservation: { type: String },
      },
      NCB: {
        Check: { type: Boolean },
        observation: { type: String },
        autreobservation: { type: String },
      },
      Hernie_discale: {
        Check: { type: Boolean },
        observation: { type: String },
        autreobservation: { type: String },
      },
      Maladie_neurologique: {
        Check: { type: Boolean },
        observation: { type: String },
        autreobservation: { type: String },
      },
      Scan: [{ type: String }],
    },
    Tremblement: {
      observation: { type: String },
      autre: { type: String },
    },
    Trouble_equilibre: {
      observation: { type: String },
      autre: { type: String },
    },
    Réflexes: {
      observation: { type: String },
      autre: { type: String },
    },
    Psychisme: {
      Nevrose: {
        Anxiété: { type: Boolean },
        Depression: { type: Boolean },
        Stress: { type: Boolean },
        TOC: { type: Boolean },
        autre: { type: String },
      },
      Psychose: {
        Bipolarité: { type: Boolean },
        Schizophrénie: { type: Boolean },
        Paranoïaque: { type: Boolean },
        autre: { type: String },
      },
      Scan: [{ type: String }],
    },
    Appareil_locomoteur: {
      Membres_Supérieurs: {
        observation: { type: String },
        autre: { type: String },
      },
      Articulations: {
        observation: { type: String },
        autre: { type: String },
      },
      Membres_Inférieur: {
        observation: { type: String },
        autre: { type: String },
      },
      Scan: [{ type: String }],
    },
    Appareil_génital: {
      type: { type: String },
      Prostate: {
        Check: { type: Boolean },
        observation: { type: String },
      },
      Troubles_érectiles: {
        Check: { type: Boolean },
        observation: { type: String },
      },
      MST: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      Leucorrhée: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      Trouble_menstruels: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      Seins: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      Episiotomie: {
        Check: { type: Boolean },
        observation: { type: String },
        autre: { type: String },
      },
      autre: {
        Check: { type: Boolean },
        nom: { type: String },
        observation: { type: String },
      },
      Scan: [{ type: String }],
    },
    Appareil_urinaire: {
      Reins: {
        observation: { type: String },
        autre: { type: String },
      },
      Trouble_urinaires: {
        Mictionnelles: {
          Check: { type: Boolean },
          observation: { type: String },
          autre: { type: String },
        },
        Brûlures: {
          Check: { type: Boolean },
          observation: { type: String },
          autre: { type: String },
        },
        Pollokinire: {
          Check: { type: Boolean },
          observation: { type: String },
          autre: { type: String },
        },
        Dysurie: {
          Check: { type: Boolean },
          observation: { type: String },
          autre: { type: String },
        },
      },
      Scan: [{ type: String }],
    },
    Alb: { type: String },
    Sucre: { type: String },
    Autres_constatations: { type: String },
    Examens_complémentaires: { type: String },
    Conclusions_Médicales: { type: String },
    Conclusions_Professionnels: { type: String },
  },
  // Scans: [ScansSchema], // Assuming Scans is a separate collection or subdocument array
})

// Create and export the model
const DossierModel = mongoose.model("Dossier", DossierSchema)

module.exports = DossierModel
