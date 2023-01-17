import React from 'react'
import "./Auth.css"

function Signup() {
  return (
    <div className='auth-page'>
      <div className='auth-title'>
        <h1>Welcome Signup</h1>
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
          <input
          type="password"
          placeholder='confirm password'
          // value={password}
          // onChange={handleChange}
          >
          </input>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup