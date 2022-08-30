import React from 'react'
import Counter from './Counter/Counter'
import { Provider } from 'react-redux'
import { store } from './redux2/store'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
const App = () => {
    return (
        <Provider store={store} >
            <Router>
            <Navbar/>
            <Routes>
                <Route path="/Counter" element={<Counter/>}/>
                <Route path="/Message" element={<Message/>}/>
            </Routes>
            </Router>
            
        </Provider>
    )
}

export default App