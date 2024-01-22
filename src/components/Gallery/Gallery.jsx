import React from 'react';
import { useSelector } from 'react-redux';
import { GalleryItem } from '../GalleryItem/GalleryItem';
import { GalleryContainer } from './Gallery.styled';

export const Gallery = ({ cars, renderAllImages }) => {
  const { selectedCar: selectedBrandCatalog } = useSelector(state => state.filters);
  const { selectedCar: selectedBrandFavorites } = useSelector(state => state.favorites);
  const { favoriteCars } = useSelector(state => state.favorites);

  const filteredByBrandCatalog = selectedBrandCatalog
    ? cars.filter(car => car.make === selectedBrandCatalog)
    : cars;

  const filteredByBrandFavorites = selectedBrandFavorites
    ? favoriteCars.filter(car => car.make === selectedBrandFavorites)
    : favoriteCars;

  const carsToRender = renderAllImages
    ? filteredByBrandCatalog
    : filteredByBrandFavorites;

  return (
    <GalleryContainer>
      {carsToRender.map(car => (
        <GalleryItem key={car.id} car={car} />
      ))}
    </GalleryContainer>
  );
};