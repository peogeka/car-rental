import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.isError = null;
    state.cars = action.payload;
  };

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled,handleFulfilled) 
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;