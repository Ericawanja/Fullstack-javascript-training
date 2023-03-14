import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='about'>About</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Nav