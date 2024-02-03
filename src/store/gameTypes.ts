// Define the game data type
export interface Game {
    ID: number;
    score: number;
  }
  
  // Define the state structure
  export interface GameState {
    currentCityIndex: number;
    cities: Game[];
    lastGuessCorrect: boolean; 
  }
  
  export const SET_CURRENT_GAME = 'SET_CURRENT_GAME';
  