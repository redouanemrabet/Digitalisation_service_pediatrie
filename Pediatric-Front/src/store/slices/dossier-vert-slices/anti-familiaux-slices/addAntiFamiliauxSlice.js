import { createSlice } from '@reduxjs/toolkit';

const addAntiFamiliauxSlice = createSlice({
    name: 'addAntiFamiliaux',
    initialState: {
        success: false,
        isLoading: false,
        isError: false,
        error: null,
        data: null
    },
    reducers: {
        addAntiFamiliauxStart: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = null;
            state.success = false;
            state.data = null;
        },
        addAntiFamiliauxSuccess: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.error = null;
            state.success = true;
            state.data = action.payload;
        },
        addAntiFamiliauxFailure: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
            state.success = false;
            state.data = null;
        }
    }
});

export const { addAntiFamiliauxStart, addAntiFamiliauxSuccess, addAntiFamiliauxFailure } = addAntiFamiliauxSlice.actions;

export default addAntiFamiliauxSlice.reducer;
