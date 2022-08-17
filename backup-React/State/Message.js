import React from "react";
class Message extends React.Component{
   
   state={
    message:"Sushmitha"
   }
   ChangeMassegeHandler=()=>{
    this.setState({message:"daughter of Narayanaswamy"})
   }

    render(){
        return(
         <div>
            <h1>State Component</h1>
            <h2>Wish message:{this.state.message}</h2>
            <button onClick={this.ChangeMassegeHandler}>Change</button>
         </div>
        )
    }
}
export default Message