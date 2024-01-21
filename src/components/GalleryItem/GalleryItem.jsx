import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFavorite,
  addFavorite,
} from '../../redux/favorite/favorite.slice';
import CarModal from '../CardModal/CardModal';
import { CardCar, Card, ImgCar, Btn, InfoCar,CardTitle,Accent,TitlePrice,AddInfo, CardBtn,AdditionalInfoListEllipsis } from './GalleryItem.styled';
// import sprite from '../Images/sprite.svg'
export const GalleryItem = ({ car }) => {
  const dispatch = useDispatch();
  const [isButtonClicked, setIsButtonClicked] = useState(
    () => localStorage.getItem(`favorite-${car.id}`) === 'true'
  );
  const strokeColor = isButtonClicked ? '#000' : '#3470ff';
  document.documentElement.style.setProperty(
    '--button-stroke-color',
    strokeColor
  );

  const [imgError, setImgError] = useState(false);
  const handleImgError = () => {
    setImgError(true);
  };

  const [showModal, setShowModal] = useState(false);

  const cityRegex = /,\s*([^,]+),\s*([^,]+)$/;

  const match = car.address.match(cityRegex);
  let city = null;
  let country = null;

  if (match) {
    city = match[1];
    country = match[2];
  } else {
    console.log('Unkown city or country');
  }

  const rentalPriceString = car.rentalPrice;
  const rentalPriceNumber = parseFloat(
    rentalPriceString.replace(/[^0-9.]/g, '')
  );

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
    localStorage.setItem(`favorite-${car.id}`, String(!isButtonClicked));

    if (isButtonClicked) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardCar>
        <Card>
          {car.img && !imgError ? (
            <>
              <ImgCar
                onError={handleImgError}
                src={car.img}
                alt={car.make + ' ' + car.model}
              />
            </>
          ) : imgError ? (
            <div>Failed to load image</div>
          ) : (
            <div>No image</div>
          )}
          <Btn type="button" onClick={handleButtonClick}>
          {/* <use href={sprite + "#icon-normal"}></use> */}
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
            <span></span>
            <li>{country}</li>
            <span></span>
            <li>{car.rentalCompany}</li>
            {rentalPriceNumber >= 30 && <p>Premium</p>}
            <span></span>
            <li>{car.type}</li>
            <span></span>
            <li>{car.model}</li>
            <span></span>
            <li>{car.mileage}</li>
            <span></span>
            <li>{car.accessories[0]}</li>
          </AdditionalInfoListEllipsis>
        </AddInfo>
        <CardBtn type="button" onClick={handleLearnMoreClick}>
          Learn more
        </CardBtn>
        {showModal && <CarModal car={car} onClose={closeModal} />}
      </CardCar>
    </>
  );
};
