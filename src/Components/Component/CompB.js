import React from "react"
import CompA from "./CompA"
class CompB extends React.Component{
   render(){ 
    return(
        <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <pre>{this.props.message}</pre>
             <hr/>
            <pre>{this.props.details}</pre>
            <h2>Extracting data from class</h2>
            <h3>{this.props.message}</h3>
            <pre>{this.props.Massege}</pre>
            <pre>{this.props.Details.id}</pre>
            <pre>{this.props.Details.Role}</pre>
            <pre>{this.props.Details.Salary}</pre>
           </div>
    )
}
}
export default CompB