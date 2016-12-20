import React from 'react'
import {Link} from 'react-router'

const Nav = (props) => {
  return (
    <div>
      <section className="outerNav">
        <nav>
          <Link to="/" className="homeLink">Readit</Link>
          <div className='links'>
            <Link className={props.params.category === 'hot' ? "activeLink" : null} to="/posts/hot">hot</Link>
            <Link className={props.params.category === 'new' ? "activeLink" : null} to="/posts/new">new</Link>
            <Link className={props.params.category === 'rising' ? "activeLink" : null } to="/posts/rising">rising</Link>
          </div>
        </nav>
      </section>
      {props.children}
    </div>
  )
}

export default Nav