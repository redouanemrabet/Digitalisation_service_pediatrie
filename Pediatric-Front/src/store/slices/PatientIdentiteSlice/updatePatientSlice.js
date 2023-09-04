import { createSlice } from '@reduxjs/toolkit';

const updatePatientSlice = createSlice({
  name: 'updatePatient',
    initialState: {
    success: false,
        isLoading: false,
    isError: false,
    error: null,
    data: null
  },
  reducers: {
    updatePatientStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
    updatePatientSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.success = true;
      state.data = action.payload;
    },
    updatePatientFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.success = false;
      state.data = null;
    }
  }
});

export const { updatePatientStart, updatePatientSuccess, updatePatientFailure } = updatePatientSlice.actions;

export default updatePatientSlice.reducer;
