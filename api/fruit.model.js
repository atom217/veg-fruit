const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Fruit
let Fruit = new Schema({
  fruit_name: {
    type: String
  },
  fruit_quantity: {
    type: Number
  }
}, {
    collection: 'fruits'
  });

module.exports = mongoose.model('Fruit', Fruit);