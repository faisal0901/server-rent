"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("city", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country_id: {
        type: Sequelize.INTEGER,
      },
    });
    // await queryInterface.createTable("city", {
    //   name: "country_foreign_key",
    //   type: "foreign key",
    //   fields: ["country_id"],
    //   references: {
    //     table: "country",
    //     field: "id",
    //   },
    // });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("city");
  },
};
