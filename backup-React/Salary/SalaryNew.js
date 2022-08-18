import React from "react";
class SalaryNew extends React.Component{
   constructor(prop){
    super(prop)
    this.state={
          salary:20000,
          Basic_Salary:20000,
    }
   }
   hikeHandler=(value)=>{
    this.setState({salary:value})
   }
   
    render(){
        return(
            <div>
                <h1>Event Bindling Example</h1>
                <h1>Basic Salary:{this.state.Basic_Salary}</h1>
                <h1>Employee Salary:{this.state.salary}</h1>
                <button onClick={this.hikeHandler.bind(this,60000)}>Hike 200%</button>
                <button onClick={this.hikeHandler.bind(this,40000)}>Hike 100%</button>
                <button onClick={this.hikeHandler.bind(this,30000)}>Hike 50%</button>
                <button onClick={this.hikeHandler.bind(this,"No Hike")}>Hike-Zero%</button>

            </div>
        )
    }
}
export default SalaryNew