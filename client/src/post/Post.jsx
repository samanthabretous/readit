import React from 'react'
import Comment from './Comment'

const Post = (props) => {
  return  (
    <div>
      {props.post && 
        <article>
          <h1>{props.post.title}</h1>
          {props.post.image && <img src={props.post.image}/> }
          <div>
            <h2>all {props.post.Comments ? props.post.Comments.length : 0} comments</h2>
            {props.post.Comments ? props.post.Comments.map((comment, index) => {
              return <Comment key={index} comment={comment.comment}/>
            }) : <h3>Loading</h3>}
          </div>
        </article>
      }
    </div>
  )
}
export default Post