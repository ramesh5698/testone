import React from 'react'
import {useForm} from "react-hook-form"


export default function ReactHookForm() {

const{register,handleSubmit,watch}=useForm();

const onsubmit=(data)=>{
     console.log(data);

     const name=watch('name');
}

  return (
    <div>
        {/* <h1>ReactHookForm</h1> */}
        <h1>ReactHookForm</h1>
        <label>Fisr Name </label><br />
        <input  {...register("name")} placeholder='Enter your FName' /><br />
        <label>Last Name</label><br />
        <input placeholder='Enter your lName'/><br />
        <button onClick={handleSubmit(onsubmit)}>Add</button>
        {/* <h1>hello{name}</h1> */}
    </div>
  )
}



       