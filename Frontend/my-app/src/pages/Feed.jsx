import React from 'react'
import SemiNav from '../Components/SemiNav'
import Footer from '../Components/Footer'
import pixelIcon from '../assets/icons/pixels.png'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Feed = () => {

  const [post , setPost] = useState([])

  function loadImage(){
  axios.get('http://localhost:3000/feed')
  .then((res)=>{
    setPost(res.data.post)
    
  })}

  useEffect(()=>{
    loadImage()
  },[])
  
 
  return (
    <div>
    <SemiNav/>
      <section className="feed-home">
        
       <div className="feed-detail">
         <div className='left'>
            <img src="https://picsum.photos/id/237/200/300" alt="" />
            <p>Aryan</p>
            <p>Bio</p>
         </div>
         <div>
         <div className='list'>
            <div className='count'>
                <p>0</p>
                <p>Posts</p>
            </div>
             <div className='count'>
                <p>0</p>
                <p>Follwers</p>
            </div>
             <div className='count'>
                <p>0</p>
                <p>Follwing</p>
            </div>
         </div>
         <div className='button'>
            <button>Edit</button>
         </div>
         </div>
       </div>

       <div className="switch-button">
        <div>
            <img src={pixelIcon} alt="" />
        </div>
       </div>

       <div className='feed-img'>
            <List data={post} /> 
       </div>
       
  
      </section>
      <Footer/>
    </div>
  )
}

const List =({data})=>{
  return(
    <>
     {data.map((d)=>(
      <div key={d._id}>
        <img src={d.image} alt="" />
      </div>
     ))}
    
    </>
  )
}

export default Feed