import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { useDispatch } from "react-redux";
import { admin_home, admin_analysis, admin_organization, admin_relief_program, admin_disaster} from '../actions/index';

function Header() {

  const sidedispatch = useDispatch();
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light" style={{'height': 80, 'fontSize': 25}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">LOGO</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='try'>
              <li className="nav-item">
                <NavLink to='/Admin_Home.js' className="nav-link active" onClick={ () => sidedispatch(admin_home())} >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Organizations.js' className="nav-link active" onClick={ () => sidedispatch(admin_organization())}>Organizations</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Disaster.js' className="nav-link active" onClick={ () => sidedispatch(admin_organization())}>Disasters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Analysis.js' className="nav-link active" onClick={ () => sidedispatch(admin_analysis())}>Analysis</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Admin_Relief_Program.js' className="nav-link active" onClick={ () => sidedispatch(admin_relief_program())}>Relief Program</NavLink>
              </li>
            </ul>
            
          </div>
          </div>
        </nav>
    </>
  )
}

export default Header