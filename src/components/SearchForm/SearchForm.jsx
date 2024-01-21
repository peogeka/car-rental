import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBrends } from '../../redux/car/operations';
import {
  SearchFormContainer,
  LabelForm,
  BrandSelect,
  BtnSearch,
} from './SearchForm.styled';

export const SearchForm = ({ onSearch }) => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.adverts.cars);
  const uniqueCarBrands = Array.from(new Set(cars.map(car => car.make)));

  const [filters, setFilters] = useState({
    selectedCar: '',
  });

  const selectedCar = useSelector(state => state.filters.selectedCar);
  const handleCarChange = e => {
    setFilters(prevFilters => ({
      ...prevFilters,
      selectedCar: e.target.value,
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  useEffect(() => {
    dispatch(fetchBrends({ selectedCar }));
  }, [dispatch, selectedCar]);

  return (
    <SearchFormContainer>
      <LabelForm>
        <p>Car brand</p>
        <BrandSelect value={filters.selectedCar} onChange={handleCarChange}>
          <option value="">All Cars</option>
          {uniqueCarBrands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </BrandSelect>
      </LabelForm>

      <BtnSearch type="button" onClick={handleSearch}>
        Search
      </BtnSearch>
    </SearchFormContainer>
  );
};

export default SearchForm;
