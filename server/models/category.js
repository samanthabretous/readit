'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Category.belongsToMany(models.Post, {onDelete: 'CASCADE',through: 'post_category'})
      }
    }
  });
  return Category;
};