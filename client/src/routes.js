import React from 'react'
import {Route, IndexRoute} from 'react-router'
import HomeContainer from './homePage/homeContainer'
import PostsContainer from './posts/postsContainer'
import Nav from './homePage/Nav'


import store from './store'
import {getPostsAysnc} from './homePage/homeActions'
const getPosts = () => { store.dispatch(getPostsAysnc())}

export default (
  <Route path="/" component={Nav}>
    <IndexRoute onEnter={getPosts} component={HomeContainer} />
    <Route path="posts/:category" component={PostsContainer} />
  </Route> 
);