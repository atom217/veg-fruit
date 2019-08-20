const express = require('express');
const vegetableRoutes = express.Router();

// Require Vegetable model in our routes module
let Vegetable = require('./vegetable.model');

// Defined store route
vegetableRoutes.route('/add').post(function (req, res) {
  let vegetable = new Vegetable(req.body);
  vegetable.save()
    .then(vegetable => {
      res.status(200).json({ 'vegetable': 'Vegetable in added successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("Unable to save to database");
    });
});

// Defined get data(index or listing) route
vegetableRoutes.route('/').get(function (req, res) {
  Vegetable.find(function (err, vegetable) {
    if (err) {
      return console.log(err);
    }
    else {
      return res.json(vegetable);
    }
  });
});

// Defined edit route
vegetableRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Vegetable.findById(id, function (err, vegetable) {
    res.json(vegetable);
  });
});

//  Defined update route
vegetableRoutes.route('/update/:id').post(function (req, res) {
  Vegetable.findById(req.params.id, function (err, vegetable) {
    if (!vegetable)
      res.status(404).send("data is not found");
    else {
      vegetable.vegetable_name = req.body.vegetable_name;
      vegetable.vegetable_quantity = req.body.vegetable_quantity;

      vegetable.save().then(business => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
vegetableRoutes.route('/delete/:id').get(function (req, res) {
  Vegetable.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = vegetableRoutes;