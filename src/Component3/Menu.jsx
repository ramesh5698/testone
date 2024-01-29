import React, { useState } from 'react'
import image1 from '../Component3/item-1.jpeg'
import image2 from '../assets/item-2.jpeg'
import image3 from '../assets/item-3.jpeg'
import image4 from '../assets/item-4.jpeg'
import image5 from '../assets/item-5.jpeg'
import image6 from '../assets/item-6.jpeg'
import image7 from '../assets/item-7.jpeg'
import image8 from '../assets/item-8.jpeg'
import image9 from '../assets/item-9.jpeg'
export default function Menu() {
   
  const[hi,sethi]=useState(true);
  // const[oi,setoi]=useState(true);

 
// const handlech=()=>{
//   setoi(true)
// }
const handleche=()=>{
  sethi(false)
}



  return (

    <div>
         <header>
         <div className='con-1'> 
                <div className="head-1">
                    <div className="h1">
                        <h1 className='h1'>
                            Our Menu
                        </h1>
                        </div>
                         <div className='btn-1'>
                              <button  id='bt1'>All</button>
                              <button onClick={handleche} id='bt1'>breckfast</button>
                              <button  id='bt1'>lunch</button>
                              <button id='bt1'>dinner</button>
                         </div>
                   
                </div>
              </div>
              </header>
              {/* {oi? */}
             <section>
             <div className='con-2'>
             {/* {!hi? */}

                   <div className="main-cont">
                           <div className="row-1">
                            <img src={image1} alt="" />
                            <div id='div'>
                            <h1 id='h11'>buttermilk pancakes</h1> <span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed </p>
                           </div>
                           <div className="row-1">
                            <img src={image2} alt="" />
                            <div id='div'>
                            <h1 id='h11'>diner double </h1><span><button id='b1'>$13.99</button></span>
                           </div>
                            <p id='p1'>vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats  </p>
                           </div>
                           <div className="row-1">
                            <img src={image3} alt="" />
                            <div id='div'>
                            <h1 id='h11'>godzilla milkshake </h1><span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. </p>
                           </div>
                           </div>

{/* :""} */}


                           {hi?
                           <div className="main-cont">
                           <div className="row-1">
                            <img src={image4} alt="" />
                            <div id='div'>
                            <h1 id='h11'>country delight</h1><span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. </p>
                           </div>
                           <div className="row-1">
                            <img src={image5} alt="" />
                            <div id='div'>
                            <h1 id='h11'>egg attack</h1><span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. </p>
                           </div>
                           <div className="row-1">
                            <img src={image6} alt="" />
                            <div id='div'>
                            <h1 id='h11'>oreo dream</h1><span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. </p>
                           </div>
                           </div>
                     :""}
{hi?
                           <div className="main-cont">

                           <div className="row-1">
                            <img src={image7} alt="" />
                            <div id='div'>
                            <h1 id='h11'>bacon overflow </h1><span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. </p>
                           </div>
                           <div className="row-1">
                            <img src={image8} alt="" />
                            <div id='div'>
                            <h1 id='h11'>american classic</h1><span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. </p>
                           </div>
                           <div className="row-1">
                            <img src={image9} alt="" />
                            <div id='div'>
                            <h1 id='h11'>quarantine buddy</h1><span><button id='b1'>$13.99</button></span>
                            </div>
                            <p id='p1'>ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. </p>
                           </div>
                   </div>
                     :""}

              </div>
             </section>
 {/* :""} */}
    </div>
  )
}
