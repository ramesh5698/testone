import React, { useState } from 'react'
let count=0
export const From = () => {
    const[name,setname]=useState('');

    const handlechenge=(e)=>{
        setname(e.target.value)
    }
    
  return (
    <div>
        {count++}
        <h1>ReactHook Form</h1>
        <label>First Name:</label><br />
        <input onChange={handlechenge} placeholder='enter your name'/><br />
        <label>Lost Name:</label><br />
        <input  /><br />

    </div>
  )
}
