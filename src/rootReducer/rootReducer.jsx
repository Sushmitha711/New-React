import { combineReducers } from "redux";
import { counterReducer } from '../redux2/Counter/counter.reducer'
import { messageReducer } from "../redux2/Message/message.reducer";
import { productReducer } from "../redux2/Product/product.reducer";
import {UserReducer} from "../redux2/User/user.reducer";
let rootReducer = combineReducers({ counter:counterReducer,
                                    message:messageReducer ,
                                    product:productReducer,
                                    users:UserReducer});

export { rootReducer }