import React, { useEffect } from 'react';
import FilleCourbe from './filleCourbe';
import GarconCourbe from './garconCourbe';
import { useGetPatientQuery } from '../../../services/PatientService/identite-api/getPatientApi';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../../store/slices/authSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const Courbe = () => {
    const { token } = useSelector(selectUserAndToken);
    // const navigate = useNavigate();
    const { patientId } = useParams();
    const { data: patient, isLoading: isLoadingQuery, isError, refetch } = useGetPatientQuery({ token: token, id: patientId });
    useEffect(() => {
        refetch();
    });
    return (
        <div>
            {isLoadingQuery ? (
                <Alert severity="info" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
                    Loading Curve Patient
                </Alert>
            ) : isError ? (
                <Alert severity="error" color="error" sx={{ width: '100%' }}>
                    Error occurred while fetching curve patient.
                </Alert>
            ) : (
                <div>{patient.sexe === 'Femme' ? <FilleCourbe /> : <GarconCourbe />}</div>
            )}
        </div>
    );
};

export default Courbe;
