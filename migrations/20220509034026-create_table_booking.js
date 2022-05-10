"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("booking", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bankHolder: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      proofPayment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bankFrom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
      invoice_number: {
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

    await queryInterface.addConstraint("booking", {
      type: "foreign key",
      name: "booking_car_id",
      fields: ["car_id"],
      references: {
        table: "cars",
        field: "id",
      },
      onDelete: "restrict",
      onUpdate: "restrict",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("booking");
  },
};