module.exports = (sequelize, dataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user: {
        allowNull: false,
        type: dataTypes.STRING,
      },
      profession: {
        allowNull: true,
        type: dataTypes.STRING,
      },
      avatar: {
        allowNull: true,
        type: dataTypes.STRING,
      },
    },
    {
      tableName: "users",
      timeStamps: true,
    }
  );
  return Users;
};
