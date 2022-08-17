import React from "react";
import employees from "./Data"
class Employee extends React.Component{
  constructor(props){
     super(props)
     this.state={
        employees:employees
     }
  }
   
    render(){
        return(
            <div className="container">
                <pre>{JSON.stringify(this.state.employees)}</pre>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-Success text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>GENDER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map((emp) => {
                                        return  <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.first_name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.gender}</td>
                                        </tr>
                                     
                                        
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
              
            </div>
        )
    }
}
export default Employee