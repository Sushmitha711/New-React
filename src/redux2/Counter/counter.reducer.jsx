import React from 'react';
import {INCR,DECR} from "./counter.action"
let initialState={
    count:1,
}

const CounterReducer = (state=initialState,action) => {
   
   
    switch (action.type) {
    case 'INCR':
        return {count:state.count+1}
        break;
    case 'DECR':
        return {count:state.count-1}
    default:
        return state
        break;
   } 
}

export {CounterReducer} ;
