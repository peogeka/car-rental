import React, { useEffect, useState } from 'react';

import { ModalOverlay } from './CardModal.styled';



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
      <div onClick={e => e.stopPropagation()}>
        {car.img && !imgError ? (
          <img
            src={car.img}
            alt={`${car.make} ${car.model}`}
            onError={handleImgError}
          />
        ) : (
          <div>{imgError ? 'Failed to load image' : 'No image'}</div>
        )}
        <div>
          <h3>
            {car.make} <span>{car.model}</span>, {car.year}
          </h3>
          <div>
            <ul>
              <li>{city}</li>
              {city && country && <span></span>}
              <li>{country}</li>
              {country && <span></span>}
              <li>Id: {car.id}</li>
              <span></span>
              <li>Year: {car.year}</li>
              <span></span>
              <li>Type: {car.type}</li>
              <li>Fuel Consumption: {car.fuelConsumption}</li>
              <span></span>
              <li>Engine Size: {car.engineSize}</li>
            </ul>
          </div>
          <p>{car.description}</p>
          <p>Accessories and functionalities:</p>
          <ul>
            {[...car.accessories, ...car.functionalities].map((item, index) => (
              <React.Fragment key={index}>
                <li>{item}</li>
                {index !==
                  car.accessories.length + car.functionalities.length - 1 && (
                  <span></span>
                )}
              </React.Fragment>
            ))}
          </ul>
          <p>Rental Conditions:</p>
          <ul>
            {rentalConditionsArray.map((condition, index) => (
              <li key={index}>
                <span>{condition}</span>
              </li>
            ))}
            <li>
              Mileage: <span>{car.mileage / 1000}</span>
            </li>
            <li>
              Price: <span>{car.rentalPrice}</span>
            </li>
          </ul>
          <a href={`tel:+380730000000`}>Rental car</a>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </ModalOverlay>
    
  );
};

export default CarModal;
