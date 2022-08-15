import React from "react"
class Navbar extends React.Component{
    render(){
        return <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <a href="#" className="navbar-brand">Creating Navbar Using Bootstrap</a>
                        <div classNama="ml-auto">
                           <ul className="navbar-nav">
                            <li className="nav-list"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-list"><a href="#" className="nav-link">Services</a></li>
                            <li className="nav-list"><a href="#" className="nav-link">About</a></li>
                           </ul>
                        </div>
             </nav>
             <div className="col-6">
             <div className="card">
                <div className="card-header">
                    <img src="https://m.economictimes.com/thumb/msid-91295238,width-1200,height-900,resizemode-4,imgsize-37668/rahul-reuters.jpg" height="250"/>
                </div>
                <div className="card-body">
                    <h1>Rahul Gandhi</h1>
                    <p>bdfgey wdfyu rfwyfy byudtfqr hfduyfr7w hdffuywt fDwgf67 NDHNF fdbhfgrffd </p>
                </div>
             </div>
             </div>
        </div>
    }
}
export default Navbar