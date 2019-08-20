const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Fruit
let Vegetable = new Schema({
  vegetable_name: {
    type: String
  },
  vegetable_quantity: {
    type: Number
  }
}, {
    collection: 'vegetables'
  });

module.exports = mongoose.model('Vegetable', Vegetable);