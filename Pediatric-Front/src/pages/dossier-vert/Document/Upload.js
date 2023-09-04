import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { FormGroup, InputLabel, FormControl, TextField, DialogTitle, DialogContent, DialogActions, Dialog } from '@mui/material';
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
import { selectUserAndToken } from '../../../store/slices/authSlice'; // Importez le sélecteur pour obtenir le token d'authentification
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import Typography from '@mui/material/Typography';
import { useAddDocumentMutation } from 'services/PatientService/dossiers-vert-service/Document/addDocumentApi';
import CircularProgress from '@mui/material/CircularProgress';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { dispatch } from '../../../store';

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

function Upload() {
    const [AddDocument, { isSuccess, isLoading, isError, error, data }] = useAddDocumentMutation();
    const { token } = useSelector(selectUserAndToken);
    const navigate = useNavigate();
    const [ipExists, setIpExists] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleReset = (resetForm) => {
        // Reset the form values to their initial state
        resetForm();
    };

    const handleGoBack = () => {
        navigate(-1); // Revenir à la page précédente
    };
    const handleCloseDialog = () => {
        setIpExists(!ipExists);
    };



    return (
        <Formik
            initialValues={{
                title: '',
                file: '', // Modifiez ici pour attribuer une valeur initiale à 'file'
                submit: null
            }}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    let formData = new FormData(); // Créez une nouvelle instance de FormData

                    // Ajoutez les champs du formulaire à FormData
                    formData.append('file', values.file[0]);
                    formData.append('title', values.title);


                    console.log(values);
                    console.log(formData);
                    // Appeler la mutation pour envoyer les données du formulaire
                    const response = await AddDocument({ body: formData, token: token, id:189 });




                    console.log(response);

                    // Capture the generated ID from the response
                    // const generatedId = response.data.id;
                    setStatus({ success: true });
                    setSubmitting(false);

                    // Redirection vers la page d'accueil en cas de succès
                    // dispatch(addPatientSuccess(data));

                    // navigate(`/AddDossierPatient/${generatedId}`);
                } catch (err) {
                    console.error(err);

                    setStatus({ success: false });
                    setErrors({ submit: err.message });
                    setSubmitting(false);
                }
            }}
        >
            {({ errors, handleBlur, resetForm, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
              <form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
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
                                                Document
                                            </Typography>
                                        </Grid>
                                    </Box>
                                    <br />
                                    <br />
                                    <FormGroup sx={{ mt: 2 }}>
                                        <FormControl>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={4}>
                                                        <TextField
                                                            value={values.title}
                                                            size="small"
                                                            type="text"
                                                            id="title"
                                                            name="title"
                                                            label="Title"
                                                            variant="outlined"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            error={Boolean(touched.title && errors.title)}
                                                            sx={{ width: '100%' }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={8} md={2}>
                                                        <input
                                                          accept="image/*, .pdf"
                                                          style={{ display: 'none' }}
                                                          id="file"
                                                          name="file"
                                                          type="file"
                                                          onChange={(event) => {
                                                              setFieldValue("file", event.target.files[0]);
                                                          }}
                                                        />
                                                        <label htmlFor="file">
                                                            <BootstrapButton variant="contained" component="span" sx={{ width: '100%' }}>
                                                                {selectedFile ? selectedFile.name : 'Choisir un fichier'}
                                                            </BootstrapButton>
                                                        </label>
                                                        {touched.file && errors.file && (
                                                            <FormLabel error sx={{ mt: 1 }}>
                                                                {errors.file}
                                                            </FormLabel>
                                                        )}
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="subtitle2" component="p" gutterBottom>
                                                            <Box
                                                                sx={{
                                                                    fontStyle: 'italic',
                                                                    fontWeight: 400,
                                                                    fontSize: '0.875rem',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center'
                                                                }}
                                                            >
                                                                <Box component="span" sx={{ mx: '2px' }}>
                                                                    <ArrowBackIcon sx={{ fontSize: '1rem' }} />
                                                                </Box>
                                                                <Box component="span" sx={{ mx: '2px' }}>
                                                                    Faites glisser et déposez le fichier ici
                                                                </Box>
                                                            </Box>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </FormControl>
                                    </FormGroup>
                                    <br />
                                    <br />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                                            <AnimateButton>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={isSubmitting}
                                                    onClick={() => handleReset(resetForm)}
                                                >
                                                    Réinitialiser
                                                </Button>
                                            </AnimateButton>
                                            <AnimateButton>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    disabled={isSubmitting}
                                                    onClick={handleCloseDialog}
                                                >
                                                    Annuler
                                                </Button>
                                            </AnimateButton>
                                            <AnimateButton>
                                                <ColorButton
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                                >
                                                    Enregistrer
                                                </ColorButton>
                                            </AnimateButton>
                                        </Stack>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            )}
        </Formik>
    );
}

export default Upload;
