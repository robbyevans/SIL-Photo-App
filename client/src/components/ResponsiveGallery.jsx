import { Action } from '@remix-run/router'
import React,{useState,useEffect} from 'react'
import Masonry from "react-responsive-masonry"
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

  const[data, setData]=useState({img: '',i:0})

  const viewImage=(img,i)=>{
    setData(img,i)
  }

  const imgAction =(action) =>{
    let i = data.i;
    if (action==="next-img"){
      setData({img: images[i+1],i: i+1});
    }

  }
  return (
    <>
    {
      data.img &&
      <div style={{
        width:"100",
        height:"100vh",
        background:"black",
        position:"fixed",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
      }}>
        <button style={{position:"absolute",top:"10px",right:"10px"}}>X</button>
        <button>Previous</button>
        <img src={data.img} style={{
          width:"auto",
          maxWidth:"90%",
          maxHeight:"90%",
        }}/>
        <button onClick={()=>imgAction("next-img")}>Next</button>
      </div>
    }
    <div style={{padding:"10px"}}>
      <Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block", cursor:'pointer'}}
                        alt=""
                        onClick={()=>viewImage(image,i)}
                    />
                ))}
            </Masonry>
    </div>
    </>
  )
}

export default ResponsiveGallery