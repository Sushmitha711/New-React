import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetdataAction} from '../redux2/User/user.action'
const User = () => {
    let users=useSelector((state)=>{
        return state.User
    })
    
    let dispatch=useDispatch();
    let Get_DataHandler=()=>{
        dispatch(GetdataAction())
    }
    
    return (
        <div>
            <h1>USER DETAILS EXAMPLE</h1>
            <pre>{JSON.stringify(users)}</pre>
            <button onClick={Get_DataHandler}>Get User Data</button>
        </div>
    );
}

export default User;
