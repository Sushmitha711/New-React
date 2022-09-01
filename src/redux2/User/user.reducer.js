import {USER_REQ,USER_FAILURE,USER_SUCCESS} from './user.action'

let initialstate={
    users:[],
    loading:true,
}

const UserReducer = (state=initialstate,action) => {
   switch(action.type){
    case 'USER_REQ':
        return{
            loading:false
        }
    case 'USER_SUCCESS':
        return {
            users:action.payload
        }
    case 'USER_FAILURE':
        return {
            loading:false
        } 
    default:
        return state           
   }
}

export {UserReducer}
