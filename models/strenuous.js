module.exports = (sequelize, DataTypes) => {
  const Strenuous = sequelize.define("Strenuous", {
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Strenuous;
};
