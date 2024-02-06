import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-container">
                <div className="brand">
                    <Link to="/">World of movies</Link>
                </div>
                <ul className='navbar'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/watchlist">Watch-List</Link>
                    </li>
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>
                </ul>
            </div>
        </div>
      
    </header>
  )
}

export default Navbar
