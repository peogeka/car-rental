import React, { useState, useEffect } from 'react'; // Додано useEffect
import { useDispatch } from 'react-redux';
import {
  removeFavorite,
  addFavorite,
} from '../../redux/favorite/favorite.slice';
import CarModal from '../CardModal/CardModal';
import {
  CardCar,
  Card,
  ImgCar,
  Btn,
  InfoCar,
  CardTitle,
  Accent,
  TitlePrice,
  AddInfo,
  CardBtn,
  AdditionalInfoListEllipsis,
  Heart,
  VerticalLine,
} from './GalleryItem.styled';

export const GalleryItem = ({ car }) => {
  const dispatch = useDispatch();

  const [isButtonClicked, setIsButtonClicked] = useState(
    () => localStorage.getItem(`favorite-${car.id}`) === 'true'
  );
  const [imgError, setImgError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(`favorite-${car.id}`, String(isButtonClicked));
  }, [isButtonClicked, car.id]);

  const handleImgError = () => {
    setImgError(true);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(prevState => {
      if (prevState) {
        dispatch(removeFavorite(car));
      } else {
        dispatch(addFavorite(car));
      }
      return !prevState;
    });
  };

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [, city, country] = car.address.match(/,\s*([^,]+),\s*([^,]+)$/) || [];

  const rentalPriceNumber = Number.parseFloat(
    car.rentalPrice.replace(/[^0-9.]/g, '')
  );

  return (
    <CardCar>
      <Card>
        {car.img && !imgError ? (
          <ImgCar
            onError={handleImgError}
            src={car.img}
            alt={`${car.make} ${car.model}`}
          />
        ) : imgError ? (
          <div>Failed to load image</div>
        ) : (
          <div>No image</div>
        )}
        <Btn type="button" onClick={handleButtonClick}>
          <Heart isButtonClicked={isButtonClicked} />
        </Btn>
      </Card>
      <InfoCar>
        <CardTitle>
          {car.make} <Accent>{car.model}</Accent>, {car.year}
        </CardTitle>
        <TitlePrice>{car.rentalPrice}</TitlePrice>
      </InfoCar>
      <AddInfo>
        <AdditionalInfoListEllipsis>
          <li>{city}</li>
          <VerticalLine></VerticalLine>
          <li>{country}</li>
          <VerticalLine></VerticalLine>
          <li>{car.rentalCompany}</li>
          {rentalPriceNumber >= 30 && <p>Premium</p>}
          <VerticalLine></VerticalLine>
          <li>{car.type}</li>
          <VerticalLine></VerticalLine>
          <li>{car.model}</li>
          <VerticalLine></VerticalLine>
          <li>{car.mileage}</li>
          <VerticalLine></VerticalLine>
          <li>{car.accessories[0]}</li>
        </AdditionalInfoListEllipsis>
      </AddInfo>
      <CardBtn type="button" onClick={handleLearnMoreClick}>
        Learn more
      </CardBtn>
      {showModal && <CarModal car={car} onClose={closeModal} />}
    </CardCar>
  );
};
