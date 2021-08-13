module.exports = (sequelize, dataTypes) => {
  const Cars = sequelize.define(
    "Cars",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      carName: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      carRealiseDate: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      carEngine: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      carGas: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      carHoursePower: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      carCC: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      address_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: dataTypes.INTEGER,
      },
    },
    {
      tableName: "cars",
      timeStamps: true,
    }
  );
  return Cars;
};
