import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file for styling
import { SiBackblaze } from "react-icons/si";
import { IoIosContact } from "react-icons/io";

const Navbar = ({ onContactClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
      return (
        <>
            <nav className="navbar">
            <SiBackblaze  className="logo"/>
                {/* <div className="logo">MyWebsite</div> */}
                <div className={`menu ${isOpen ? 'active' : ''}`}>
                    <a href="intro" id='active'>Home</a>
                    <a href="about">About</a>
                    <a href="mywork">Mywork</a>
                    <a href="contact">Contact</a>
                </div>
                
                <button className="contact-button" onClick={onContactClick}>
                <IoIosContact className='desktopMeunImg' /> Contacts
                    </button>
                
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Hamburger icon */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;









