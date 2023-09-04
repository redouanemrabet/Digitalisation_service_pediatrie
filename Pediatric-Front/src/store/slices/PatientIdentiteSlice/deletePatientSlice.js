import { createSlice } from '@reduxjs/toolkit';

const deletePatientSlice = createSlice({
  name: 'deletePatient',
  initialState: {
    success: false,
    isLoading: false,
    isError: false,
    error: null,
    data: null
  },
  reducers: {
    deletePatientStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
    deletePatientSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.success = true;
      state.data = action.payload;
    },
    deletePatientFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.success = false;
      state.data = null;
    }
  }
});

export const { deletePatientStart, deletePatientSuccess, deletePatientFailure } = deletePatientSlice.actions;

export default deletePatientSlice.reducer;
