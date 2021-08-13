module.exports = (sequelize, dataTypes) => {
  const City = sequelize.define(
    "City",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      country_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "city",
      timeStamps: false,
    }
  );
  return City;
};
