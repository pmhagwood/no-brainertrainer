// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };


'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userName: 'MStuart90',
      password: 'password',
      email: 'mmooradian90@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName: 'mariabyler',
      password: 'password',
      email: 'mariabyler98@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'pmhagwood',
      password: 'password',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'Rachelmoore2020',
      password: 'password',
      email: 'rachelmoore6822@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'duncangw10',
      password: 'password',
      email: 'duncangw1@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }{
      userName: 'DigitalAmnesia',
      password: 'password',
      email: 'mike@digitalamnesia.io',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
  ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
