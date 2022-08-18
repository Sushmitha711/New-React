import React from "react";
class Salary extends React.Component{
    constructor(props){
        super(props)
    this.state={
        Salary:10000,
    }
}
    hike200Handler=()=>{
       this.setState({Salary:30000})
    }
    hike100Handler=()=>{
        this.setState({Salary:20000})
    }
    hike50Handler=()=>{
        this.setState({Salary:15000})
    }
    hikeZeroHandler=()=>{
        this.setState({Salary:"No Hike"})
    }
    render(){
        return(
            <div>
                <h1>List Render</h1>
                <h1>Employee Salary:{this.state.Salary}</h1>
                <button onClick={this.hike200Handler}>Hike 200%</button> 
                <button onClick={this.hike100Handler}>hike 100%</button>
                <button onClick={this.hike50Handler}>hike 50%</button>
                <button onClick={this.hikeZeroHandler}>hike-Zero%</button>
            </div>
        )
    }
}
export default Salary