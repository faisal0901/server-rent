module.exports = (sequelize, dataTypes) => {
  const Token = sequelize.define(
    "Token",
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Token: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "token",
      timeStamps: false,
    }
  );
  return Token;
};
