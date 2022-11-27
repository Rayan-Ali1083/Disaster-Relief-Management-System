import React from 'react'
import '../Users/Users_home.css'
function Users_Home() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light" style={{'height': 80, 'fontSize': 25}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/Users_Home.js">LOGO</a>
                <div className="collapse navbar-collapse"  id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='try'>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Relief Programs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Requirements</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Commitments</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Fulfilments</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div>
        <div className="card" style={{"width":"70%", "marginLeft": "15%"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div style={{"background": 'black',"height": '1px',}}></div>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
            </div>
            </div>
        </div>
    </>
  )
}

export default Users_Home