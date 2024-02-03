import React, { useState } from 'react';
import './App.css';
import MapComponent from './Components/MapComponent';
import CityPicker from './Components/CityPicker';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path as needed
import FeedbackComponent
 from './Components/FeedbackComponent';
function App() {

  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="map-container">
        <MapComponent />
        </div>
        <div className="city-container">
          <CityPicker />
        <FeedbackComponent />
        </div>
      </div>
    </Provider>
  );
}
export default App;