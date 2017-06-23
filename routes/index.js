const route = require("express").Router();
const models = require('../models');

route.get("/", (req, res, next) => {
    var outerScopeContainer = {};
    models.Hotel.findAll()
    .then(function (dbHotels) {
      outerScopeContainer.dbHotels = dbHotels;
      return models.Restaurant.findAll();
    })
    .then(function (dbRestaurants) {
      outerScopeContainer.dbRestaurants = dbRestaurants;
      return models.Activity.findAll();
    })
    .then(function (dbActivities) {
      res.render('index', {
        templateHotels: outerScopeContainer.dbHotels,
        templateRestaurants: outerScopeContainer.dbRestaurants,
        templateActivities: dbActivities
      });
    })
    .catch(next);
});

module.exports = route;
