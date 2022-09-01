
import { GM, GN} from './message.action'
let initialState = {
    msg: "Hello "
}
let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GM':
            return {...state, msg: "Hello sushma" }
            //console.log("Test 1")
        case 'GN':
           return { ...state,msg:"Hello welcome" }
            //console.log("Test 2")
        default:
            return state
    }
}
export { messageReducer }
