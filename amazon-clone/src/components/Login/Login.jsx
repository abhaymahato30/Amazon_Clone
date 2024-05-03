
import './Login.css'

import { signInWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
     
    }
  };

  return (
    <div className="container_login">
        <div className="login_container_2">
    <form onSubmit={handleSubmit}>
      <h3 className='signin_text'>Login</h3>

      <div className="mb-3 box3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control signin_input"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3 box1">
        <label>Password</label>
        <input
          type="password"
          className="form-control signin_input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary Signin_button">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user <a href="/signin">Register Here</a>
      </p>
    </form>
    </div>
    </div>
  );
}

export default Login;