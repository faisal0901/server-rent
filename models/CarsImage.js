module.exports = (sequelize, dataTypes) => {
  const CarsImage = sequelize.define(
    "CarsImage",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      car_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      image: {
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
      tableName: "cars_image",
      timeStamps: true,
    }
  );
  return CarsImage;
};
