/*import { useEffect, useState } from 'react';

// material-ui
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

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { selectUserAndToken } from '../../store/slices/authSlice'; // Importez le sélecteur pour obtenir le token d'authentification
import { useDispatch, useSelector } from 'react-redux';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { useNavigate } from 'react-router';
import { addPatientSuccess } from 'store/slices/PatientSlice/addPatientSlice';
import { useAddPatientMutation } from 'services/PatientService/addPatientApi';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { dispatch } from '../../store';

// ============================|| REGISTER ||============================ //
const AddPatientForm = () => {
    const [AddPatientMutation, { isSuccess, isLoading, isError, error, data }] = useAddPatientMutation();
    const { token } = useSelector(selectUserAndToken);
    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={{
                    fullname: '',
                    ip: 0, // Modifiez ici pour attribuer une valeur entière à 'ip'
                    ville: '',
                    jour: 0, // Modifiez ici pour attribuer une valeur entière à 'jour'
                    mois: 0,
                    annee: 0,
                    sexe: '',
                    telephone: '',
                    submit: null
                }}
                validationSchema ={ Yup.object().shape({
                  fullname: Yup.string().required('Le nom et prénom sont requis'),
                  ip: Yup.number().required('L\'IP est requise'),
                  ville: Yup.string().required('La ville est requise'),
                  jour: Yup.number().required('Le jour est requis'),
                  mois: Yup.number().required('Le mois est requis'),
                  annee: Yup.number().required('L\'année est requise'),
                  sexe: Yup.string().required('Le sexe est requis'),
                  telephone: Yup.string().required('Le téléphone est requis'),
                                                      })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        // Effectuer des actions avant l'envoi du formulaire, si nécessaire

                        // Appeler la mutation pour envoyer les données du formulaire
                        await AddPatientMutation({ body: values, token: token });
                        console.log(values);
                        console.log("hello")
                        // Gérer la réponse du serveur après l'envoi du formulaire
                        // par exemple, afficher un message de succès ou rediriger l'utilisateur

                        setStatus({ success: true });
                        setSubmitting(false);

                        // Redirection vers la page d'accueil en cas de succès
                        dispatch(addPatientSuccess(data));
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
                                        type="fullname"
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
                                        type="ville"
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
                                        type="telephone"
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
                                    <Button   disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
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

export default AddPatientForm; */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
import { FormGroup, InputLabel, FormControl, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
// import axios from "axios";
//Patient
import { useNavigate } from 'react-router-dom';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { selectUserAndToken } from '../../store/slices/authSlice'; // Importez le sélecteur pour obtenir le token d'authentification
import { useDispatch, useSelector } from 'react-redux';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

import { updatePatientSuccess } from 'store/slices/PatientIdentiteSlice/updatePatientSlice';
import { useUpdatePatientMutation } from 'services/PatientService/identite-api/updatePatientApi';
import { useAddPatientMutation } from 'services/PatientService/identite-api/addPatientIdentiteApi';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { dispatch } from '../../store';
import { useGetPatientQuery } from '../../services/PatientService/identite-api/getPatientApi';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary
}));

//patient

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700]
    }
}));

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});

function UpdatePatientIdentite() {
    const { token } = useSelector(selectUserAndToken);
    const navigate = useNavigate();
    const { patientId } = useParams();
    const [wellUpdated,setWellUpdated]=useState(false)

    const { data: patient, isLoading: isLoadingQuery, isError,refetch } = useGetPatientQuery({ token: token, id: patientId });

    const [UpdatePatientMutation, { isSuccess, isLoading: isLoadingMutation, isError: isErrorMutation, error, data }] =
        useUpdatePatientMutation();
    useEffect(() => {

        refetch();

    });


    const handleReset = (resetForm) => {
        // Reset the form values to their initial state
        resetForm();
    };
    const handleGoBack = () => {
        navigate(-1); // Revenir à la page précédente
    };

    return (
      <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={11}>
                  <Item>
                      <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            p: 2,
                            m: -1
                        }}
                      >
                          <Grid container alignItems="center">
                              <Grid item>
                                  <IconButton
                                    onClick={handleGoBack}
                                    sx={{
                                        color: 'white'
                                    }}
                                  >
                                      <ArrowBackIcon />
                                  </IconButton>
                              </Grid>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} lg={3}>
                              <Typography
                                variant="h6"
                                align="center"
                                sx={{
                                    textAlign: 'center'
                                }}
                              >
                                  I- IDENTITE
                              </Typography>
                          </Grid>
                      </Box>
                      <br></br>
                      <br></br>
                      {isLoadingQuery ? (
                          <Alert severity="info" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                              <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
                              Loading Patient
                          </Alert>
                        ):isError?(
                          <Alert severity="error" color="error" sx={{ width: '100%' }}>
                              Error occurred while fetching patient.
                          </Alert>
                        ):(
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
                convertureSanitaire: patient.convertureSanitaire,
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
                telephone: Yup.string().required('Le téléphone est requis'),
                convertureSanitaire: Yup.string()
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    // Effectuer des actions avant l'envoi du formulaire, si nécessaire

                    // Appeler la mutation pour envoyer les données du formulaire
                    await UpdatePatientMutation({ body: values, token: token, id: patientId });

                    console.log(patientId);
                    setWellUpdated(true);

                    setTimeout(() => {
                        setWellUpdated(false);
                    }, 7000);
                    // Gérer la réponse du serveur après l'envoi du formulaire
                    // par exemple, afficher un message de succès ou rediriger l'utilisateur
                    setStatus({ success: true });
                    setSubmitting(false);

                    // Redirection vers la page d'accueil en cas de succès
                    dispatch(updatePatientSuccess(data));

                } catch (err) {
                    console.error(err);
                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
            }}
        >
            {({ errors, handleBlur, resetForm, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit}>

                                    <FormGroup sx={{ mt: 2 }}>
                                        <FormControl>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            value={values.fullname}
                                                            size="small"
                                                            type="text"
                                                            id="fullname"
                                                            name="fullname"
                                                            label="Nom et Prénom"
                                                            variant="outlined"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            error={Boolean(touched.fullname && errors.fullname)}
                                                            sx={{ width: '100%' }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            value={values.ip}
                                                            size="small"
                                                            type="number"
                                                            id="ip"
                                                            name="ip"
                                                            label="IP"
                                                            variant="outlined"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            error={Boolean(touched.ip && errors.ip)}
                                                            sx={{ width: '100%' }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            value={values.ville}
                                                            size="small"
                                                            type="text"
                                                            id="ville"
                                                            name="ville"
                                                            label="Ville"
                                                            variant="outlined"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            error={Boolean(touched.ville && errors.ville)}
                                                            sx={{ width: '100%' }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={12}>
                                                        <FormLabel id="AnomaliesLigneMediane">Date de naissance :</FormLabel>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={4}>
                                                        <Box sx={{ flexGrow: 1 }}>
                                                            <Grid container spacing={1}>
                                                                <Grid sx={{ md: 1 }} item xs={12} md={4}>
                                                                    <TextField
                                                                        value={values.jour}
                                                                        size="small"
                                                                        type="number"
                                                                        name="jour"
                                                                        label="JJ"
                                                                        id="jour"
                                                                        variant="outlined"
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        error={Boolean(touched.jour && errors.jour)}
                                                                        sx={{ width: '100%' }}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} md={4}>
                                                                    <TextField
                                                                        value={values.mois}
                                                                        size="small"
                                                                        type="number"
                                                                        label="MM"
                                                                        name="mois"
                                                                        id="mois"
                                                                        variant="outlined"
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        error={Boolean(touched.mois && errors.mois)}
                                                                        sx={{ width: '100%' }}
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={12} md={4}>
                                                                    <TextField
                                                                        value={values.annee}
                                                                        size="small"
                                                                        type="number"
                                                                        label="AA"
                                                                        name="annee"
                                                                        id="annee"
                                                                        variant="outlined"
                                                                        onBlur={handleBlur}
                                                                        onChange={handleChange}
                                                                        error={Boolean(touched.annee && errors.annee)}
                                                                        sx={{ width: '100%' }}
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <FormControl size="small" sx={{ width: '100%' }}>
                                                            <InputLabel id="sexePatient">Sexe</InputLabel>
                                                            <Select
                                                                type="text"
                                                                labelId="sexePatient"
                                                                id="sexe"
                                                                name="sexe"
                                                                value={values.sexe}
                                                                label="Sexe"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                error={Boolean(touched.sexe && errors.sexe)}
                                                                sx={{ width: '100%' }}
                                                            >
                                                                <MenuItem value={'Homme'}>Homme</MenuItem>
                                                                <MenuItem value={'Femme'}>Femme</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            value={values.telephone}
                                                            type="text"
                                                            size="small"
                                                            id="telephone"
                                                            name="telephone"
                                                            label="Téléphone"
                                                            variant="outlined"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            error={Boolean(touched.telephone && errors.telephone)}
                                                            sx={{ width: '100%' }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container>
                                                    <Grid item xs={12} md={12}>
                                                        <TextField
                                                            type="text"
                                                            size="small"
                                                            id="convertureSanitaire"
                                                            name="convertureSanitaire"
                                                            label="Converture sanitaire"
                                                            variant="outlined"
                                                            sx={{ width: '100%' }}
                                                            value={values.convertureSanitaire}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2} justifyContent="end">
                                                    <Grid item xs={12} md={4} >

                                                        <Stack spacing={4} direction="row">
                                                            {wellUpdated && <Alert severity="success" color="info"
                                                                                   sx={{ width: '100%' }}>
                                                                well updated
                                                            </Alert>}
                                                            <ColorButton
                                                                type="reset"
                                                                variant="contained"
                                                                onClick={() => handleReset(resetForm)}
                                                                sx={{ width: '100%' }}
                                                            >
                                                                <label className="bouton">Effacer</label>
                                                            </ColorButton>
                                                            <BootstrapButton
                                                                type="submit"
                                                                variant="contained"
                                                                disableRipple
                                                                disabled={isSubmitting}
                                                                sx={{ width: '100%' }}

                                                            >
                                                                <label className="bouton">Valider</label>
                                                            </BootstrapButton>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                        </FormControl>
                                    </FormGroup>

                </form>
            )}
        </Formik>)}
                  </Item>
              </Grid>
          </Grid>
      </Box>
    );
}
export default UpdatePatientIdentite;
