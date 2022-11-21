import React from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_style.css'

function Admin_Home() {

  
  return (
    <>
      
      <Header />
      <Admin_sidebar />
      <div className="card">
          
      <div className="card-body">
        <div>
        <h2>WHO ARE WE?</h2>
        <img src={require("../../Extras/map.png")} style={{'width':"60%" ,'height ':"60%"}}></img>
        </div>
        <div className="vl"></div>
        <div style={{"float":"right", "marginTop":"-34%", "width":"39%"}}>
          <h3>Introduction: </h3>
          <h5>Welcome to Disaster Relief Management System.
          <br></br>Designed to aid you in managing resources and products keeping you updated and in control of the critical situtations.
          <br></br>Stay updated to the current situation and manage resources with in a simple click of a button.
          <br></br>Furthermore, you can track every orgranization and request for their help.
          <br></br>LONG LIVE PAKITAN
          </h5>
        </div>
      </div>
      
    
      <div className="card-body">
          <div id='CREATEALERT'>
            {/* this section is to be removed maybe */}

          </div>
          <h2 style={{'textAlign':'center'}}>MEET THE TEAM</h2>
        <div className="card-group"  id='ABOUT' style={{'marginLeft':'-25%', 'marginTop':'-3%'}}>
      <div className="card">
        <img className="card-img-top" src={require("../../Extras/huzaifa.jpg")} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">HUZAIFA AKA CUTIE</h5>
          <p className="card-text">TEXT</p>
        </div>
        {/* <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div> */}
      </div>
      <div className="card">
        <img className="card-img-top" src={require("../../Extras/maarij.jpg")} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">MAARIJ AMIR AKA SHAPATAR</h5>
          <p className="card-text">TEXT</p>
        </div>
      {/* <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div> */}
    </div>
    <div className="card">
      <img className="card-img-top" src={require("../../Extras/rayan.jpg")} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">RAYAN AKA DATA SCIENTIST</h5>
        <p className="card-text">TEXT</p>
      </div>
      {/* <div className="card-footer">
        <small className="text-muted"></small>
      </div> */}
    </div>
    </div>
        </div>
        <div className="card-body" id='CONTACT'>
        <h2 style={{'textAlign':'center'}}>Contact Us</h2>
          <div className="card-body">
            <h3>Email: <p style={{"fontSize":"large"}}>reliefsystem@gmail.com</p></h3>
            <h3>Phone: <p style={{"fontSize":"large"}}>090078601</p></h3>
            <h3>Address: <p style={{"fontSize":"large"}}>(352) 748-1180 830 Huron St Wildwood, Florida(FL), 34785</p></h3>
          </div>
        </div>
      </div>

    </>
  )
}

export default Admin_Home