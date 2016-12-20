'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: {
      type :DataTypes.STRING(2000),
    },
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Post.hasMany(models.Vote),
        Post.hasMany(models.Comment)
        Post.belongsToMany(models.Category, {through: 'post_category'})
      }
    }
  });
  return Post;
};