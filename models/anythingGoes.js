module.exports = (sequelize, DataTypes) => {
  const AnythingGoes = sequelize.define("AnythingGoes", {
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return AnythingGoes;
};
