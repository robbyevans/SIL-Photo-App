import React,{useState} from 'react'
import "./Home.css"
import ResponsiveGallery from '../ResponsiveGallery';

function PictureWrap({albumData,handleClick}) {

  

  const[pictures,setPictures]=useState(albumData.photos)
  let imgArray=[]
  let picArray=[]

  // console.log(pictures)


{pictures.map((pic)=>(
 
  imgArray.push(pic.img_url),
  picArray.push(pic)
)
)}

console.log(picArray)

  return (


 
 
    <div className="picture-wrap">


   <button className='closePicture' onClick={handleClick}>X</button>

   <div className='gallery'>
   {/* {pictures.map((picture)=>(
     />
     
     ))} */}
     <ResponsiveGallery pictures={picArray} images={imgArray}/>
    </div>

      </div>
  )
}

export default PictureWrap