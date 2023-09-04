import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormGroup, FormControl, FormControlLabel, Checkbox, TextField, Radio, RadioGroup } from '@mui/material';
import { useEffect, useState } from "react";
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { useNavigate } from 'react-router';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import Typography from '@mui/material/Typography';
import { selectUserAndToken } from '../../../store/slices/authSlice';
import { useParams } from 'react-router-dom';

import { useGetExamenPhysiqueQuery } from '../../../services/PatientService/dossiers-vert-service/examen-physique-api/getExamenPhysiqueApi';
import { useUpdateExamenPhysiqueMutation } from '../../../services/PatientService/dossiers-vert-service/examen-physique-api/updateExamenPhysiqueApi';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

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

function ExamenPhysique() {
    const navigate = useNavigate();
    const { token } = useSelector(selectUserAndToken);
    const { patientId, dossierId, formId } = useParams();
    const [wellUpdated, setWellUpdated] = useState(false);

    const { data: examenPhysique, isLoading: isLoadingQuery, isError,refetch } = useGetExamenPhysiqueQuery({ token: token, id: formId });

    const [UpdateExamenPhysiqueMutation, { isSuccess, isLoading: isLoadingMutation, isError: isErrorMutation, error, data }] =
        useUpdateExamenPhysiqueMutation();



    useEffect(() => {

        refetch();


    });

    const handleReset = () => {
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
                                    II- EXAMEN PHYSIQUE
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
                        ) : isError ? (
                            <Alert severity="error" color="error" sx={{ width: '100%' }}>
                                Error occurred while fetching patient.
                            </Alert>
                        ) : (
                            <Formik
                                initialValues={{
                                    poids: examenPhysique.poids,
                                    taille: examenPhysique.taille,
                                    imc: examenPhysique.imc,
                                    pc: examenPhysique.pc,
                                    bu: examenPhysique.bu,
                                    signesDysmorphiques: examenPhysique.signesDysmorphiques,
                                    stadePubertaireTanner: examenPhysique.stadePubertaireTanner,
                                    fenteLabiale: examenPhysique.fenteLabiale,
                                    fentePalatine: examenPhysique.fentePalatine,
                                    incisiveCentraleUnique: examenPhysique.incisiveCentraleUnique,
                                    flechissement: examenPhysique.flechissement,
                                    stagnation: examenPhysique.stagnation,
                                    hippocratismeDigital: examenPhysique.hippocratismeDigital,
                                    syndromeCushing: examenPhysique.syndromeCushing,
                                    micropenis: examenPhysique.micropenis,
                                    examenThyroide: examenPhysique.examenThyroide,
                                    examenCardioVx: examenPhysique.examenCardioVx,
                                    examenPleuroPulmonaire: examenPhysique.examenPleuroPulmonaire,
                                    examenNeurologique: examenPhysique.examenNeurologique,
                                    autresExamenPhysique: examenPhysique.autresExamenPhysique,
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    poids: Yup.number(),
                                    taille: Yup.number(),
                                    imc: Yup.number(),
                                    pc: Yup.number(),
                                    bu: Yup.string(),
                                    signesDysmorphiques: Yup.string(),
                                    stadePubertaireTanner: Yup.string(),
                                    fenteLabiale: Yup.boolean().optional(),
                                    fentePalatine: Yup.boolean().optional(),
                                    incisiveCentraleUnique: Yup.boolean().optional(),
                                    flechissement: Yup.boolean().optional(),
                                    stagnation: Yup.boolean().optional(),
                                    hippocratismeDigital: Yup.string(),
                                    syndromeCushing: Yup.string(),
                                    micropenis: Yup.string(),
                                    examenThyroide: Yup.string(),
                                    examenCardioVx: Yup.string(),
                                    examenPleuroPulmonaire: Yup.string(),
                                    examenNeurologique: Yup.string(),
                                    autresExamenPhysique: Yup.string()
                                })}
                                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                    try {
                                        const response = await UpdateExamenPhysiqueMutation({ body: values, token: token,id:formId });

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
                            >
                                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                    <form noValidate onSubmit={handleSubmit}>
                                        <FormGroup sx={{ mt: 2 }}>
                                            <FormControl>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={3}>
                                                            <TextField
                                                                id="Poids"
                                                                type="number"
                                                                label="Poids"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="poids"
                                                                value={values.poids}
                                                                onChange={handleChange}
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
                                                                name="taille"
                                                                value={values.taille}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextField
                                                                id="IMC"
                                                                type="number"
                                                                label="IMC"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="imc"
                                                                value={values.imc}
                                                                onChange={handleChange}
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
                                                                name="pc"
                                                                value={values.pc}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>

                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={4}>
                                                            <TextField
                                                                id="BU"
                                                                type="text"
                                                                label="BU"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="bu"
                                                                value={values.bu}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextField
                                                                id="SignesDysmorphiques"
                                                                type="text"
                                                                label="Signes dysmorphiques"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="signesDysmorphiques"
                                                                value={values.signesDysmorphiques}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextField
                                                                id="StadePubertaireTanner"
                                                                type="text"
                                                                label="Stade pubertaire de Tanner"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="stadePubertaireTanner"
                                                                value={values.stadePubertaireTanner}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={12}>
                                                            <FormLabel id="AnomaliesLigneMediane">
                                                                Anomalies de la ligne médiane :
                                                            </FormLabel>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        name="fenteLabiale"
                                                                        checked={values.fenteLabiale}
                                                                        onChange={handleChange}
                                                                        value="Fente labiale"
                                                                    />
                                                                }
                                                                label="Fente labiale"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        name="fentePalatine"
                                                                        checked={values.fentePalatine}
                                                                        onChange={handleChange}
                                                                        value="Fente palatine"
                                                                        color="secondary"
                                                                    />
                                                                }
                                                                label="Fente palatine"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        name="incisiveCentraleUnique"
                                                                        checked={values.incisiveCentraleUnique}
                                                                        onChange={handleChange}
                                                                        value="Incisive centrale unique"
                                                                        color="success"
                                                                    />
                                                                }
                                                                label="Incisive centrale unique"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={4}>
                                                            <FormLabel id="CourbeCroissance">Courbe de croissance :</FormLabel>
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        name="flechissement"
                                                                        checked={values.flechissement}
                                                                        onChange={handleChange}
                                                                        value="Fléchissement"
                                                                        color="secondary"
                                                                    />
                                                                }
                                                                label="Fléchissement"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        name="stagnation"
                                                                        checked={values.stagnation}
                                                                        onChange={handleChange}
                                                                        value="Stagnation"
                                                                        color="success"
                                                                    />
                                                                }
                                                                label="Stagnation"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControl>
                                                                <FormLabel id="HippocratismeDigital">Hippocratisme digital :</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="HippocratismeDigital"
                                                                    name="hippocratismeDigital"
                                                                    value={values.hippocratismeDigital}
                                                                    onChange={handleChange}
                                                                >
                                                                    <FormControlLabel value="Présent" control={<Radio />} label="Présent" />

                                                                    <FormControlLabel value="Absent" control={<Radio />} label="Absent" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControl>
                                                                <FormLabel id="SyndromeCushing">Syndrome de cushing :</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="SyndromeCushing"
                                                                    name="syndromeCushing"
                                                                    value={values.syndromeCushing}
                                                                    onChange={handleChange}
                                                                >
                                                                    <FormControlLabel value="Présent" control={<Radio />} label="Présent" />
                                                                    <FormControlLabel value="Absent" control={<Radio />} label="Absent" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <FormControl>
                                                                <FormLabel id="Micropenis">Micropénis :</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="Micropenis"
                                                                    name="micropenis"
                                                                    value={values.micropenis}
                                                                    onChange={handleChange}
                                                                >
                                                                    <FormControlLabel value="Présent" control={<Radio />} label="Présent" />
                                                                    <FormControlLabel value="Absent" control={<Radio />} label="Absent" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                id="ExamenThyroide"
                                                                type="text"
                                                                label="Examen de la thyroide"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="examenThyroide"
                                                                value={values.examenThyroide}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                id="ExamenCardioVx"
                                                                type="text"
                                                                label="Examen cardio vx"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="examenCardioVx"
                                                                value={values.examenCardioVx}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                id="ExamenPleuroPulmonaire"
                                                                type="text"
                                                                label="Examen pleuro pulmonaire"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="examenPleuroPulmonaire"
                                                                value={values.examenPleuroPulmonaire}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextField
                                                                id="ExamenNeurologique"
                                                                type="text"
                                                                label="Examen neurologique"
                                                                variant="outlined"
                                                                size="small"
                                                                fullWidth
                                                                name="examenNeurologique"
                                                                value={values.examenNeurologique}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <br></br>

                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={1}>
                                                        <Grid sx={{ md: 1 }} item xs={12} md={12}>
                                                            <label htmlFor="AutresExamenPhysique">Autres :</label>
                                                            <TextField
                                                                className="form-control"
                                                                name="autresExamenPhysique"
                                                                id="AutresExamenPhysique"
                                                                onChange={handleChange}
                                                                value={values.autresExamenPhysique}
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
                                                                    disabled={isSubmitting}
                                                                    disableRipple
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
                            </Formik>
                        )}
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default ExamenPhysique;
