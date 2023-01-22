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
       <image className='album-cover-img' url="pickup02.jpg" alt=""></image>
       <p className='title'>{title}</p>
     </div>
     {showPicture?(<PictureWrap handleClick={handleClick}/>):(null)}
  
   
    </>
  )
}

export default Album