import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormGroup, InputLabel, FormControl, Input, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import { FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blue, orange, purple, red } from '@mui/material/colors';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../store/slices/authSlice';
import { useParams } from 'react-router-dom';
import { useAddDossierMutation } from 'services/PatientService/AddDossiers/AddDossierApi';
import { useInitialiseFormsMutation } from 'services/PatientService/AddDossiers/initilaiseFormsApi';
import { useGetFormByDossierQuery } from '../../services/PatientService/AddDossiers/getFormByDossierApi';
import { useGetAllDossiersPatientQuery } from '../../services/PatientService/AddDossiers/getAllDossiersPatientApi';
import { getAllDossierApi } from "../../services/PatientService/AddDossiers/getAllDossierApi";
import { useGetAllDossierQuery } from "../../services/PatientService/AddDossiers/getAllDossierApi";

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

function AddDossierPatient() {
    const navigate = useNavigate(); // Déclarer le hook useNavigate ici

    const { token } = useSelector(selectUserAndToken);
    const { patientId } = useParams();

    // const [initialiseForms, { isLoading, isError, error }] = useInitilaiseFormsQuery();
    const [addDossier, { isLoading: addDossierLoading, isError: addDossierError, error: addDossierErrorMessage }] = useAddDossierMutation();

    const [initializeForms, { isLoading: initializeFormsLoading, isError: initializeFormsError, error: initializeFormsErrorMessage }] = useInitialiseFormsMutation();


    const { data, isLoading, isError, error, refetch } = useGetAllDossiersPatientQuery({ token ,patientId});
    console.log(patientId);

    // Simulate an error response
    useEffect(() => {
        const fetchData = async () => {
            await refetch({}, { force: true });
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred: {error.message}</div>;
    }
              console.log(data)

    const handleClick = async (idCategory) => {
        try {
            // Perform the desired action with the ID
            //console.log(`Clicked dossier with ID: ${idCategory}`);

            const values = {
                type: `/api/categories/${idCategory}`,
                patient: `/api/patients/${patientId}`
            };

            const response = await addDossier({ body: values, token: token });

            const dossierId = response.data.id;


            const initialiseResponse = await initializeForms({ token : token , ddossierId:dossierId });

                       navigate('/');

        } catch (err) {
            console.error(err);
        }
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
                            <label>Patient X</label>
                        </Box>
                        <br></br>
                        <br></br>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Button
                                        className="bg-warning "
                                        variant="contained"
                                        sx={{ width: '100%', mt: 4, backgroundColor: '#4CAF50', color: '#fff' }}
                                        onClick={() => handleClick(1)}
                                        to="DossierVertStructure?source=remplire"
                                    >
                                        <label>Ajouter Dossier De Vert</label>
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Button
                                        className="bg-warning "
                                        variant="contained"
                                        sx={{ width: '100%', mt: 4, backgroundColor: 'orange' }}
                                        onClick={() => handleClick(2)}
                                    >
                                        <label>Ajouter Dossier de diabete</label>
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Button
                                        type="reset"
                                        variant="contained"
                                        sx={{ width: '100%', mt: 4, backgroundColor: 'yellow', color: 'black' }}
                                        onClick={() => handleClick(3)}
                                    >
                                        <label>Ajouter Dossier d'endocrinologie</label>
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Button
                                        className="bg-danger "
                                        variant="contained"
                                        sx={{ width: '100%', mt: 4, backgroundColor: 'red' }}
                                        onClick={() => handleClick(4)}
                                    >
                                        <label>Ajouter Dossier de dysthyroidie</label>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default AddDossierPatient;
