import React from 'react'
import './Button.css'

const Button = ({icon,text}) => {
  
  return (
    <button
     className='primary_btn'  >
          
          {icon}
          {text}
    </button>
    
    
  )
}

export default Button
