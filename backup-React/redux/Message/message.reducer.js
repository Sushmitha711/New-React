import { GM,GN } from './message.action'
let initialState = {
    msg: "Hello,Rahul"
}
let messageReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'GM':
            return { msg: "Hello,Rahul! Good Morning" }
        case 'GN':
            return {msg:"Hello,Rahul... Good Night"}
        default:
            return state
    }

}
export { messageReducer }

//what is reducer?
//reducer is pure function, take two argumments 
/*
    1.state
    2.action
*/
