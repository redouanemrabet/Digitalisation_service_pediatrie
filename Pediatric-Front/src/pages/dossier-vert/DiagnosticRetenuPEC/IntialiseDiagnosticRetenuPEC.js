import React from 'react';

async function InitialiseDiagnosticRetenuPEC(dossierId, token) {
    const initialValues = {
        diagnosticRetenu: 'Diagnostic retenu :',
        PECTerapeutique: 'PEC thérapeutique :',
        dossier: `/api/dossiers/${dossierId}`,
        submit: null
    };
    try {
        const response = await addDiagnosticRetenuPec({ body: initialValues, token: token });

        //const generatedId = response.data.id;
    } catch (err) {
        console.error(err);
    }
}

export default InitialiseDiagnosticRetenuPEC;
