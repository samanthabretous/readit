import React from 'react'
import {Link} from 'react-router'

const Ad = () => {
  return (
    <section className='ad'>
    <input placeholder="search"/>
      <img src="/gameofbands.png" />
      <p>Submit a new link</p>
      <p><Link to='/newPost'>Submit a new text post</Link></p>
      <img src="/amazonad.png" />
    </section>
  )
}
export default Ad