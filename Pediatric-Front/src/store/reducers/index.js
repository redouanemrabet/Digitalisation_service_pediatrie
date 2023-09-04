// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import { signInApi } from 'services/signingApi';
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
import { addAntiFamiliauxApi } from '../../services/PatientService/dossiers-vert-service/anti-familiaux-api/addAntiFamiliauxApi';
import { getAntiFamiliauxApi } from '../../services/PatientService/dossiers-vert-service/anti-familiaux-api/getAntiFamiliauxApi';
import { updateAntiFamiliauxApi } from '../../services/PatientService/dossiers-vert-service/anti-familiaux-api/updateAntiFamiliauxApi';
import { addAntiPersonnelApi } from '../../services/PatientService/dossiers-vert-service/anti-personnel-api/addAntiPersonnelApi';
import { addDiagnosticRetenuPecApi } from '../../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/addDiagnosticRetenuPecApi';
import { addExamenPhysiqueApi } from '../../services/PatientService/dossiers-vert-service/examen-physique-api/addExamenPhysiqueApi';
import { addParacliniqueApi } from '../../services/PatientService/dossiers-vert-service/paraclinique-api/addParacliniqueApi';
import { addSuiviApi } from '../../services/PatientService/dossiers-vert-service/suivi-api/addSuiviApi';
import { updateSuiviApi } from '../../services/PatientService/dossiers-vert-service/suivi-api/updateSuiviApi';
import { getAllSuiviApi } from '../../services/PatientService/dossiers-vert-service/suivi-api/getAllSuiviApi';
import { getSuiviApi } from '../../services/PatientService/dossiers-vert-service/suivi-api/getSuiviApi';
import { addDossierApi } from '../../services/PatientService/AddDossiers/AddDossierApi';
import { getAllDossierApi } from '../../services/PatientService/AddDossiers/getAllDossierApi';
import { getDossiersByPatientApi } from '../../services/PatientService/AddDossiers/getDossiersByPatientApi';
import { getAllDossiersPatientApi } from '../../services/PatientService/AddDossiers/getAllDossiersPatientApi';
import { getAllCourbeApi } from '../../services/PatientService/dossiers-vert-service/Courbe-api/getAllCourbeByDossierApi';
import { addCourbeApi } from '../../services/PatientService/dossiers-vert-service/Courbe-api/addCourbeApi';
import { updateCourbeApi } from '../../services/PatientService/dossiers-vert-service/Courbe-api/updateCourbeApi';

import { getFormByDossierApi } from '../../services/PatientService/AddDossiers/getFormByDossierApi';
import { initialiseFormsApi } from '../../services/PatientService/AddDossiers/initilaiseFormsApi';

import authSlice from 'store/slices/authSlice';
import registerSlice from 'store/slices/registerSlice';
import addPatientSlice from 'store/slices/PatientIdentiteSlice/addPatientSlice';

import getPatientsSlice from 'store/slices/PatientIdentiteSlice/getPatientsSlice';
import getPatientSlice from 'store/slices/PatientIdentiteSlice/getPatientSlice';
import getAllDossiersPatientSlice from 'store/slices/PatientIdentiteSlice/getAllDossiersPatientSlice';
import deletePatientSlice from 'store/slices/PatientIdentiteSlice/deletePatientSlice';
import { updateAntiPersonnelApi } from '../../services/PatientService/dossiers-vert-service/anti-personnel-api/updateAntiPersonnelApi';
import { getAntiPersonnelApi } from '../../services/PatientService/dossiers-vert-service/anti-personnel-api/getAntiFamiliauxApi';
import { updateDiagnosticRetenuPecApi } from '../../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/updateDiagnosticRetenuPecApi';
import { getDiagnosticRetenuPecApi } from '../../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/getDiagnosticRetenuPecApi';
import { getExamenPhysiqueApi } from '../../services/PatientService/dossiers-vert-service/examen-physique-api/getExamenPhysiqueApi';
import { updateExamenPhysiqueApi } from '../../services/PatientService/dossiers-vert-service/examen-physique-api/updateExamenPhysiqueApi';
import { getParacliniqueApi } from '../../services/PatientService/dossiers-vert-service/paraclinique-api/getParacliniqueApi';
import { updateParacliniqueApi } from '../../services/PatientService/dossiers-vert-service/paraclinique-api/updateParacliniqueApi';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    menu,
    auth: authSlice,
    [signInApi.reducerPath]: signInApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [addPatientIdentiteApi.reducerPath]: addPatientIdentiteApi.reducer,
    [updatePatientApi.reducerPath]: updatePatientApi.reducer,
    [patientsApi.reducerPath]: patientsApi.reducer,
    [patientApi.reducerPath]: patientApi.reducer,
    [deletePatientApi.reducerPath]: deletePatientApi.reducer,
    [addAntiFamiliauxApi.reducerPath]: addAntiFamiliauxApi.reducer,
    [getAntiFamiliauxApi.reducerPath]: getAntiFamiliauxApi.reducer,
    [getAntiPersonnelApi.reducerPath]: getAntiPersonnelApi.reducer,
    [getDiagnosticRetenuPecApi.reducerPath]: getDiagnosticRetenuPecApi.reducer,
    [getExamenPhysiqueApi.reducerPath]: getExamenPhysiqueApi.reducer,
    [getParacliniqueApi.reducerPath]: getParacliniqueApi.reducer,
    [updateAntiFamiliauxApi.reducerPath]: updateAntiFamiliauxApi.reducer,
    [updateAntiPersonnelApi.reducerPath]: updateAntiPersonnelApi.reducer,
    [updateDiagnosticRetenuPecApi.reducerPath]: updateDiagnosticRetenuPecApi.reducer,
    [updateExamenPhysiqueApi.reducerPath]: updateExamenPhysiqueApi.reducer,
    [updateParacliniqueApi.reducerPath]: updateParacliniqueApi.reducer,
    [addAntiPersonnelApi.reducerPath]: addAntiPersonnelApi.reducer,
    [addDiagnosticRetenuPecApi.reducerPath]: addDiagnosticRetenuPecApi.reducer,
    [addExamenPhysiqueApi.reducerPath]: addExamenPhysiqueApi.reducer,
    [addParacliniqueApi.reducerPath]: addAntiPersonnelApi.reducer,
    [addSuiviApi.reducerPath]: addSuiviApi.reducer,
    [addDossierApi.reducerPath]: addDossierApi.reducer,
    [getAllDossierApi.reducerPath]: getAllDossierApi.reducer,
    [getFormByDossierApi.reducerPath]: getFormByDossierApi.reducer,
    [initialiseFormsApi.reducerPath]: initialiseFormsApi.reducer,
    [getPatientByIpApi.reducerPath]: getPatientByIpApi.reducer,
    [getAllDossiersPatientApi.reducerPath]: getAllDossiersPatientApi.reducer,
    [medcinsApi.reducerPath]: medcinsApi.reducer,
    [deleteMedcinApi.reducerPath]: deleteMedcinApi.reducer,
    [addDocumentApi.reducerPath]: addDocumentApi.reducer,
    [updateSuiviApi.reducerPath]: updateSuiviApi.reducer,
    [getAllSuiviApi.reducerPath]: getAllSuiviApi.reducer,
    [addCourbeApi.reducerPath]: addCourbeApi.reducer,
    [getAllCourbeApi.reducerPath]: getAllCourbeApi.reducer,
    [updateCourbeApi.reducerPath]: updateCourbeApi.reducer,
    [getSuiviApi.reducerPath]: getSuiviApi.reducer,
    register: registerSlice,
    addPatient: addPatientSlice,
    updatePatient: addPatientSlice,
    getPatients: getPatientsSlice,
    getPatient: getPatientSlice,
    deletePatient: deletePatientSlice,
    getAllDossiersPatient: getAllDossiersPatientSlice,
});

export default reducers;
