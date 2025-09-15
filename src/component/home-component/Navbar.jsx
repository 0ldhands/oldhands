import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='box-border'>
            <li className='inline-block sm:mr-10 mr-5'><Link to='/'>Home</Link></li>
            <li className='inline-block sm:mr-10 mr-5'><Link to='/About'>About</Link></li>
            <li className='inline-block sm:mr-10 mr-5'><Link to='/Contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar