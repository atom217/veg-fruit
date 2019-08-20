import { FETCH_FRUITS, NEW_FRUIT } from './types';
import axios from 'axios';

export const fetchFruits = () => dispatch => {
  axios.get('http://localhost:4000/fruit')
    .then(fruits => dispatch({
      type: FETCH_FRUITS,
      payload: fruits.data,
    }))
    .catch(function (error) {
      console.log(error);
    });
};

export const createFruit = (postData) => dispatch => {
  console.log('action create fruit');
  axios.post('http://localhost:4000/fruit/add', postData)
    .then(fruit => dispatch({
      type: NEW_FRUIT,
      payload: fruit,
    }));
}
