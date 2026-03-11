import React, { useState } from 'react'
import Footer from '../Components/Footer'
import axios from 'axios'


const CreatePost = () => {

  const [next , setNext] = useState(1)
  const [image , setImage]= useState(null)
  
  const handleSubmit=(e)=>{

    e.preventDefault();

    const formData = new FormData(e.target)
    axios.post('http://localhost:3000/post' , formData)

    .then((res)=>{
      alert('posted')
    })

    .catch(()=>{
      alert('Something went wrong....')
    })
  }

  const handleImage=(e)=>{
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className='create-post'>
   

   <nav className='create-nav'>
    <div>
      {next===1 &&(
       <a href="/">Cancel</a>
      )}

      {next ===2 &&(
      <a onClick={()=>{setNext(1)}}>Back</a>
      )}
      
    </div>

    <div>
      {next===1 &&(
        <>
      <div onClick={()=>{setNext(2)}}>
      Next
      </div>
        </>
      )}

    </div>



   </nav>

   <form onSubmit={handleSubmit}  encType="multipart/form-data">
    
    {next===1 &&(
       <>
       <h3>Select Image</h3>
       <img style={{width:'200px' , borderRadius:'20px'}} src={image} alt="" />
      <input type="file" name='image' onChange={handleImage} />
      </>
    )}
   
    {next ===2 &&(
      <>
    <img style={{width:'200px' , borderRadius:'20px'}} src={image} alt="" />
    <input type="text" name='caption' placeholder='Caption here..' />
    <button type='submit'>Upload</button>
    </>
    )}

   
   </form>


   <Footer/>
    </div>
  )
}

export default CreatePost