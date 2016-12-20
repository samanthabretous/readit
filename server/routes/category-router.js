const router = require('express').Router()

const Category = require('../models').Category;
const Post = require('../models').Post;
const Vote = require('../models').Vote;


const getCategories = (req, res) =>{
  Category.findAll({include: Post})
  .then(category =>{res.send(category)})
  .catch(err => {res.sendStatus(500)})
}

const createCategory = (req, res) => {
  Category.create({
    category: req.body.category, 
  })
  .then( newCategory => res.send(newCategory))
  .catch(err => {res.sendStatus(500)})
}

const getOneCategory = (req, res) =>{
  Category.findById(req.params.id, {include: [{model: Post, include: Vote}]})
  .then(posts => {res.send(posts)})
  .catch(err => {res.sendStatus(500)})
}

const deleteCategory = (req, res) => {
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(()=> Category.findAll())
  .then(allCategories => res.send(allCategories))
  .catch(err => console.log(err))
}

router.route('/')
  .get(getCategories)
  .post(createCategory)
router.route('/:id')
  .get(getOneCategory)
  .delete(deleteCategory)

module.exports = router