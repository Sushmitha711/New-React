import React from "react";
import CompA from "./Components/Component/CompA"
import Navbar from "./Components/Navbar/Navbar";
class App extends React.Component{


  render()
  {
    return <div>
      <Navbar/>
      <CompA/>
    </div>
  }
}
export default App