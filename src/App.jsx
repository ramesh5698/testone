// 
import React, { Component } from 'react'
// import Jobsterdev from './Componentone/Jobsterdev'
// import "./Jobsterdev.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Component3/Projects'
import About from './Component3/About'
// import ReactHookForm from './Component/ReactHookForm'
// import Usestate from './Compo/Usestate'
// import Useeffect from './Compo/Useeffect'
// import Checkapi from './Component/Checkapi'
// import Form from './Component1/Form'
// import './Component3/Form.css'
// import './ComponentForm/Rea.css'
// import './Compo/Prop.css'
// import './Component3/Menu.css'
import './Component3/Linkdin.css'
// import LoginForm from './Component1/LoginForm'
// import Brithcard from './Component/Component2/Brithcard'
// import HandleFome from './ComponentForm/HandleFome'
// import Menu from './Component3/Menu'
// import Jox from './Compo/Jox'
// import Prop from './Compo/Prop'
// import { From } from './assets/Jobster Development_files/Form.jsx/From'
// import ReatHookFrm from './ComponentForm/ReatHookFrm'
import Skil from './Component3/Skil';
import Linkdin from './Component3/Linkdin'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
      
      <BrowserRouter>
          <Routes>
          <Route path='/'  element={<Linkdin/>}></Route>
            <Route path='/skill'  element={<Skil/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/project' element={<Projects/> }></Route>
          </Routes>




      </BrowserRouter>







        {/* <h1>wellcom here</h1> */}
        {/* <Checkapi/> */}
        {/* <LoginForm/> */}
        {/* <Brithcard/>  */}
        {/* <HandleFome/> */}
        {/* <Form/> */}
        {/* <Menu/> */}
        {/* <Jox/> */}
        {/* <Usestate/> */}
        {/* <Useeffect/> */}
        {/* <Prop/> */}
        {/* <From/> */}
        {/* <ReactHookForm/> */}
        {/* <ReatHookFrm/> */}
        {/* <Skil/>
        
        
        {/* <Jobsterdev/> */}
        {/* <Jopslogin/> */}
      </div>
    )
  }
}
