import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    success: false,
    isLoading: false,
    isError: false,
    error: null,
    data: null,
  },
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
      state.success = false;
      state.data = null;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = null;
      state.success = true;
      state.data = action.payload;
    },
    registerFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.success = false;
      state.data = null;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;

export default registerSlice.reducer;
