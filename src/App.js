import Counter from "./Counter/Counter"
import { Provider } from "react-redux/es/exports";
import {store} from "./redux2/store"
import React from 'react';

const App = () => {
    return (
       
            <Provider store={store}>
            <Counter/>
            </Provider>
        
    );
}

export default App;
