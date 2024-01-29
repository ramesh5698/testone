import React from 'react'
import "./Skil.css"
import image1 from "../assets/images (2).png"
import image2 from "../assets/download (2).png"
import image3 from "../assets/download (3).png"
export default function Skil() {
  return (
    <div>
         <main>
        <h1 className='hh'>Tech stack</h1>
        <hr className='hr' />
        <div className="main-con1">
          <div className='about'>
            <img className='hjr' src={image1} alt="" />
            <h2 className='h2'>
              HTML&CSS
            </h2>
            <p className='p1'>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
          </div>
          <div className='about'>
            <img className='hjr1' src={image2} alt="" />
            <h2 className='h2'>
              javascript
            </h2>
            <p className='p1'>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality</p>
          </div>
          <div className='about'>
            <img className='hjr' src={image3} alt="" />
            <h2 className='h2'>
              React
            </h2>
            <p className='p1'>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
