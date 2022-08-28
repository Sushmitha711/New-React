import { combineReducers } from "redux";
import { counterReducer } from './Counter/counter.reducer'
let rootReducer = combineReducers({ counter: counterReducer });

export { rootReducer }