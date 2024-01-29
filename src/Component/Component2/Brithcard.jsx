import React, { useState } from 'react'
import './Brithcard.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

export default function Brithcard() {
    // const[car,setcar]=useState('NO')

    const [card, setcard] = useState(
        [
            {

                id: 1,

                name: 'Bertie Yates',

                age: 29,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',

            },

            {

                id: 2,

                name: 'Hester Hogan',

                age: 32,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',

            },

            {

                id: 3,

                name: 'Larry Little',

                age: 36,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',

            },

            {

                id: 4,

                name: 'Sean Walsh',

                age: 34,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',

            },

            {

                id: 5,

                name: 'Lola Gardner',

                age: 29,

                image:

                    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',

            },

        ]
    )
        {}
        const removeall=()=>{
        setcard([])
    }
  
    return (
        <div>
            <div className='div'>
            <h1 className='h1'><span>Brithcard</span></h1>
            <h1 className='hh
            '>{card.length} Today Brithday</h1>

            {card.map((data) => (

                <header>
                    <section>
            
                        <h1>{data.id})</h1>
                        <img src={data.image} />
                        <h2> {data.name}  </h2>
                    </section>
                    <h5 className='ms-8'>{data.age}Years</h5>

                </header>


            ))}
                    <button onClick={removeall}>clear all</button>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            </div>
        </div>

    )
}
