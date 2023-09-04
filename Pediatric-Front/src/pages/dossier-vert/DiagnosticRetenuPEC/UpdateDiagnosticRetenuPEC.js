import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { FormGroup, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
// import axios from "axios";
import TextareaAutosize from '@mui/base/TextareaAutosize';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateDiagnosticRetenuPecMutation } from '../../../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/updateDiagnosticRetenuPecApi';
import { useGetDiagnosticRetenuPecQuery } from '../../../services/PatientService/dossiers-vert-service/diagnostic-retenu-pec/getDiagnosticRetenuPecApi';
// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { useAddAntiPersonnelMutation } from '../../../services/PatientService/dossiers-vert-service/anti-personnel-api/addAntiPersonnelApi';
import { selectUserAndToken } from '../../../store/slices/authSlice';
import { useGetAntiPersonnelQuery } from '../../../services/PatientService/dossiers-vert-service/anti-personnel-api/getAntiFamiliauxApi';
import { useUpdateAntiPersonnelMutation } from '../../../services/PatientService/dossiers-vert-service/anti-personnel-api/updateAntiPersonnelApi';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
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

function DiagnosticRetenuPEC() {
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
    const { token } = useSelector(selectUserAndToken);

    const [wellUpdated, setWellUpdated] = useState(false);
    const { patientId , dossierId,formId } = useParams();
    const {
        data: diagnosticRetenuPec,
        isLoading: isLoadingQuery,
        isError,refetch
    } = useGetDiagnosticRetenuPecQuery({ token: token, id: formId });

    const [UpdateDiagnosticRetenuPecMutation, { isSuccess, isLoading: isLoadingMutation, isError: isErrorMutation, error, data }] =
        useUpdateDiagnosticRetenuPecMutation();


  console.log(diagnosticRetenuPec);
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
                                  DIAGNOSTIC RETENU ET PEC THERAPEUTIQUE
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
                diagnosticRetenu: diagnosticRetenuPec.diagnosticRetenu,
                PECTerapeutique: diagnosticRetenuPec.PECTerapeutique,
                submit: null
            }}
            validationSchema={Yup.object().shape({
                diagnosticRetenu: Yup.string(),
                PECTerapeutique: Yup.string()
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    await UpdateDiagnosticRetenuPecMutation({ body: values, token: token, id: formId });

                   // console.log(values);
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
                                                <Grid container>
                                                    <Grid item xs={11} md={11}>
                                                        <TextareaAutosize
                                                          aria-label="diagnosticRetenu"
                                                          placeholder="Diagnostic retenu"
                                                          className="form-control"
                                                          style={{ width: '100%', height: '70px',marginLeft:'50px' ,border: '1px solid #00bfff'}}
                                                          onChange={handleChange}
                                                          name="diagnosticRetenu"
                                                          id="diagnosticRetenu"
                                                          rows="3"
                                                          value={values.diagnosticRetenu}
                                                        />

                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <br></br>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container>
                                                    <Grid item xs={11} md={11}>
                                                        <TextareaAutosize
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            name="PECTerapeutique"
                                                            id="PECTerapeutique"
                                                            rows="3"
                                                            value={values.PECTerapeutique}
                                                            aria-label="PECTerapeutique"
                                                            placeholder=" PEC thérapeutique"
                                                            style={{ width: '100%', height: '70px',marginLeft:'50px' , border: '1px solid #00bfff' }}
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
                                                                onClick={handleReset}
                                                                type="reset"
                                                                variant="contained"
                                                                sx={{ width: '100%' }}
                                                            >
                                                                <label className="bouton">Effacer</label>
                                                            </ColorButton>
                                                            <BootstrapButton
                                                                type="submet"
                                                                onClick={handleSubmit}
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
        </Formik>)}
                  </Item>
              </Grid>
          </Grid>
      </Box>
    );
}
export default DiagnosticRetenuPEC;
