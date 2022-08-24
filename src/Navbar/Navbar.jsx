import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
       <nav className='navbar navbar-dark bg-dark'>
        <div>
            <Link to="/" className="navbar-brand">Contact App Example</Link>
        </div>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link to="/ContactApp" className="nav-link">ContactApp</Link></li>
             
            </ul>
        </div>
       </nav>
    );
}

export default Navbar;
