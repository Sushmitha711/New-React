
import { applyMiddleware, createStore} from 'redux'
import { counterReducer } from '../redux2/Counter/counter.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from '../rootReducer/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,logger)));


export { store }