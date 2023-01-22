import React,{useState,useEffect} from 'react'
import "./Home.css"
import UserWrap from './UserWrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ImageSlider from './ImageSlider'
import ResponsiveGallery from '../ResponsiveGallery'

function Home() {

  const [users,setUsers]=useState([])


  useEffect(()=>{
    fetch("/users")
    .then((r)=>r.json())
    .then(setUsers); 
  },[])

  return (
    <div className='home'>
      
      <ResponsiveGallery/>

      {users.map((user)=>(
        
        <UserWrap
        key={user.id}
        userparams={user}
        // name={user.name}
        // username={user.username}
        // email={user.email}
        // userAlbum={user.album}

        />

      ))}

     
    </div>
  )
}

export default Home