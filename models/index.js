"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Cars = require("../models/Cars")(sequelize, Sequelize);
db.CarsImage = require("../models/CarsImage")(sequelize, Sequelize);
db.CarsFeature = require("../models/CarsFeature")(sequelize, Sequelize);
db.Address = require("../models/Address")(sequelize, Sequelize);
db.City = require("../models/City")(sequelize, Sequelize);
db.Country = require("../models/Country")(sequelize, Sequelize);
db.Rating = require("../models/Rating")(sequelize, Sequelize);
db.Users = require("../models/Users")(sequelize, Sequelize);
db.Booking = require("../models/Booking")(sequelize, Sequelize);
db.Cars.hasMany(db.CarsImage, {
  foreignKey: "car_id",
});
db.Cars.hasMany(db.CarsFeature, {
  foreignKey: "car_id",
});
db.Cars.hasMany(db.Address, {
  foreignKey: "cars_id",
});
db.Address.belongsTo(db.City, {
  foreignKey: "city_id",
});
db.City.belongsTo(db.Country, {
  foreignKey: "country_id",
});
db.Rating.belongsTo(db.Users, {
  foreignKey: "user_id",
});
db.Booking.belongsTo(db.Cars, {
  foreignKey: "car_id",
});
db.Booking.belongsTo(db.Users, {
  foreignKey: "user_id",
});
module.exports = db;
