import React from 'react'
import Counter from './Counter/Counter'
import { Provider } from 'react-redux'
import { store } from './redux2/store'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Product from "./Product/product"
import User from './User/User'
import Post from './Post/Post'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
const App = () => {
    return (
        <>
        <Provider store={store} >
            <Router>
            <Navbar/>
            <Routes>
            
                <Route path="/Message" element={<Message/>}/>
                <Route path="/Counter" element={<Counter/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/User" element={<User/>}/> 
                <Route path="/Post" element={<Post/>}/> 
            </Routes>
            </Router>
            
        </Provider>
        </>
    )
}

export default App