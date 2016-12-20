const router = require('express').Router()

const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;

const getComments = (req, res) =>{
  Comment.findAll()
  .then(comment =>{res.send(comment)})
  .catch(err => {res.sendStatus(500)})
}
const createComment = (req, res) => {
  console.log(req.body)
  Comment.create({
    comment: req.body.comment
  })
  .then( newComment => res.send(newComment))
  .catch(err => {res.sendStatus(500)})
}

const deleteComment = (req, res) => {
  Comment.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=> Comment.findAll())
  .then(allComments => res.send(allComments))
  .catch(err => console.log(err))
}

router.route('/')
  .get(getComments)
  .post(createComment)
router.route('/:id')
  .delete(deleteComment)

module.exports = router