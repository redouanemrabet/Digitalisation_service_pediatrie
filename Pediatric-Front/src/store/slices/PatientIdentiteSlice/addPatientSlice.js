import { createSlice } from '@reduxjs/toolkit';

const addPatientSlice = createSlice({
    name: 'addPatient',
    initialState: {
        success: false,
        isLoading: false,
        isError: false,
        error: null,
        data: null
    },
    reducers: {
        addPatientStart: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = null;
            state.success = false;
            state.data = null;
        },
        addPatientSuccess: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = null;
            state.success = true;
            state.data = action.payload;
        },
        addPatientFailure: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
            state.success = false;
            state.data = null;
        }
    }
});

export const { addPatientStart, addPatientSuccess, addPatientFailure } = addPatientSlice.actions;

export default addPatientSlice.reducer;
