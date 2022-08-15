import React from "react";

class Employee extends React.Component{
emp={
     id:101,
name:'Rahul Gandhi',
profile_Pic:'https://img.etimg.com/thumb/msid-91767429,width-300,imgsize-37668,,resizemode-4,quality-100/rahul-reuters.jpg',
Age:45,
location:['New Dehli','Maharastra'],
sal:45000,
}
    render(){
        return(
        <div>
           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.emp.profile_Pic}/>
                        </div>
                        <div className="card-body">
                            <h1>About </h1>
                            <table className="table">
                            
                                <div className="tbody">
                                  
                                <tr><td>ID :{this.emp.id}</td></tr>
                                <tr><td>NAME :{this.emp.name}</td></tr>
                                <tr> <td>LOCATION :{this.emp.location[0]}</td></tr>
                                <tr><td>SALARY :{this.emp.sal}</td></tr>
                            </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
        )
    }
}
export default Employee 