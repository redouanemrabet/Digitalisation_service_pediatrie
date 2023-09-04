// third-party
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project import
import rootReducers from './reducers';
import { signInApi } from '../services/signingApi';
import { registerApi } from 'services/registerApi';
import { addPatientIdentiteApi } from 'services/PatientService/identite-api/addPatientIdentiteApi';
import { updatePatientApi } from 'services/PatientService/identite-api/updatePatientApi';
import { patientsApi } from 'services/PatientService/identite-api/getAllPatientsApi';
import { medcinsApi } from 'services/MedcinService/getAllMedcinsApi';
import { addDocumentApi } from 'services/PatientService/dossiers-vert-service/Document/addDocumentApi';
import { deleteMedcinApi } from 'services/MedcinService/deleteMedcinApi';
import { patientApi } from 'services/PatientService/identite-api/getPatientApi';
import { getPatientByIpApi } from 'services/PatientService/identite-api/getPatientByIp';
import { deletePatientApi } from 'services/PatientService/identite-api/deletePatientApi';
import { addAntiFamiliauxApi } from 'services/PatientService/dossiers-vert-service/anti-familiaux-api/addAntiFamiliauxApi';
import { addAntiPersonnelApi } from 'services/PatientService/dossiers-vert-service/anti-personnel-api/addAntiPersonnelApi';
import { addDiagnosticRetenuPecApi } from '../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/addDiagnosticRetenuPecApi';
import { addDossierApi } from '../services/PatientService/AddDossiers/AddDossierApi';
import { getAllDossierApi } from 'services/PatientService/AddDossiers/getAllDossierApi';
import { getAllDossiersPatientApi } from 'services/PatientService/AddDossiers/getAllDossiersPatientApi';
import { getFormByDossierApi } from 'services/PatientService/AddDossiers/getFormByDossierApi';
import { initialiseFormsApi } from 'services/PatientService/AddDossiers/initilaiseFormsApi';

import { addExamenPhysiqueApi } from '../services/PatientService/dossiers-vert-service/examen-physique-api/addExamenPhysiqueApi';
import { addParacliniqueApi } from '../services/PatientService/dossiers-vert-service/paraclinique-api/addParacliniqueApi';
import { updateSuiviApi } from '../services/PatientService/dossiers-vert-service/suivi-api/updateSuiviApi';
import { getAllSuiviApi } from '../services/PatientService/dossiers-vert-service/suivi-api/getAllSuiviApi';
import { getSuiviApi } from '../services/PatientService/dossiers-vert-service/suivi-api/getSuiviApi';
import { addSuiviApi } from '../services/PatientService/dossiers-vert-service/suivi-api/addSuiviApi';
import { getAntiFamiliauxApi } from '../services/PatientService/dossiers-vert-service/anti-familiaux-api/getAntiFamiliauxApi';
import { updateAntiFamiliauxApi } from '../services/PatientService/dossiers-vert-service/anti-familiaux-api/updateAntiFamiliauxApi';
import { getAntiPersonnelApi } from '../services/PatientService/dossiers-vert-service/anti-personnel-api/getAntiFamiliauxApi';
import { updateAntiPersonnelApi } from '../services/PatientService/dossiers-vert-service/anti-personnel-api/updateAntiPersonnelApi';
import { updateDiagnosticRetenuPecApi } from '../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/updateDiagnosticRetenuPecApi';
import { getDiagnosticRetenuPecApi } from '../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/getDiagnosticRetenuPecApi';
import { getExamenPhysiqueApi } from '../services/PatientService/dossiers-vert-service/examen-physique-api/getExamenPhysiqueApi';
import { updateExamenPhysiqueApi } from '../services/PatientService/dossiers-vert-service/examen-physique-api/updateExamenPhysiqueApi';
import { getParacliniqueApi } from '../services/PatientService/dossiers-vert-service/paraclinique-api/getParacliniqueApi';
import { updateParacliniqueApi } from '../services/PatientService/dossiers-vert-service/paraclinique-api/updateParacliniqueApi';
import { updateCourbeApi } from '../services/PatientService/dossiers-vert-service/Courbe-api/updateCourbeApi';
import { addCourbeApi } from '../services/PatientService/dossiers-vert-service/Courbe-api/addCourbeApi';
import { getAllCourbeApi } from '../services/PatientService/dossiers-vert-service/Courbe-api/getAllCourbeByDossierApi';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
            .concat([signInApi.middleware])
            .concat(registerApi.middleware)
            .concat(addPatientIdentiteApi.middleware)
            .concat(addAntiFamiliauxApi.middleware)
            .concat(addAntiPersonnelApi.middleware)
            .concat(addDiagnosticRetenuPecApi.middleware)
            .concat(addExamenPhysiqueApi.middleware)
            .concat(addParacliniqueApi.middleware)
            .concat(addSuiviApi.middleware)
            .concat(updatePatientApi.middleware)
            .concat(updateAntiFamiliauxApi.middleware)
            .concat(updateAntiPersonnelApi.middleware)
            .concat(updateDiagnosticRetenuPecApi.middleware)
            .concat(updateExamenPhysiqueApi.middleware)
            .concat(updateParacliniqueApi.middleware)
            .concat(patientsApi.middleware)
            .concat(patientApi.middleware)
            .concat(getAntiFamiliauxApi.middleware)
            .concat(getAntiPersonnelApi.middleware)
            .concat(getExamenPhysiqueApi.middleware)
            .concat(getParacliniqueApi.middleware)
            .concat(getDiagnosticRetenuPecApi.middleware)
            .concat(patientApi.middleware)
            .concat(deletePatientApi.middleware)
            .concat(addDossierApi.middleware)
            .concat(getAllDossierApi.middleware)
            .concat(getFormByDossierApi.middleware)
            .concat(initialiseFormsApi.middleware)
            .concat(getPatientByIpApi.middleware)
            .concat(getAllDossiersPatientApi.middleware)
            .concat(medcinsApi.middleware)
            .concat(deleteMedcinApi.middleware)
            .concat(addDocumentApi.middleware)
            .concat(updateSuiviApi.middleware)
            .concat(getAllSuiviApi.middleware)
            .concat(addCourbeApi.middleware)
            .concat(updateCourbeApi.middleware)
            .concat(getAllCourbeApi.middleware)
            .concat(getSuiviApi.middleware),

    devTools: true
});

const { dispatch } = store;
let persistor = persistStore(store);

export { store, dispatch, persistor };
