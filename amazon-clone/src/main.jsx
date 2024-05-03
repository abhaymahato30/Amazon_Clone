import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartStore } from './redux/Cartstore.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={CartStore}>
    <App />
  </Provider>
  
    
  </React.StrictMode>,
)
