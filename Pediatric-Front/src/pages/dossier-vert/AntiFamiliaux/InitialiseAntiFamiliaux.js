import React from 'react';

async function InitialiseAntiFamiliaux(dossierId, token) {
    const initialValues = {
        TaillePere: '',
        ageDePubertPere: '',
        TailleMere: '',
        ageDePubertMere: '',
        TailleCible: '',
        TailleFreres: '',
        PathologieFamiliale: '',
        diarrhee: false,
        vomissements: false,
        distensionAbominale: false,
        cephalees: false,
        troublesVisuels: false,
        vomissementsHTIC: false,
        constipation: false,
        rectorragies: false,
        douleurAbdominale: false,
        paleur: false,
        asthenie: false,
        anorexie: false,
        boulimie: false,
        syndromePolyuroPolydipsique: false,
        AutresFamiliaux: '',
        dossier: `/api/dossiers/${dossierId}`,
        submit: null
    };
    try {
        const response = await addAntiFamiliaux({ body: initialValues, token: token });

        //const generatedId = response.data.id;
    } catch (err) {
        console.error(err);
    }

}

export default InitialiseAntiFamiliaux;
