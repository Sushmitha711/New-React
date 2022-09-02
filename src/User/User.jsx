import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetdataAction} from '../redux2/User/user.action'
const User = () => {
    let users=useSelector((state)=>{
        return state.users
    })
    
    let dispatch=useDispatch();
    let Get_DataHandler=()=>{
        dispatch(GetdataAction())
    }
    
    return (
        <div>
            <h1>USER DETAILS EXAMPLE:{users.id}</h1>
            <pre>{JSON.stringify(users)}</pre>
            <button onClick={Get_DataHandler}>Get User Data</button>
            <table className='table table-hover'>
                <thead className='bg-success text-white'>
                   <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                 <tr>
                     {/* <td>{users.users.id}</td>
                    <td>{users.users.name}</td>
                    <td>{users.users.email}</td>  //Doubt not getting the data in table 
                     */}
                 </tr>
                </tbody>
            </table>
            
        </div>
    );
}

export default User;
