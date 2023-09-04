import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { blue, orange, purple, red, yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import imageDoc from '../../../assets/images/document/AJOUTERFMEDICALE.png';
import imageCamera from '../../../assets/images/document/CameraImage.png';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import GetAppIcon from '@mui/icons-material/GetApp';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';

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

function AjouterDocument() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Revenir à la page précédente
    };

    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
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
                                    <Card sx={{ width: 345, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                        <CardHeader avatar={<CameraAltIcon />} title="Camera" />

                                        <CardActions
                                            sx={{
                                                backgroundColor: 'purple',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <div>
                                                <div>
                                                    <Stack className="stack-btn">
                                                        <Button size="small" variant="contained" component={Link} to="Camera">
                                                            Prendre photo
                                                        </Button>
                                                    </Stack>
                                                </div>
                                            </div>
                                        </CardActions>
                                    </Card>
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
                                    <Card sx={{ width: 345, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                        <CardHeader avatar={<GetAppIcon />} title="Ajouter un fichier Medical" />
                                        <CardActions
                                            sx={{
                                                backgroundColor: 'purple',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <div>
                                                <div>
                                                    <Stack className="stack-btn">
                                                        <Button size="small" variant="contained" component={Link} to="UploadFile">
                                                            Télécharger un fichier
                                                        </Button>
                                                    </Stack>
                                                </div>
                                            </div>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default AjouterDocument;
