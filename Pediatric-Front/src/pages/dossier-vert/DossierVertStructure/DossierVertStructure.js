import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { blue, orange, purple, red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
// import DossierVert from "../../../assets/images/chu/DossierVert.png";
import { useNavigate } from 'react-router-dom';
import { useGetAllDossierQuery } from 'services/PatientService/AddDossiers/getAllDossierApi';
import { useGetPatientsQuery } from '../../../services/PatientService/identite-api/getAllPatientsApi';
import { useGetFormByDossierQuery } from '../../../services/PatientService/AddDossiers/getFormByDossierApi';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../../store/slices/authSlice';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));
//<h3>Dossier d'exploitation du retard de croissance staturo-pondéral</h3>
function DossierVertStructure() {
    const { dossierId } = useParams();
    const { token } = useSelector(selectUserAndToken);



    const { data: response, isLoading, isError, refetch } = useGetFormByDossierQuery({ token, dossierId });

    useEffect(() => {
        const fetchData = async () => {
            // Fetch the data when the component mounts or when token or dossierId changes
            await refetch();
            console.log(response);
        };

        fetchData();
    }, [token, dossierId]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const source = queryParams.get('source');
    const navigate = useNavigate();

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
                                bgcolor: '#00bfff',
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
                                    Dossier d'exploitation du retard de croissance staturo-pondéral
                                </Typography>
                            </Grid>
                        </Box>

                        <br></br>
                        <br></br>
                        {isLoading ? (
                            <Alert severity="info" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
                                Loading Patient
                            </Alert>
                        ) : isError ? (
                            <Alert severity="error" color="error" sx={{ width: '100%' }}>
                                Error occurred while fetching patient.
                            </Alert>
                        ) : response === null || response === undefined ? (
                            <Alert severity="error" color="error" sx={{ width: '100%' }}>
                                The patient is null.
                            </Alert>
                        ) : (
                                <>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">IDENTITE</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                        <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                backgroundColor: '#00bfff',
                                                            }, }}
                                                                component={Link}
                                                                to="ImpressionPatientIdentite">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="UpdatePatientIdentite">Update</Button>):(
                                                            <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                    backgroundColor: '#00bfff',
                                                                }, }} component={Link}
                                                                    to="UpdatePatientIdentite">Update</Button>)}

                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">PARACLINIQUE</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="Paraclinique">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="Paraclinique">Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to={`UpdateParaclinique/${response[0].paraclinique}`}>Update</Button>)}

                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">DOCUMENTS</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="AddDocument">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="AddDocument">Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to='Document'>Update</Button>)}

                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <br></br>

                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">ANTECEDENTS</Typography>
                                                        <Typography variant="h6">PERSONNELS</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="AntiPersonnel">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="AntiPersonnel">Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to={`UpdateAntiPersonnel/${response[0].antiPersonnel}`}>Update</Button>)}

                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">ANTECEDENTS</Typography>
                                                        <Typography variant="h6">FAMILIAUX</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="AntiFamiliaux">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="AntiFamiliaux">Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to={`UpdateAntiFamiliaux/${response[0].antiFamiliaux}`}>Update</Button>)}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">DIAGNOSTIC</Typography>
                                                        <Typography variant="h6">RETENU</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="DiagnosticRetenuPEC">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="DiagnosticRetenuPEC">Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to={`UpdateDiagnosticRetenuPEC/${response[0].diagnosticRetenuPEC}`}>Update</Button>)}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <br></br>

                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">COURBE </Typography>
                                                        <Typography variant="h6">CROISSANCE</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  >Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  >Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to={`UpdateCourbe/${response[0].courbe}`}>Update</Button>)}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">EXAMEN </Typography>
                                                        <Typography variant="h6">PHYSIQUE</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="ExamenPhysique">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="ExamenPhysique">Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to={`UpdateExamenPhysique/${response[0].examenPhysique}`}>Update</Button>)}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>

                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >

                                            <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={8}>
                                                        <Typography variant="h5">SUIVI ...</Typography>

                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        {source === 'voir' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="Suivi">Voir</Button>
                                                        ) : source === 'remplire' ? (
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }}
                                                                  component={Link}
                                                                  to="Suivi">Update</Button>):(
                                                          <Button variant="contained" sx={{ backgroundColor: '#00bfff' ,'&:hover': {
                                                                  backgroundColor: '#00bfff',
                                                              }, }} component={Link}
                                                                  to="Suivi">Update</Button>)}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                         </>
                        )
                    }
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default DossierVertStructure;
