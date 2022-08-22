import React from "react"
import { Link } from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar naavbar-dark bg-dark navbar-expand-lg">
                <Link to="/home" className="navbar-brand">React Router Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                     <li className="nav-link"><Link to="/home" className="nav-list">Home</Link></li>  
                     <li className="nav-link"><Link to="/About" className="nav-list">About</Link></li>   
                     <li className="nav-link"><Link to="/User" className="nav-list">User</Link></li>   
                   </ul>
                </div>
            </nav>
            )
        }
}
export default Navbar