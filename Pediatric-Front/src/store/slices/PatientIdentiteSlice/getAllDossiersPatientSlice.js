import { createSlice } from '@reduxjs/toolkit';

const getAllDossiersPatientSlice = createSlice({
  name: 'getAllDossiersPatient',
  initialState: {
    success: false,
    isLoading: false,
    isError: false,
    error: null,
    data: null
  },
  reducers: {
    getAllDossiersPatientSlice: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
    getAllDossiersPatientSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.success = true;
      state.data = action.payload;
    },
    getAllDossiersPatientFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
            state.error = action.payload;
      state.success = false;
      state.data = null;
    }
  }
});

export const { getAllDossiersPatientStart, getAllDossiersPatientSuccess, getAllDossiersPatientFailure } = getAllDossiersPatientSlice.actions;

export default getAllDossiersPatientSlice.reducer;
