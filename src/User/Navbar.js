import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
    <nav className="navbar naavbar-dark bg-dark navbar-expand-lg">
        <link to="/home">React Router Example</link>
        <div className="ml-auto">
            <ul className="navbar-nav">
             <li><link to="/home">Home</link></li>  
             <li><link to="/About">About</link></li>   
             <li><link to="/User">User</link></li>   
           </ul>
        </div>
    </nav>
    )
}
export default Navbar