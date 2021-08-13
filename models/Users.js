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
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      profession: {
        allowNull: true,
        type: dataTypes.STRING,
      },
      avatar: {
        allowNull: true,
        type: dataTypes.STRING,
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timeStamps: false,
    }
  );
  return Users;
};
