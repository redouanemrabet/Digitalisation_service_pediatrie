import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { FormGroup, FormControl, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blue, purple, red } from '@mui/material/colors';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { Formik } from 'formik';
import { useUpdateSuiviMutation } from '../../../services/PatientService/dossiers-vert-service/suivi-api/updateSuiviApi';
import { useGetAllSuiviQuery } from '../../../services/PatientService/dossiers-vert-service/suivi-api/getAllSuiviApi';
import { useGetSuiviQuery } from '../../../services/PatientService/dossiers-vert-service/suivi-api/getSuiviApi';
import * as Yup from 'yup';
import { useAddDiagnosticRetenuPecMutation } from '../../../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/addDiagnosticRetenuPecApi';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../../store/slices/authSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { useGetPatientsQuery } from '../../../services/PatientService/identite-api/getAllPatientsApi';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import {
  useGetParacliniqueQuery
} from "../../../services/PatientService/dossiers-vert-service/paraclinique-api/getParacliniqueApi";
import {
  useUpdateExamenPhysiqueMutation
} from "../../../services/PatientService/dossiers-vert-service/examen-physique-api/updateExamenPhysiqueApi";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
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

function Suivi() {
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75'
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f'
    };

    const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
    );

    const Root = styled('div')(
        ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      text-align: left;
      padding: 6px;
    }
  
    th {
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
    }
    `
    );
    const navigate = useNavigate();



    const { patientId, dossierId, suiviId } = useParams();
    const { token } = useSelector(selectUserAndToken);
    const [suivi, setSuivi] = useState(null);
  const [updateSuiviMutation, { isSuccess, isLoading: isLoadingMutation, isError: isErrorMutation, error, data }] = useUpdateSuiviMutation();

  const { data: responseSuivi, isLoading: getSuiviLoading, isError: getSuiviError, refetch: refetchSuivi } = useGetSuiviQuery({ token: token, id: suiviId });


  useEffect(() => {

    refetchSuivi();
    console.log(suiviId);
    console.log(responseSuivi);

    },[]);



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
                                    Suivi
                                </Typography>
                            </Grid>
                        </Box>
                        <br></br>
                        <br></br>
                        {getSuiviLoading ? (
                            <Alert severity="info" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
                                Loading Patient
                            </Alert>
                        ) : getSuiviError ? (
                            <Alert severity="error" color="error" sx={{ width: '100%' }}>
                                Error occurred while fetching patient.
                            </Alert>
                        ) : (
                            <Formik
                                initialValues={{
                                    Suivi: responseSuivi?.Suivi,
                                    Date: responseSuivi?.Date,
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    Suivi: Yup.string(),
                                    Date: Yup.string()
                                })}
                                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                                    try {
                                        const response = await updateSuiviMutation({ body: values, token: token, id :suiviId });

                                        console.log(values);
                                        setStatus({ success: true });
                                        setSubmitting(false);

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
                                                    <Grid container>
                                                        <Grid item xs={11} md={11}>
                                                            <StyledTextarea
                                                              aria-label="Suivi"
                                                              placeholder="Suivi"
                                                              onChange={handleChange}
                                                              className="form-control"
                                                              name="Suivi"
                                                              id="Suivi"
                                                              type="text"
                                                              sx={{ width: '100%' }}
                                                              variant="outlined"
                                                              value={values.Suivi}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container>
                                                        <Grid item xs={11} md={11}>
                                                            <TextField
                                                                type="text"
                                                                size="small"
                                                                id="Date"
                                                                name="Date"
                                                                variant="outlined"
                                                                value={values.Date}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2} justifyContent="end">
                                                        <Grid item xs={12} md={2}>
                                                            <Stack>
                                                                <BootstrapButton
                                                                    type="submit"
                                                                    variant="contained"
                                                                    disabled={isSubmitting}
                                                                    disableRipple
                                                                    sx={{ width: '100%' }}
                                                                >
                                                                    <label className="bouton">Enregistrer</label>
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
export default Suivi;
