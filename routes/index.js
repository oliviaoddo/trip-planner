const route = require("express").Router();
const models = require('../models');

route.get("/", (req, res) => {
    var outerScopeContainer = {};
    models.Hotel.findAll()
    .then(function(hotels){

    })
  res.render("index.html");
});

module.exports = route;
