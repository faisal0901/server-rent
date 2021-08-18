module.exports = (sequelize, dataTypes) => {
  const Country = sequelize.define(
    "Country",
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
      code: {
        type: dataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "country",
      timeStamps: false,
    }
  );
  return Country;
};
