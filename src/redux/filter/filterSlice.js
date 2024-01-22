import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCar: '',
  page: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
        
    updatePage: (state, action) => {
      state.page = action.payload;
    }
  },
});

export const {
  updateSelectedCar,
  updatePage,
} = filtersSlice.actions;

export default filtersSlice.reducer;