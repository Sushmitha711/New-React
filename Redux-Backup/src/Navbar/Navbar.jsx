import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to='/home' className='navbar-brand'>Redux Examples</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link to='/Counter' className="nav-link">Counter</Link></li>
                    <li className='nav-list'><Link to='/Message' className="nav-link">Message</Link></li>
                </ul>
            </div>
        </div>
    
    );
}

export default Navbar;
