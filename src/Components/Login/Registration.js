import React from "react";
class Registration extends React.Component{
constructor(props){
  super(props)
  this.state={
    name:"",
    email:"",
    password:""
  }
}
    render(){
        return(
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h1>Registration form</h1>
                </div>
                <div className="card-body">
                  <form className="form-group">
                    <input type="text" placeholder="Name" className="form-control"/><br/>
                    <input type="email" placeholder="Email" className="form-control"/><br/>
                    <input type="password" placeholder="Password" className="form-control"/><br/>
                    <input type="submit" className="form-control btn btn-success" value="Registration"  />
                  </form>
                 
                </div>
              </div>
            </div>
          </div>
          </div>
        )
        
    }
}
export default Registration