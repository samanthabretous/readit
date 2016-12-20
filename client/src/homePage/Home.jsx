import React from 'react'
import PostCard from './PostCard'
import Ad from './Ad'


const Home = (props) =>{
  return (
    <div className="home">
    <section>
    {props.posts ?
      props.posts.map((post, index) =>(
        <PostCard key={index} index={index} post={post}/>
      ))
      : null
    }
    </section>
    <Ad/>
    </div>
  )
}

export default Home