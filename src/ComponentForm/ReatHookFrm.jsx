import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import *as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"


const schema =yup.object().shape({
      username:yup.string().required("Name is Required"),
      email:yup.string().required("Email is Required"),
      password:yup.string().required("Password is Required").max(8)

})

export default function ReatHookFrm() {
   
  const {register,handleSubmit,formState:{errors},watch}=useForm({resolver:yupResolver(schema)});
  //  const error =formState;
 const[sub,setsub]=useState(true);
     

 const onsubmit=()=>{
  setsub(false)
}
  
  return (
    <div>
{sub?
         <div className="form-con1">
          <div className="sub-con">
          <form >
      
        <h1>Login</h1>
        <label >Username</label><br />
        <input {...register("username")} type='text'  /><br />
        <p>{errors?.username?.message}</p>
        <label >Email</label><br />
        <input {...register("email")} type='email'/><br />
        <p>{errors?.email?.message}</p>
        <label >Password</label><br />
        <input  {...register("password")} type='password'/><br />
        <p>{errors?.password?.message}</p>
        


        <button onClick={handleSubmit(onsubmit)} >submit</button>
      </form>
          </div>
         </div>
    
      :  <form className='frm'>
        <div className='div1'>
      {/* <h1 id='h2'>Name:{name}</h1>
      <h1 id='h2'>email:{email}</h1>
      <h1 id='h2'>password:{pass}</h1> */}
      <img src="" alt="" />
      <h1 id='h2'>Thank You!</h1>
      <p id='p1'>Your details has been succesfully summited,Thank You</p>
      <button id='btn1'>OK</button>
      </div>
  </form>}
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