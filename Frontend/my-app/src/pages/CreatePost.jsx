import React from 'react'
import Footer from '../Components/Footer'
import axios from 'axios'

const CreatePost = () => {
  
  const handleSubmit=(e)=>{

    e.preventDefault();

    const formData = new FormData(e.target)
    axios.post('http://localhost:3000/post' , formData)

    .then((res)=>{
      alert('posted')
    })

    .catch(()=>{
      alert('rerer')
    })
  }

  return (
    <div>

   <form onSubmit={handleSubmit}>
    <h3>Add Post</h3>
   <input type="file" name='image' />
   <input type="text" name='caption' placeholder='caption..' />
   <button type='submit'>Submit</button>



   </form>


   <Footer/>
    </div>
  )
}

export default CreatePost