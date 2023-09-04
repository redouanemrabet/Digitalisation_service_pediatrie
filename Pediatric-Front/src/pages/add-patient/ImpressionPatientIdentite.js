import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
import { FormGroup, InputLabel, FormControl, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
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

import Typography from '@mui/material/Typography';

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

function ImpressionPatientIdentite() {
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

    const handleReset = (resetForm) => {
        // Reset the form values to their initial state
        resetForm();
    };
    const handleGoBack = () => {
        navigate(-1); // Revenir à la page précédente
    };


    return (
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
        >
            {({ errors, handleBlur, resetForm, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate id="myForm">
                    <Box sx={{ flexGrow: 1, mt: 2 }}>
                        <Grid container spacing={2} justifyContent="center" id="print-content">
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
                                                            disabled={true}
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
                                                            disabled={true}
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
                                                            disabled={true}
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
                                                                        disabled={true}
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
                                                                        disabled={true}
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
                                                                        disabled={true}
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
                                                                disabled={true}
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
                                                            disabled={true}
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
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2} justifyContent="end">
                                                    <Grid item xs={12} md={4}>
                                                        <Stack spacing={2} direction="row">
                                                            <BootstrapButton variant="contained" disableRipple sx={{ width: '100%' }}
                                                           >
                                                                <label className="bouton" >
                                                                    Imprimer
                                                                </label>
                                                            </BootstrapButton>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                        </FormControl>
                                    </FormGroup>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            )}
        </Formik>
    );
}
export default ImpressionPatientIdentite;
