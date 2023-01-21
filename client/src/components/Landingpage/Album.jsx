import React,{useState,useEffect} from 'react'
import "./Home.css"

function Album({albumParams}) {

  const[id,album_id,user_id,album_title]=albumParams
  const[showPicture, setShowPicture]=useState(null)
  
  console.log(user_id)
  function handleClick(){
    setShowPicture(!showPicture)

   
  
  }
  return (
    <>
   
       <div onClick={handleClick} className="album">
       <image className='album-cover-img' url="pickup02.jpg" alt=""></image>
       <p className='title'></p>
     </div>
     {showPicture?(<div className="picture-wrap">
       <div className='picture-courasel'>
        <button className='closePicture' onClick={handleClick}>X</button>
       </div>
     </div>):(null)}
  
   
    </>
  )
}

export default Album