const express = require('express');
const fruitRoutes = express.Router();

// Require Fruit model in our routes module
let Fruit = require('./fruit.model');

// Defined store route
fruitRoutes.route('/add').post(function (req, res) {
  let fruit = new Fruit(req.body);
  fruit.save()
    .then(fruit => {
      res.status(200).json({ 'fruit': 'Fruit in added successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("Unable to save to database");
    });
});

// Defined get data(index or listing) route
fruitRoutes.route('/').get(function (req, res) {
  Fruit.find(function (err, fruit) {
    if (err) {
      return console.log(err);
    }
    else {
      return res.json(fruit);
    }
  });
});

// Defined edit route
fruitRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Fruit.findById(id, function (err, fruit) {
    res.json(fruit);
  });
});

//  Defined update route
fruitRoutes.route('/update/:id').post(function (req, res) {
  Fruit.findById(req.params.id, function (err, fruit) {
    if (!fruit)
      res.status(404).send("Data is not found");
    else {
      fruit.fruit_name = req.body.fruit_name;
      fruit.fruit_quantity = req.body.fruit_quantity;

      fruit.save().then(business => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("Unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
fruitRoutes.route('/delete/:id').get(function (req, res) {
  Fruit.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = fruitRoutes;