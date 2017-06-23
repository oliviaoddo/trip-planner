const db = require("./db");
const Sequelize = require("sequelize");

// Require your models
// Make associations etc


const Place = db.define('place',{
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING
    },
    state:{
        type: Sequelize.STRING
    },
    phone:{
        type: Sequelize.STRING
    },
    location:{
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
});

const Hotel = db.define('hotel',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    num_stars: {
        type: Sequelize.FLOAT
    },
    amenities:{
        type: Sequelize.STRING
    }
});

const Restaurant = db.define('restaurant',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type:Sequelize.INTEGER
    }
});


const Activity = db.define('activity',{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING
    }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
  db,
  Hotel,
  Restaurant,
  Activity,
  Place
};
