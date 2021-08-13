"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cars", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      carName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carRealiseDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carEngine: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carGas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carHoursePower: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carCC: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
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
    queryInterface.addConstraint("cars", {
      type: "foreign key",
      name: "foreign_key_addres_id",
      fields: ["address_id"],
      references: {
        table: "address",
        field: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cars");
  },
};
