import React,{useState} from 'react'
import "./Home.css"

  const albumInitialState={
    user_id:"",
    album_title:"",

  }

function NewAlbumForm() {
  const[formData,setFormData] = useState(albumInitialState)

function handleChange(e){
  setFormData({
    ...formData,
    [e.target.id]:e.target.value,
  });
}

function handleSubmit(e){
  e.preventDefault();
  fetch("/albums",{
    method:"POST",
    header:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(formData),
  })
  .then((r)=>r.json())
  .then((console.log)={
    setFormData
  });
}
  return (
    <div className="new_album_card ">
      <form className="form-control new-album-form" onSubmit={handleSubmit}>
      <h2>Create New Album</h2>
        
        <input
        placeholder='Album Title'
          type="text"
          id="title"
          value={formData.album_title}
          onChange={handleChange}
        />
          
        
      {/* <label htmlFor="imageTitle">Image Title </label> */}
      <input
      placeholder='imageTitle'
        type="text"
        id="image_title"
        value={formData.image_title}
        onChange={handleChange}
      />
        {/* <label htmlFor="image_url">Image URL: </label> */}
        <input
        placeholder='image_url'
          type="text"
          id="image"
          value={formData.image_url}
          onChange={handleChange}
        />
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewAlbumForm