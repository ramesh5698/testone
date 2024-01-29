import React, { useState } from 'react'


export default function Form() {
    
  
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[pass,setpass]=useState('');
    const[valid,setvalid]=useState(false);

    const handlename=(event)=>{
        setname(event.target.value)
    }
    const handleemail=(event)=>{
        setemail(event.target.value)
    }
    const handlepassword=(event)=>{
        setpass(event.target.value)
    }
    const handleche=()=>{
        setvalid(true)
    }

  return (
    
    <div className='div1'>
        {!valid ?
        <header className='h1'>
       <h1 className='hh'>LOGIN</h1>
       <label >Name:</label><br />
       <input type="text"  onChange={handlename}/><br />
       <label >Email:</label><br />
       <input type="email"  onChange={handleemail}/><br />
       <label >Password:</label><br />
       <input type="password"  onChange={handlepassword}/><br />
       <h5>forget password <span>?sign</span></h5>
       <button  onClick={handleche}>Sumit</button>
       </header>
       :''
}

{ valid ? 
        <form >
            {/* <h1 id='h2'>Name:{name}</h1>
            <h1 id='h2'>email:{email}</h1>
            <h1 id='h2'>password:{pass}</h1> */}
            <img src="" alt="" />
            <h1 id='h2'>Thank You!</h1>
            <p id='p1'>Your details has been succesfully summited,Thank You</p>
            <button id='btn1'>OK</button>
        </form>
     :''   
}
    
    
    
    </div>
    
  )
}
