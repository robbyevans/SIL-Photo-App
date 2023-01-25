import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import "./Auth.css"

function Signup({setUser}) {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("");
  const [email ,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [msg, setMsg] = useState();

  const navigate =useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    fetch("/signup",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",

      },
      body:JSON.stringify({
        name,
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r)=>{
      if (r.ok){
        r.json().then((user)=>setUser(user));
        navigate('/');
        
      }else
      setMsg("*Password should be identical and username unique")
    })
  }

  return (
    <div className='auth-page'>
      <div className='auth-title'>
        <h1>Welcome Signup</h1>
      </div>
      <div className="signup">
        <form className='form-control' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <input
        type="text"
        id="username"
        autoComplete="off"
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

         <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          >
          </input>

          <input
          type="password"
          id="password_confirmation"
          placeholder='Confirm Password'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          // autoComplete="current-password"
        />
         {msg?(<div className="error-msg">
          <h5 className="error-text">* Password should be identical and username unique!.</h5>
        </div>):(null)}
          <button className='btn' type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup