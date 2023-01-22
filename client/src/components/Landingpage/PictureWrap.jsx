import React from 'react'
import "./Home.css"
import { motion } from 'framer-motion';

function PictureWrap({handleClick}) {
  return (
 
    <div className="picture-wrap">


   <button className='closePicture' onClick={handleClick}>X</button>

   <div className='img-grid'>
   
    <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
     <div className='img-wrap'>
       <img src='https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600' alt='uploaded image'/>
     </div>
   
   </div>

      {/* </div> */}
      </div>
  )
}

export default PictureWrap