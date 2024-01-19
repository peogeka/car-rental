import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        selectedFilter: '',
    },
    reducers: {
        setselectedFilter: (state, action) => {
            state.selectedFilter = action.payload;
        },
    },
});

export const { setSelectedFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;