import { createSlice } from '@reduxjs/toolkit';

const getPatientsSlice = createSlice({
    name: 'getPatients',
    initialState: {
        success: false,
        isLoading: false,
        isError: false,
        error: null,
        data: null
    },
    reducers: {
        getPatientsStart: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = null;
            state.success = false;
            state.data = null;
        },
        getPatientsSuccess: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = null;
            state.success = true;
            state.data = action.payload;
        },
        getPatientsFailure: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
            state.success = false;
            state.data = null;
        }
    }
});

export const { getPatientsStart, getPatientsSuccess, getPatientsFailure } = getPatientsSlice.actions;

export default getPatientsSlice.reducer;
