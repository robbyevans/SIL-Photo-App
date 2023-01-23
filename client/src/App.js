import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Landingpage/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';


function App() {
  const [user,setUser] = useState(null);

  useEffect(()=>{
    fetch ("/me").then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user));
      }
    });
  },[]);
  return (
<>
<Router>
  <Navbar user={user} setUser={setUser}/>
  
    {user ? (
      <Routes>
      <Route path="/" exact element={<Home user = {user}/>}></Route>
      </Routes>
    ):( 
      <Routes>
      <Route path="/Login" exact element={<Login setUser={setUser}/>}></Route>
    <Route path="/Signup" exact element={<Signup setUser={setUser}/>}></Route>
    </Routes>
    )}
    
  <Footer/>
</Router>
</>

)
}

export default App;
