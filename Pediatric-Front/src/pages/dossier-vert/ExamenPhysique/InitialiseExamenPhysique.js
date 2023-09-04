import React from 'react';

async function InitialisenExamenPhysique(dossierId, token) {
    const initialValues = {
        poids: '',
        taille: '',
        imc: '',
        pc: '',
        bu: '',
        signesDysmorphiques: '',
        stadePubertaireTanner: '',
        fenteLabiale: false,
        fentePalatine: false,
        incisiveCentraleUnique: false,
        flechissement: false,
        stagnation: false,
        hippocratismeDigital: '',
        syndromeCushing: '',
        micropenis: '',
        examenThyroide: '',
        examenCardioVx: '',
        examenPleuroPulmonaire: '',
        examenNeurologique: '',
        autresExamenPhysique: '',
        dossier: `/api/dossiers/${dossierId}`,
        submit: null
    };
    try {
      const response = await addExamenPhysique({ body: initialValues, token: token });

        //const generatedId = response.data.id;
    } catch (err) {
        console.error(err);
    }
}

export default InitialisenExamenPhysique;
