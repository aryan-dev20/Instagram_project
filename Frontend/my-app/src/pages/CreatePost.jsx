import React from 'react'
import Footer from '../Components/Footer'
import { useState } from 'react'
import axios from 'axios'

const CreatePost = () => {

const [value , setValue]= useState(1)
const [viewImg , setViewImg] = useState(null)
const [image , SetImage] = useState(null)
const [caption , SetCaption] = useState('')


const formSubmit= async(e)=>{
  e.preventDefault(); 
  const formData = new FormData()
  formData.append('image', image)
  formData.append('caption' , caption)

  await axios.post('http://localhost:3000/post' , formData)
  alert('Post Uploaded Succesfully')
}


const handleImage=(e)=>{
  const file = e.target.files[0]
  setViewImg(URL.createObjectURL(file))
  SetImage(file)
}

  return (
    <div className='create-post'>
    <div className='create-nav'>
     {value ===1 && (
      <>
      <div>
        <a href="/">Cancel</a>
      </div>
      
      <div>
        <b onClick={()=>setValue(2)} >Next</b>
      </div>
      </>
     ) }
      
      {value === 2 && (
        <>
        <div>
          <a onClick={()=>setValue(1)}>Back</a>
        </div>
        
        </>
      )}
    </div>
       
    <div>
       <form onSubmit={formSubmit} encType='multipart/form-data'>
         
         {value === 1 && (
         <>
        <h2>Select Image</h2>
        {viewImg && (
          <img src={viewImg} style={{width:'200px' , borderRadius:'20px'}} />
        ) }
        <input type="file" name="image" onChange={handleImage}/>
        </>
        )}
        
        {value ===2 && (
          <>
           <h2>Enter Caption</h2>
          <img src={viewImg} style={{width:'200px' , borderRadius:'20px'}}   />
           
           <input type="text" name='caption' placeholder='Enter Caption...' onChange={(e)=>{SetCaption(e.target.value)}} />
          <button type='submit'>Upload</button>
          </>
        )}

       </form>


    </div>




    <Footer/>
    </div>
  )
}

export default CreatePost