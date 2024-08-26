import React from 'react'
import "./intro.css"
import siki from "../../assets/siki.jpg"

import {Link} from "react-scroll"

const Intro = () => {
  return (
    <>
    <div id='intro'>
      <div className='introContent'>
        <span className='helo'>Hello,</span>
        <span className='introText'>I'm <span className='intoName'>Zikrah</span> <br/>FrontEnd Developer</span>
        <p className='intopara'> I'm a skilled passionate FrontEnd Developer with experience in <br/> creating  visually appealing and  interactive user-friendly website.</p>
          <Link><button className='btn'>Hire me</button></Link>
   
      </div>
      <img src={siki} alt='profile' className='bg'></img>
    </div>
   
      </>
    
  )
}

export default Intro
