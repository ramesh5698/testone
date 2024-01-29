import React from 'react'
import {useForm} from "react-hook-form"
import "./Rea.css"

let count=0;
export default function ReatHookFrm() {
   
  const {register,handleSubmit}=useForm();

  const onsubmit=(data)=>{
     console.log(data);
    
  }

  return (
    <div>
      <form >
       {count++}
        <h1>Login</h1>
        <label >Username</label><br />
        <input {...register("username")} type='text'/><br />
        <label >Email</label><br />
        <input {...register("email")} type='email'/><br />
        <label >Password</label><br />
        <input  {...register("password")} type='password'/><br />
        <button onClick={handleSubmit(onsubmit)} onInvalid={handleSubmit(onsubmit)}>submit</button>
      </form>
    </div>
  )
}









































{/* <label >Username</label><br />
<input type="text" {...register("username")}  /><br />
<label >Email</label><br />
<input type="email" {...register("email")} /><br />
<label >Password</label><br />
<input type="password" {...register("password")} /><br />
<button  onClick={handlesubmit(onsubmit)}>Sumit</button> */}