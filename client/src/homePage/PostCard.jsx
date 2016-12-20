import React from 'react';
import {Link, IndexLink} from 'react-router'
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
      console.log(props.post.Comments)
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
        <span className="vote" onClick={()=>handleVote(true, props.post.id)}>⬆</span>
        <div className="count">
          <span>{props.post.upCount}</span>
          <span>{props.post.downCount}</span>
        </div>
        <span className="vote" onClick={()=>handleVote(false, props.PostId)}>⬇</span>
      </div>
      <div className="postCardImage">{props.post.image ? <img src={props.post.image}/> : <div className="circle"></div>}</div>
      <div className="postInfo">
        <h2><Link to={'/post/' + props.post.id}>{props.post.title}</Link></h2>
        <p>submitted {props.post.createdAt}</p>
        <div className="fakeLinks">
          <p>{props.post.Comments ? props.post.Comments.length : 0} comments</p>
          <p>share</p>
          <p>save</p>
          <p>hide</p>
          <p>report</p>
        </div>
      </div>
    </article>
  )
}

export default PostCard
