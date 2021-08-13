module.exports = (sequelize, dataTypes) => {
  const Address = sequelize.define(
    "Address",
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
    },
    {
      tableName: "address",
      timeStamps: true,
    }
  );
  return Address;
};
