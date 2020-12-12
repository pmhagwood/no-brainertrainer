"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Nightmares",
      [
        {
          quote:
            "The more you sweat in training, the less you bleed in combat. --Navy SEAL’s",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The pain of discipline is nothing like the pain of disappointment --Justin Langer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Shut up and train",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "I don’t care what you USED to bench. --Serge Ceralde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "The fight is won or lost far away from witnesses, behind the lines, in the gym, and out there on the road, long before I dance under those lights. --Muhammad Ali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "When you come to the end of your rope, tie a knot and hang on. -- Franklin D. Roosevelt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Not everyone is capable of madness; and of those lucky enough to be capable, not many have the courage for it.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Pain is weakness leaving the body",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote: "Go Hard, or Go Home",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          quote:
            "Take care of your body. It’s the only place you have to live. --Jim Rohn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
