import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from './PrivateRoute';
//Patient
const AddDossierPatient = Loadable(lazy(() => import('../pages/add-dossier-patient/AddDossierPatient')));
const DossierVertStructure = Loadable(lazy(() => import('../pages/dossier-vert/DossierVertStructure/DossierVertStructure')));
const Document = Loadable(lazy(() => import('../pages/dossier-vert/Document/index')));
const AddDocument = Loadable(lazy(() => import('../pages/dossier-vert/Document/Upload')));
const Camera = Loadable(lazy(() => import('../pages/dossier-vert/DocumentSup/Camera')));
const UploadFile = Loadable(lazy(() => import('../pages/dossier-vert/DocumentSup/UploadFile')));
const AddPatient = Loadable(lazy(() => import('../pages/add-patient/AddPatientIdentite')));
const ImpressionPatientIdentite = Loadable(lazy(() => import('../pages/add-patient/ImpressionPatientIdentite')));
const UpdatePatientIdentite = Loadable(lazy(() => import('../pages/add-patient/UpdatePatientIdentite')));
const PatientDossiers = Loadable(lazy(() => import('../pages/patient/PatientDossiers')));
const GetPatients = Loadable(lazy(() => import('../pages/patient/Patiens')));
const UpdatePatient = Loadable(lazy(() => import('../pages/patient/UpdatePatient')));
const Medcins = Loadable(lazy(() => import('../pages/medcin/Medcins')));


const DeletePatient = Loadable(lazy(() => import('../pages/patient/DeletePatient')));

const AntiPersonnel = Loadable(lazy(() => import('../pages/dossier-vert/AntiPersonnel/AntiPersonnel')));
const AntiFamiliaux = Loadable(lazy(() => import('../pages/dossier-vert/AntiFamiliaux/AntiFamiliaux')));
const UpdateAntiFamiliaux = Loadable(lazy(() => import('../pages/dossier-vert/AntiFamiliaux/UpdateAntiFamiliaux')));
const UpdateAntiPersonnel = Loadable(lazy(() => import('../pages/dossier-vert/AntiPersonnel/UpdateAntiPersonnel')));
const ExamenPhysique = Loadable(lazy(() => import('../pages/dossier-vert/ExamenPhysique/ExamenPhysique')));
const UpdateExamenPhysique = Loadable(lazy(() => import('../pages/dossier-vert/ExamenPhysique/UpdateExamenPhysique')));
const Paraclinique = Loadable(lazy(() => import('../pages/dossier-vert/Paraclinique/Paraclinique')));
const UpdateParaclinique = Loadable(lazy(() => import('../pages/dossier-vert/Paraclinique/UpdateParaclinique')));
const DiagnosticRetenuPEC = Loadable(lazy(() => import('../pages/dossier-vert/DiagnosticRetenuPEC/DiagnosticRetenuPEC')));
const UpdateDiagnosticRetenuPEC = Loadable(lazy(() => import('../pages/dossier-vert/DiagnosticRetenuPEC/UpdateDiagnosticRetenuPEC')));
const UpdateCourbe = Loadable(lazy(() => import('../pages/dossier-vert/Courbe/Courbe')));
const Suivi = Loadable(lazy(() => import('../pages/dossier-vert/Suivi/Suivi')));
const UpdateSuivi = Loadable(lazy(() => import('../pages/dossier-vert/Suivi/UpdateSuivi')));

// render - dashboard
const DashboardDefaultOld = Loadable(lazy(() => import('pages-old/dashboard')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages-old/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages-old/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages-old/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages-old/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages-old/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <PrivateRoute>
            <MainLayout />
        </PrivateRoute>
    ),
    children: [
        {
            path: '/',
            element: <GetPatients />
        },
        // ======= Template route, For reference ====== //
        {
            path: '/old',
            element: <DashboardDefaultOld />
        },
        {
            path: 'old/color',
            element: <Color />
        },
        {
            path: 'old/dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefaultOld />
                }
            ]
        },
        {
            path: 'old/sample-page',
            element: <SamplePage />
        },
        {
            path: 'old/shadow',
            element: <Shadow />
        },
        {
            path: 'old/typography',
            element: <Typography />
        },
        {
            path: 'old/icons/ant',
            element: <AntIcons />
        },
        {
            path: 'AddPatient',
            element: <AddPatient />
        },
        {
            path: 'AddDossierPatient',
            element: <AddDossierPatient />
        },
        {
            path: 'AddDossierPatient/:patientId',
            element: <AddDossierPatient />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/:dossierId',
            element: <DossierVertStructure />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/:dossierId/AntiPersonnel',
            element: <AntiPersonnel />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/:dossierId/DiagnosticRetenuPEC',
            element: <DiagnosticRetenuPEC />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/:dossierId/AntiFamiliaux',
            element: <AntiFamiliaux />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/:dossierId/ExamenPhysique',
            element: <ExamenPhysique />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/:dossierId/Paraclinique',
            element: <Paraclinique />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/UpdatePatientIdentite',
            element: <UpdatePatientIdentite />
        },
        {
            path: 'PatientDossiers/:patientId',
            element: <PatientDossiers />
        },
        {
            path: 'PatientDossiers',
            element: <PatientDossiers />
        },
        {
            path: 'DeletePatient/:patientId',
            element: <DeletePatient />
        },
        {
            path: '/',
            element: <GetPatients />
        },
        {
            path: '/Medcins',
            element: <Medcins />
        },
        {
            path: '/Document',
            element: <Document />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId',
            element: <DossierVertStructure />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/ImpressionPatientIdentite',
            element: <ImpressionPatientIdentite />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/UpdateDiagnosticRetenuPEC/:formId',
            element: <UpdateDiagnosticRetenuPEC />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/UpdateCourbe/:formId',
            element: <UpdateCourbe />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/AntiFamiliaux',
            element: <AntiFamiliaux />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/ExamenPhysique',
            element: <ExamenPhysique />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/Suivi',
            element: <Suivi />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/Suivi/UpdateSuivi/:suiviId',
            element: <UpdateSuivi />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/Paraclinique',
            element: <Paraclinique />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/AddDocument',
            element: <Document />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/Upload',
            element: <AddDocument />
        },

        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/AntiFamiliaux',
            element: <AntiFamiliaux />
        },
        {
            path: 'UpdatePatient/:patientId',
            element: <UpdatePatient />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/UpdatePatientIdentite',
            element: <UpdatePatientIdentite />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/DiagnosticRetenuPEC',
            element: <DiagnosticRetenuPEC />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/ExamenPhysique',
            element: <ExamenPhysique />
        },

        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/AntiPersonnel',
            element: <AntiPersonnel />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/AntiFamiliaux',
            element: <AntiFamiliaux />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/ExamenPhysique',
            element: <ExamenPhysique />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/Document',
            element: <Document />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/Document/AddDocument',
            element: <AddDocument />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/AddDocument/Camera',
            element: <Camera />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/AddDocument/UploadFile',
            element: <UploadFile />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/Paraclinique',
            element: <Paraclinique />
        },
        {
            path: 'AddDossierPatient/:patientId/DossierVertStructure/DiagnosticRetenuPEC',
            element: <DiagnosticRetenuPEC />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/UpdateAntiFamiliaux/:formId',
            element: <UpdateAntiFamiliaux />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/UpdateAntiPersonnel/:formId',
            element: <UpdateAntiPersonnel />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/UpdateDiagnosticRetenuPEC/:formId',
            element: <UpdateDiagnosticRetenuPEC />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/UpdateExamenPhysique/:formId',
            element: <UpdateExamenPhysique />
        },
        {
            path: 'PatientDossiers/:patientId/DossierVertStructure/:dossierId/UpdateParaclinique/:formId',
            element: <UpdateParaclinique />
        }
    ]
};

export default MainRoutes;
