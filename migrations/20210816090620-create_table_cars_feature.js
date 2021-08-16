"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cars_feature", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      feature_quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      feature_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    await queryInterface.addConstraint("cars_feature", {
      type: "foreign key",
      name: "cars_feature_foreign_key",
      fields: ["car_id"],
      references: {
        table: "cars",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cars_feature");
  },
};
