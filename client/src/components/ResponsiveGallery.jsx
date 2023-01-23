import { Action } from '@remix-run/router'
import React,{useState,useEffect} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageSlider from './Landingpage/ImageSlider'

const images = [
  "https://picsum.photos/2000/3000",
  "https://picsum.photos/3000/2000",
  "https://picsum.photos/4000/3000",
  "https://picsum.photos/2000/1500",
  "https://picsum.photos/1000/2500",
  "https://picsum.photos/1500/2000",
]

function ResponsiveGallery() {

  const [view,setView]=useState("false")
  const[data, setData]=useState(null)


  function viewImage(image){
    setView(!view)
    setData(image)
  }


  // const viewImage=(img,i)=>{
  //   setData(img,i)
  // }

  // const imgAction =(action) =>{
  //   let i = data.i;
  //   if (action==="next-img"){
  //     setData({img: images[i+1],i: i+1});
  //   }
  //   if(action ==="previous-img"){
  //     setData({img: images[i- 1],i:i-1})
  //   }
  //   if(!action){
  //     setData({img: '',i:0});
  //   }
  // }
  return (
    <>
   
      {/* <div style={{
        width:"100vw",
        height:"100vh",
        background:"black",
        position:"fixed",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
      }}>
        <button onClick={viewImage(view.image)} style={{position:"absolute",top:"20px",right:"40px"}}>X</button>
        
        <img src={data} style={{
          width:"auto",
          maxWidth:"80%",
          maxHeight:"80%",
        }}/>
       
      </div> */}


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