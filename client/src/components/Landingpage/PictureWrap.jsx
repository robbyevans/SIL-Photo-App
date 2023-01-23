import React from 'react'
import "./Home.css"
import ResponsiveGallery from '../ResponsiveGallery';

function PictureWrap({handleClick}) {
  return (

 
 
    <div className="picture-wrap">


   <button className='closePicture' onClick={handleClick}>X</button>

   <div className='gallery'>
    <ResponsiveGallery/>
    </div>

      </div>
  )
}

export default PictureWrap