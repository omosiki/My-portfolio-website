import React, { useRef } from 'react'
import "./contact.css"
import { SiBackblaze } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
   
    e.preventDefault();
  
    emailjs.sendForm('service_rn3su5l', 'template_b2v5pyr', form.current, 'k0fcI5-wayqlzQLze')
        .then((result) => {
            console.log('Email sent successfully:', result.text);
        }, (error) => {
            console.error('Failed to send email:', error.text);
        });
  };
  



  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get In Touch</h1>
            <SiBackblaze  className="icon"/>

        </div>
        <div className='contact-section' id='contact'>
            <div className='left'>
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new project, feel free to reach out me</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                    <CiMail className='contact-logo'/>
                    <p>abdullateefsikirat6@gmail.com</p>
                  
                    </div>
                    <div className='contact-detail'>
                    <CiLocationOn className='contact-logo'/>
                    <p>N0 4, Alhaji Abdulateef gwagwalada, Abuja</p>
                    </div>
                    <div className='contact-detail'>
                    <IoMdCall className='contact-logo'/>
                    <p> 903-804 560</p>
                    </div>
                </div>
            </div>
          <form className='contact-right' ref={form} onSubmit={sendEmail}> 
            <label>Your name:</label>
            <input type='text' placeholder='Enter your name' name='your_name'/>
            <label>Your email</label>
            <input type='email' placeholder='Enter your email' name='your_email'/>
            <label>Write your message here</label>
            <textarea name='message'  rows="6" placeholder='Enter your message'/>
            <button type='submit' value="send" className='contact-submit'>Submit</button>

          </form>
        </div>
    </div>
  )
}

export default Contact
