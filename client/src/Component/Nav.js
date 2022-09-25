import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  return (
      <div>
        
        <div className='nav'>
         <ul>
             <h4><li><Link style={{color : "white", textDecoration : "none"}} to ="/">Home</Link></li></h4>
             <h4><li><Link style={{color : "white", textDecoration : "none"}} to="/tollywood" >Tollywood</Link></li></h4>
             <h4><li><Link style={{color : "white", textDecoration : "none"}} to="/technology">Technology</Link></li></h4>
             <h4><li><Link style={{color : "white", textDecoration : "none"}} to="/hollywood">Hollywood</Link></li></h4>
             <h4><li><Link style={{color : "white", textDecoration : "none"}} to="/fitness">Fitness</Link></li></h4>
             <h4><li><Link style={{color : "white", textDecoration : "none"}} to="/food">Food</Link></li></h4>
         </ul>
     </div>
    
    </div>
  )
}

export default Nav