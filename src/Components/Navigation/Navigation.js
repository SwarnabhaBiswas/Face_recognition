import React from 'react';
import './Navigation.css';

const Navigation= ({onRouteChange})=>{
            return(    
                <nav style={{display:'flex', justifyContent:'flex-end'}}>
                    <p onClick={()=>onRouteChange('signin')} 
                    className='f3 link dim black underline ph3 pointer washed-yellow'>Sign Out</p>
                </nav>
            ); 
        }
           
export default Navigation;