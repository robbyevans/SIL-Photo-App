import React,{useState} from 'react'
import {NavLink} from "react-router-dom"
import {FaUserAlt} from 'react-icons/fa';
import "./Navbar.css"


function Navbar({user, setUser}) {


  
  function handleLogoutClick(){
    fetch("/logout",{method: "DELETE"}).then((r)=>{
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
            <button className='btn logout-btn' onClick={handleLogoutClick}>Logout</button>
            <div className='username'><p><span className='span-text'>welcome: </span><span className='span-username'>{user.username}<FaUserAlt className="user-icon"/></span></p></div>
          
          
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