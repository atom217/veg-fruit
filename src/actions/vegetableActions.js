import { FETCH_VEGETABLES, NEW_VEGETABLE } from './types';
import axios from 'axios';

export const fetchVegetables = () => dispatch => {
  axios.get('http://localhost:4000/vegetable')
    .then(data => dispatch({
      type: FETCH_VEGETABLES,
      payload: data.data,
    }))
    .catch(function (error) {
      console.log(error);
    });
};

export const createVegetable = (postData) => dispatch => {
  console.log('action create vegetable');
  axios.post('http://localhost:4000/vegetable/add', postData)
    .then(fruit => dispatch({
      type: NEW_VEGETABLE,
      payload: fruit,
    }));
}
