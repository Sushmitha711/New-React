import { combineReducers } from "redux";
import { counterReducer } from '../redux2/Counter/counter.reducer'
import { MessageReducer } from "../redux2/Message/message.reducer";
import { ProductReducer } from "../redux2/Product/product.reducer";
let rootReducer = combineReducers({ counter:counterReducer,
                                    message:MessageReducer ,
                                    product:ProductReducer});

export { rootReducer }