import React from 'react';
import {INCR,DECR} from './product.action'
let initialState={
    P_Name:"DEATH:IS AN INSIDE STORY",
    P_Image:"https://rukminim1.flixcart.com/image/612/612/l3dcl8w0/book/3/j/a/death-an-inside-story-original-imageg23brw9qwhg.jpeg?q=70",
    P_Price:300,
    P_Qty:1,
}

const ProductReducer = (state=initialState,action) => {
  switch(action.type){
    case 'INCR':
        return{
        ...state,
         P_Qty:state.P_Qty+1
        }
    case 'DECR':
        return {
            ...state,P_Qty:state.P_Qty-1
        }
        
    default:
        return state;    
  } 
}

export {ProductReducer} ;
