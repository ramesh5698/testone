import React from 'react'
import "./About.css"
import image4 from "../assets/about-03f57d6e.svg"
export default function About() {
  return (
    <div>
          <article>
       `` <div className="artimg">
          <div className="con1" data-aos="zoom-in">
            <img className="mg2" src={image4} alt="" /></div>

          <div className="con2" data-aos="zoom-in">
            <h2 className='h3'>
              Code And Coffee
            </h2>
            <hr />
            <p className='p2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores itaque doloribus asperiores dolorum quas voluptates distinctio, porro beatae quam provident libero animi totam, praesentium voluptatem corrupti dignissimos ipsum accusantium!</p>
          </div>
        </div>
      </article>
    </div>
  )
}
