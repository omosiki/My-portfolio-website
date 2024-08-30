import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { SiBackblaze } from "react-icons/si";

const Footer = () => {
  return (


    <section className="footer">
    <div className='contain'>
      <SiBackblaze  className="logo"/> <p> Made with by <FaHeart  className='picon'/> Zikrah </p>
    </div>
 
    
    <div className="icons">
    <FaFacebookF className='social-icon'/>
      <GrInstagram className='social-icon'/>
      <FaLinkedinIn className='social-icon' />
      <FaWhatsapp className='social-icon' />
  </div>
     
</section>

  )
}

export default Footer
