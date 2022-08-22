import React, { Fragment } from "react";
import User from "./User/User"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./User/Home";
import Services from "./User/Services";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
class App extends React.Component{


    render(){
        return(
       <Fragment>
        <Router>
          <Navbar/>
        
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/About" component={Services}/>
          <Route path="/User" component={User}/>

        </Switch>
        </Router>
       </Fragment>
        )
    }
}
export default App