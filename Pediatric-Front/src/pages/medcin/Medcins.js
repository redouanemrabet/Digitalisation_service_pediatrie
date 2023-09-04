import { useGetMedcinsQuery } from 'services/MedcinService/getAllMedcinsApi';
import { selectUserAndToken } from '../../store/slices/authSlice';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useDeleteMedcinMutation } from '../../services/MedcinService/deleteMedcinApi';
const Medcins = () => {

  const [open, setOpen] = useState(false);
  const { token } = useSelector(selectUserAndToken);

  const { data: response, isLoading, isError, refetch } = useGetMedcinsQuery({ token });

  const [deleteMedcin, { isLoading: isLoadingDelete, isError: isErrorDelete, error }] = useDeleteMedcinMutation();


  const [deleteMedcinId, setDeleteMedcinId] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {

    refetch();
    console.log(response)

  });
  const handleDeleteMedcin = async (id) => {
    console.log(id);
    try {
      const result = await deleteMedcin({ id: id, token: token });
      // Handle the success response or do something with the result
      console.log('medcin deleted:', result);
      setIsDeleted(true);
    } catch (error) {
      // Handle the error response
      console.error('Error deleting medcin:', error);
    }
  };

  const handleCloseDialog = () => {
    setIsDeleted(false); // Réinitialisez l'état isDeleted pour fermer le dialogue
    setDeleteMedcinId(null)
  };

  if (isLoading) {
    return (
      <Alert severity="info" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <CircularProgress size={16} color="inherit" sx={{ mr: 1 }} />
        Loading Medcins
      </Alert>
    );
  }

  if (isError) {
    return;
    <Alert severity="error" color="info" sx={{ width: '100%' }}>
      Error occurred while fetching medcins.
    </Alert>;
  }

  const medcins = response['hydra:member'];



  const columns = ['nom', 'prénom', 'position','email','actions'];

  const data = medcins.map((medcin) => [

    medcin.firstname,
    medcin.lastname,
    medcin.position,
    medcin.email,

    <div>
      <Button component={Link} to={`Medcin/${medcin.id}?source=update`} variant="contained">
        Update
      </Button>
      <Button onClick={() => setDeleteMedcinId(medcin.id)} variant="outlined">
        {' '}
        Delete
      </Button>

      <Dialog
        open={deleteMedcinId === medcin.id}
        onClose={() => setDeleteMedcinId(null)}
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
        <DialogContent>Are you sure you want to delete this medcin?</DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteMedcinId(null)} color="primary">
            Cancel
          </Button>
          <Button color="secondary" onClick={() => handleDeleteMedcin(medcin.id)}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialogue de confirmation de suppression réussie */}
      <Dialog open={isDeleted} onClose={handleCloseDialog}
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
              }}>
        <DialogTitle>Medcin Deleted</DialogTitle>
        <DialogContent>The medcin has been successfully deleted.</DialogContent>
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
      <MUIDataTable title={' Les médcins '} data={data} columns={columns} options={options} />
    </div>
  );
};

export default Medcins;
