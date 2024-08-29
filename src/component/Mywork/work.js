import React from 'react'
import "./work.css"
import Myworks from '../../assets/data'


const work = () => {
  return (
    <div className='mywork'>
        <div className='workTitle'>
            <h1>My latest work</h1>
        </div>
        <div className='mywork-container'>
            <div className='work-container'>
            
            {Myworks.map(work => (
                <div key={work.id} className='myContainer'>
                    <h2>{work.name}</h2>
                    <img src={work.imgSrc} alt={work.name} />
                    {work.link && <a href={work.link} className='aaa'>Visit  Site</a>} {/* Only show link if it's available */}
                </div>
            ))}
        

            </div>
        </div>
    </div>
  )
}

export default work
