import React,{useState} from 'react'
import {FaEdit } from 'react-icons/fa';



function ImageWrap({pics}) {

  const[edit,setEdit]=useState(null)
  const[photoTitle,setPhotoTitle]=useState("")
  const[photoId,setPhotoId]=useState("")



  function handleClick(){
    setEdit(!edit)
  }


  function handleSubmit(e){
    e.preventDefault();
    setEdit(!edit)

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
    <div className="responsive-img">              
    <div className='photo-title'>
      <h5>Title:{pics.photo_title} </h5>
      {edit?(
        <div>
          <form className="edit-form" onSubmit={handleSubmit}>
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
  )
}

export default ImageWrap