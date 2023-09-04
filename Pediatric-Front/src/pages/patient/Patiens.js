import { useGetPatientsQuery } from 'services/PatientService/identite-api/getAllPatientsApi';
import { selectUserAndToken } from '../../store/slices/authSlice';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useDeletePatientMutation } from '../../services/PatientService/identite-api/deletePatientApi';
const Patients = () => {
    const [open, setOpen] = useState(false);
    const { token } = useSelector(selectUserAndToken);

    const { data: response, isLoading, isError, refetch } = useGetPatientsQuery({ token });
    const [deletePatient, { isLoading: isLoadingDelete, isError: isErrorDelete, error }] = useDeletePatientMutation();
    const [deletePatientId, setDeletePatientId] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);
    console.log(response);
    useEffect(() => {
        refetch();
    });
    const handleDeletePatient = async (id) => {
        console.log(id);
        try {
            const result = await deletePatient({ id: id, token: token });
            // Handle the success response or do something with the result
            console.log('Patient deleted:', result);
            setIsDeleted(true);
        } catch (error) {
            // Handle the error response
            console.error('Error deleting patient:', error);
        }
    };

    const handleCloseDialog = () => {
        setIsDeleted(false); // Réinitialisez l'état isDeleted pour fermer le dialogue
        setDeletePatientId(null);
    };

    if (isLoading) {
        return (
            <Alert severity="info" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
                Loading Patients
            </Alert>
        );
    }

    if (isError) {
        return;
        <Alert severity="error" color="info" sx={{ width: '100%' }}>
            Error occurred while fetching patients.
        </Alert>;
    }

    const patients = response['hydra:member'];

    const columns = ['IP', 'fullname', 'date de naissance', 'ville', 'Action'];

    const data = patients.map((patient) => [
        patient.ip,
        patient.fullname,
        `${patient.jour}/${patient.mois}/${patient.annee}`,
        patient.ville,

        <div>
            <Button
                component={Link}
                to={`PatientDossiers/${patient.id}?source=update`}
                variant="contained"
                sx={{
                    backgroundColor: '#00bfff',
                    '&:hover': {
                        backgroundColor: '#00bfff'
                    }
                }}
            >
                Update
            </Button>
            <Button onClick={() => setDeletePatientId(patient.id)} variant="outlined">
                {' '}
                Delete
            </Button>
            {/*<Button component={Link} to={`PatientDossiers/${patient.id}?source=voir`} variant="contained" sx={{
                backgroundColor: '#00bfff',
                '&:hover': {
                    backgroundColor: '#00bfff',
                },
            }}>
                {' '}
                View
            </Button>*/}

            <Dialog
                open={deletePatientId === patient.id}
                onClose={() => setDeletePatientId(null)}
                BackdropProps={{
                    style: {
                        backgroundColor: 'transparent'
                    }
                }}
                sx={{
                    '& .MuiDialog-paper': {
                        width: '500px',
                        height: '200px',
                        maxWidth: '100%',
                        boxShadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px' // Remove the shadow
                    }
                }}
            >
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>Are you sure you want to delete this patient?</DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeletePatientId(null)} color="primary">
                        Cancel
                    </Button>
                    <Button color="secondary" onClick={() => handleDeletePatient(patient.id)}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialogue de confirmation de suppression réussie */}
            <Dialog
                open={isDeleted}
                onClose={handleCloseDialog}
                BackdropProps={{
                    style: {
                        backgroundColor: 'transparent'
                    }
                }}
                sx={{
                    '& .MuiDialog-paper': {
                        width: '500px',
                        height: '200px',
                        maxWidth: '100%',
                        boxShadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px' // Remove the shadow
                    }
                }}
            >
                <DialogTitle>Patient Deleted</DialogTitle>
                <DialogContent>The patient has been successfully deleted.</DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    ]);

    const options = {
        filterType: 'checkbox'
    };

    return (
        <div className="container">
            <MUIDataTable title={' Chercher un patient'} data={data} columns={columns} options={options} />
        </div>
    );
};

export default Patients;
