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
                    <li className='nav-list'><Link to='/product' className="nav-link">Product</Link></li>
                    <li className='nav-list'><Link to='/User' className="nav-link">User</Link></li>
                    <li className='nav-list'><Link to='/Post' className="nav-link">Post</Link></li>
                </ul>
            </div>
        </div>
    
    );
}

export default Navbar;
