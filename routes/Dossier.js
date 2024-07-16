
const { Router } = require("express")
const DossierModel = require("../models/dossier")


const router = Router()
router.post('/add_Dossier', async (req, res) => {
  const {
    InfoPersonnel,
    nbr_Dossier,
    delegation_Medicale,
    Formation_Santaire,
    Vaccination,
    Antecedent_Professionnels,
    Antecedent_médicaux,
    PremierExam,
    Vaccinationautre,
  } = req.body;

  const newDossier = new DossierModel({
    InfoPersonnel,
    nbr_Dossier,
    delegation_Medicale,
    Formation_Santaire,
    Vaccination,
    Antecedent_Professionnels,
    Antecedent_médicaux,
    PremierExam,
    Vaccinationautre,
  });

  try {
    await newDossier.save();
    res.status(201).send({ message: 'Dossier added successfully', dossier: newDossier });
  } catch (err) {
    res.status(500).send({ error: 'Error adding Dossier', message: err.message });
  }
});

router.get('/get_all_Dossiers', async (req, res) => {
  try {
    const dossiers = await DossierModel.find();

    const simplifiedDossiers = dossiers.map((dossier) => ({
      id: dossier._id,
      nom: dossier.InfoPersonnel.nom,
      prenom: dossier.InfoPersonnel.prenom,
      ppr: dossier.InfoPersonnel.DPPR,
      natureEmploi: dossier.InfoPersonnel.Nature_emploi,
      sanguin: dossier.InfoPersonnel.Groupe_sanguin,
      dateExamen: new Date(dossier.PremierExam.Date_exam).toISOString().split('T')[0],
      postTravail: dossier.PremierExam.Post_de_Travail,
      nbrVisite: dossier.nbr_Dossier,
    }));

    res.status(200).send(simplifiedDossiers);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching dossiers', message: err.message });
  }
});

router.get('/getPDFDossiers/:id', async (req, res) => {
  try {
    const dossier = await DossierModel.findById(req.params.id);

    if (!dossier) {
      res.status(404).send({ error: 'Dossier not found' });
      return;
    }

    const simplifiedDossier = {
      InfoPersonnel: dossier.InfoPersonnel,
      Vaccination: dossier.Vaccination,
      Vaccinationautre: dossier.Vaccinationautre,

      Antecedent_médicaux: dossier.Antecedent_médicaux,
      Antecedent_Professionnels: dossier.Antecedent_Professionnels,
      dateExamen: new Date(dossier.PremierExam.Date_exam).toISOString().split('T')[0],
      PremierExam: dossier.PremierExam,
      nbr_Dossier: dossier.nbr_Dossier,
      delegation_Medicale: dossier.delegation_Medicale,
      Formation_Santaire: dossier.Formation_Santaire,
    };

    res.status(200).send(simplifiedDossier);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching dossier', message: err.message });
  }
});

router.delete('/deleteDossiers/:id', async (req, res) => {
  try {
    const dossier = await DossierModel.findByIdAndDelete(req.params.id);

    if (!dossier) {
      res.status(404).send({ error: 'Dossier not found' });
      return;
    }

    res.status(200).send({ message: 'Dossier successfully deleted', deletedDossier: dossier });
  } catch (err) {
    res.status(500).send({ error: 'Error deleting dossier', message: err.message });
  }
});
module.exports = router
// export default router;