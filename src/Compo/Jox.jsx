import React, { useState } from 'react'

export default function Jox() {

  const [val,setval]=useState([1,2,3,4,5,6,7,8,9]);

  const handleche=()=>{
        setTimeout(() => {
            setval('it has a 9 number')

        },5000);
  }
  console.log(val);
            console.log('hello');
            console.log('hi');



  // const value=['apple','banana','orange','graps'];

   

  return (
    <div>
       {val}
      <h1>This number is {val} </h1>
      <ul>
        

      </ul>
      <button onClick={handleche}>click</button>
    
   
    </div>
  )
}
