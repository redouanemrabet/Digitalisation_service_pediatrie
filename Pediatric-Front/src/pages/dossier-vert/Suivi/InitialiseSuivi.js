import { addSuiviApi } from "../../../services/PatientService/dossiers-vert-service/suivi-api/addSuiviApi";

const { useAddSuiviMutation } = addSuiviApi;
export const initializeSuiviForm = async (dossierId, token) => {


    const initialValues = {
        Suivi: '',
        Date: null,
        dossier: `/api/dossiers/${dossierId}`,
        submit: null
    };

    try {
        const response = await useAddSuiviMutation({ body: initialValues, token: token });
        console.log('Suivi ajouté avec succès!');
        // Additional actions after adding the Suivi if necessary
    } catch (err) {
        console.error(err);
    }
};