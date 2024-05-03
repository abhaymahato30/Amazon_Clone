
import React from "react";

import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login.jsx'
import Signin from './Signin/Sign.jsx'

import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Footer from "./components/footer/Footer.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    
     <Router>


  
        <Routes>
          <Route path="/" element={<> <Header/> <Home/> <Footer/></>}></Route>
         
   
        </Routes>
        <Routes>
          <Route path="/login" element={<> <Header/> <Login/> </>}></Route>
         
   
        </Routes>
        <Routes>
          <Route path="/signin" element={<> <Header/> <Signin/></>}></Route>
         
   
        </Routes>
  
  
        <Routes>
          <Route path="/checkout" element={<> <Header/><Checkout/></>}></Route>
         
   
        </Routes>
      
        <ToastContainer />
     
    </Router>
    
   
    
  )
}

export default App
