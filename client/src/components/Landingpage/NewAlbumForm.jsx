import React,{useEffect, useState} from 'react'
import "./Home.css"
import { MdOutlineCheckCircle } from "react-icons/md";

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


function NewAlbumForm({user}) {




  
  
  // const albumInitialState={
  //   user_id:(user.id),
  //   album_title:""
  // }
  
  // const[formData,setFormData] = useState(albumInitialState)

  const[userId,setUserId]=useState(user.id);
  const[albumTitle,setAlbumTitle]=useState("");
  const [msg, setMsg] = useState("");
  const[newAlbumId,setNewAlbumId]=useState("");
  const[albumId,setAlbumId]=useState("")
  const[photoTitle,setPhotoTitle]=useState("")
  const[imgUrl,setImgUrl]=useState("")



  function hidepopup(){
    setTimeout(() => {
    setMsg(null);}, 3000);
  }




function handleSubmit(e){
  e.preventDefault();
  fetch("/albums",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      user_id:userId,
      album_title:albumTitle
    }),
  })
  .then((r)=>{
    if (r.ok){
      r.json().then((album)=>{
        setNewAlbumId(album.id)
        setMsg("Album created")
      });
    
      
    }else
    setMsg(null)
  })


  fetch("/photos",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      album_id:newAlbumId,
      photo_title:photoTitle,
      img_url:imgUrl
    }),
  
  })
  .then((r)=>{
    if (r.ok){
      r.json().then((resp)=>{
        console.log(resp)
      });
        
    }else
    console.log("failed to create img")
  })
}

  return (
    <div className="new_album_card ">
      <form className="form-control new-album-form" onSubmit={handleSubmit}>
      <h2>Create New Album</h2>
        
        <input
        placeholder='Album Title'
          type="text"
          value={albumTitle}
          onChange={(e) => setAlbumTitle(e.target.value)}
        />
      
      <input
      placeholder='imageTitle'
        type="text"
        value={photoTitle}
        onChange={(e) => setPhotoTitle(e.target.value)}
      />
       
    
        <input
        placeholder=" image URL:https:example //my-images.com"
          type="url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />


        <button onClick={hidepopup} className='btn' type="submit">Submit</button>
      {msg?(
        <div className='popup-alert'id='popup' > <MdOutlineCheckCircle className='check'  /> <h8>Album created</h8></div>

        
      ):(
        null
      )}
      </form>
    </div>
  )
}

export default NewAlbumForm