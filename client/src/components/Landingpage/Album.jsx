import React,{useState,useEffect} from 'react'
import "./Home.css"
import PictureWrap from './PictureWrap'

function Album({key,title}) {

  console.log(title)

  const[showPicture, setShowPicture]=useState(null)
  


  function handleClick(){
    setShowPicture(!showPicture)

   
  
  }
  return (
    <>
   
       <div onClick={handleClick} className="album">
       <img src='galleryicon.png' alt='' className='album-cover-img'/>
       <p className='title'>{title}</p>
     </div>
     {showPicture?(<PictureWrap handleClick={handleClick}/>):(null)}
  
   
    </>
  )
}

export default Album