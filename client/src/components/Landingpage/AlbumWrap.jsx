import React,{useState,useEffect} from 'react'
import "./Home.css"
import Album from './Album'

function AlbumWrap({albums}) {
  // const[album,setAlbum]=useState(album)
  const[showAlbum,setShowAlbum]=useState("true")

  function seeAlbum(){
    setShowAlbum(!showAlbum)
  }
 
  



  return (
    <>
      {showAlbum?(
    <div className='album-container'>
      <div className="album-wrap">
      {albums.map((album)=>(
        
        
        <Album 
        key={album.id}
        title={album.album_title}

        album={album}
        />
        
        ))}
        
      </div>
    </div>
      ):(null)}
     
    </>
  )
}

export default AlbumWrap