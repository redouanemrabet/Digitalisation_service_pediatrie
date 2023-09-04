import React, { useState, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Container, TextField, Button, Snackbar, Alert } from '@mui/material';
import { Scatter } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../../store/slices/authSlice';
import { useGetAllCourbeQuery } from '../../../services/PatientService/dossiers-vert-service/Courbe-api/getAllCourbeByDossierApi';
import { useUpdateCourbeMutation } from '../../../services/PatientService/dossiers-vert-service/Courbe-api/updateCourbeApi';
import { useAddCourbeMutation } from '../../../services/PatientService/dossiers-vert-service/Courbe-api/addCourbeApi';

Chart.register(CategoryScale);
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary
}));
const FilleCourbe = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [dataPoints, setDataPoints] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState('');
    const [textButton, setTextButton] = useState('Add Data Point');
    const [severity, setSeverity] = useState('');
    const chartRef = useRef(null);
    const navigate = useNavigate();
    const { token } = useSelector(selectUserAndToken);
    const { patientId, dossierId, formId } = useParams();

    const {
        data: courbeData,
        isLoading: isLoadingQuery,
        isError: isErrorQuery,
        refetch
    } = useGetAllCourbeQuery({ token: token, id: dossierId });

    const [
        updateCourbeMutation,
        { isSuccess: isSuccessMutation, isLoading: isLoadingMutation, isError: isErrorMutation, error: mutationError, data: mutationData }
    ] = useUpdateCourbeMutation();

    const [addCourbeMutation, { isSuccess: isSuccessAdd, isLoading: isLoadingAdd, isError: isErrorAdd, error: addError, data: addData }] =
        useAddCourbeMutation();

    useEffect(() => {
        // Fetch the data when the component mounts or when token or patientId changes
        refetch();
    }, [token, dossierId, refetch]);

    useEffect(() => {
        if (!isLoadingQuery && !isErrorQuery && courbeData) {
            setDataPoints(courbeData);
        }
    }, [isLoadingQuery, isErrorQuery, courbeData]);

    const handleGoBack = () => {
        navigate(-1); // Revenir à la page précédente
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
        const existingIndex = dataPoints.findIndex((point) => point.age === parseInt(event.target.value, 10));
        if (existingIndex !== -1) {
            setTextButton('Update Data Point');
        } else {
            setTextButton('Add Data Point');
        }
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleAddDataPoint = () => {
        if (age && height && weight) {
            const newPoint = {
                age: parseInt(age),
                height: parseFloat(height),
                weight: parseFloat(weight),
                dossier: `/api/dossiers/${dossierId}`
            };

            const existingIndex = dataPoints.findIndex((point) => point.age === newPoint.age);
            console.log(existingIndex);
            if (existingIndex !== -1) {
                const existingId = dataPoints.find((point) => point.age === newPoint.age)?.id;
                console.log(existingId);
                // Update existing data point
                const updatedDataPoints = [...dataPoints];

                updatedDataPoints[existingIndex] = newPoint;

                const response = updateCourbeMutation({ body: newPoint, token: token, id: existingId });
                setAge('');
                setHeight('');
                setWeight('');

                setDataPoints(updatedDataPoints);
                setMessage('the point updated successfully');
            } else {
                // Add new data point
                setDataPoints([...dataPoints, newPoint]);
                const response = addCourbeMutation({ body: newPoint, token: token });
                setMessage('the point added successfully');
                setAge('');
                setHeight('');
                setWeight('');
            }
            // dataPoints.sort((a, b) => a.age - b.age);
            setShowToast(true);
            setSeverity('success');
            console.log(dataPoints);
        } else {
            setShowToast(true);
            setMessage('fill all cases!!!');
            setSeverity('warning');
        }
    };

    const handlePointClick = (event, elements) => {
        if (elements && elements.length > 0) {
            const selectedIndex = elements[0].index;

            for (const dataPoint of dataPoints) {
                if (dataPoint.age === selectedIndex) {
                    const selectedDataPoint = dataPoint;
                    console.log('Selected Data Point:', selectedDataPoint);
                    setAge(selectedDataPoint.age);
                    setHeight(selectedDataPoint.height);
                    setWeight(selectedDataPoint.weight);
                    setTextButton('Update Data Point');

                    break;
                }
            }
        } else {
            setTextButton('Add Data Point');
            setAge('');
            setHeight('');
            setWeight('');
        }
    };

    //

    const chartData = {
        labels: Array.from({ length: 19 }, (_, index) => (index === 0 ? '0' : String(index))),
        datasets: [
            {
                label: 'Patient ',
                data: Array.from({ length: 18 }, (_, index) => {
                    const matchingDataPoint = dataPoints.find((dataPoint) => dataPoint.age === index);
                    return matchingDataPoint ? matchingDataPoint.height : null;
                }),
                yAxisID: 'height-axis',
                fill: false,
                borderColor: 'rgb(75, 192, 192)',

                tension: 0.5
            },
            {
                lineTension: 0,
                label: 'Autre courbe 1',
                data: [48, 64, 73, 80, 86, 91, 95, 100, 105, 110, 115, 120, 123, 130, 138, 145, 150, 157, 158],
                yAxisID: 'height-axis',
                fill: false,
                borderColor: 'rgb(255, 215, 0)',
                tension: 0.1
            },
            {
                label: 'courbe 2',
                data: [50, 67, 80, 87, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 167, 169],
                yAxisID: 'height-axis',
                fill: false,
                borderColor: '#00ffff',
                tension: 0.4
            },
            {
                label: 'Courbe 2',
                data: [55, 73, 81, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 170, 173],
                yAxisID: 'height-axis',
                fill: false,
                borderColor: '#00ff00',
                tension: 0.4
            }
        ]
    };
    const chartDataWeight = {
        labels: Array.from({ length: 19 }, (_, index) => (index === 0 ? '0' : String(index))),
        datasets: [
            {
                label: 'Patient',
                data: Array.from({ length: 18 }, (_, index) => {
                    const matchingDataPoint = dataPoints.find((dataPoint) => dataPoint.age === index);
                    return matchingDataPoint ? matchingDataPoint.weight : null;
                }),
                yAxisID: 'weight-axis',
                fill: false,
                borderColor: 'rgb(75, 192, 192)',

                tension: 0.5
            },
            {
                label: 'Autre courbe 1',
                data: [4, 7, 10, 14, 16, 19, 20, 23, 25, 27, 36, 41, 42, 44, 51, 56, 58, 62, 66],
                yAxisID: 'weight-axis',
                fill: false,
                borderColor: ' #b3ffe0',
                tension: 0.5
            },
            {
                label: 'Autre courbe 2',
                data: [6, 8, 11, 16, 18, 23, 28, 31, 37, 38, 39, 44, 45, 49, 53, 57, 64, 67, 70],
                yAxisID: 'weight-axis',
                fill: false,
                borderColor: '#00ffff',
                tension: 0.5
            },
            {
                label: 'courbe 3',
                data: [7, 11, 14, 17, 20, 24, 30, 33, 38, 39, 44, 45, 49, 53, 57, 64, 67, 70, 75],
                yAxisID: 'weight-axis',
                fill: false,
                borderColor: '#00ff00',
                tension: 0.5
            }
        ]
    };

    const chartOptions = {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 10,
                bottom: 10
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Age'
                },
                grid: {
                    color: '#ffb3ec' // Change the x-axis grid color here
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Height (cm)'
                },
                grid: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                    borderDash: [5, 5],
                    borderDashOffset: 0,
                    lineWidth: 1,
                    drawTicks: true,

                    tickLength: 5,
                    tickWidth: 5,
                    borderWidth: 45
                }
            }
        },
        onClick: handlePointClick
    };
    const chartOptionsWeight = {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 10,
                bottom: 10
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Age'
                },
                grid: {
                    color: '#ffb3ec' // Change the x-axis grid color here
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Weight (cm)'
                },
                grid: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: true,
                    color: '#b3ecff',
                    borderDash: [5, 5],
                    borderDashOffset: 0,
                    lineWidth: 1,
                    drawTicks: true,
                    tickLength: 5,
                    tickWidth: 5,
                    borderWidth: 45
                }
            }
        },
        onClick: handlePointClick
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
                                    COURBES DE CROISSANCE
                                </Typography>
                            </Grid>
                        </Box>
                        <br></br>
                        <br></br>

                        <Container>
                            <Snackbar
                                open={showToast}
                                autoHideDuration={3000}
                                onClose={() => setShowToast(false)}
                                anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
                            >
                                {severity === 'success' ? (
                                    <Alert
                                        elevation={6}
                                        sx={{ backgroundColor: ' #00bfff' }}
                                        variant="filled"
                                        onClose={() => setShowToast(false)}
                                        severity="success"
                                    >
                                        {message}
                                    </Alert>
                                ) : (
                                    <Alert
                                        elevation={6}
                                        sx={{ backgroundColor: ' #ff9933' }}
                                        variant="filled"
                                        onClose={() => setShowToast(false)}
                                        severity="warning"
                                    >
                                        {message}
                                    </Alert>
                                )}
                            </Snackbar>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                <div>
                                    <TextField
                                        id="age"
                                        label="Age"
                                        type="number"
                                        value={age}
                                        onChange={handleAgeChange}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="height"
                                        label="Height (cm)"
                                        type="number"
                                        value={height}
                                        onChange={handleHeightChange}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="weight"
                                        label="Weight (kg)"
                                        type="number"
                                        value={weight}
                                        onChange={handleWeightChange}
                                        style={{ width: '100%' }}
                                    />
                                </div>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#ffb3ec',
                                        '&:hover': {
                                            backgroundColor: '#ffb3ec'
                                        }
                                    }}
                                    color="primary"
                                    onClick={handleAddDataPoint}
                                >
                                    {textButton}
                                </Button>
                            </div>
                            <style>
                                {`
        @media (max-width: 600px) {
          div[style*="flex"] {
            flex-direction: column;
          }
        }
        `}
                            </style>
                        </Container>

                        <div>
                            <Line
                                width="170px"
                                ref={chartRef}
                                data={chartData}
                                options={chartOptions}
                                getElementAtEvent={handlePointClick}
                            />
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <Line
                                width="150px"
                                ref={chartRef}
                                data={chartDataWeight}
                                options={chartOptionsWeight}
                                getElementAtEvent={(elements) => handlePointClick(elements)}
                            />
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>);
};
export default FilleCourbe;
