import React from 'react'
import {Route, IndexRoute} from 'react-router'
import HomeContainer from './homePage/homeContainer'
import PostsContainer from './posts/postsContainer'
import PostContainer from './post/postContainer'
import FormContainer from './newPost/FormContainer'
import Nav from './homePage/Nav'


import store from './store'
//homePage
import {getPostsAysnc} from './homePage/homeActions'
const getPosts = () => { store.dispatch(getPostsAysnc())}

//categoryPage
import {getCategoryAysnc} from './posts/postsActions'
const getCategory = (nextState) => { 
  store.dispatch(getCategoryAysnc(nextState.params.category))
}
//postPage
import {getPostAysnc} from './post/postActions'
const getPost = (nextState) => { 
  store.dispatch(getPostAysnc(nextState.params.post))
}

//formPage
import {getAllCategoryAysnc} from './newPost/formActions'
const getCategories = () => { store.dispatch(getAllCategoryAysnc())}

export default (
  <Route path="/" component={Nav}>
    <IndexRoute onEnter={getPosts} component={HomeContainer} />
    <Route path="category/:category" component={PostsContainer} onEnter={getCategory}/>
    <Route path="post/:post" component={PostContainer} onEnter={getPost}/>
    <Route path="newPost" onEnter={getCategories}component={FormContainer} />
  </Route> 
);