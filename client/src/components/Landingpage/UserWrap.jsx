import React,{useState,useEffect} from 'react'
import AlbumWrap from './AlbumWrap'
import "./Home.css"


function UserWrap({userparams}) {
  const{id,name,username,email,albums} = userparams
  const[isRead,setIsRead]=useState(null)



  function openAlbum(){
    setIsRead(!isRead)

  }
  return (
    <>
    <div onClick={openAlbum} className='user-container'>
        <img className='user-img' src='phone.png' alt=''></img>
        <h4 className='user-name'>{username}</h4>
        <span className='user-album'>{albums.length}</span>
      </div>
      {isRead? (
        <AlbumWrap albums={albums} />
      ):(null)}
      </>

  )
}

export default UserWrap