import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import RemoveCookie from '../../hooks/removeCookie';
import Login_page from '../Login/Login_page';
function Users_Nav() {

  const navigate = useNavigate()

  const ClearD = ()=>{
    RemoveCookie('usrin')
    alert("Logged Out")
    window.location.replace('http://localhost:3000');

  }

  return (
    <nav className="navbar navbar-expand-lg" style={{'height': 80, 'fontSize': 25 ,'backgroundColor':'#30574b'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/Users_Home.js">
                <img src={require("../../Extras/logo2.png")} style={{'height':'100px'}}></img>
                </a>
                <div className="collapse navbar-collapse"  id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='try'>
                    <li className="nav-item">
                    <NavLink to='/Users_Home.js' className="nav-link active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/Users_Relief_Programs.js' className="nav-link active">Relief Programs</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/Users_Requirements.js' className="nav-link active">Requirements</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/Users_Commitments.js' className="nav-link active">Commitments</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/Users_Fullfilment.js' className="nav-link active">Fullfillments</NavLink>
                    </li>
                    <li className="nav-item" onClick={ClearD}>
                    <NavLink  className="nav-link active" >LogOut</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default Users_Nav