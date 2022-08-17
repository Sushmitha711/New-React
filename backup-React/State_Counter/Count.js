import React from "react"
class Count extends React.Component{

    state={
    qty:1,
   }
   decrHandler=()=>{
    this.setState({qty:this.state.qty-1})
   }
   incrHandler=()=>{
this.setState({qty:this.state.qty+1})
   }
   
    render(){
        return(
            <div>
                <h1>Counter Example</h1>
                <>&nbsp;&nbsp;&nbsp;</>
                <button onClick={this.incrHandler}>Plus</button>
                <>&nbsp;&nbsp;&nbsp;</>
                <span>item:{this.state.qty}</span>
                <button onClick={this.decrHandler}>minus</button>
            </div>
        )
    }
}
export default Count