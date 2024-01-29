import React from 'react'
import { useState } from 'react'

export default function Usestate() {

  const [count, setcount] = useState(0);
  const [movie, setmovie] = useState("");
  const [movi, setmovi] = useState({
           movis:'beast',
           price:250,
           realeaseddate:2023,
           from:'chennai'
  });

  const update=()=>{
        setmovi(pri=>{
          return{...pri,from:'mumbai', movis:'jilla',
          price:350,
          realeaseddate:2019,}

        });
  }

  const handlechenge = () => {
    for (let index = 0; index < 10; index++) {
      setcount(previase => previase + 1)
    }
  }
  return (
    <div>
      <h1>1)Usestate,</h1>
      <h5>1),usestate counter</h5>

      <h2>ths is counter {count}</h2>
      <button onClick={() => setcount(count + 1)}>click</button>

      <h5>2),usestate previas</h5>

      <h2>ths is counter {count}</h2>
      <button onClick={handlechenge}>click</button>

      <h5>3),usestate object</h5>


      <h3>Movie :{movie}</h3>
      <button onClick={()=>setmovie('jilla')}>chenge</button>

      <h3>Movis :{movi.movis}</h3>
      <h3>price :{movi.price}</h3>
      <h3>realeaseddate :{movi.realeaseddate}</h3>
      <h3>from :{movi.from}</h3>
      <button onClick={update}>chenge</button>

       






    </div>
  )
}
