import React, { useEffect, useState } from 'react'

export default function Useeffect() {

   const[hi,sethi]=useState(0);

   useEffect(()=>{
        setTimeout(()=>{
             sethi(()=>(hi+1))
        },1000);
        console.log('stop here');
   });

  return (
    <div>
      <h1>useffect</h1>
         <h3>hi:{hi}</h3>
         {/* <button onClick={()=>sethi(hi+2)}> click me</button> */}
         {/* <button onClick={sethi}> click me</button> */}
    </div>
  )
}
