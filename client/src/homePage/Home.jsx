import React from 'react'
import PostCard from './PostCard'


const Home = (props) =>{
  return (
    <div className="home">
    {props.posts ?
      props.posts.map((post, index) =>(
        <PostCard key={index} upCount={post.upCount} downCount={post.downCount} index={index} PostId={post.id}title={post.title} body={post.body}/>
      ))
      : null
    }
    </div>
  )
}

export default Home