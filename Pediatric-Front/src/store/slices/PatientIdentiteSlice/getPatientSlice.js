import { createSlice } from '@reduxjs/toolkit';

const getPatientSlice = createSlice({
  name: 'getPatient',
  initialState: {
        success: false,
    isLoading: false,
    isError: false,
    error: null,
    data: null
  },
  reducers: {
    getPatientStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
    getPatientSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.success = true;
      state.data = action.payload;
    },
    getPatientFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.success = false;
      state.data = null;
    }
  }
});

export const { getPatientStart, getPatientSuccess, getPatientFailure } = getPatientSlice.actions;

export default getPatientSlice.reducer;
