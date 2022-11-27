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
                    <a className="nav-link active" aria-current="page" href="/Users_Home.js">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/Users_Relief_Programs.js">Relief Programs</a>
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
        <div style={{"marginTop":"2%"}}>       
            <img className="card-img-top" src={require("../../Extras/side_ad_user.jpg")} alt="ads" style={{"width":"12%", "marginLeft":"1%"}}></img>
            <img className="card-img-top" src={require("../../Extras/side_ad_user.jpg")} alt="ads" style={{"width":"12%", "marginLeft":"87%", "marginTop":"-50%"}}></img>
        <div className="card" style={{"width":"70%", "marginLeft":"15%", "marginTop":"-50%", "borderRadius":"1%"}}>
            <div className="card-body">
                <h3 className="card-title">Organization Details:</h3>
                <div style={{background: 'black', height: '2px',}}/>
                <br></br>
                <div className="card-body" style={{"background":"#e3e1e1", "borderRadius":"1%"}}>
                <div style={{"padding":"3%"}}>
                    <div className="card-text">
                        <h5>Organiztion Name: ORG_NAME
                        <h5 style={{"float":"right"}}>Status: PENDING</h5>
                        </h5>
                    </div>
                </div>

                <div style={{"padding":"3%"}}>
                <div className="card-text">
                        <h5>Organization ID: ORG_0001
                        <h5 style={{"float":"right"}}>Organization Contact: abckpk@org.pk</h5>
                        </h5>
                    </div>
                </div>

                <div style={{"padding":"3%"}}>
                    <div className="card-text">
                        <h5>Organization Category ID: ORG_CAT_002
                        <h5 style={{"float":"right"}}>Organization type: Military</h5>
                        </h5>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Users_Home