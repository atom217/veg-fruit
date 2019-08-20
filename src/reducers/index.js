import { combineReducers } from 'redux';
import fruitReducer from './fruitReducer';
import vegetableReducer from './vegetableReducer';

export default combineReducers({
  fruits: fruitReducer,
  vegetables: vegetableReducer
});