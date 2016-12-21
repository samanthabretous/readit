'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      validate : {
        len : [1,200]
      }
    },
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
        Post.belongsToMany(models.Category, {onDelete: 'CASCADE', through: 'post_category'})
      }
    }
  });
  return Post;
};