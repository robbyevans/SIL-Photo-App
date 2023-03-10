import React,{useEffect, useState} from 'react'
import "./Home.css"
import { MdOutlineCheckCircle } from "react-icons/md";

// const delay = ms => new Promise(
//   resolve => setTimeout(resolve, ms)
// );


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
  // const[albumId,setAlbumId]=useState("")
  const[photoTitle,setPhotoTitle]=useState("")
  const[imgUrl,setImgUrl]=useState("")


  function refresh(){
     window.location.reload(true)
    }


  function hidepopup(){
    setTimeout(() => {
    setMsg(null);
    // refresh()
  }, 3000);
  }

// function postphoto(){

//   fetch("/photos",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify({
//       album_id:newAlbumId,
//       photo_title:photoTitle,
//       img_url:imgUrl
//     }),
  
//   })
//   .then((r)=>{
//     if (r.ok){
//       r.json().then((resp)=>{
//         console.log(resp)
//         console.log("photo created")
//       });
        
//     }else
//     console.log("failed to create img")
//   })

// }


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
        console.log(album.id)
        setNewAlbumId(album.id)
        console.log(newAlbumId)
        setMsg("Album created")
        console.log("here we go!!")


        /////
        fetch("/photos",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            album_id:album.id,
            photo_title:photoTitle,
            img_url:imgUrl
          }),
        
        })
        .then((r)=>{
          if (r.ok){
            r.json().then((resp)=>{
              console.log(resp)
              console.log("photo created")
            });
              
          }else
          console.log("failed to create img")
        })
        /////



        
      } );
      
    }else
    setMsg(null)
  })
  

  // console.log(newAlbumId)
  // console.log(photoTitle)
  // console.log(imgUrl)


  // console.log("wait for setNewAlbumId to pick album id");
  // setTimeout(() => {  
  //   postphoto()
  // }, 3000);




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
        <div className='popup-alert'id='popup'><MdOutlineCheckCircle className='check'/><h8>Album created</h8></div>

        
      ):(
        null
      )}
      </form>
    </div>
  )
}

export default NewAlbumForm