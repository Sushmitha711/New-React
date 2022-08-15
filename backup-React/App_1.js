import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Employee from "./Components/Employee"
class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <h1>Rahul Gandhi</h1>
        <Employee/>
      </div>
    )
  }
}
export default App