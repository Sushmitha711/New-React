import React from 'react';
import {GM,GN} from './message.action'

let initialState={
    message:"Hello world",
}
const MessageReducer = (state=initialState,action) => {
  // console.log(state)
    switch(action.type){
    case 'GM':
        //return {message:"Hello Sushmitha Welcome to Webpage"};
        console.log("test 1")
    case 'GN':
      //  return {message:"Hello Divya get out of this page"};
    console.log("test 2")
    default:
        return state;                
    
   }
}

export {MessageReducer};
