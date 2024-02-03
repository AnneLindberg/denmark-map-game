import { CityState, SET_CURRENT_CITY } from './cityTypes';
import cityData from '../data/CityData.json'; // Adjust the path as needed

// Initial state
const initialState: CityState = {
  currentCityIndex: 0,
  cities: cityData,
  lastGuessCorrect: false // New field to track if the last guess was correct
};

// Reducer function
const cityReducer = (state = initialState, action: any): CityState => {
  switch (action.type) {
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCityIndex: action.payload,
      };
      case 'SET_GUESS_CORRECTNESS':
        return {
          ...state,
          lastGuessCorrect: action.payload,
        };
    default:
      return state;
  }
};

export default cityReducer;
