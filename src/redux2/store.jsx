
import { createStore } from "redux";
import { counterReducer } from '../redux2/Counter/counter.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from '../rootReducer/rootReducer'
import {MessageReducer} from './Message/message.reducer'
import {ProductReducer} from './Product/product.reducer'

let store = createStore(rootReducer, composeWithDevTools());

export { store }