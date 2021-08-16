module.exports = (sequelize, dataTypes) => {
  const Rating = sequelize.define(
    "Rating",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      note: {
        type: dataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "rating",
      timeStamps: false,
      createdAt: false,

      updatedAt: false,
    }
  );
  return Rating;
};
