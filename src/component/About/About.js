import React from 'react'
import "./about.css"
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdCss } from "react-icons/md";
import { TbHtml } from "react-icons/tb";


const About = () => {
  return (
    
    <section id='skills'>
    <h2 className='he'>My skills</h2>
    <p>
          I'm a skilled passionate FrontEnd Developer with experience in  creating  visually appealing  <br/>and  interactive user-friendly website. 
    </p >
    <div className='skillBars'>
        <div className='skillbar'>
                <FaReact className='icon' />    
        </div>
        <div className='skillbar'>
             <TbBrandJavascript className='icon' />
        </div>
        <div className='skillbar'>
              <MdCss className='icon' />
        </div>
        <div className='skillbar'>
             <TbHtml className='icon' />
        </div>
    </div>
  </section>
  )
}

export default About
