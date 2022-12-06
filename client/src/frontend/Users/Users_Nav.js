import React from 'react'

function Users_Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{'height': 80, 'fontSize': 25}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/Users_Home.js">LOGO</a>
                <div className="collapse navbar-collapse"  id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='try'>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Users_Home.js">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Users_Relief_Programs.js">Relief Programs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Users_Requirements.js">Requirements</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Users_Commitments.js">Commitments</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Users_Fullfilment.js">Fullfillments</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default Users_Nav