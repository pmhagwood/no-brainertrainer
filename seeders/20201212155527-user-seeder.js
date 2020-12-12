"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        user: "MStuart90",
        password: "password",
        email: "mmooradian90@yahoo.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "mariabyler",
        password: "password",
        email: "mariabyler98@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "pmhagwood",
        password: "password",
        email: "pmhagwood@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "Rachelmoore2020",
        password: "password",
        email: "rachelmoore6822@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "duncangw1",
        password: "password",
        email: "duncangw1@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user: "DigitalAmnesia",
        password: "password",
        email: "mike@digitalamnesia.io",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
