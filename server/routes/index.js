const post = require('./post-router')
const comment = require('./comment-router')
const vote = require('./vote-router')
const category = require('./category-router')

module.exports = {
  routes: {
    post, 
    comment,
    vote, 
    category
  }
}