import React from 'react'
import { NavLink } from 'react-router-dom'

function Users_Nav() {
  return (
    <nav className="navbar navbar-expand-lg" style={{'height': 80, 'fontSize': 25 ,'backgroundColor':'#30574b'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/Users_Home.js">LOGO</a>
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
                    <li className="nav-item">
                    <NavLink className="nav-link active">LogOut</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default Users_Nav