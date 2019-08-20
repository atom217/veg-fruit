import { FETCH_VEGETABLES, NEW_VEGETABLE } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_VEGETABLES:
      return {
        ...state,
        items: action.payload
      };
    case NEW_VEGETABLE:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}