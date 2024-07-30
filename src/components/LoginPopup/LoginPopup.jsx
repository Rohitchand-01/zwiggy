import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
         <div onClick={() => {
          setShowLogin(false)
          }}><img  src={assets.cross_icon} alt="" /></div> 
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="Password" placeholder='Your Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Clicking,I agree to the terms of use & privacy policy</p>

        </div>
        {
          currState === "Login"
            ? <p>Create a new Account?<span onClick={() => setCurrState("Sign Up")}>click here </span></p>
            : <p>Already have a account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }

      </form>

    </div>
  )
}

export default LoginPopup
