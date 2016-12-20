const router = require('express').Router()

const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;

const getVotes = (req, res) =>{
  Vote.findAll()
  .then(votes =>{res.send(votes)})
  .catch(err => {res.sendStatus(500)})
}
const createVote = (req, res) => {
  console.log(req.body)
  Vote.create({
    vote: req.body.vote,
    PostId: req.body.PostId
  })
  .then(()=> Post.findAll({include: [Comment, Vote]}))
  .then(posts =>{res.send(posts)})
  .catch(err => {res.sendStatus(500)})
}

const deleteVote = (req, res) => {
  Vote.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=> Vote.findAll())
  .then(allVotes => res.send(allVotes))
  .catch(err => console.log(err))
}

router.route('/')
  .get(getVotes)
  .post(createVote)
router.route('/:id')
  .delete(deleteVote)

module.exports = router