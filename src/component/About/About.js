import React from 'react'
import "./about.css"
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdCss } from "react-icons/md";
import { TbHtml } from "react-icons/tb";


const About = () => {
  return (
    
    <section id='skills'>
    <h2>What i do</h2>
    <span className='skillsDoc'>
    I'm a skilled passionate FrontEnd Developer with experience in  creating  visually appealing and  interactive user-friendly website. 
    </span >
    <div className='skillBars'>
        <div className='skillbar'>
                <FaReact />
            <div className='skillText'>
             <h2>React</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eum!</p>
            </div>
        </div>
        <div className='skillbar'>
             <TbBrandJavascript />
            <div className='skillText'>
                 <h2>JavaScript</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eum!</p>
             </div>
        </div>
        <div className='skillbar'>
              <MdCss />
            <div className='skillText'>
             <h2>CSS</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eum!</p>
            </div>
        </div>
        <div className='skillbar'>
             <TbHtml />
            <div className='skillText'>
                 <h2>Html</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eum!</p>
            </div>
        </div>
      
        
        
    </div>
  </section>
  )
}

export default About
