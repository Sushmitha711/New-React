import { combineReducers } from "redux";
import { counterReducer } from '../redux2/Counter/counter.reducer'
import { messageReducer } from "../redux2/Message/message.reducer";
let rootReducer = combineReducers({ counter: counterReducer,
                                    Message:messageReducer });

export { rootReducer }