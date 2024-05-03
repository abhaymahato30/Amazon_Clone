
import "../components/Login/Login.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
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
    <div className="container_signin">
    <div className="login_container_2">
    <form onSubmit={handleRegister}>
      <h3 className='signin_text'>Sign Up</h3>

      <div className="mb-3 box3">
        <label>First name</label>
        <input
          type="text"
          className="form-control signin_input "
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 box3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control signin_input"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3 box3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control signin_input"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 box3">
        <label>Password</label>
        <input
          type="password"
          className="form-control signin_input"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary Signin_button">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
    </div>
    </div>
  );
}
export default Register;