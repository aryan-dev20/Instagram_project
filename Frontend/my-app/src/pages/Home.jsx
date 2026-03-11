import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {

const[data ,setData] = useState([
    {
        id:1,
        url:"https://picsum.photos/id/237/200/300",
        name:'You '
    },
     {
        id:2,
        url:"https://picsum.photos/seed/picsum/200/300",
        name:'Kai'
    },
     {
        id:3,
        url:"https://picsum.photos/200/300?grayscale",
        name:'Speed'
     },
      {
        id:4,
        url:"https://picsum.photos/200/300/?blur=2",
        name:'Jamal'
    },
     {
        id:5,
        url:"https://picsum.photos/200/300.jpg",
        name:'Max'
    },

     {
        id:6,
        url:"https://picsum.photos/id/237/200/300",
        name:'Sky'
    },

    
])

const[story ,setStory] = useState([]) // story data
const[value , setValue] = useState(false)//story logic

const click =(e)=>{
 setStory(e)
 setValue(true)
}

  return (
    <div>
        <Navbar/>
          <div className='instagram-home'>
   
           <div>
           <List data={data} onClick={click}/>
           {value &&(
            <div
            style={{
               
                position:'fixed',
                inset:'0',
                zIndex:2000,
            }}
            onClick={()=>setValue(false)}
            >
             <div className='story-pop' style={{position:'relative' , display:'flex' , justifyContent:'center'}}>   
             <img className='d-story' src={story.url} alt="" />

             <p style={{ display:'block', position:'absolute', padding:"10px" , color:"white" ,width:'100%',maxWidth:'400px' ,fontWeight:'bold', fontFamily:'monospace' , fontSize:'25px' , textShadow:'inherit black',  backgroundColor: "rgba(0,0,0,0.4)" }}>{story.name} <br /> <span style={{ display:'block',fontSize:'15px'}}>Posted 10hr ago</span></p>
             </div>
            </div>
           )}
           </div>




          </div>
       <Footer/>
    </div>
  )
}

const List =({data , onClick}) =>(
    <div className='story' >
        {data.map((d)=>(
            <div key={d.id} style={{display:'flex' , flexDirection:'column', alignItems:'center'}} onClick={()=>{onClick(d)}}>
                <img src={d.url} style={{width:'60px' , height:'60px' , border:'3px solid pink' , borderRadius:'60px', marginBottom:'5px'}} />
                <p>{d.name}</p>
            </div>
        ))}
    </div>
)

export default Home