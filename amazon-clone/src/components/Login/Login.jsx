import React from 'react'
import './Login.css'
const Login = () => {
  return (
   
      <>
      
     <div className="container_login">
      <div className="login_container_2">
        <h3 className='signin_text'>SignIn</h3>
        <div className="box1">
          <h5>E-MAIL</h5>
          <input type="email" className='signin_input' />
        </div>
        <div className="box2">
          <h5>PASSWORD</h5>
        <input type="password" className='signin_input' />
        </div>
        <button className='Signin_button'>Sign In</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi nostrum magnam nemo odio. Cumque.</p>
        <button className='create_account_button'>CREATE ACCOUNT</button>     
 
      </div>
     </div>
      
      </>
   
  )
}

export default Login
