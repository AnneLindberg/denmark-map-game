import { createStore } from 'redux';
import cityReducer from './cityReducer';
import gameReducer from './gameReducer';

const store = createStore(cityReducer);

export default store;
