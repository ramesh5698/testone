import React from 'react'
import "./Projects.css"
import image5 from "../assets/pexels-photo-326503.webp"
import image6 from "../assets/pexels-photo-2148222.webp"
import image7 from "../assets/pexels-photo-12883026.jpeg"

export default function Projects() {
  return (
    <div>
        <article className='art`'>
        <h1 className='hhh'>Web Creations</h1>
        <div className="con1-1">
          <div className="conpic" data-aos="flip-right" >
            <img className='mg5' src={image5} alt="" />
            <h2 className='h0'>First Project</h2>
            <p className='p3'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
          </div>

          <div className="conpic" data-aos="flip-right">
            <img className='mg5' src={image6} alt="" />
            <h2 className='h0'>Second Project</h2>
            <p className='p3'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
          </div>

          <div className="conpic" data-aos="flip-right">
            <img  className='mg5'src={image7} alt="" />
            <h2 className='h0'>Third Project</h2>
            <p className='p3'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
          </div>
        </div>
      </article>
    </div>
  )
}
