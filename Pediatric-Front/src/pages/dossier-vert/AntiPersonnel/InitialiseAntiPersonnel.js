import React from 'react';

async function InitialisenAntiPersonnel(dossierId, token) {
    const initialValues = {
        Consanguinite: '',
        Grossesse: '',
        AccouchementVoie: '',
        Incidents: '',
        Incident: '',
        Terme: '',
        Poids: '',
        Taille: '',
        PC: '',
        Allaitement: '',
        DiversificationAlimentaire: '',
        DeveloppementPsychomoteur: '',
        PathologieNeonatale: '',
        PathologieChronique: '',
        Traitement: '',
        ContextePsychoAffectif: '',
        dossier: `/api/dossiers/${dossierId}`
    };
    try {
        const response = await addAntiPersonnel({ body: initialValues, token: token });

        //const generatedId = response.data.id;
    } catch (err) {
        console.error(err);
    }

}

export default InitialiseAntiPersonnel;
