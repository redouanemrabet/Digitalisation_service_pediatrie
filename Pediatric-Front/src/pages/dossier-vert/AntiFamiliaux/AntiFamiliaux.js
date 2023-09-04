import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import { FormGroup, FormControl, TextField, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
//Patient
import { useNavigate, useParams } from "react-router-dom";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAndToken } from '../../../store/slices/authSlice';
// project import
import { useAddAntiFamiliauxMutation } from 'services/PatientService/dossiers-vert-service/anti-familiaux-api/addAntiFamiliauxApi';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { useAddPatientMutation } from '../../../services/PatientService/identite-api/addPatientIdentiteApi';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary
}));

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

function AntiFamiliaux() {
    const navigate = useNavigate(); // Déclarer le hook useNavigate ici
    const [addAntiFamiliaux, { isLoading, isError, error }] = useAddAntiFamiliauxMutation();
    //const [AddPatientMutation, { isSuccess, isLoading, isError, error, data }] = useAddPatientMutation();
    const { token } = useSelector(selectUserAndToken);
  const { patientId , dossierId } = useParams();
    const handleReset = () => {
        // Reset the form values to their initial state
        resetForm();
    };
    const handleGoBack = () => {
        navigate(-1); // Revenir à la page précédente
    };

    return (
        <Formik
            initialValues={{
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
            }}
            validationSchema={Yup.object().shape({
                TaillePere: Yup.number(),
                ageDePubertPere: Yup.number(),
                TailleMere: Yup.number(),
                ageDePubertMere: Yup.number(),
                TailleCible: Yup.number(),
                TailleFreres: Yup.number(),
                PathologieFamiliale: Yup.string(),
                diarrhee: Yup.string(),
                vomissements: Yup.string(),
                distensionAbominale: Yup.string(),
                cephalees: Yup.string(),
                troublesVisuels: Yup.string(),
                vomissementsHTIC: Yup.string(),
                constipation: Yup.string(),
                rectorragies: Yup.string(),
                douleurAbdominale: Yup.string(),
                paleur: Yup.string(),
                asthenie: Yup.string(),
                anorexie: Yup.string(),
                boulimie: Yup.string(),
                syndromePolyuroPolydipsique: Yup.string(),
                AutresFamiliaux: Yup.string()
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                   console.log(values);

                    const response = await addAntiFamiliaux({ body: values, token: token });

                    const generatedId = response.data.id;
                     

                    setStatus({ success: true });
                    setSubmitting(false);

                    navigate(-1);
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
                                               SUIVI
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <br></br>
                                    <br></br>
                                    <FormGroup sx={{ mt: 2 }}>
                                        <FormControl>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={1}>
                                                        <FormLabel>Père :</FormLabel>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextField
                                                            id="TaillePere"
                                                            type="number"
                                                            label="Taille"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="TaillePere"
                                                            value={values.TaillePere}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <TextField
                                                            id="ageDePubertPere"
                                                            type="number"
                                                            label="âge de la puberté"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="ageDePubertPere"
                                                            value={values.ageDePubertPere}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={1}>
                                                        <FormLabel>Mère :</FormLabel>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextField
                                                            id="TailleMere"
                                                            type="number"
                                                            label="Taille"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="TailleMere"
                                                            value={values.TailleMere}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <TextField
                                                            id="ageDePubertMere"
                                                            type="number"
                                                            label="âge de la puberté"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="ageDePubertMere"
                                                            value={values.ageDePubertMere}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={3}>
                                                        <TextField
                                                            id="TailleCible"
                                                            type="number"
                                                            label="Taille cible"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="TailleCible"
                                                            value={values.TailleCible}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            id="TailleFreres"
                                                            type="number"
                                                            label="Taille des frères"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="TailleFreres"
                                                            value={values.TailleFreres}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={5}>
                                                        <TextField
                                                            id="PathologieFamiliale"
                                                            type="text"
                                                            label="Pathologie familiale connue ayant un impact sur la croissance"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="PathologieFamiliale"
                                                            value={values.PathologieFamiliale}
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={1}>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                                                        <FormLabel>Signes digestifs : </FormLabel>
                                                    </Grid>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="diarrhee"
                                                                    onChange={handleChange}
                                                                    checked={values.diarrhee}
                                                                    value="diarrhee"
                                                                />
                                                            }
                                                            label="Diarrhée"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="vomissements"
                                                                    checked={values.vomissements}
                                                                    value="Vomissements"
                                                                    onChange={handleChange}
                                                                    color="secondary"
                                                                />
                                                            }
                                                            label="Vomissements"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="distensionAbominale"
                                                                    checked={values.distensionAbominale}
                                                                    value="Distension abominale"
                                                                    color="success"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Distension abominale"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={1}>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                                                        <FormLabel></FormLabel>
                                                    </Grid>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="constipation"
                                                                    checked={values.constipation}
                                                                    value="Constipation"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Constipation"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="rectorragies"
                                                                    checked={values.rectorragies}
                                                                    value="Rectorragies"
                                                                    color="secondary"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Rectorragies"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="douleurAbdominale"
                                                                    checked={values.douleurAbdominale}
                                                                    value="Douleur abdominale"
                                                                    color="success"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Douleur abdominale"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={1}>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                                                        <FormLabel>Syndrome d’HTIC : </FormLabel>
                                                    </Grid>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="cephalees"
                                                                    checked={values.cephalees}
                                                                    onChange={handleChange}
                                                                    value="Céphalées"
                                                                />
                                                            }
                                                            label="Céphalées"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="troublesVisuels"
                                                                    checked={values.troublesVisuels}
                                                                    onChange={handleChange}
                                                                    value="troubles visuels"
                                                                    color="secondary"
                                                                />
                                                            }
                                                            label="troubles visuels"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="vomissements"
                                                                    checked={values.vomissementsHTIC}
                                                                    onChange={handleChange}
                                                                    value="Vomissements"
                                                                    color="success"
                                                                />
                                                            }
                                                            label="Vomissements"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={1}>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={2}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="paleur"
                                                                    checked={values.paleur}
                                                                    value="Pâleur"
                                                                    color="success"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Pâleur"
                                                        />
                                                    </Grid>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={2}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="asthenie"
                                                                    onChange={handleChange}
                                                                    checked={values.asthenie}
                                                                    value="Asthénie"
                                                                />
                                                            }
                                                            label="Asthénie"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="anorexie"
                                                                    checked={values.anorexie}
                                                                    value="Anorexie"
                                                                    color="secondary"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Anorexie"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="boulimie"
                                                                    checked={values.boulimie}
                                                                    value="Boulimie"
                                                                    color="default"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Boulimie"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    name="syndromePolyuroPolydipsique"
                                                                    checked={values.syndromePolyuroPolydipsique}
                                                                    value="Syndrome polyuro-polydipsique"
                                                                    color="default"
                                                                    onChange={handleChange}
                                                                />
                                                            }
                                                            label="Syndrome polyuro-polydipsique"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={1}>
                                                    <Grid sx={{ md: 1 }} item xs={12} md={12}>
                                                        <label htmlFor="AutresFamiliaux">Autres :</label>
                                                        <TextField
                                                            className="form-control"
                                                            name="AutresFamiliaux"
                                                            id="AutresFamiliaux"
                                                            onChange={handleChange}
                                                            value={values.AutresFamiliaux}
                                                            sx={{ width: '100%' }}
                                                            size="small"
                                                            type="text"
                                                            variant="outlined"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2} justifyContent="end">
                                                    <Grid item xs={12} md={2}>
                                                        <Stack spacing={2} direction="row">
                                                            <ColorButton type="reset" variant="contained" sx={{ width: '100%' }}>
                                                                <label className="bouton">Effacer</label>
                                                            </ColorButton>
                                                            <BootstrapButton
                                                                type="submit"
                                                                variant="contained"
                                                                disableRipple
                                                                sx={{ width: '100%' }}
                                                                disabled={isSubmitting}
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
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            )}
        </Formik>
    );
}
export default AntiFamiliaux;
