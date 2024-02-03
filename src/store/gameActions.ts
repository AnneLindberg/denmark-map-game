import { SET_CURRENT_GAME } from './gameTypes';

// Action to set the current city index
export const setAmountOfAttempts = (index: number) => ({
  type: SET_CURRENT_GAME,
  payload: index,
});
