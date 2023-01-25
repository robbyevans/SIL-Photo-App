import React,{useState,useEffect} from 'react'
import "./Home.css"
import UserWrap from './UserWrap'
import ImageSlider from './ImageSlider'



function Home({user}) {

  const slides = [
    // { url: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600'},
    // {url:"https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    // {url:"https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {url:"https://images.pexels.com/photos/552779/pexels-photo-552779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ];

  const [users,setUsers]=useState([])

  console.log(user)


  useEffect(()=>{
    fetch("/users")
    .then((r)=>r.json())
    .then(setUsers); 
  },[])

return(
<>

  {user?(
    <div className='home'>

      <div className="header-wrap">
        <div className='header'>
        <ImageSlider user={user} slides={slides}/>
        </div>
      </div>

      <div className='user-navbar'>
        <p>Live users</p>
      </div>
      


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
  ):(
    <div className='landingpage'></div>
  )}

  </>
)
  }
export default Home