module.exports = (sequelize, DataTypes) => {
  const Nightmare = sequelize.define("Nightmare", {
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Nightmare;
};
