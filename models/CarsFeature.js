module.exports = (sequelize, dataTypes) => {
  const CarsFeature = sequelize.define(
    "CarsFeature",
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
      feature_quantity: {
        type: dataTypes.STRING,
        allowNull: true,
      },
      feature_image: {
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
      tableName: "cars_feature",
      timeStamps: true,
    }
  );
  return CarsFeature;
};
