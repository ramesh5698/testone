import React, { useEffect, useState } from 'react'
import './Login.css'

export default function LoginForm() {
    const[sign,setsign]=useState('sign in');

//    function handle() {
//         setsign()
//    }
useEffect(()=>{
    let timer= setTimeout(() => {
setcount((sign)=>(sign));
 },1000);
console.log(useEffect,'clear');
 return ()=>clearTimeout(timer)
},[]);
  return (
    <div>
   
        
        <div className="container">
            <div className="header">
                <div className="text" >{sign}</div>
                <div className="underline"></div>
            </div>
      
            <div className="inputs">
            {sign==='sign in'?<div></div>: 
                    <input type="text" placeholder='Name' /> }
                           {/* {sign==='singn'?<div></div>: 
                    <input type="text" placeholder='Name' /> } */}
                <div className="input">
                </div>
                <div className="input">
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <input type="password"  placeholder='Password' />
                </div>
            </div>
        <div className="forget">forget posswoed <span>click here!</span></div>
        <div className="sumit-con">
            <div className="summit" onClick={()=>setsign('LOGIN')}>
                SIGN IN 
            </div>
            <div className="summit" onClick={()=>setsign('SIGN IN')}>
                LOGIN 
            </div>
        </div>
    </div>
    </div>

  )
}
