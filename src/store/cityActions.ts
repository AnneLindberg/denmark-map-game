import { SET_CURRENT_CITY } from './cityTypes';

// Action to set the current city index
export const setCurrentCity = (index: number) => ({
  type: SET_CURRENT_CITY,
  payload: index,
});
