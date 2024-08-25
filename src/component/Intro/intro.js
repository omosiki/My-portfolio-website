import React from 'react'
import "./intro.css"
import siki from "../../assets/zikrah.jpg"


const Intro = () => {
  return (
    <div id='intro'>
      <div className='introContent'>
        <span className='helo'>Hello,</span>
        <span className='introText'>I'm <span className=''>Zikrah</span> <br/>FrontEnd Developer</span>
        <p> I'm a skilled passionate FrontEnd Developer with experience in creating visually appealing and interactive user-friendly website</p>
      </div>
      <img src={siki} alt='profile' className='bg'></img>
    </div>
  )
}

export default Intro
