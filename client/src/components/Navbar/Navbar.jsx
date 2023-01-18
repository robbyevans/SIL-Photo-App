import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css"


function Navbar({user, setUser}) {
  function handleLogoutClick(){
    fetch("/Logout",{method: "DELETE"}).then((r)=>{
      if(r.ok){
        setUser(null);
      }
    });
  }
  return (
    <div className='navbar'>
      <h1 className='nav-title'>viewIT</h1>
      <nav className='nav-wrap'>
        {user ? (
          <>
          <NavLink className="navlink" to="/">Home</NavLink>
          <button onClick={handleLogoutClick}>Logout</button>
          </>
        ):(
        <>
        <NavLink className="navlink" to="/Login">Login</NavLink>
        <NavLink className="navlink" to="/Signup">Signup</NavLink>
        </>

        )}
        
        
      </nav>
    </div>
  )
}

export default Navbar