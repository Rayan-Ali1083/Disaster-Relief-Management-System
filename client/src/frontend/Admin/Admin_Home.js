import React from 'react'
import Header from '../../Extras/Header'
import Admin_sidebar from '../../Extras/Admin_sidebar'
import './admin_style.css'
import './admin_home.css'
function Admin_Home() {

  
  return (
    <>
      
      <Header />
      <Admin_sidebar />
      <div className="card" style={{'borderRadius':'50px', 'backgroundColor':'transparent', 'border':'none'}}>
      <div className="card-body">
        <div>
        <h2 id='WHOAREWE'>WHO ARE WE?</h2>
        <img src={require("../../Extras/map.png")} style={{'width':"60%" ,'height ':"60%"}}></img>
        <div className="vl"></div>
        <div className='introbox'>
          <h3>Introduction: </h3>
          <h5>Welcome to Disaster Relief Management System.
          <br></br>Designed to aid you in managing resources and products keeping you updated and in control of the critical situtations.
          <br></br>Stay updated to the current situation and manage resources with in a simple click of a button.
          <br></br>Furthermore, you can track every orgranization and request for their help.
          <br></br>LONG LIVE PAKITAN
          </h5>
        </div>
        </div>
      </div>
      
    
      <div className="card-body" style={{'textAlign':'center'}}>

          <h2 style={{'textAlign':'center'}}>MEET THE TEAM</h2>
        <div className="card-group"  id='ABOUT' style={{'marginLeft':'-25%', 'marginTop':'-3%'}}>
      <div className="card" style={{'backgroundColor':'#396e4f', 'borderStyle': 'none'}}>
        {/* <img className="card-img-top" src={require("../../Extras/huzaifa.jpg")} alt="Card image cap"></img> */}
        <div className="card-body">
          <h5 className="card-title">HUZAIFA TANZEEL</h5>
         
        </div>
        
      </div>
      <div className="card" style={{'backgroundColor':'#396e4f', 'borderStyle': 'none'}}>
        {/* <img className="card-img-top" src={require("../../Extras/maarij.jpg")} alt="Card image cap"></img> */}
        <div className="card-body">
          <h5 className="card-title">MAARIJ AMIR</h5>
        </div>

    </div>
    <div className="card" style={{'backgroundColor':'#396e4f', 'borderStyle': 'none'}}>
      {/* <img className="card-img-top" src={require("../../Extras/rayan.jpg")} alt="Card image cap"></img> */}
      <div className="card-body">
        <h5 className="card-title">RAYAN ALI</h5>
      </div>
    </div>
    <div className="card" style={{'backgroundColor':'#396e4f', 'borderStyle': 'none'}}>
        {/* <img className="card-img-top" src={require("../../Extras/maarij.jpg")} alt="Card image cap"></img> */}
        <div className="card-body">
          <h5 className="card-title">IMTIAZ ALI</h5>
        </div>

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