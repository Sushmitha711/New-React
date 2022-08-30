import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeAction,updateAction} from '../redux2/Message/message.action'
//import { MessageReducer } from '../redux2/Message/message.reducer';
const Message = () => {
 let MSG=useSelector((state)=>{
    return state.message
 })
 
 let dispatch=useDispatch();
    
 let changeHandler=()=>{
    dispatch(changeAction())
   }
  
   let updateHandler=()=>{
     dispatch(updateAction())
   }
   
    return (
        <div>
            {/* <h1>Message example:{MSG}</h1> */}
          <pre>{JSON.stringify(MSG)}</pre>
            <button onClick={changeHandler}>Change</button>
           <button onClick={updateHandler}>Update</button>
        </div>
    );
}

export default Message;
