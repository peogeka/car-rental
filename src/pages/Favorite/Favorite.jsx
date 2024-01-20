import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Gallery } from '../../components/Gallery/Gallery';
import { fetchAdverts } from '../../redux/car/operations';

export const Favorite = () => {
  const favoriteCars = useSelector((state) => state.favorites.favoriteCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [favoriteCars, dispatch]);

  return (
    <div>
      <Gallery cars={favoriteCars} />
    </div>
  );
};

export default Favorite;