const router = require('express').Router()

const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;
const Category = require('../models').Category;

const getPosts = (req, res) =>{
  Post.findAll({include: [Comment, Vote, Category]})
  .then(posts =>{res.send(posts)})
  .catch(err => {res.sendStatus(500)})
}
const createPost = (req, res) => {
  console.log(req.body)
  Post.create({
    title: req.body.title, 
    body: req.body.body, 
    image: req.body.image
  })
  .then(newPost => {
    console.log(req.body.category)
    newPost.addCategories(req.body.category)
  })
  .then( newPost => res.send(newPost))
  .catch(err => {res.sendStatus(500)})
}

const getPost = (req, res) =>{
  Post.findById(req.params.id, {include: [Category, Comment, Vote]})
  .then( newPost => res.send(newPost))
  .catch(err => {res.sendStatus(500)})
}

const deletePost = (req, res) => {
  Post.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=> Post.findAll())
  .then(allPosts => res.send(allPosts))
  .catch(err => console.log(err))
}
const voteOrder = (req, res) => {
  
}

router.route('/')
  .get(getPosts)
  .post(createPost)
router.route('/:id')
  .get(getPost)
  .delete(deletePost)
router.route('/voteOrder')
  .get(voteOrder)

module.exports = router