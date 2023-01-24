import React,{useState,useEffect} from 'react'
import "./Home.css"
import PictureWrap from './PictureWrap'

function Album({album,title}) {

  const[albumData,setAlbumData]=useState(null)



  useEffect(()=>{
    fetch(`/albums/${album.id}`)
    .then((r)=>r.json())
    .then(setAlbumData); 
  },[])


  

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
     {showPicture?(<PictureWrap albumData={albumData} handleClick={handleClick}/>):(null)}
  
   
    </>
  )
}

export default Album