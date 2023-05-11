import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useDispatch } from "react-redux";
import { admin_home, admin_organization, admin_relief_program, admin_products_services} from '../actions/index';

function Header() {

  const ClearD = ()=>{
    //RemoveCookie('usrin')
    alert("Logged Out")
    window.location.replace('http://localhost:3000');

  }

  const sidedispatch = useDispatch();
  return (
    <>
        <nav className="navbar navbar-expand" style={{'height': 80, 'fontSize': 25, 'backgroundColor':'#30574b'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={require("../Extras/logo2.png")} style={{'height':'100px'}}></img>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav" id='try'>
              <li className="nav-item">
                <NavLink to='/Admin_Home.js' className="nav-link active" onClick={ () => sidedispatch(admin_home())} >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Disaster.js' className="nav-link active" onClick={ () => sidedispatch(admin_organization())}>Disasters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Relief_Program.js' className="nav-link active" onClick={ () => sidedispatch(admin_relief_program())}>Relief Program</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Organizations.js' className="nav-link active" onClick={ () => sidedispatch(admin_organization())}>Organizations</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Products_Services.js' className="nav-link active" onClick={ () => sidedispatch(admin_products_services())}>Products/Services</NavLink>
              </li>
              <li className="nav-item" onClick={ClearD}>
                    <NavLink  className="nav-link active" >LogOut</NavLink>
                    </li>
              
            </ul>
            
          </div>
          </div>
        </nav>
    </>
  )
}

export default Header