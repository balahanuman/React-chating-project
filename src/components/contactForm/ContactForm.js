import React, { useState } from 'react'
import './Contact.css'
import Button from '../button/Button'
import {TbMessage,TbPhoneFilled,TbMail} from 'react-icons/tb'

const ContactForm = () => {
 
  const[name,setName]=useState("");
  const[email,setEmail]=useState("su");
  const[text,setText]=useState("sunit")
   
  
  const onSubmit=(e)=>{
   e.preventDefault();
   setName(e.target[0].value);
   setEmail(e.target[1].value);
   setText(e.target[2].value);
    
  }
  return (
   
    <section className='container'>
        <div className='contact_form'>
        
          <div className='top_btn'>
            <Button text="VIA SUPPORT CHAT" icon={<TbMessage/>}/>
            
            <Button  text="VIA CALL" icon={<TbPhoneFilled/>}/>
            </div>
            <Button text="VIA EMAIL FORM" icon={<TbMail/>}/>
            
           
           
            <form onSubmit={onSubmit}>
              <div className='form_control'>
              <label>Name</label>
              <input type='text' name='name'  />
              </div>

              <div className='form_control'>
              <label>Email</label>
              <input type='email' name='email'  />
              </div>

              <div className='form_control'>
              <label htmlFor='text'>text</label>
              <textarea name='text'    rows='4'/>
              </div>

              <div style={{display:'flex',justifyContent:'end'}}>
              <Button text='SUBMIT BUTTON'/>
             
              </div>
              <div>{name + "" + email + "" + text}</div>

            </form>
            
            </div>
           <div className='row'>
            <div className='col-6'>
            <div className='contact_image'>
            <img className='col-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrIeiLEwPEcwnJwH_AE4mTlsXTMAHWQFpww&usqp=CAU' alt='contact image'/>
            
            </div>
            </div>
            </div>
            </section>
            
  )
}

export default ContactForm
