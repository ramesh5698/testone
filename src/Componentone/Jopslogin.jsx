import React, { useState } from 'react'
import logo from "../assets/logo.35bb8e1d9b5745af32ff148cbee51dfa (1).svg"
import "./Jopslog.css"
import { useForm } from 'react-hook-form';
import *as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"



const schema =yup.object().shape({
  // username:yup.string().required("Name is Required"),
  email:yup.string().required("Email is Required"),
  password:yup.string().required("Password is Required").max(8)

})
export default function Jopslogin() {


  const {register,handleSubmit,formState:{errors},watch}=useForm({resolver:yupResolver(schema)});
  //  const error =formState;
 const[sub,setsub]=useState(true);


  const onsubmit=()=>{
    setsub(false)
  }
  return (
    <div>
        <div className="container-main">
          <div className="d">
          <div className="sub-con-1">
          <div className="head-2">
              <img src={logo} alt="" />
            </div>
            <div className="head-2">
              <h1 className='h1'>
              Login
              </h1>
            </div>
            <div className="head-1">
              <label>Email</label><br />
              <input type="email" {...register("email")}/>
              <p className='pp1' >{errors?.email?.message}</p>
            </div>
            <div className="head-1">
              <label>password</label><br />
              <input type="password" {...register("password")}/><br />
              <p className='pp1'>{errors?.password?.message}</p>
            </div>
            <div className="head-1">
                 <button className='btn-1' onClick={handleSubmit(onsubmit)}>submit</button><br />
            </div>
            <div className="head-1">
                 <button className='btn-22'>Demo App</button><br />
            </div>
            <div className="head-1">
              <h4 className='head-4'>
              Not a member yet?<span className='span-1'>Register</span>
              </h4>
            </div>
          </div>
          </div>
          {/* <div className="sub-con-1">
          <div className="head-2">
              <img src={logo} alt="" />
            </div>
            <div className="head-2">
              <h1 className='h1'>
              Login
              </h1>
            </div>
            <div className="head-1">
              <label>Email</label><br />
              <input type="text" />
            </div>
            <div className="head-1">
              <label>password</label><br />
              <input type="text" /><br />
            </div>
            <div className="head-1">
                 <button className='btn-1'>submit</button><br />
            </div>
            <div className="head-1">
                 <button className='btn-1'>Demo App</button><br />
            </div>
            <div className="head-1">
              <h4 className='head-4'>
              Not a member yet?<span className='span-1'>Register</span>
              </h4>
            </div>
          </div> */}
        </div>
    </div>
  )
}
