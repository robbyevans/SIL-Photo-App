import { Action } from '@remix-run/router'
import React,{useState,useEffect} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageWrap from './ImageWrap';


function ResponsiveGallery({pictures,images}) {

  const [view,setView]=useState("false")



  let picArray=[]

{pictures.map((pic)=>{
  picArray.push(pic)
})}
    


  return (
    <>
   
      <div style={{padding:"10px"}}>
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
      <Masonry columnsCount={3} gutter="10px">
                {picArray.map((pics) => (

                  <ImageWrap pics={pics}/>
                 
                ))}
            </Masonry>
            </ResponsiveMasonry>
    </div> 
    </>
  )
}

export default ResponsiveGallery