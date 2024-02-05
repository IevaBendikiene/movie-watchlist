import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-cotainer">
                <div className="brand">
                    <Link to="/">Watchlist</Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/watchlist">Watch List</Link>
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
