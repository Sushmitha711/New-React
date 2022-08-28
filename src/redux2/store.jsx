import React from 'react';
import {  createStore} from 'redux';
import {composeWithDevTools} from "@redux-devtools/extension";
import {CounterReducer} from "../redux2/Counter/counter.reducer"
let store=createStore(CounterReducer,composeWithDevTools())
export {store};
