import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import "./Auth.css"

function Login ({setUser}){
  const[username,setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [msg,setMsg]= useState(null);
  const navigate =useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    fetch("/login",{
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({username, password}),
    }).then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user));
        navigate('/');
      }
      else
      setMsg("Invalid Username or Password")
    })
  }

  return (
    <div className='auth-page'>
      <div className='auth-title'>
        <h1> Login</h1>
      </div>
      <div className="signup">
      <form className='form-control' onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='username'
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    
        />
      

        <input 
         type="password"
         id="password"
         autoComplete="current-password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Password"
       
        
        />
        {msg?(<div className="error-msg">
          <h5 className="error-text">Invalid username or password!!.</h5>
        </div>
        ):(null)}
        <button className="s-btn" type="submit">Login</button>
      </form>
      </div>
      </div>
  )
}

export default Login