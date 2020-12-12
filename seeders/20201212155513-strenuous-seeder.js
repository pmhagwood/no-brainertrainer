'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
      await queryInterface.bulkInsert('strenuous', [{
        quote: 'You Were Given This Life Because You Are Strong Enough To Live It.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'I Am Not What Happened To Me. I Am What I Choose To Become.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'Forget Your Past, Forgive Yourself, And Begin Again Right Now.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'Whenever You Find Yourself Doubting How Far You Can Go, Just Remember How Far You Have Come. Remember Everything You Have Faced, All The Battles You Have Won, And All The Fears You Have Overcome.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'Growth Is Painful. Change Is Painful. But Nothing Is As Painful As Staying Stuck Somewhere You Don’t Belong.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'I’ll Find Strength in Pain.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'You’re Allowed To Scream, You’re Allowed To Cry, But Do Not Give Up',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'I Am Strong Because I’ve Been Weak. I Am Fearless Because I’ve Been Afraid.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: 'Wake Up With Determination. Go To Bed With Satisfaction.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },{
        quote: ' The Strongest People Are Not Those Who Show Strength In Front Of Us But Those Who Win Battles We Know Nothing About.',
        createdAt: new date(),
        updatedAt: new Date()
      
      },

      
    ], 
      
      {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
