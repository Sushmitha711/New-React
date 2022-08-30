import React from 'react';
import {CHANGE,UPDATE} from './message.action'

let initialState={
    message:"Hello world"
}
const messageReducer = (state= initialState, action) => {
  console.log(action)
  console.log(action.type)

  
    switch(action.type){
    case 'CHANGE':
 //return {message:"Hello Sushmitha Welcome to Webpage"}
 console.log("hello Rahul")
              
    case 'UPDATE':
       // return {message:"Hello Divya get out of this page"}
    console.log("hello Sonia")
    default:
       // return state;
       console.log(state)

    
   }
}

export {messageReducer};
