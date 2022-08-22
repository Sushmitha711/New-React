import React from "react";
class Login extends React.Component{
 state={
    name:"",
    email:"",
    mobile:"",
 }
 
 
    nameHandler=(event)=>{
  this.setState({name:event.target.value})
 }
 emailHandler=(event)=>{
  this.setState({email:event.target.value})
 }
 mobileHandler=(event)=>{
this.setState({mobile:event.target.value})
 }
 submitHandler=(event)=>{
  event.preventDefault();
  console.log(this.state)
 }
 
    render(){
    return(
        <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <h1>Login form</h1>
                <label>Name</label>
                <input type="text" onChange={this.nameHandler}/><br/><br/>
                <label>E-mail</label>
                <input type="email" onChange={this.emailHandler}/><br/><br/>
                <label>Mobile-No</label>
                <input type="number" onChange={this.mobileHandler} /><br/><br/>
                <input type="submit" value="Login"/>
            </form>

        </div>
    )
  }
}
export default Login