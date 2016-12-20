import React from 'react'
import {Link, IndexLink} from 'react-router'

const Nav = (props) => {
  return (
    <div>
      <section className="outerNav">
        <nav>
          <IndexLink to="/" className="homeLink">
            <img src='/readitLogo.png' />
          </IndexLink>
          <div className='links'>
            <Link className={props.params.category == '1' ? "activeLink" : null} to="/category/1">hot</Link>
            <Link className={props.params.category == '2' ? "activeLink" : null} to="/category/2">new</Link>
            <Link className={props.params.category === '3' ? "activeLink" : null } to="/category/3">rising</Link>
            <Link className={props.params.category === '4' ? "activeLink" : null } to="/category/4">controversial</Link>
            <Link className={props.params.category === '5' ? "activeLink" : null } to="/category/5">top</Link>
          </div>
        </nav>
      </section>
      {props.children}
    </div>
  )
}

export default Nav