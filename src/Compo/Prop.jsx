import React, { useState } from 'react'
import img1 from "../assets/main.17b316de742b3a1202078c5ae18c8261 (1).svg"
import img2 from "../assets/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg"
import img3 from "../assets/download.png"
// import img4 from "../assets/download (1).png"
import imgs from "../assets/images.png"


// import Props1 from './Props1';

export default function Prop() {

  const [but, setbut] = useState(true);

  const chenge = () => {
    setbut(false);
  }

  return (
    <div>
      {but ?
        <header>
          <div className='con-1'>
            <div className='head1-1'>
              <img src={img2} className='img1' alt="" />
            </div>
            <div className='head1-1'>
            </div>
          </div>
          <div></div>


          <div className="con">
            <div className="h1">
              <h1>Job <span>Tracking</span> App</h1>
              <p>Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</p>
              <button onClick={chenge} className='btn1'>Login/Register</button>
            </div>
            <div className="h">
              <img src={img1} alt="" />

            </div>
          </div>
        </header>

        : <div className="con3">
          <div className="sub-con">
         
            <div className="c2">
            <div className="c1">
              <div>
              <img src={img2} className='img2' alt="" />
              </div>
              <div>
              <img src={img3} className='mg3' alt="" />
              </div>
            </div>
            </div>
            <div className="c3">
            <div className="c5">
              <div>
                <h2>Dashboard</h2>
                </div>
              <div>
              <button className='btn2'> Test User</button>
              {/* <img src={img4} className='mg4' alt="" /> */}
              </div>
            </div>
            </div>
          
          </div>
        </div>}

        <div className="container1">
             <div className="sub1">
              <ul>
                <li className='l'> <img src={imgs} className='mf' alt="" />Stats</li>
                <li>All Jop</li>
                <li>All Add</li>
                <li>Profile</li>
              </ul>
             </div>
             <div className="sub2">
             <div className="s-mg">
                    
                    </div>
                    <div className="s-mg">
                    
                    </div>
                    <div className="s-mg">
                    
                    </div>
                 
             </div>
        </div>


      {/* <Props1/> */}

      {/* // <img src={img1} alt="" /> */}
    </div>
  )
}
