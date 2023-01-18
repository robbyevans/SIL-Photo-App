import React,{useState} from 'react'
import "./Auth.css"

function Signup(setUser) {
  const [username, setUsername] = useState("");
  const [email ,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [msg, setMsg] = useState();

  function handleSubmit(e){
    e.preventDefault();
    fetch("/signup",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",

      },
      body:JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r)=>{
      if (r.ok){
        r.json().then((user)=>console.log(user));
        
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
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
          <input
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          >
          </input>
          <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          // autoComplete="current-password"
        />
         {msg?(<div className="error-msg">
          <h5 className="error-text">* Password should be identical and username unique!.</h5>
        </div>):(null)}
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup