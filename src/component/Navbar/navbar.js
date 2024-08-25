import React from 'react'
import "./navbar.css"
import { IoIosContact } from "react-icons/io";
import { RxModulzLogo } from "react-icons/rx";
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <RxModulzLogo className='logo' />
 
      <div className='desktopMeun'>
        <Link className='desktopmeunListItem active' >Home</Link>
        <Link className='desktopmeunListItem'>About</Link>
        <Link className='desktopmeunListItem'>Portfolio</Link>
        <Link className='desktopmeunListItem'>Clients</Link>
      </div>
      <button className='desktoMeunBtn'> <IoIosContact className='desktopMeunImg' /> Contact me </button>
    </nav>
  )
}

export default Navbar
