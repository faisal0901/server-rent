"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rating", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
    await queryInterface.addConstraint("rating", {
      type: "foreign key",
      name: "rating_user_foreign_key",
      fields: ["user_id"],
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("rating", {
      type: "foreign key",
      name: "rating_cars_foreign_key",
      fields: ["car_id"],
      references: {
        table: "cars",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rating");
  },
};