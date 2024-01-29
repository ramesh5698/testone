import React, { useState } from 'react'

export default function HandleFome() {

   const[frm,setfrm]=useState('');

    const handlesumit=(e)=>{
          e.preventdeault();
          console.log(frm);
   }
 
  return (
    <div>
       <h1>HandleFome</h1>
       {/* <form action="">
             <label >Name:</label><br />
             <input type="text" /><br />
             <label >Eamil:</label><br />
             <input type="email" /><br />
             <label >Password:</label><br />
             <input type="Password" /><br />
             <label >Adress:  </label><br />
             <textarea name="textarea " ></textarea>
             <button type='sumit'>sumit</button>
       </form> */}

       <h2>handleform</h2>
       <form action="" onSubmit={handlesumit}>
             <label >Name:</label><br />
             <input type="text" onChange={(event)=>setfrm(event.target.value)}/><br />
             <label >Eamil:</label><br />
             <input type="email" /><br />
             <label >Password:</label><br />
             <input type="Password" /><br />
             <label >Adress:  </label><br />
             <textarea name="textarea " ></textarea>
             <button type='sumit'>sumit</button>
       </form>
    </div>
  )
}

