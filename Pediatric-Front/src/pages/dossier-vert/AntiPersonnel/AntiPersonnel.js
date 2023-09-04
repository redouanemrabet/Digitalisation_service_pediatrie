import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormControlLabel, Radio, RadioGroup, FormGroup, FormControl, TextField } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// Patient
import * as Yup from 'yup';
import { Formik } from 'formik';
// Importez le sélecteur pour obtenir le token d'authentification
// assets

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
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useAddAntiFamiliauxMutation } from '../../../services/PatientService/dossiers-vert-service/anti-familiaux-api/addAntiFamiliauxApi';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../../store/slices/authSlice';
import { useAddAntiPersonnelMutation } from 'services/PatientService/dossiers-vert-service/anti-personnel-api/addAntiPersonnelApi';

function AntiPersonnel() {
    const navigate = useNavigate(); // Déclarer le hook useNavigate ici
    const { patientId , dossierId } = useParams();
    const [addAntiPersonnel, { isLoading, isError, error }] = useAddAntiPersonnelMutation();

    const { token } = useSelector(selectUserAndToken);
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
                Consanguinite: '',
                Grossesse: '',
                AccouchementVoie: '',
                Incidents: '',
                Incident: '',
                Terme: '',
                Poids: '',
                Taille: '',
                PC: '',
                Allaitement: '',
                DiversificationAlimentaire: '',
                DeveloppementPsychomoteur: '',
                PathologieNeonatale: '',
                PathologieChronique: '',
                Traitement: '',
                ContextePsychoAffectif: '',
                dossier: `/api/dossiers/${dossierId}`
            }}
            validationSchema={Yup.object().shape({
                Consanguinite: Yup.string(),
                Grossesse: Yup.string(),
                AccouchementVoie: Yup.string(),
                Incidents: Yup.string(),
                Incident: Yup.string(),
                Terme: Yup.string(),
                Poids: Yup.number(),
                Taille: Yup.number(),
                PC: Yup.number(),
                Allaitement: Yup.string(),
                DeveloppementPsychomoteur: Yup.string(),
                PathologieChronique: Yup.string(),
                DiversificationAlimentaire: Yup.string(),
                ContextePsychoAffectif: Yup.string(),
                Traitement: Yup.string(),
                PathologieNeonatale: Yup.string()
            })}

            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {

                    const response = await addAntiPersonnel({ body: values, token: token });

                     console.log(values);
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
            // }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
                    <Box sx={{ flexGrow: 1, mt: 3 }}>
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
                                                II- ANTECEDENTS-Personnels
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
                                                        <FormControl>
                                                            <FormLabel id="Consanguinite">Consanguinité : </FormLabel>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="Consanguinite"
                                                                name="Consanguinite"
                                                                value={values.Consanguinite}
                                                                onChange={handleChange}
                                                            >
                                                                <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                                                                <FormControlLabel value="Non" control={<Radio />} label="Non" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <FormControl>
                                                            <FormLabel id="Grossesse">Grossesse : </FormLabel>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="Grossesse"
                                                                name="Grossesse"
                                                                value={values.Grossesse}
                                                                onChange={handleChange}
                                                            >
                                                                <FormControlLabel value="Suivie" control={<Radio />} label="Suivie" />
                                                                <FormControlLabel
                                                                    value="Non Suivie"
                                                                    control={<Radio />}
                                                                    label="Non Suivie"
                                                                />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <FormControl>
                                                            <FormLabel id="AccouchementVoie">Accouchement : Voie :</FormLabel>
                                                            <RadioGroup
                                                                row
                                                                aria-labelledby="AccouchementVoie"
                                                                name="AccouchementVoie"
                                                                value={values.AccouchementVoie}
                                                                onChange={handleChange}
                                                            >
                                                                <FormControlLabel value="Haute" control={<Radio />} label="Haute" />
                                                                <FormControlLabel value="Basse" control={<Radio />} label="Basse" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            id="Incidents"
                                                            type="text"
                                                            label="Incidents (HTA, tabac, infection…)"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="Incidents"
                                                            onChange={handleChange}
                                                            value={values.Incidents}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            id="Incident"
                                                            type="text"
                                                            label="Incident"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="Incident"
                                                            onChange={handleChange}
                                                            value={values.Incident}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            id="Terme"
                                                            type="text"
                                                            label="Terme"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="Terme"
                                                            onChange={handleChange}
                                                            value={values.Terme}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={3}>
                                                        <FormLabel id="MesurationNaissance">Mesurations à la naissance:</FormLabel>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <TextField
                                                            id="Poids"
                                                            type="number"
                                                            label="Poids"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="Poids"
                                                            onChange={handleChange}
                                                            value={values.Poids}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <TextField
                                                            id="Taille"
                                                            type="number"
                                                            label="Taille"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="Taille"
                                                            onChange={handleChange}
                                                            value={values.Taille}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <TextField
                                                            id="PC"
                                                            type="number"
                                                            label="PC"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="PC"
                                                            onChange={handleChange}
                                                            value={values.PC}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField
                                                            id="Allaitement"
                                                            type="text"
                                                            label="Allaitement"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="Allaitement"
                                                            onChange={handleChange}
                                                            value={values.Allaitement}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField
                                                            id="DiversificationAlimentaire"
                                                            type="text"
                                                            label="Diversification alimentaire"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="DiversificationAlimentaire"
                                                            onChange={handleChange}
                                                            value={values.DiversificationAlimentaire}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField
                                                            id="DeveloppementPsychomoteur"
                                                            type="text"
                                                            label="Développement psychomoteur :"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="DeveloppementPsychomoteur"
                                                            onChange={handleChange}
                                                            value={values.DeveloppementPsychomoteur}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField
                                                            id="PathologieNeonatale"
                                                            type="text"
                                                            label="Pathologie néonatale (hypoglycémie, ictère prolongé...) :"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="PathologieNeonatale"
                                                            onChange={handleChange}
                                                            value={values.PathologieNeonatale}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            id="PathologieChronique"
                                                            type="text"
                                                            label="Pathologie chronique :"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="PathologieChronique"
                                                            onChange={handleChange}
                                                            value={values.PathologieChronique}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            id="Traitement"
                                                            type="text"
                                                            label="Traitement (corticoïdes ; radiothérapie…) :"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="Traitement"
                                                            onChange={handleChange}
                                                            value={values.Traitement}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            id="ContextePsychoAffectif"
                                                            type="text"
                                                            label="Contexte psycho affectif :"
                                                            variant="outlined"
                                                            size="small"
                                                            fullWidth
                                                            name="ContextePsychoAffectif"
                                                            onChange={handleChange}
                                                            value={values.ContextePsychoAffectif}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>

                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2} justifyContent="end">
                                                    <Grid item xs={12} md={2}>
                                                        <Stack spacing={2} direction="row">
                                                            <ColorButton
                                                                type="reset"
                                                                variant="contained"
                                                                onClick={handleReset}
                                                                sx={{ width: '100%' }}
                                                            >
                                                                <label className="bouton">Effacer</label>
                                                            </ColorButton>
                                                            <BootstrapButton
                                                              type="submit"
                                                              disabled={isSubmitting}
                                                              variant="contained"
                                                              disableRipple
                                                              sx={{ width: '100%' }}
                                                            >
                                                                <label className="bouton">Valider</label>
                                                            </BootstrapButton>
                                                        </Stack>
                                                    </Grid>
                                                </Grid>
                                            </Box>
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
export default AntiPersonnel;
