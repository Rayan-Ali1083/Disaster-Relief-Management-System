import React from 'react'
import '../Users/Users_home.css'
import Users_Nav from './Users_Nav'
function Users_Home() {
  return (
    <>
        <Users_Nav/>
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