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
    },
    {
      tableName: "country",
      timeStamps: false,
    }
  );
  return Country;
};
