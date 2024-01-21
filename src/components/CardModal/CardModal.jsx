import React, { useEffect, useState } from 'react';

import {
  ModalOverlay,
  ModalContent,
  CloseBtn,
  RentalCarBtn,
  ModalImg,
  ModalInfo,
  Accent,
  InfoList,
  Line,
  Description,
  CardSubTitle,
  FunctionalitiesList,
  RentalList,
  BlueText,
  RentalItem,
  ConditionText,
} from './CardModal.styled';

export const CarModal = ({ car, onClose }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.classList.add('modalOpen');

    return () => {
      document.body.classList.remove('modalOpen');
    };
  }, []);

  const cityRegex = /,\s*([^,]+),\s*([^,]+)$/;
  const match = car.address.match(cityRegex);
  const city = match ? match[1] : null;
  const country = match ? match[2] : null;

  const rentalConditionsArray = car.rentalConditions
    .split('\n')
    .filter(Boolean);

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {car.img && !imgError ? (
          <ModalImg
            src={car.img}
            alt={`${car.make} ${car.model}`}
            onError={handleImgError}
          />
        ) : (
          <div>{imgError ? 'Failed to load image' : 'No image'}</div>
        )}
        <ModalInfo>
          <h3>
            {car.make} <Accent>{car.model}</Accent>, {car.year}
          </h3>
          <div>
            <InfoList>
              <li>{city}</li>
              {city && country && <Line></Line>}
              <li>{country}</li>
              {country && <Line></Line>}
              <li>Id: {car.id}</li>
              <Line></Line>
              <li>Year: {car.year}</li>
              <Line></Line>
              <li>Type: {car.type}</li>
              <li>Fuel Consumption: {car.fuelConsumption}</li>
              <Line></Line>
              <li>Engine Size: {car.engineSize}</li>
            </InfoList>
          </div>
          <Description>{car.description}</Description>
          <CardSubTitle>Accessories and functionalities:</CardSubTitle>
          <FunctionalitiesList>
            {[...car.accessories, ...car.functionalities].map((item, index) => (
              <React.Fragment key={index}>
                <li>{item}</li>
                {index !==
                  car.accessories.length + car.functionalities.length - 1 && (
                  <Line></Line>
                )}
              </React.Fragment>
            ))}
          </FunctionalitiesList>
          <CardSubTitle>Rental Conditions:</CardSubTitle>
          <RentalList>
            {rentalConditionsArray.map((condition, index) => (
              <RentalItem key={index}>
                <ConditionText>{condition}</ConditionText>
              </RentalItem>
            ))}
            <RentalItem>
              Mileage: <BlueText>{car.mileage / 1000}</BlueText>
            </RentalItem>
            <RentalItem>
              Price: <BlueText>{car.rentalPrice}</BlueText>
            </RentalItem>
          </RentalList>
          <RentalCarBtn href={`tel:+380730000000`}>Rental car</RentalCarBtn>
        </ModalInfo>
        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CarModal;
