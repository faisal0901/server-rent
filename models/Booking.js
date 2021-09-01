module.exports = (sequelize, dataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fullName: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      bankHolder: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      bankFrom: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      proofPayment: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      car_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      phoneNumber: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      payment_status: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      invoice_number: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: dataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: dataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "booking",
      timeStamps: true,
    }
  );
  return Booking;
};
