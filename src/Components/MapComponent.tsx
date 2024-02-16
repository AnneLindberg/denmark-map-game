import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import greenPin from '../assets/greenPin.png'; 
import redPin from '../assets/redPin.png';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCity } from '../store/cityActions'; 
import { CityState } from '../store/cityTypes';


const MapComponent: React.FC = () => {
  const dispatch = useDispatch();
  const currentCityIndex = useSelector((state: CityState) => state.currentCityIndex);
  const cities = useSelector((state: CityState) => state.cities);
  const currentCity = cities[currentCityIndex];

  const [markerPosition, setMarkerPosition] = useState<L.LatLng | null>(null);
  const [showCorrectLocation, setShowCorrectLocation] = useState(false);
  const [attempts, setAttempts] = useState(0); 
  const [isGuessCorrect, setIsGuessCorrect] = useState(false);

  //Pen icons 
  const greenPinIcon = L.icon({
    iconUrl: greenPin,
    iconSize: [25, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const redPinIcon = L.icon({
    iconUrl: redPin,
    iconSize: [25, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  
  useEffect(() => {
    setShowCorrectLocation(false);
    setIsGuessCorrect(false);
    setAttempts(0); // Also reset attempts when city changes
  }, [currentCityIndex]);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        const guessLatLng = e.latlng;
        const cityLatLng = L.latLng(currentCity.latitude, currentCity.longitude);
        setMarkerPosition(guessLatLng);

        const radius = 10000; // Radius for correct guess (in meters)
        if (guessLatLng.distanceTo(cityLatLng) <= radius) {
          dispatch({ type: 'SET_GUESS_CORRECTNESS', payload: true });
          dispatch(setCurrentCity((currentCityIndex + 1) % cities.length));
          setIsGuessCorrect(true); // Set guess as correct
          setAttempts(0); // Reset attempts for the next city
        } else {
          dispatch({ type: 'SET_GUESS_CORRECTNESS', payload: false });
          setIsGuessCorrect(false); // Set guess as incorrect
          setAttempts((prevAttempts) => prevAttempts + 1); // Increment attempts here
        }
      },
    });
    return null;
  };

  return (
    <div className="map-wrapper">
      <div className="map-controls">
      {attempts >= 5 && (
          <button onClick={() => setShowCorrectLocation(!showCorrectLocation)}>
            {showCorrectLocation ? "Hide Correct Location" : "Show Correct Location"}
          </button>
        )}
      </div>
      <MapContainer 
        center={[40, 20]} // Adjust as needed
        zoom={9}
        style={{ height: '100%', width: '60%' }}
        maxBounds={L.latLngBounds(L.latLng(54.5, 8.0), L.latLng(57.8, 12.6))}
        minZoom={8.1}
        maxZoom={8.1}
        maxBoundsViscosity={1.5}
        zoomControl={false} // Disable zoom control
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        />
        {showCorrectLocation && currentCity && (
          <Marker 
            position={[currentCity.latitude, currentCity.longitude]} 
            icon={isGuessCorrect ? redPinIcon : greenPinIcon} // Use green pin if guess is correct, else red
          />
        )}
        {markerPosition && <Marker position={markerPosition} icon={isGuessCorrect ? greenPinIcon : redPinIcon}  />}
        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default MapComponent;