// Define the city data type
export interface City {
    BYNAVN: string;
    latitude: number;
    longitude: number;
  }
  
  // Define the state structure
  export interface CityState {
    currentCityIndex: number;
    cities: City[];
    lastGuessCorrect: boolean; 
  }
  
  export interface Attemp {}
  // Define action types
  export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
  