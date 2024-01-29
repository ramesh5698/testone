import React, { useEffect, useState } from 'react'
import image from "../assets/hero-01dff752 (2).svg"
import image1 from "../assets/images (2).png"
import image2 from "../assets/download (2).png"
import image3 from "../assets/download (3).png"
import image4 from "../assets/about-03f57d6e.svg"
import image5 from "../assets/pexels-photo-326503.webp"
import image6 from "../assets/pexels-photo-2148222.webp"
import image7 from "../assets/pexels-photo-12883026.jpeg"
// import Aos from 'aos'
// import 'aos/dist/aos.css'
import Skil from './Skil'
import About from './About'
import Projects from './Projects'

export default function Linkdin() {

  const [home, sethome] = useState(true);
  const [ab, setab] = useState(true);
  const [sk, setsk] = useState(true);

  const hom = () => {
    sethome(true);
  }
  const s = () => {
    setab(true);
    sethome(false);
  }
  const a = () => {
    setsk(true);
    sethome(false);
    setab(false);
  }
  const p = () => {
    setsk(false);
    sethome(false);
    setab(false);
  }


  // useEffect(() => {
  //   Aos.init({ duration: 2000 })
  // }, [])


  return (
    <div>
      {home ?
      <div>

      
      <header>
        <div className="navbar">
          <div className="nav">
            <h1 className='h'>Web<span>Dev</span></h1>
          </div>
          <div className="list">
            <ul>
              <li><a href="#" onClick={hom}>Home</a></li>
              <li><a href="#"  onClick={s}>Skills</a></li>
              <li><a href="#"  onClick={a}>About</a></li>
              <li><a href="#" onClick={p}>Projects</a></li>
            </ul>
          </div>
        </div>
      </header>
      <section>
        <div className="con2-section">
          <div className="main-1" data-aos="fade-up">
            <h1 className='h1'> I'm Ramesh</h1>
            <h2 className='h3'>Front-End Developer</h2>
            <h3>Turning Ideas Into Interactive Reality</h3>
          </div>

          <div className="img1" data-aos="fade-down">
            <img className='mg' src={image} alt="" />
          </div>
        </div>
      </section>
      <main className='main'>
      <div className="c">
        <div className="c1">
        <h1 className='hh'>Tech stack</h1>
        <hr id='hw'/>
        </div>
      </div>
        <div className="main-con">
          <div className='about' data-aos="fade-right">
            <img className='hjr' src={image1} alt="" />
            <h2 className='h2'>
              HTML&CSS
            </h2>
            <p className='p1'>Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.</p>
          </div>
          <div className='about' data-aos="zoom-in">
            <img className='hjr1' src={image2} alt="" />
            <h2 className='h2'>
              javascript
            </h2>
            <p className='p1'>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality</p>
          </div>
          <div className='about' data-aos="fade-left" >
            <img className='hjr' src={image3} alt="" />
            <h2 className='h2'>
              React
            </h2>
            <p className='p1'>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
          </div>
        </div>
      </main>
      <article className='k'>
        `` <div className="con">
          <div className="con1" data-aos="zoom-in">
            <img className="mg9" src={image4} alt="" /></div>

          <div className="con2" data-aos="zoom-in">
            <h2 className='h3'>
              Code And Coffee
            </h2>
            <hr />
            <p className='p2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint maiores itaque doloribus asperiores dolorum quas voluptates distinctio, porro beatae quam provident libero animi totam, praesentium voluptatem corrupti dignissimos ipsum accusantium!</p>
          </div>
        </div>
      </article>
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
            <img className='mg5' src={image7} alt="" />
            <h2 className='h0'>Third Project</h2>
            <p className='p3'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.</p>
          </div>
        </div>
      </article>
      </div>
      :ab ? <Skil/> : sk ? <About/> : <Projects/>}
    </div>
  )
}
