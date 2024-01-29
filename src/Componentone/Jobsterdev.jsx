import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.35bb8e1d9b5745af32ff148cbee51dfa (1).svg"
import image from "../assets/main.17b316de742b3a1202078c5ae18c8261 (2).svg"
import "./Jobsterdev.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Jopslogin from './Jopslogin'
export default function Jobsterdev() {

    const [login, setlogin] = useState(true);

    const Register = () => {
        setlogin(false)
    }

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    return (
        <div>
            {login ?
                <div className='function-1'>
                    <header>
                        <div className="nanbar" >
                            <div className="job-logo-1">
                                <img src={logo} alt="" />
                            </div>
                            <div className="empty-1">
                            </div>
                        </div>
                    </header>
                    <section>
                        <div className="section-1">
                            <div className="content-1" data-aos="fade-up">
                                <h1 className='head'>Job <span className='span-1'> Tracking</span> App</h1>
                                <p className='paragrap-1'>Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</p>
                                <button onClick={Register} className='btn-11'>Login/Register</button>
                            </div>
                            <div className="img-2" data-aos="fade-down">
                                <img className='img-3' src={image} alt="" />
                            </div>
                        </div>
                    </section>
                </div>

                :<Jopslogin/>}
        </div>
    )
}
