import React from 'react';
import $ from 'jquery';
import {sortPost, GET_ALL_POSTS} from './homeActions'
import store from '../store';


const PostCard = props => {
  let handleVote = (vote, PostId) => {
    console.log("click")
    $.ajax({
      url: '/api/vote', 
      type: 'post',
      data: {
        vote,
        PostId
      }
    })
    .done(data => {
      store.dispatch({
        type: GET_ALL_POSTS, 
        posts: sortPost(data)
      })
    })
  }
  return (
    <article className="postCard">
      <h2>{props.index}</h2>
      <div className="icons">
        <span onClick={()=>handleVote(true, props.PostId)}>⬆</span>
        <span>{props.upCount}</span>
        <span>{props.downCount}</span>
        <span onClick={()=>handleVote(false, props.PostId)}>⬇</span>
      </div>
      <div className="postInfo">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </article>
  )
}

export default PostCard
