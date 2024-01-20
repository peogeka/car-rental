import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './car/carsSlice';
import favoritesReducer, { loadFavorites } from './favorite/favorite.slice'
import filtersReducer from './filter/filterSlice';

const preloadedState = {
  favorites: {
    favoriteCars: loadFavorites(),
  },
};

export const store = configureStore({
  reducer: {
    adverts: carsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
  preloadedState,
});