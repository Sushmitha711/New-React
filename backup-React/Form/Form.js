import React from "react";
class Form extends React.Component{
constructor(props){
    super(props);
    this.state={
        sl_no:"",
        name:"",
        Role:"",
        age:"",
        Edit:"",
        Delete:"",
    }
}
dataHandler=(event)=>{
    this.setState({[event.target.sl_no]:event.target.value})
    this.setState({[event.target.name]:event.target.value})
    this.setState({[event.target.Role]:event.target.value})
    this.setState({[event.target.age]:event.target.value})
}

submitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state)
   }

    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                   <div className="col-md-12">
                    <h1>Cricket Details</h1>
                    <pre>{JSON.stringify(this.state)}</pre>
                <form className="form-group" onSubmit={this.submitHandler}>
                    <input type="number" placeholder="Sl.no" onChange={this.dataHandler} className="form-control" name="sl_no"/><br/>
                    <input type="text" placeholder="Name" onChange={this.dataHandler} className="form-control" name="name"/><br/>
                    <input type="text" placeholder="Role" onChange={this.dataHandler} className="form-control" name="Role"/><br/>
                    <input type="number" placeholder="Age" onChange={this.dataHandler} className="form-control" name="age"/><br/>
                    <input type="submit"  className="form-control"/>
                </form>
                </div>
                </div>
                </div> 
                <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                           <table className="table table-hover">
                              <thead>
                                 <tr> <th>Sl.No</th>
                                       <th>Name</th>
                                       <th>Role</th>
                                       <th>Age</th>
                                      <th>Edit</th>
                                      <th>Delete</th>
                                       </tr>
                               </thead>
                    <tbody>
                       <td>{}</td>
                        {/* <td><button><i class="fa-solid fa-user-pen"></i></button></td>
                        <td><button><i class="fa-solid fa-trash-arrow-up"></i></button></td> */}
                    </tbody>
                    </table> 
                    </div> 
            </div>
            </div>
            </div>
        )
    }
}
export default Form