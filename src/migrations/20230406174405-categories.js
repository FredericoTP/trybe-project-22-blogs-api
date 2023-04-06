'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CategoriesTable = await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
    });

    return CategoriesTable;
  },

  down: async (queryInterface, _Sequelize) => await queryInterface.dropTable('categories'),
};
