import { combineReducers } from 'redux';
import * as recipesReducer from './recipesReducer';

const rootReducer = combineReducers({
  recipesReducer
});

export default rootReducer;
