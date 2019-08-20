import { FETCH_FRUITS, NEW_FRUIT } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FRUITS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_FRUIT:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}