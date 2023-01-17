import React from 'react'
import "./Auth.css"
// import {useState,useEffect} from "react"

function Login() {

  return (
    <div className='auth-page'>
      <div className='auth-title'>
        <h1>Please Login</h1>
      </div>
      <div className="signup">
      <form className='form-control'>
        <input 
        type="text"
        placeholder='username'
        // value={username}
        // onChange={handleChange}
        >
        </input>

        <input 
        type="password"
        placeholder='password'
        // value={password}
        // onChange={handleChange}
        >
        </input>
        <button type='submit'>Log in</button>
      </form>
      </div>
      </div>
  )
}

export default Login