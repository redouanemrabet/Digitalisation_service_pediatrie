import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FormGroup, InputLabel, FormControl, Input, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Backdrop from '@mui/material/Backdrop';
import { useEffect, useState } from 'react';
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
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../store/slices/authSlice';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetDossiersByPatientQuery } from "../../services/PatientService/AddDossiers/getDossiersByPatientApi";
import { useGetAllDossiersPatientQuery } from "../../services/PatientService/AddDossiers/getAllDossiersPatientApi";
import { useGetPatientQuery } from "../../services/PatientService/identite-api/getPatientApi";
import { useAddDossierMutation } from "../../services/PatientService/AddDossiers/AddDossierApi";
import { useInitialiseFormsMutation } from "../../services/PatientService/AddDossiers/initilaiseFormsApi";

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

function PatientDossiers() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const source = queryParams.get('source');
    const navigate = useNavigate();
    const { patientId } = useParams();
    const [hasVert, setHasVert] = useState(false);
    const [hasOrange, setHasOrange] = useState(false);
    const [hasBlue, setHasBlue] = useState(false);
    const [hasRouge, setHasRouge] = useState(false);
    const { token } = useSelector(selectUserAndToken);

    const { data: response, isLoading, isError, refetch } = useGetAllDossiersPatientQuery({ token, patientId });
    const { data: patientResponse, isLoading: patientIsLoading, isError: patientIsError, refetch: patientRefetch } = useGetPatientQuery({ token : token, id: patientId });
    const [addDossier, { isLoading: addDossierLoading, isError: addDossierError, error: addDossierErrorMessage }] = useAddDossierMutation();

    const [initializeForms, { isLoading: initializeFormsLoading, isError: initializeFormsError, error: initializeFormsErrorMessage }] = useInitialiseFormsMutation();

    const [showToast, setShowToast] = useState(false);
    const [message,setMessage]=useState('');
    const [isAddingDossier, setIsAddingDossier] = useState(false);
   /* useEffect(() => {
        // Fetch the data when the component mounts or when token or patientId changes
        refetch();
        console.log(response);
    });*/
    const ajouterDossierVert = async () => {

        try {
            // Perform the desired action with the ID
            //console.log(`Clicked dossier with ID: ${idCategory}`);
            setIsAddingDossier(true); // Set isLoading to true
            const values = {
                type: `/api/categories/1`,
                patient: `/api/patients/${patientId}`
            };

            console.log(values);

            const response = await addDossier({ body: values, token: token });

            const dossierId = response.data.id;
            setShowToast(true);
            setMessage("Le dossier vert est bient ajouté");

            const initialiseResponse = await initializeForms({ token: token, ddossierId: dossierId });

            console.log("initialiseResponse");
            console.log(initialiseResponse);

            //navigate(`/PatientDossiers/${patientId}?source=update`);

        } catch (err) {
            console.error(err);
        } finally {
            setIsAddingDossier(false); // Set isLoading to false after the operation is completed
            setShowToast(true);
            setMessage("Le dossier vert est bient ajouté");
            refetch();
        }
    }
    const handleGoBack = () => {
        navigate(-1);
    };
    const DossierVert = () => {
        return <Card sx={{ maxWidth: 492,boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            <CardContent>
                <Typography gutterBottom component="div">
                    DOSSIER D'EXPLOITATION DU RETARD DE CRIOSSANCE STATURO-PONDERAL
                </Typography>
            </CardContent>
            <CardActions sx={{ backgroundColor: '#00bfff' }}>
                <div>
                    <div>
                        <Stack className="stack-btn" spacing={22} direction="row">
                            {source === 'voir' ? (
                              <>
                                  <Button size="small" variant="contained"sx={{
                                      backgroundColor: '#66ff33',
                                      '&:hover': {
                                          backgroundColor: '#66ff33',
                                      },
                                  }}>
                                      Imprimer
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="contained"
                                    component={Link}
                                    to="DossierVertStructure?source=voir"
                                    sx={{
                                        backgroundColor: '#66ff33',
                                        '&:hover': {
                                            backgroundColor: '#66ff33',
                                        },
                                    }}
                                  >
                                      Voir
                                  </Button>
                              </>
                            ) : (
                              <Button
                                size="small"
                                variant="contained"
                                component={Link}
                                to={`DossierVertStructure/${response[0]?.id}`}
                                sx={{
                                    backgroundColor: '#66ff33',
                                    '&:hover': {
                                        backgroundColor: '#66ff33',
                                    },
                                }}
                              >
                                  Update
                              </Button>
                            )}
                        </Stack>
                    </div>
                </div>
            </CardActions>
        </Card>;
    };
    const DossierOrange = () => {
        return <Card sx={{ maxWidth: 345 ,boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <CardContent>
                <Typography gutterBottom component="div">
                    DOSSIER ORANGE
                </Typography>
            </CardContent>
            <CardActions sx={{ backgroundColor: 'blue' }}>
                <div>
                    <div>
                        <Stack className="stack-btn" spacing={22} direction="row">
                            {source === 'voir' ? (
                              <>
                                  <Button size="small" variant="contained">
                                      Imprimer
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="contained"
                                    component={Link}
                                    to="DossierVertStructure?source=voir"
                                  >
                                      Voir
                                  </Button>
                              </>
                            ) : (
                              <Button
                                size="small"
                                variant="contained"
                                component={Link}
                                to={`DossierVertStructure/${response[0].id}`}
                              >
                                  Update
                              </Button>
                            )}
                        </Stack>
                    </div>
                </div>
            </CardActions>
        </Card>;
    };

    const DossierJaune = () => {
        return <Card sx={{ maxWidth: 345,boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            <CardContent>
                <Typography gutterBottom component="div">
                    DOSSIER JAUNE
                </Typography>
            </CardContent>
            <CardActions sx={{ backgroundColor: 'blue' }}>
                <div>
                    <div>
                        <Stack className="stack-btn" spacing={22} direction="row">
                            {source === 'voir' ? (
                              <>
                                  <Button size="small" variant="contained">
                                      Imprimer
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="contained"
                                    component={Link}
                                    to="DossierVertStructure?source=voir"
                                  >
                                      Voir
                                  </Button>
                              </>
                            ) : (
                              <Button
                                size="small"
                                variant="contained"
                                component={Link}
                                to={`DossierVertStructure/${response[0].id}`}
                              >
                                  Update
                              </Button>
                            )}
                        </Stack>
                    </div>
                </div>
            </CardActions>
        </Card>;
    };

    const DossierRouge = () => {
        return <Card sx={{ maxWidth: 345 ,boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <CardContent>
                <Typography gutterBottom component="div">
                    DOSSIER ROUGE
                </Typography>
            </CardContent>
            <CardActions sx={{ backgroundColor: 'blue' }}>
                <div>
                    <div>
                        <Stack className="stack-btn" spacing={22} direction="row">
                            {source === 'voir' ? (
                              <>
                                  <Button size="small" variant="contained">
                                      Imprimer
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="contained"
                                    component={Link}
                                    to="DossierVertStructure?source=voir"
                                  >
                                      Voir
                                  </Button>
                              </>
                            ) : (
                              <Button
                                size="small"
                                variant="contained"
                                component={Link}
                                to={`DossierVertStructure/${response[0].id}`}
                              >
                                  Update
                              </Button>
                            )}
                        </Stack>
                    </div>
                </div>
            </CardActions>
        </Card>;
    };
    const AjouterDossierVert = () => {
        return(
        <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2,width: '100%' ,margin:'15px' }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <Typography variant="h5"> Dossier Vert</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" sx={{ backgroundColor: '#66ff33', '&:hover': {
                            backgroundColor: '#66ff33',
                        },}} onClick={ajouterDossierVert}>Ajouter</Button>
                </Grid>
            </Grid>
        </Box>)
    };

    const AjouterDossierOrange = () => {
        return(
        <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2,width: '100%',margin:'15px'  }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <Typography variant="h5"> Dossier de diabète</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" sx={{ backgroundColor: '#ffbf00', '&:hover': {
                            backgroundColor: '#ffbf00',
                        },  }}>Ajouter</Button>
                </Grid>
            </Grid>
        </Box>)

    };

    const AjouterDossierJaune = () => {
        return(
          <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }} >
              <Grid container spacing={2}  alignItems="center">
                  <Grid item xs={8}>
                      <Typography variant="h5"> Dossier d'endocrinologie</Typography>
                  </Grid>
                  <Grid item xs={4}>
                      <Button variant="contained" sx={{ backgroundColor: '#ffff00','&:hover': {
                              backgroundColor: '#ffff00',
                          }, }}>Ajouter</Button>
                  </Grid>
              </Grid>
          </Box>)
    };

    const AjouterDossierRouge = () => {
        return (
          <Box sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', p: 2 ,width: '100%',margin:'15px' }}>
              <Grid container spacing={2} alignItems="center">
                  <Grid item xs={8}>
                      <Typography variant="h5">Dossier de dysthyroïdie</Typography>
                  </Grid>
                  <Grid item xs={4}>
                      <Button variant="contained" sx={{ backgroundColor: '#ff1a1a' ,'&:hover': {
                              backgroundColor: '#ff1a1a',
                          }, }}>Ajouter</Button>
                  </Grid>
              </Grid>
          </Box>)
    };
    const CategoryComponent = ({ category }) => {
        switch (category.type) {
            case 'vert':
                setHasVert(true);
                return <DossierVert />;
            case 'orange':
                setHasOrange(true);
                return <DossierOrange />;
            case 'blue':
                setHasBlue(true);
                return <DossierJaune/>;
            case 'rouge':
                setHasRouge(true);
                return <DossierRouge />;
            default:
                return null;
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
                                  {patientResponse && patientResponse.fullname ? `${patientResponse.fullname} : ${patientResponse.ip}` : 'Loading...'}
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
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item
                                      xs={12}
                                      md={20}
                                      sx={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                      }}>
                                    {!hasBlue && <AjouterDossierJaune />}
                                    {!hasVert && <AjouterDossierVert />}
                                    {!hasOrange && <AjouterDossierOrange />}
                                    {!hasRouge && <AjouterDossierRouge />}
                                </Grid>
                                {response && (
                                <Grid
                                  item
                                  xs={12}
                                  md={6}
                                  sx={{
                                      display: 'flex',
                                      margin:'15px'

                                  }}
                                >
                                    {response &&
                                      response.map((item, index) => (
                                        <CategoryComponent key={index} category={item.category} />
                                      ))}
                                </Grid>)}


                            </Grid>
                        </Box>

                      )}
                  </Item>
              </Grid>
          </Grid>
          <Snackbar
            open={showToast}
            autoHideDuration={3000}
            onClose={() => setShowToast(false)}
            anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
            sx={{ width: '400px', height: '200px' }}
          >

                <Alert elevation={6} sx={{ backgroundColor: ' #00bfff' }} variant="filled" onClose={() => setShowToast(false)} severity="success">
                    {message}
                </Alert>

          </Snackbar>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isAddingDossier}
          >
              <CircularProgress color="inherit" />
          </Backdrop>
      </Box>
    );
}
export default PatientDossiers;