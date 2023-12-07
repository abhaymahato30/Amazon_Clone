import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    
     <Router>


  
        <Routes>
          <Route path="/" element={<> <Header/><Home/></>}></Route>
         
   
        </Routes>
        
  
        <Routes>
          <Route path="/checkout" element={<> <Header/><Checkout/></>}></Route>
         
   
        </Routes>
     
    </Router>
    
   
    
  )
}

export default App
