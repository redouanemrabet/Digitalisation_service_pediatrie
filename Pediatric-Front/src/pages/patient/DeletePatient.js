import { Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from '../../store/slices/authSlice';
import { useDeletePatientMutation } from 'services/PatientService/identite-api/deletePatientApi';
import { useGetPatientQuery } from 'services/PatientService/identite-api/getPatientApi';

const UpdatePatient = () => {
    const { token } = useSelector(selectUserAndToken);
    const navigate = useNavigate();
    const { patientId } = useParams();

    const { data: patient, isLoading: isLoadingQuery, isError } = useGetPatientQuery({ token, id: patientId });
    const deletePatientMutation = useDeletePatientQuery();

    const handleConfirmDelete = async () => {
        try {
            await deletePatientMutation.mutateAsync({ token, id: patientId });
            navigate('/Patients');
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoadingQuery) {
        return <div>Loading patient data...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching patient data</div>;
    }

    if (!patient) {
        return null; // Render nothing if patient data is not available
    }

    return (
        <>
            <Button onClick={handleConfirmDelete}>Oui</Button>
            <Link to="/Patients">Non</Link>
        </>
    );
};

export default UpdatePatient;
