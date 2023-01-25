import { Action } from '@remix-run/router'
import React,{useState,useEffect} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageSlider from './Landingpage/ImageSlider'

// const images = [
//   "https://picsum.photos/2000/3000",
//   "https://picsum.photos/3000/2000",
//   "https://picsum.photos/4000/3000",
//   "https://picsum.photos/2000/1500",
//   "https://picsum.photos/1000/2500",
//   "https://picsum.photos/1500/2000",
// ]

function ResponsiveGallery({images}) {

  const [view,setView]=useState("false")
  const[data, setData]=useState(null)


  function viewImage(image){
    setView(!view)
    setData(image)
  }

  return (
    <>
   
      <div style={{padding:"10px"}}>
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
      <Masonry columnsCount={3} gutter="10px">
                {images.map((image) => (
                    <img
                        // key={i}
                        src={image}
                        style={{width: "100%", display: "block", cursor:'pointer'}}
                        alt=""
                        onClick={()=>viewImage(image)}
                    />
                ))}
            </Masonry>
            </ResponsiveMasonry>
    </div>
  
      
    
    
    </>
  )
}

export default ResponsiveGallery