import { Action } from '@remix-run/router'
import React,{useState,useEffect} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// import ImageSlider from './Landingpage/ImageSlider'
import {FaEdit } from 'react-icons/fa';

// const images = [
//   "https://picsum.photos/2000/3000",
//   "https://picsum.photos/3000/2000",
//   "https://picsum.photos/4000/3000",
//   "https://picsum.photos/2000/1500",
//   "https://picsum.photos/1000/2500",
//   "https://picsum.photos/1500/2000",
// ]

function ResponsiveGallery({pictures,images}) {

  const [view,setView]=useState("false")
  const[data, setData]=useState(null)
  const[edit,setEdit]=useState(null)
  const[photoTitle,setPhotoTitle]=useState("")
  const[photoId,setPhotoId]=useState("")

  let picArray=[]

{pictures.map((pic)=>{
  picArray.push(pic)
})}
    

  console.log(photoId)

  function handleClick(){
    setEdit(!edit)
  }


  function viewImage(image){
    setView(!view)
    setData(image)
  }
  // console.log(photoId)


  function handleSubmit(e){
    e.preventDefault();

    ////
    fetch(`/photos/${photoId}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        photo_title:photoTitle,
      }),
    })
    .then((r)=>{
      if (r.ok){
        r.json().then((resp)=>{
          console.log(resp)
        } );
        
      }else
      console.log("unsuccessful")
    })


    ////


  }

  return (
    <>
   
      <div style={{padding:"10px"}}>
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
      <Masonry columnsCount={3} gutter="10px">
                {picArray.map((pics) => (
                 
                        // setPhotoId(pics.id),
                    <div className="responsive-img">
                      
                      <div className='photo-title'>
                        <h5>Title:{pics.photo_title} </h5>
                        {edit?(
                          <div>
                            <form onSubmit={handleSubmit}>

                             
                              <input
                              type="text"
                              placeholder='Title'
                              value={photoTitle}
                              onChange={(e) => {

                                setPhotoId(pics.id)
                                setPhotoTitle(e.target.value);
                              }
                              }

                              />
                              {/* <input
                              type="number"
                              className='pics_id'
                              value={picsId}
                              onChange={(e) => setPhotoId(pics.id)}
                              /> */}
                              <button  type="submit">Edit</button>
                            </form>
                          </div>
                        ):(
                          null
                        )}
                        <FaEdit onClick={handleClick} className='faEdit'/>
                      </div>
                      <img
                      
                          // key={i}
                          src={pics.img_url}
                          style={{width: "100%", display: "block", cursor:'pointer'}}
                          alt=""
                          // onClick={()=>viewImage(image)}
                      />
                    </div>
                ))}
            </Masonry>
            </ResponsiveMasonry>
    </div>
  
      
    
    
    </>
  )
}

export default ResponsiveGallery