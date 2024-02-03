import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCity } from '../store/cityActions'; // Adjust the import path as needed
import { CityState } from '../store/cityTypes'; // Adjust the import path as needed

const CityPicker: React.FC = () => {
  const dispatch = useDispatch();
  const currentCityIndex = useSelector((state: CityState) => state.currentCityIndex);
  const cities = useSelector((state: CityState) => state.cities);
  const currentCity = cities[currentCityIndex];

  const showNextCity = () => {
    const nextIndex = (currentCityIndex + 1) % cities.length;
    dispatch(setCurrentCity(nextIndex));
  };

  return (
    <div className="city-picker">
      <div className="city-name">
        <h2>{currentCity?.BYNAVN}</h2>
        <button onClick={showNextCity}>Next City</button>
      </div>
    </div>
  );
};

export default CityPicker;
