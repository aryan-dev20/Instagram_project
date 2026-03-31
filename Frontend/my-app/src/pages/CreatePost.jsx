import React from 'react'
import Footer from '../Components/Footer'
import { useState } from 'react'

const CreatePost = () => {

const [value , setValue]= useState(1)
const [viewImg , setViewImg] = useState(null)

const handleImage=(e)=>{
  const file = e.target.files[0]
  setViewImg(URL.createObjectURL(file))
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
       <form>
         
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
           
           <input type="text" placeholder='Enter Caption...' />
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