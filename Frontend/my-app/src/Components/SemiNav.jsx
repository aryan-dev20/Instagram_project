import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../assets/icons/back.png'
import settingIcon from '../assets/icons/menu-burger.png'

const SemiNav = () => {
  return (
   <div>
     <section>
     <nav className='semi-nav'>
        <div className='left'>
            <Link to="/">
             <img src={backIcon} alt="" />
            </Link>
        </div>
        
         <div className='middle'>
            <h1>Aryan.ig</h1>
         </div>

         <div className='right'>
            <img src={settingIcon} alt="" />
         </div>


        
    </nav>    
        
        
    </section> 
 



    </div>
  )
}

export default SemiNav