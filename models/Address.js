module.exports = (sequelize, dataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      street_name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      city_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },

      zipcode: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
      phone_number: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      mobile_number: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
      longtitude: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
      latitude: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
      longtitude: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
      note: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      cars_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "address",
      timeStamps: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Address;
};
