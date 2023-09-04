import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { selectUserAndToken } from '../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { useNavigate } from 'react-router';
import { updatePatientSuccess } from 'store/slices/PatientIdentiteSlice/updatePatientSlice';
import { useUpdatePatientMutation } from 'services/PatientService/identite-api/updatePatientApi';
import { useGetPatientQuery } from 'services/PatientService/identite-api/getPatientApi';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { dispatch } from '../../store';
import { useGetPatientsQuery } from '../../services/PatientService/identite-api/getAllPatientsApi';

const UpdatePatient = () => {
    const { token } = useSelector(selectUserAndToken);
    const navigate = useNavigate();
    const { patientId } = useParams();

    const { data: patient, isLoading: isLoadingQuery, isError } = useGetPatientQuery({ token: token, id: patientId });

    const [UpdatePatientMutation, { isSuccess, isLoading: isLoadingMutation, isError: isErrorMutation, error, data }] =
        useUpdatePatientMutation();

    if (isLoadingQuery) {
        return <div>Loading patient data...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching patient data</div>;
    }

    if (!patient) {
        return null; // Render nothing if patient data is not available
    }

    return (
        <>
            <Formik
                initialValues={{
                    fullname: patient.fullname,
                    ip: patient.ip,
                    ville: patient.ville,
                    jour: patient.jour,
                    mois: patient.mois,
                    annee: patient.annee,
                    sexe: patient.sexe,
                    telephone: patient.telephone,
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    fullname: Yup.string().required('Le nom et prénom sont requis'),
                    ip: Yup.number().required("L'IP est requise"),
                    ville: Yup.string().required('La ville est requise'),
                    jour: Yup.number().required('Le jour est requis'),
                    mois: Yup.number().required('Le mois est requis'),
                    annee: Yup.number().required("L'année est requise"),
                    sexe: Yup.string().required('Le sexe est requis'),
                    telephone: Yup.string().required('Le téléphone est requis')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        // Effectuer des actions avant l'envoi du formulaire, si nécessaire

                        // Appeler la mutation pour envoyer les données du formulaire
                        await UpdatePatientMutation({ body: values, token: token, id: patientId });

                        console.log(patientId);

                        // Gérer la réponse du serveur après l'envoi du formulaire
                        // par exemple, afficher un message de succès ou rediriger l'utilisateur
                        setStatus({ success: true });
                        setSubmitting(false);

                        // Redirection vers la page d'accueil en cas de succès
                        dispatch(updatePatientSuccess(data));
                        navigate('/Patients');
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="fullname">Nom et Prénom</InputLabel>
                                    <OutlinedInput
                                        id="fullname"
                                        type="text"
                                        value={values.fullname}
                                        name="fullname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="fullname"
                                        fullWidth
                                        error={Boolean(touched.fullname && errors.fullname)}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="ip">ip</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.ip && errors.ip)}
                                        id="ip"
                                        type="number"
                                        value={values.ip}
                                        name="ip"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="ip"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="ville">Poste*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.ville && errors.ville)}
                                        id="ville"
                                        type="text"
                                        value={values.ville}
                                        name="ville"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="ville"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="jour">jours</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.jour && errors.jour)}
                                        id="jour"
                                        type="number"
                                        value={values.jour}
                                        name="jour"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="jour"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="mois">mois</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.mois && errors.mois)}
                                        id="mois"
                                        type="number"
                                        value={values.mois}
                                        name="mois"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="mois"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="annee">annee</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.annee && errors.annee)}
                                        id="annee"
                                        type="number"
                                        value={values.annee}
                                        name="annee"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="annee"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="sexe">sexe</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.sexe && errors.sexe)}
                                        id="sexe"
                                        type="sexe"
                                        value={values.sexe}
                                        name="sexe"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="sexe"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="telephone">telephone</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.telephone && errors.telephone)}
                                        id="telephone"
                                        type="text"
                                        value={values.telephone}
                                        name="telephone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="telephone"
                                        inputProps={{}}
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                                        Create Account
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default UpdatePatient;
