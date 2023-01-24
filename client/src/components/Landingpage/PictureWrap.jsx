import React,{useState} from 'react'
import "./Home.css"
import ResponsiveGallery from '../ResponsiveGallery';

function PictureWrap({albumData,handleClick}) {

  const[pictures,setPictures]=useState(albumData.photos)

console.log(pictures)
  return (

 
 
    <div className="picture-wrap">


   <button className='closePicture' onClick={handleClick}>X</button>

   <div className='gallery'>
   {/* {pictures.map((picture)=>(
     />
     
     ))} */}
     <ResponsiveGallery/>
    </div>

      </div>
  )
}

export default PictureWrap