import React from 'react'
import $ from 'jquery'
import store from '../store'
import {getAllPosts, sortPost} from '../homePage/homeActions'
import PostCard from '../homePage/PostCard'
import Ad from '../homePage/Ad'

const Posts = props => {
  return (
    <div className='postPage'>
      <section>
        {props.posts && props.posts.map((post, index) => <PostCard key={index} index={index} post={post}/>
        )}
        </section>
      <Ad />
    </div>
  )
  
}

export default Posts